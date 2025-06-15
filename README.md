# Cloudinary Asset Management JS SDK

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Asset Management JS SDK](#cloudinary-asset-management-js-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Global Parameters](#global-parameters)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
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
npm add @cloudinary/asset-management
```

### PNPM

```bash
pnpm add @cloudinary/asset-management
```

### Bun

```bash
bun add @cloudinary/asset-management
```

### Yarn

```bash
yarn add @cloudinary/asset-management zod

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
    "cloudinary-asset-mgmt": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/asset-management",
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
    "cloudinary-asset-mgmt": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/asset-management",
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
    https://github.com/cloudinary/asset-management-js/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

For a full list of server arguments, run:

```sh
npx -y --package @cloudinary/asset-management -- mcp start --help
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
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `cloud_name` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `upload`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name      | Type   | Description                                 | Environment           |
| --------- | ------ | ------------------------------------------- | --------------------- |
| cloudName | string | The cloud name of your product environment. | CLOUDINARY_CLOUD_NAME |

### Example

```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

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
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
  cloudName: "<value>",
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

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

* [renameAsset](docs/sdks/assets/README.md#renameasset) - Updates an existing asset's identifier and optionally other metadata in your Cloudinary account
* [downloadAsset](docs/sdks/assets/README.md#downloadasset) - Generates a download link for a specific asset (image)
* [explicitAsset](docs/sdks/assets/README.md#explicitasset) - Apply operations on an existing asset
* [generateArchive](docs/sdks/assets/README.md#generatearchive) - Creates an archive (ZIP or TGZ file) that contains a set of assets from
* [downloadBackupAsset](docs/sdks/assets/README.md#downloadbackupasset) - Download a backup copy of an asset
* [destroyByAssetId](docs/sdks/assets/README.md#destroybyassetid) - Delete asset by asset-id
* [listResourceTypes](docs/sdks/assets/README.md#listresourcetypes) - Get resource types
* [listImages](docs/sdks/assets/README.md#listimages) - Get image assets
* [listVideos](docs/sdks/assets/README.md#listvideos) - Get video assets
* [listRawFiles](docs/sdks/assets/README.md#listrawfiles) - Get raw assets
* [listResourcesByAssetFolder](docs/sdks/assets/README.md#listresourcesbyassetfolder) - Get resources by asset folder
* [listResourcesByAssetIDs](docs/sdks/assets/README.md#listresourcesbyassetids) - Get resources by asset IDs
* [listResourcesByContext](docs/sdks/assets/README.md#listresourcesbycontext) - Get resources by context
* [listResourcesByModerationKindAndStatus](docs/sdks/assets/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
* [restoreResourcesByAssetIDs](docs/sdks/assets/README.md#restoreresourcesbyassetids) - Restore assets
* [deleteResourcesByPublicId](docs/sdks/assets/README.md#deleteresourcesbypublicid) - Delete resources by public ID
* [getResourceByPublicId](docs/sdks/assets/README.md#getresourcebypublicid) - Get resource by public ID
* [updateResourceByPublicId](docs/sdks/assets/README.md#updateresourcebypublicid) - Update asset by public ID
* [getResourceByAssetId](docs/sdks/assets/README.md#getresourcebyassetid) - Get resource by asset ID
* [updateResourceByAssetId](docs/sdks/assets/README.md#updateresourcebyassetid) - Updates an existing asset's metadata, tags, and other attributes using its asset ID
* [listResourceTags](docs/sdks/assets/README.md#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account
* [deleteBackupVersions](docs/sdks/assets/README.md#deletebackupversions) - Delete backed up versions
* [derivedDestroy](docs/sdks/assets/README.md#deriveddestroy) - Delete derived resources

### [backups](docs/sdks/backups/README.md)

* [deleteBackupVersions](docs/sdks/backups/README.md#deletebackupversions) - Delete backed up versions


### [explode](docs/sdks/explode/README.md)

* [explodeResource](docs/sdks/explode/README.md#exploderesource) - Create derived images from multi-page file

### [folders](docs/sdks/folders/README.md)

* [showFolder](docs/sdks/folders/README.md#showfolder) - List sub-folders
* [updateFolder](docs/sdks/folders/README.md#updatefolder) - Renames or moves an entire folder (along with all assets it contains) to a
* [createFolder](docs/sdks/folders/README.md#createfolder) - Creates a new empty folder in your Cloudinary media library
* [destroyFolder](docs/sdks/folders/README.md#destroyfolder) - Deletes an existing folder from your media library
* [listRootFolders](docs/sdks/folders/README.md#listrootfolders) - Get root folders
* [searchFolders](docs/sdks/folders/README.md#searchfolders) - Searches for folders whose attributes match a given expression
* [searchFoldersPost](docs/sdks/folders/README.md#searchfolderspost) - Searches for folders in your product environment

### [moderations](docs/sdks/moderations/README.md)

* [listResourcesByModerationKindAndStatus](docs/sdks/moderations/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status

### [search](docs/sdks/search/README.md)

* [searchAssets](docs/sdks/search/README.md#searchassets) - Provides a powerful query interface to filter and retrieve assets and their details
* [visualSearchAssets](docs/sdks/search/README.md#visualsearchassets) - Finds images in your asset library based on visual similarity or content

### [tags](docs/sdks/tags/README.md)

* [listResourceTags](docs/sdks/tags/README.md#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account

### [upload](docs/sdks/upload/README.md)

* [upload](docs/sdks/upload/README.md#upload) - Uploads media assets (images, videos, raw files) to your Cloudinary product environment
* [uploadChunk](docs/sdks/upload/README.md#uploadchunk) - Upload a single chunk of a large file
* [destroyAsset](docs/sdks/upload/README.md#destroyasset) - Destroys an asset/resource
* [text](docs/sdks/upload/README.md#text) - Create image from text

### [usage](docs/sdks/usage/README.md)

* [getUsage](docs/sdks/usage/README.md#getusage) - Retrieves comprehensive usage metrics and account statistics

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
- [`assetsDeleteBackupVersions`](docs/sdks/backups/README.md#deletebackupversions) - Delete backed up versions
- [`assetsDeleteResourcesByPublicId`](docs/sdks/assets/README.md#deleteresourcesbypublicid) - Delete resources by public ID
- [`assetsDerivedDestroy`](docs/sdks/assets/README.md#deriveddestroy) - Delete derived resources
- [`assetsDestroyByAssetId`](docs/sdks/assets/README.md#destroybyassetid) - Delete asset by asset-id
- [`assetsDownloadAsset`](docs/sdks/assets/README.md#downloadasset) - Generates a download link for a specific asset (image)
- [`assetsDownloadBackupAsset`](docs/sdks/assets/README.md#downloadbackupasset) - Download a backup copy of an asset
- [`assetsExplicitAsset`](docs/sdks/assets/README.md#explicitasset) - Apply operations on an existing asset
- [`assetsGenerateArchive`](docs/sdks/assets/README.md#generatearchive) - Creates an archive (ZIP or TGZ file) that contains a set of assets from
- [`assetsGetResourceByAssetId`](docs/sdks/assets/README.md#getresourcebyassetid) - Get resource by asset ID
- [`assetsGetResourceByPublicId`](docs/sdks/assets/README.md#getresourcebypublicid) - Get resource by public ID
- [`assetsListImages`](docs/sdks/assets/README.md#listimages) - Get image assets
- [`assetsListRawFiles`](docs/sdks/assets/README.md#listrawfiles) - Get raw assets
- [`assetsListResourcesByAssetFolder`](docs/sdks/assets/README.md#listresourcesbyassetfolder) - Get resources by asset folder
- [`assetsListResourcesByAssetIDs`](docs/sdks/assets/README.md#listresourcesbyassetids) - Get resources by asset IDs
- [`assetsListResourcesByContext`](docs/sdks/assets/README.md#listresourcesbycontext) - Get resources by context
- [`assetsListResourcesByModerationKindAndStatus`](docs/sdks/assets/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
- [`assetsListResourcesByModerationKindAndStatus`](docs/sdks/moderations/README.md#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
- [`assetsListResourceTags`](docs/sdks/assets/README.md#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account
- [`assetsListResourceTags`](docs/sdks/tags/README.md#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account
- [`assetsListResourceTypes`](docs/sdks/assets/README.md#listresourcetypes) - Get resource types
- [`assetsListVideos`](docs/sdks/assets/README.md#listvideos) - Get video assets
- [`assetsRenameAsset`](docs/sdks/assets/README.md#renameasset) - Updates an existing asset's identifier and optionally other metadata in your Cloudinary account
- [`assetsRestoreResourcesByAssetIDs`](docs/sdks/assets/README.md#restoreresourcesbyassetids) - Restore assets
- [`assetsUpdateResourceByAssetId`](docs/sdks/assets/README.md#updateresourcebyassetid) - Updates an existing asset's metadata, tags, and other attributes using its asset ID
- [`assetsUpdateResourceByPublicId`](docs/sdks/assets/README.md#updateresourcebypublicid) - Update asset by public ID
- [`explodeExplodeResource`](docs/sdks/explode/README.md#exploderesource) - Create derived images from multi-page file
- [`foldersCreateFolder`](docs/sdks/folders/README.md#createfolder) - Creates a new empty folder in your Cloudinary media library
- [`foldersDestroyFolder`](docs/sdks/folders/README.md#destroyfolder) - Deletes an existing folder from your media library
- [`foldersListRootFolders`](docs/sdks/folders/README.md#listrootfolders) - Get root folders
- [`foldersSearchFolders`](docs/sdks/folders/README.md#searchfolders) - Searches for folders whose attributes match a given expression
- [`foldersSearchFoldersPost`](docs/sdks/folders/README.md#searchfolderspost) - Searches for folders in your product environment
- [`foldersShowFolder`](docs/sdks/folders/README.md#showfolder) - List sub-folders
- [`foldersUpdateFolder`](docs/sdks/folders/README.md#updatefolder) - Renames or moves an entire folder (along with all assets it contains) to a
- [`searchSearchAssets`](docs/sdks/search/README.md#searchassets) - Provides a powerful query interface to filter and retrieve assets and their details
- [`searchVisualSearchAssets`](docs/sdks/search/README.md#visualsearchassets) - Finds images in your asset library based on visual similarity or content
- [`uploadDestroyAsset`](docs/sdks/upload/README.md#destroyasset) - Destroys an asset/resource
- [`uploadText`](docs/sdks/upload/README.md#text) - Create image from text
- [`uploadUpload`](docs/sdks/upload/README.md#upload) - Uploads media assets (images, videos, raw files) to your Cloudinary product environment
- [`uploadUploadChunk`](docs/sdks/upload/README.md#uploadchunk) - Upload a single chunk of a large file
- [`usageGetUsage`](docs/sdks/usage/README.md#getusage) - Retrieves comprehensive usage metrics and account statistics
- [`videoAnalyticsGetVideoViews`](docs/sdks/videoanalytics/README.md#getvideoviews) - Get video views

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
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

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
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
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CloudinaryAssetMgmtError`](./src/models/errors/cloudinaryassetmgmterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";
import * as errors from "@cloudinary/asset-management/models/errors";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  try {
    const result = await cloudinaryAssetMgmt.upload.upload("auto", {
      headers: "X-Robots-Tag: noindex",
      moderation: "google_video_moderation",
      rawConvert: "google_speech:vtt:en-US",
      backgroundRemoval: "pixelz",
      format: "jpg",
      allowedFormats: "mp4,ogv,jpg,png,pdf",
      autoTagging: 0.5,
      detection: "coco_v2",
      file: "", // Populate with string from file, for example example.file,
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CloudinaryAssetMgmtError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ApiError) {
        console.log(error.data$.error); // components.ApiErrorError
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CloudinaryAssetMgmtError`](./src/models/errors/cloudinaryassetmgmterror.ts): The base class for HTTP error responses.
  * [`ApiError`](docs/models/errors/apierror.md): *

<details><summary>Less common errors (10)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CloudinaryAssetMgmtError`](./src/models/errors/cloudinaryassetmgmterror.ts)**:
* [`BadRequestError`](docs/models/errors/badrequesterror.md): Bad request. Status code `400`. Applicable to 1 of 46 methods.*
* [`DownloadBackupAssetUnauthorizedError`](docs/models/errors/downloadbackupassetunauthorizederror.md): Authentication failed. Status code `401`. Applicable to 1 of 46 methods.*
* [`ListResourceTypesUnauthorizedError`](docs/models/errors/listresourcetypesunauthorizederror.md): Authentication failed. Status code `401`. Applicable to 1 of 46 methods.*
* [`NotFoundError`](docs/models/errors/notfounderror.md): Version not found. Status code `404`. Applicable to 1 of 46 methods.*
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                            | Variables | Description                                     |
| --- | --------------------------------- | --------- | ----------------------------------------------- |
| 0   | `https://{region}.cloudinary.com` | `region`  | Regional API endpoints for optimal performance. |
| 1   | `https://{host}`                  | `host`    | Custom domains for enterprise deployments.      |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable | Parameter                     | Supported Values                            | Default                | Description                 |
| -------- | ----------------------------- | ------------------------------------------- | ---------------------- | --------------------------- |
| `region` | `region: models.ServerRegion` | - `"api"`<br/>- `"api-eu"`<br/>- `"api-ap"` | `"api"`                | Regional endpoint selection |
| `host`   | `host: string`                | string                                      | `"api.cloudinary.com"` | API host domain.            |

#### Example

```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  serverIdx: 1,
  host: "nutritious-fisherman.net",
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  serverURL: "https://api.cloudinary.com",
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

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
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";
import { HTTPClient } from "@cloudinary/asset-management/lib/http";

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

const sdk = new CloudinaryAssetMgmt({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const sdk = new CloudinaryAssetMgmt({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLOUDINARY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
