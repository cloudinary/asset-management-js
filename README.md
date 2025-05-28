# Cloudinary Assets API

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Assets API](#cloudinary-assets-api)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Global Parameters](#global-parameters)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @cloudinary/assets
```

### PNPM

```bash
pnpm add @cloudinary/assets
```

### Bun

```bash
bun add @cloudinary/assets
```

### Yarn

```bash
yarn add @cloudinary/assets zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```



### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "CloudinaryAssets": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/assets",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "CloudinaryAssets": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/assets",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/cloudinary/assets-js/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

For a full list of server arguments, run:

```sh
npx -y --package @cloudinary/assets -- mcp start --help
```
<!-- No SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `cloud_name` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `uploadMultipart`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name      | Type   | Description                                 | Environment           |
| --------- | ------ | ------------------------------------------- | --------------------- |
| cloudName | string | The cloud name of your product environment. | CLOUDINARY_CLOUD_NAME |

### Example

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                     | Type | Scheme      | Environment Variable                             |
| ------------------------ | ---- | ----------- | ------------------------------------------------ |
| `apiKey`<br/>`apiSecret` | http | Custom HTTP | `CLOUDINARY_API_KEY`<br/>`CLOUDINARY_API_SECRET` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [assetRelations](docs/sdks/assetrelations/README.md)

* [createAssetRelationsByAssetId](docs/sdks/assetrelations/README.md#createassetrelationsbyassetid) - Add related assets by asset ID
* [deleteAssetRelationsByAssetId](docs/sdks/assetrelations/README.md#deleteassetrelationsbyassetid) - Delete asset relations by asset ID
* [createAssetRelationsByPublicId](docs/sdks/assetrelations/README.md#createassetrelationsbypublicid) - Create asset relations by public ID
* [deleteAssetRelationsByPublicId](docs/sdks/assetrelations/README.md#deleteassetrelationsbypublicid) - Delete asset relations by public ID

### [assets](docs/sdks/assets/README.md)

* [renameAsset](docs/sdks/assets/README.md#renameasset) - Renames an asset
* [downloadAsset](docs/sdks/assets/README.md#downloadasset) - Downloads an asset
* [explicitAsset](docs/sdks/assets/README.md#explicitasset) - Apply operations on an existing asset
* [generateArchive](docs/sdks/assets/README.md#generatearchive) - Generate downloadable archive
* [downloadBackupAsset](docs/sdks/assets/README.md#downloadbackupasset) - Download a backup copy of an asset
* [destroyByAssetId](docs/sdks/assets/README.md#destroybyassetid) - Delete asset by ID
* [listResourceTypes](docs/sdks/assets/README.md#listresourcetypes) - Get resource types
* [listImages](docs/sdks/assets/README.md#listimages) - Get image assets
* [listVideos](docs/sdks/assets/README.md#listvideos) - Get video assets
* [listRawFiles](docs/sdks/assets/README.md#listrawfiles) - Get raw assets
* [listResourcesByAssetFolder](docs/sdks/assets/README.md#listresourcesbyassetfolder) - Get resources by asset folder
* [listResourcesByAssetIDs](docs/sdks/assets/README.md#listresourcesbyassetids) - Get resources by asset IDs
* [listResourcesByContext](docs/sdks/assets/README.md#listresourcesbycontext) - Get resources by context
* [listResourcesByModerationKindAndStatus](docs/sdks/assets/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
* [restoreResourcesByAssetIDs](docs/sdks/assets/README.md#restoreresourcesbyassetids) - Restore assets
* [listResourcesByExternalIDs](docs/sdks/assets/README.md#listresourcesbyexternalids) - Get resources by external IDs
* [deleteResourcesByPublicId](docs/sdks/assets/README.md#deleteresourcesbypublicid) - Delete resources by public ID
* [getResourceByPublicId](docs/sdks/assets/README.md#getresourcebypublicid) - Get resource by public ID
* [updateResourceByPublicId](docs/sdks/assets/README.md#updateresourcebypublicid) - Update asset by public ID
* [getResourceByAssetId](docs/sdks/assets/README.md#getresourcebyassetid) - Get resource by asset ID
* [updateResourceByAssetId](docs/sdks/assets/README.md#updateresourcebyassetid) - Update asset by asset ID
* [listResourceTags](docs/sdks/assets/README.md#listresourcetags) - Get tags
* [deleteBackupVersions](docs/sdks/assets/README.md#deletebackupversions) - Delete backed up versions
* [derivedDestroy](docs/sdks/assets/README.md#deriveddestroy) - Delete derived resources

### [backups](docs/sdks/backups/README.md)

* [deleteBackupVersions](docs/sdks/backups/README.md#deletebackupversions) - Delete backed up versions


### [explode](docs/sdks/explode/README.md)

* [explodeResource](docs/sdks/explode/README.md#exploderesource) - Create derived images from multi-page file

### [folders](docs/sdks/folders/README.md)

* [showFolder](docs/sdks/folders/README.md#showfolder) - List sub-folders
* [updateFolder](docs/sdks/folders/README.md#updatefolder) - Update folder
* [createFolder](docs/sdks/folders/README.md#createfolder) - Create a new folder
* [destroyFolder](docs/sdks/folders/README.md#destroyfolder) - Delete folder
* [listRootFolders](docs/sdks/folders/README.md#listrootfolders) - Get root folders
* [searchFolders](docs/sdks/folders/README.md#searchfolders) - Searches for folders in your product environment
* [searchFoldersPost](docs/sdks/folders/README.md#searchfolderspost) - Searches for folders in your product environment

### [moderations](docs/sdks/moderations/README.md)

* [listResourcesByModerationKindAndStatus](docs/sdks/moderations/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status

### [search](docs/sdks/search/README.md)

* [searchResourcesPost](docs/sdks/search/README.md#searchresourcespost) - Get resources by search (POST method)
* [visualSearchResources](docs/sdks/search/README.md#visualsearchresources) - Get resources by visual similarity

### [tags](docs/sdks/tags/README.md)

* [listResourceTags](docs/sdks/tags/README.md#listresourcetags) - Get tags

### [upload](docs/sdks/upload/README.md)

* [uploadMultipart](docs/sdks/upload/README.md#uploadmultipart) - Uploads a file to Cloudinary
* [upload](docs/sdks/upload/README.md#upload) - Uploads a file to Cloudinary
* [uploadNoResourceTypeMultipart](docs/sdks/upload/README.md#uploadnoresourcetypemultipart) - Upload with automatic file type detection
* [uploadNoResourceType](docs/sdks/upload/README.md#uploadnoresourcetype) - Upload with automatic file type detection
* [uploadChunkedMultipart](docs/sdks/upload/README.md#uploadchunkedmultipart) - Upload a large file in chunks
* [uploadChunked](docs/sdks/upload/README.md#uploadchunked) - Upload a large file in chunks
* [destroyAsset](docs/sdks/upload/README.md#destroyasset) - Destroys an asset/resource
* [text](docs/sdks/upload/README.md#text) - Create image from text

### [usage](docs/sdks/usage/README.md)

* [getUsage](docs/sdks/usage/README.md#getusage) - Get usage details

### [videoAnalytics](docs/sdks/videoanalytics/README.md)

* [getVideoViews](docs/sdks/videoanalytics/README.md#getvideoviews) - Get video views

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`assetRelationsCreateAssetRelationsByAssetId`](docs/sdks/assetrelations/README.md#createassetrelationsbyassetid) - Add related assets by asset ID
- [`assetRelationsCreateAssetRelationsByPublicId`](docs/sdks/assetrelations/README.md#createassetrelationsbypublicid) - Create asset relations by public ID
- [`assetRelationsDeleteAssetRelationsByAssetId`](docs/sdks/assetrelations/README.md#deleteassetrelationsbyassetid) - Delete asset relations by asset ID
- [`assetRelationsDeleteAssetRelationsByPublicId`](docs/sdks/assetrelations/README.md#deleteassetrelationsbypublicid) - Delete asset relations by public ID
- [`assetsDeleteBackupVersions`](docs/sdks/assets/README.md#deletebackupversions) - Delete backed up versions
- [`assetsDeleteResourcesByPublicId`](docs/sdks/assets/README.md#deleteresourcesbypublicid) - Delete resources by public ID
- [`assetsDerivedDestroy`](docs/sdks/assets/README.md#deriveddestroy) - Delete derived resources
- [`assetsDestroyByAssetId`](docs/sdks/assets/README.md#destroybyassetid) - Delete asset by ID
- [`assetsDownloadAsset`](docs/sdks/assets/README.md#downloadasset) - Downloads an asset
- [`assetsDownloadBackupAsset`](docs/sdks/assets/README.md#downloadbackupasset) - Download a backup copy of an asset
- [`assetsExplicitAsset`](docs/sdks/assets/README.md#explicitasset) - Apply operations on an existing asset
- [`assetsGenerateArchive`](docs/sdks/assets/README.md#generatearchive) - Generate downloadable archive
- [`assetsGetResourceByAssetId`](docs/sdks/assets/README.md#getresourcebyassetid) - Get resource by asset ID
- [`assetsGetResourceByPublicId`](docs/sdks/assets/README.md#getresourcebypublicid) - Get resource by public ID
- [`assetsListImages`](docs/sdks/assets/README.md#listimages) - Get image assets
- [`assetsListRawFiles`](docs/sdks/assets/README.md#listrawfiles) - Get raw assets
- [`assetsListResourcesByAssetFolder`](docs/sdks/assets/README.md#listresourcesbyassetfolder) - Get resources by asset folder
- [`assetsListResourcesByAssetIDs`](docs/sdks/assets/README.md#listresourcesbyassetids) - Get resources by asset IDs
- [`assetsListResourcesByContext`](docs/sdks/assets/README.md#listresourcesbycontext) - Get resources by context
- [`assetsListResourcesByExternalIDs`](docs/sdks/assets/README.md#listresourcesbyexternalids) - Get resources by external IDs
- [`assetsListResourcesByModerationKindAndStatus`](docs/sdks/assets/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
- [`assetsListResourceTags`](docs/sdks/assets/README.md#listresourcetags) - Get tags
- [`assetsListResourceTypes`](docs/sdks/assets/README.md#listresourcetypes) - Get resource types
- [`assetsListVideos`](docs/sdks/assets/README.md#listvideos) - Get video assets
- [`assetsRenameAsset`](docs/sdks/assets/README.md#renameasset) - Renames an asset
- [`assetsRestoreResourcesByAssetIDs`](docs/sdks/assets/README.md#restoreresourcesbyassetids) - Restore assets
- [`assetsUpdateResourceByAssetId`](docs/sdks/assets/README.md#updateresourcebyassetid) - Update asset by asset ID
- [`assetsUpdateResourceByPublicId`](docs/sdks/assets/README.md#updateresourcebypublicid) - Update asset by public ID
- [`backupsDeleteBackupVersions`](docs/sdks/backups/README.md#deletebackupversions) - Delete backed up versions
- [`explodeExplodeResource`](docs/sdks/explode/README.md#exploderesource) - Create derived images from multi-page file
- [`foldersCreateFolder`](docs/sdks/folders/README.md#createfolder) - Create a new folder
- [`foldersDestroyFolder`](docs/sdks/folders/README.md#destroyfolder) - Delete folder
- [`foldersListRootFolders`](docs/sdks/folders/README.md#listrootfolders) - Get root folders
- [`foldersSearchFolders`](docs/sdks/folders/README.md#searchfolders) - Searches for folders in your product environment
- [`foldersSearchFoldersPost`](docs/sdks/folders/README.md#searchfolderspost) - Searches for folders in your product environment
- [`foldersShowFolder`](docs/sdks/folders/README.md#showfolder) - List sub-folders
- [`foldersUpdateFolder`](docs/sdks/folders/README.md#updatefolder) - Update folder
- [`moderationsListResourcesByModerationKindAndStatus`](docs/sdks/moderations/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
- [`searchSearchResourcesPost`](docs/sdks/search/README.md#searchresourcespost) - Get resources by search (POST method)
- [`searchVisualSearchResources`](docs/sdks/search/README.md#visualsearchresources) - Get resources by visual similarity
- [`tagsListResourceTags`](docs/sdks/tags/README.md#listresourcetags) - Get tags
- [`uploadDestroyAsset`](docs/sdks/upload/README.md#destroyasset) - Destroys an asset/resource
- [`uploadText`](docs/sdks/upload/README.md#text) - Create image from text
- [`uploadUpload`](docs/sdks/upload/README.md#upload) - Uploads a file to Cloudinary
- [`uploadUploadChunked`](docs/sdks/upload/README.md#uploadchunked) - Upload a large file in chunks
- [`uploadUploadChunkedMultipart`](docs/sdks/upload/README.md#uploadchunkedmultipart) - Upload a large file in chunks
- [`uploadUploadMultipart`](docs/sdks/upload/README.md#uploadmultipart) - Uploads a file to Cloudinary
- [`uploadUploadNoResourceType`](docs/sdks/upload/README.md#uploadnoresourcetype) - Upload with automatic file type detection
- [`uploadUploadNoResourceTypeMultipart`](docs/sdks/upload/README.md#uploadnoresourcetypemultipart) - Upload with automatic file type detection
- [`usageGetUsage`](docs/sdks/usage/README.md#getusage) - Get usage details
- [`videoAnalyticsGetVideoViews`](docs/sdks/videoanalytics/README.md#getvideoviews) - Get video views

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `uploadMultipart` method may throw the following errors:

| Error Type      | Status Code        | Content Type     |
| --------------- | ------------------ | ---------------- |
| errors.ApiError | 400, 401, 403, 404 | application/json |
| errors.SDKError | 4XX, 5XX           | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { ApiError, SDKValidationError } from "@cloudinary/assets/models/errors";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  let result;
  try {
    result = await cloudinaryAssets.upload.uploadMultipart({
      resourceType: "video",
      binaryUploadRequest: {
        headers: "X-Robots-Tag: noindex",
        moderation: "google_video_moderation",
        rawConvert: "google_speech:vtt:en-US",
        backgroundRemoval: "pixelz",
        format: "jpg",
        allowedFormats: "mp4,ogv,jpg,png,pdf",
        autoTagging: 0.5,
        detection: "coco_v2",
        file: await openAsBlob("example.file"),
      },
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ApiError): {
        // Handle err.data$: ApiErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://{defaultHost}` contains variables and is set to `https://api.cloudinary.com` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable      | Parameter             | Default                | Description                         |
| ------------- | --------------------- | ---------------------- | ----------------------------------- |
| `defaultHost` | `defaultHost: string` | `"api.cloudinary.com"` | The host name for the API endpoint. |

#### Example

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  defaultHost: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  serverURL: "https://api.cloudinary.com",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart({
    resourceType: "video",
    binaryUploadRequest: {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: await openAsBlob("example.file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { HTTPClient } from "@cloudinary/assets/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CloudinaryAssets({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const sdk = new CloudinaryAssets({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLOUDINARY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
