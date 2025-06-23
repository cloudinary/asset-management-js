import { SDKInitHook } from "./types.js";
import { SDKOptions, SDK_METADATA } from "../lib/config.js";

// Extract product name from package name part
function getProductName(packageName: string): string {
    try {
        if (packageName) {
            // Extract package name from the package part
            // Format: "@cloudinary/asset-management"
            const match = packageName.match(/@cloudinary\/(.+)/);
            if (match && match[1]) {
                // Convert kebab-case to PascalCase: "asset-management" -> "AssetManagement"
                return match[1]
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join('');
            }
        }
        return "Unknown";
    } catch {
        return "Unknown";
    }
}

function isRemoteMCP(): boolean {
    // Hacky solution to check if we are in CF Workers env
    // CF Workers expose a global 'caches' object with a 'default' property
    return typeof caches !== 'undefined' && typeof (caches as any).default !== 'undefined';
}

function getRuntime(): string {
    if (isRemoteMCP()) {
        return 'MCP';
    }

    // Check if we can find MCP-related modules in the call stack
    try {
        const stack = new Error().stack;
        if (stack && (stack.includes('mcp-server') || stack.includes('@modelcontextprotocol'))) {
            return 'MCP';
        }
    } catch (e) {
        // Ignore stack trace errors
    }

    return 'JS';
}

function getSystemInfo(): string {
    const nodeVersion = process.version; // e.g., "v18.17.0"
    const platform = process.platform; // e.g., "darwin", "linux", "win32"
    const arch = process.arch; // e.g., "x64", "arm64"

    return `Node.js ${nodeVersion.substring(1)}; ${platform} ${arch}`;
}

function getEnvDetails(): string {
    return isRemoteMCP() ? '; RemoteMCP' : '';
}

function buildUserAgent(sdkVersion: string, genVersion: string, openapiDocVersion: string, packageName: string, runtime: string): string {
    const productName = getProductName(packageName);
    const systemInfo = getSystemInfo();
    const envDetails = getEnvDetails();

    return `Cloudinary/${productName} ${runtime}/${sdkVersion} Gen/${genVersion} Schema/${openapiDocVersion} (${systemInfo}${envDetails})`;
}

export class UserAgentHook implements SDKInitHook {
    sdkInit(opts: SDKOptions): SDKOptions {
        const originalUserAgent = SDK_METADATA.userAgent;

        if (originalUserAgent && originalUserAgent.startsWith("speakeasy-sdk/typescript")) {
            const parts = originalUserAgent.split(" ");

            if (parts.length >= 5) {
                const sdkVersion = parts[1];
                const genVersion = parts[2];
                const openapiDocVersion = parts[3];
                const packageName = parts[4];

                // Ensure all parts are defined before proceeding
                if (sdkVersion && genVersion && openapiDocVersion && packageName) {
                    const runtime = getRuntime();
                    opts.userAgent = buildUserAgent(sdkVersion, genVersion, openapiDocVersion, packageName, runtime);
                }
            }
        }
        return opts;
    }
}
