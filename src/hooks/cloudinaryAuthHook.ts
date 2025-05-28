import {CloudConfig} from "./cloudConfig";
import {BeforeRequestContext, BeforeRequestHook} from "./types.js";

export class CloudinaryAuthHook
    implements BeforeRequestHook {

    private readonly cloudConfig: CloudConfig;

    constructor() {
        this.cloudConfig = new CloudConfig();
    }

    async beforeRequest(hookCtx: BeforeRequestContext, request: Request): Promise<Request> {
        // modify the request object before it is sent, such as adding headers or query parameters, or throw an error to stop the request from being sent

        let { apiKey, apiSecret } = this.cloudConfig;

        // Optionally merge user-supplied security overrides
        const securityVal = hookCtx.securitySource ? hookCtx.securitySource : null;
        if (securityVal && securityVal.cloudinaryAuth) {
            if (securityVal.cloudinaryAuth.apiKey) {
                apiKey = securityVal.cloudinaryAuth.apiKey;
            }
            if (securityVal.cloudinaryAuth.apiSecret) {
                apiSecret = securityVal.cloudinaryAuth.apiSecret;
            }
        }
        if (!apiKey || !apiSecret) {
            return request;
        }

        if (this.SIGNED_PATHS.every(path => request.url.indexOf(path) === -1)) {
            // generate  Authorization header using basic auth where apiKey:apiSecret is encoded in base64
            const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
            request.headers.set("Authorization", authHeader);
            return request;
        }

        // Extract query parameters regardless of body existence
        const url = new URL(request.url);
        const queryParams = this.paramsFromQuery(url.searchParams);

        // Handle case with only query parameters (no body)
        if (!request.body) {
            return this.signQueryOnlyRequest(request, apiKey, apiSecret, queryParams);
        }

        // if content-type is application/json, parse the body as json and add the signature, timestamp and apiKey to the body
        if (request.headers.get("Content-Type") === "application/json") {
            return this.signJsonRequest(request, apiKey, apiSecret, queryParams);
        }

        // if content-type is multipart/form-data, parse the body as form data and add the signature, timestamp and apiKey to the body
        if (request.headers.get("Content-Type")?.startsWith("multipart/form-data")) {
            return this.signFormDataRequest(request, apiKey, apiSecret, queryParams);
        }

        // Default case - just sign query parameters if any exist
        if (queryParams.length > 0) {
            return this.signQueryOnlyRequest(request, apiKey, apiSecret, queryParams);
        }

        return request;
    }

    paramsFromQuery(searchParams: URLSearchParams): string[] {
        const params = [];
        for (const [key, value] of searchParams.entries()) {
            if (key !== "file" && key !== "cloud_name" && key !== "resource_type" && key !== "api_key" && key !== "signature" && key !== "timestamp") {
                params.push(`${key}=${value}`);
            }
        }
        return params;
    }

    async signQueryOnlyRequest(request: Request, apiKey: string, apiSecret: string, queryParams: string[]): Promise<Request> {
        const url = new URL(request.url);
        // Check if already signed
        if (url.searchParams.has("signature")) {
            return request;
        }

        const { signature, timestamp } = await this.computeSignature(queryParams, apiSecret);
        url.searchParams.set("signature", signature);
        url.searchParams.set("timestamp", timestamp.toString());
        url.searchParams.set("api_key", apiKey);

        return new Request(url.toString(), request);
    }

    async computeSignature(params: string[], apiSecret: string) {
        const crypto = await import('node:crypto');
        // Create a string with the parameters used in the POST request to Cloudinary:
        //     All parameters added to the method call should be included except: file, cloud_name, resource_type and your api_key.
        //     Sort all the parameters in alphabetical order.
        //     Separate the parameter names from their values with an = and join the parameter/value pairs together with an &.
        // Append your API secret to the end of the string.
        // Create a hexadecimal message digest (hash value) of the string using an SHA cryptographic function.
        const timestamp = Math.floor(Date.now() / 1000);
        params.push(`timestamp=${timestamp}`);
        params.sort();
        const paramsString = params.join("&");
        const signature = crypto.createHash('sha256').update(`${paramsString}${apiSecret}`).digest('hex');

        return { signature, timestamp };
    }

    paramsToSignFormData(form: FormData) {
        const params = [];
        for (const [key, value] of form.entries()) {
            if (key !== "file" && key !== "cloud_name" && key !== "resource_type" && key !== "api_key" && key !== "signature") {
                params.push(`${key}=${value}`);
            }
        }
        return params;
    }

    paramsToSignJson(json: Record<string, string>) {
        const params = [];
        for (const [key, value] of Object.entries(json)) {
            if (key !== "file" && key !== "cloud_name" && key !== "resource_type" && key !== "api_key" && key !== "signature") {
                params.push(`${key}=${value}`);
            }
        }
        return params;
    }

    async signJsonRequest(request: Request, apiKey: string, apiSecret: string, queryParams: string[] = []) {
        const body = await request.json();
        if (body.signature) {
            return request;
        }
        const bodyParams = this.paramsToSignJson(body);
        const allParams = [...bodyParams, ...queryParams];
        const { signature, timestamp } = await this.computeSignature(allParams, apiSecret);
        body.signature = signature;
        body.timestamp = timestamp;
        body.api_key = apiKey;
        return new Request(request, { body: JSON.stringify(body) });
    }

    async signFormDataRequest(request: Request, apiKey: string, apiSecret: string, queryParams: string[] = []) {
        const form = await request.clone().formData();
        if (form.get("signature")) {
            return request;
        }

        const bodyParams = this.paramsToSignFormData(form);
        const allParams = [...bodyParams, ...queryParams];
        const { signature, timestamp } = await this.computeSignature(allParams, apiSecret);

        // add the signature, timestamp and apiKey to the URL as query parameters
        const url = new URL(request.url);
        url.searchParams.set("signature", signature);
        url.searchParams.set("timestamp", timestamp.toString());
        url.searchParams.set("api_key", apiKey);

        // construct a new request with the same URL and the same form data and the same method
        // remove the basic authentication header
        const newHeaders = new Headers(request.headers);
        newHeaders.delete("Authorization");
        return new Request(url.toString(), request);
    }

    SIGNED_ACTIONS = [
        'explicit', 'upload', 'download', 'destroy', 'sprite', 'tags', 'context', 'metadata_update', 'text', 'multi', 'explode',
        'rename', 'create_slideshow', 'create_video', 'create_collage', 'generate_archive'];

    SIGNED_PATHS = ["image", "video", "raw", "auto"].flatMap(resourceType => this.SIGNED_ACTIONS.map(action => `${resourceType}/${action}`));

}
