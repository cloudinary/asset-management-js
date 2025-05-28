declare const process: any;
declare const Deno: any;

export class CloudConfig {
    cloudName: string;
    apiKey: string;
    apiSecret: string;

    constructor() {
        this.cloudName = "";
        this.apiKey = "";
        this.apiSecret = "";

        let envVar: string | undefined = undefined;

        if (typeof process !== "undefined") {
            if (process.env?.CLOUDINARY_URL) {
                envVar = process.env.CLOUDINARY_URL;
            }
        } else if (typeof Deno !== "undefined" && Deno.env?.get) {
            envVar = Deno.env.get("CLOUDINARY_URL");
        }

        if (envVar) {
            try {
                const url = new URL(envVar);
                this.cloudName = url.host;
                this.apiKey = url.username || "";
                this.apiSecret = url.password || "";
                
                // Automatically set CLOUDINARY_CLOUD_NAME if not already set
                // This ensures the SDK can find cloudName during initialization
                if (this.cloudName && typeof process !== "undefined" && !process.env.CLOUDINARY_CLOUD_NAME) {
                    process.env.CLOUDINARY_CLOUD_NAME = this.cloudName;
                }
            } catch (error) {
                throw new Error(`Invalid CLOUDINARY_URL: '${envVar}'`);
            }
        }
    }
}
