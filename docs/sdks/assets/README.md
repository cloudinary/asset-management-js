# Assets
(*assets*)

## Overview

Enables you to manage all the resources (assets) stored in your product environment.

### Available Operations

* [renameAsset](#renameasset) - Updates an existing asset's identifier and optionally other metadata in your Cloudinary account
* [downloadAsset](#downloadasset) - Generates a download link for a specific asset (image)
* [explicitAsset](#explicitasset) - Apply operations on an existing asset
* [generateArchive](#generatearchive) - Creates an archive (ZIP or TGZ file) that contains a set of assets from
* [downloadBackupAsset](#downloadbackupasset) - Download a backup copy of an asset
* [destroyByAssetId](#destroybyassetid) - Delete asset by asset-id
* [listResourceTypes](#listresourcetypes) - Get resource types
* [listImages](#listimages) - Get image assets
* [listVideos](#listvideos) - Get video assets
* [listRawFiles](#listrawfiles) - Get raw assets
* [listResourcesByAssetFolder](#listresourcesbyassetfolder) - Get resources by asset folder
* [listResourcesByAssetIDs](#listresourcesbyassetids) - Get resources by asset IDs
* [listResourcesByContext](#listresourcesbycontext) - Get resources by context
* [listResourcesByModerationKindAndStatus](#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
* [restoreResourcesByAssetIDs](#restoreresourcesbyassetids) - Restore assets
* [deleteResourcesByPublicId](#deleteresourcesbypublicid) - Delete resources by public ID
* [getResourceByPublicId](#getresourcebypublicid) - Get resource by public ID
* [updateResourceByPublicId](#updateresourcebypublicid) - Update asset by public ID
* [getResourceByAssetId](#getresourcebyassetid) - Get resource by asset ID
* [updateResourceByAssetId](#updateresourcebyassetid) - Updates an existing asset's metadata, tags, and other attributes using its asset ID
* [listResourceTags](#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account
* [deleteBackupVersions](#deletebackupversions) - Delete backed up versions
* [derivedDestroy](#deriveddestroy) - Delete derived resources

## renameAsset

Updates an existing asset's identifier and optionally other metadata in your Cloudinary account

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.renameAsset("video", {
    fromPublicId: "<id>",
    toPublicId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsRenameAsset } from "@cloudinary/assets/funcs/assetsRenameAsset.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsRenameAsset(cloudinaryAssets, "video", {
    fromPublicId: "<id>",
    toPublicId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsRenameAsset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.RenameAssetResourceType](../../models/operations/renameassetresourcetype.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The type of resource to rename. "image", "video", or "raw".                                                                                                                    |
| `requestBody`                                                                                                                                                                  | [operations.RenameAssetRequestBody](../../models/operations/renameassetrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UploadResponse](../../models/components/uploadresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## downloadAsset

Generates a download link for a specific asset (image)

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.downloadAsset("image", "<id>", "<value>", "<value>", 444233);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDownloadAsset } from "@cloudinary/assets/funcs/assetsDownloadAsset.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDownloadAsset(cloudinaryAssets, "image", "<id>", "<value>", "<value>", 444233);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDownloadAsset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset to download.                                                                                                                                        |
| `apiKey`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `signature`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `timestamp`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `format`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The format to convert the asset to before downloading.                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.DownloadAssetType](../../models/operations/downloadassettype.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | The storage type of the asset. Defaults to 'upload'.                                                                                                                           |
| `expiresAt`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Unix timestamp indicating when the download URL should expire.                                                                                                                 |
| `attachment`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to force download as an attachment.                                                                                                                                    |
| `targetFilename`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The desired filename for the downloaded file.                                                                                                                                  |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A transformation to apply to the asset before downloading.                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DownloadAssetResponse](../../models/operations/downloadassetresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## explicitAsset

Applies actions such as transformations, tags, or metadata updates to an existing asset without re-uploading it.
This is useful for applying new transformations, adding tags, or updating metadata on assets that are already in your cloud.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.explicitAsset("image", {
    headers: "X-Robots-Tag: noindex",
    moderation: "aws_rek_video",
    publicId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsExplicitAsset } from "@cloudinary/assets/funcs/assetsExplicitAsset.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsExplicitAsset(cloudinaryAssets, "image", {
    headers: "X-Robots-Tag: noindex",
    moderation: "aws_rek_video",
    publicId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsExplicitAsset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.ExplicitAssetResourceType](../../models/operations/explicitassetresourcetype.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The type of resource to apply operations on. "image" for images, "video" for videos, or "raw" for non-media files.                                                             |
| `requestBody`                                                                                                                                                                  | [operations.ExplicitAssetRequestBody](../../models/operations/explicitassetrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UploadResponse](../../models/components/uploadresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## generateArchive

Creates a downloadable ZIP or other archive format containing the specified resources.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.generateArchive("image", {
    targetTags: [
      "animal",
      "dog",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsGenerateArchive } from "@cloudinary/assets/funcs/assetsGenerateArchive.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGenerateArchive(cloudinaryAssets, "image", {
    targetTags: [
      "animal",
      "dog",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsGenerateArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.GenerateArchiveResourceType](../../models/operations/generatearchiveresourcetype.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The type of resources to include in the archive. "image" for images, "video" for videos, "raw" for non-media files, or "all" for mixed types.                                  |
| `requestBody`                                                                                                                                                                  | [operations.GenerateArchiveRequestBody](../../models/operations/generatearchiverequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GenerateArchiveResponse](../../models/operations/generatearchiveresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## downloadBackupAsset

Download a backup copy of an asset

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.downloadBackupAsset("f4e6579cf84dd9cf5683b21f5b30c7d9", "a3978316b0045e5eaf198f4d6885ca35", "<value>", "<value>", 723931);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDownloadBackupAsset } from "@cloudinary/assets/funcs/assetsDownloadBackupAsset.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDownloadBackupAsset(cloudinaryAssets, "f4e6579cf84dd9cf5683b21f5b30c7d9", "a3978316b0045e5eaf198f4d6885ca35", "<value>", "<value>", 723931);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDownloadBackupAsset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the backup to download. Must be a 32-character hexadecimal string.                                                                                             | [object Object]                                                                                                                                                                |
| `versionId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the backup to download. Must be a 32-character hexadecimal string.                                                                                           | [object Object]                                                                                                                                                                |
| `apiKey`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The API key for authentication.                                                                                                                                                |                                                                                                                                                                                |
| `signature`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request signature.                                                                                                                                                         |                                                                                                                                                                                |
| `timestamp`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request timestamp.                                                                                                                                                         |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DownloadBackupAssetResponse](../../models/operations/downloadbackupassetresponse.md)\>**

### Errors

| Error Type                                  | Status Code                                 | Content Type                                |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| errors.BadRequestError                      | 400                                         | application/json                            |
| errors.DownloadBackupAssetUnauthorizedError | 401                                         | application/json                            |
| errors.NotFoundError                        | 404                                         | application/json                            |
| errors.SDKError                             | 4XX, 5XX                                    | \*/\*                                       |

## destroyByAssetId

Deletes an asset using its asset ID. This endpoint replaces the legacy /resources/by_asset_id endpoint.
Returns the deletion status and asset folder information when folder decoupling is enabled.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.destroyByAssetId({
    assetId: "<id>",
    timestamp: 281941,
    apiKey: "<value>",
    signature: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDestroyByAssetId } from "@cloudinary/assets/funcs/assetsDestroyByAssetId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDestroyByAssetId(cloudinaryAssets, {
    assetId: "<id>",
    timestamp: 281941,
    apiKey: "<value>",
    signature: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDestroyByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the asset to delete.                                                                                                                                                 |
| `timestamp`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The current Unix timestamp.                                                                                                                                                    |
| `apiKey`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The API key for authentication.                                                                                                                                                |
| `signature`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The signed request signature.                                                                                                                                                  |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to invalidate CDN cache. Default is false.                                                                                                                             |
| `notificationUrl`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | URL to receive completion notification.                                                                                                                                        |
| `callback`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | URL for redirect after operation completion.                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DestroyResponse](../../models/components/destroyresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourceTypes

Returns a list of all resource types that correspond to assets currently in your product environment.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourceTypes({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourceTypes } from "@cloudinary/assets/funcs/assetsListResourceTypes.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourceTypes(cloudinaryAssets, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourceTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListResourceTypesResponse](../../models/operations/listresourcetypesresponse.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.ListResourceTypesUnauthorizedError | 401                                       | application/json                          |
| errors.SDKError                           | 4XX, 5XX                                  | \*/\*                                     |

## listImages

Retrieves a list of image assets. Results can be filtered by various criteria like tags, moderation status, prefix, or specific public IDs.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listImages();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListImages } from "@cloudinary/assets/funcs/assetsListImages.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListImages(cloudinaryAssets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListImages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.ListImagesType](../../models/operations/listimagestype.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | The storage type of the assets. Necessary for prefix filtering.                                                                                                                |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Find resources with a public ID prefix. Requires the `type` parameter.                                                                                                         |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default: false                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Retrieve resources uploaded after this timestamp.                                                                                                                              |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listVideos

Retrieves a list of video assets. Results can be filtered by various criteria like tags, moderation status, prefix, or specific public IDs.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listVideos();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListVideos } from "@cloudinary/assets/funcs/assetsListVideos.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListVideos(cloudinaryAssets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListVideos failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.ListVideosType](../../models/operations/listvideostype.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | The delivery type. Necessary for prefix filtering.                                                                                                                             |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A public_id prefix. When specified, all assets with that prefix are returned. When using this, the `type` parameter must also be specified.                                    |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default: false                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | An ISO-8601 formatted timestamp. When specified, assets created since that timestamp are returned.  Supported only if neither `prefix` nor `public_ids` were passed.           |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listRawFiles

Retrieves a list of raw assets. Results can be filtered by various criteria like tags, moderation status, prefix, or specific public IDs.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listRawFiles();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListRawFiles } from "@cloudinary/assets/funcs/assetsListRawFiles.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListRawFiles(cloudinaryAssets);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListRawFiles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [operations.ListRawFilesType](../../models/operations/listrawfilestype.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The delivery type. Necessary for prefix filtering.                                                                                                                             |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A public_id prefix. When specified, all assets with that prefix are returned. When using this, the `type` parameter must also be specified.                                    |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default: false                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | An ISO-8601 formatted timestamp. When specified, assets created since that timestamp are returned.  Supported only if neither `prefix` nor `public_ids` were passed.           |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByAssetFolder

Retrieves a list of resources within a specific asset folder. Requires folder decoupling to be enabled.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByAssetFolder("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourcesByAssetFolder } from "@cloudinary/assets/funcs/assetsListResourcesByAssetFolder.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByAssetFolder(cloudinaryAssets, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourcesByAssetFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetFolder`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the asset folder.                                                                                                                                             |
| `resourceType`                                                                                                                                                                 | [operations.ListResourcesByAssetFolderResourceType](../../models/operations/listresourcesbyassetfolderresourcetype.md)                                                         | :heavy_minus_sign:                                                                                                                                                             | Filter by resource type within the folder.                                                                                                                                     |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByAssetIDs

Retrieves details for specific resources using their asset IDs (or external IDs).

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByAssetIDs([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourcesByAssetIDs } from "@cloudinary/assets/funcs/assetsListResourcesByAssetIDs.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByAssetIDs(cloudinaryAssets, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourcesByAssetIDs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetIds`                                                                                                                                                                     | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | List of asset IDs to retrieve (max 100).                                                                                                                                       |
| `resourceType`                                                                                                                                                                 | [operations.ListResourcesByAssetIDsResourceType](../../models/operations/listresourcesbyassetidsresourcetype.md)                                                               | :heavy_minus_sign:                                                                                                                                                             | Resource type (optional, can sometimes disambiguate).                                                                                                                          |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByContext

Retrieves resources matching specific context key/value pairs.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByContext("raw", "<key>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourcesByContext } from "@cloudinary/assets/funcs/assetsListResourcesByContext.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByContext(cloudinaryAssets, "raw", "<key>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourcesByContext failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `key`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Context key to filter by.                                                                                                                                                      |
| `value`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Context value to filter by.                                                                                                                                                    |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByModerationKindAndStatus

Retrieves resources matching specific moderation kind and status.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByModerationKindAndStatus("raw", "aws_rek", "aborted");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourcesByModerationKindAndStatus } from "@cloudinary/assets/funcs/assetsListResourcesByModerationKindAndStatus.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByModerationKindAndStatus(cloudinaryAssets, "raw", "aws_rek", "aborted");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourcesByModerationKindAndStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `moderationKind`                                                                                                                                                               | [operations.ModerationKind](../../models/operations/moderationkind.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `moderationStatus`                                                                                                                                                             | [operations.ModerationStatus](../../models/operations/moderationstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `fields`                                                                                                                                                                       | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.Direction](../../models/components/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Sort direction.                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## restoreResourcesByAssetIDs

Restores one or more resources from backup using their asset IDs. Can optionally specify versions to restore.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/assets/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssets, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsRestoreResourcesByAssetIDs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetIds`                                                                                                                                                                     | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The unique and immutable asset IDs of backed up assets to restore.                                                                                                             | [object Object]                                                                                                                                                                |
| `versions`                                                                                                                                                                     | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The version of each asset to restore. Must match length of asset_ids if provided.                                                                                              | [object Object]                                                                                                                                                                |
| `notificationUrl`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The URL that will receive notification when restore is complete.                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[{ [k: string]: components.RestoreResponseUnion }](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteResourcesByPublicId

Deletes assets uploaded to your product environment, identified by their public IDs.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.deleteResourcesByPublicId("raw", "authenticated", {
    all: false,
    resourceType: "image",
    keepOriginal: false,
    invalidate: false,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDeleteResourcesByPublicId } from "@cloudinary/assets/funcs/assetsDeleteResourcesByPublicId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDeleteResourcesByPublicId(cloudinaryAssets, "raw", "authenticated", {
    all: false,
    resourceType: "image",
    keepOriginal: false,
    invalidate: false,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDeleteResourcesByPublicId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.DeleteResourcesByPublicIdType](../../models/operations/deleteresourcesbypublicidtype.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `deleteResourceByPublicIdsRequest`                                                                                                                                             | *components.DeleteResourceByPublicIdsRequestUnion*                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteResourcesByPublicIdResponse](../../models/operations/deleteresourcesbypublicidresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getResourceByPublicId

Returns the details of a single resource specified by its public ID.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.getResourceByPublicId("raw", "list", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsGetResourceByPublicId } from "@cloudinary/assets/funcs/assetsGetResourceByPublicId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGetResourceByPublicId(cloudinaryAssets, "raw", "list", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsGetResourceByPublicId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.GetResourceByPublicIdType](../../models/operations/getresourcebypublicidtype.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset to update.                                                                                                                                          |
| `colors`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include color information (predominant colors and histogram of 32 leading colors). Default: false.                                                                  |
| `mediaMetadata`                                                                                                                                                                | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.                                                                                      |
| `faces`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include a list of coordinates of detected faces. Default: false.                                                                                                    |
| `qualityAnalysis`                                                                                                                                                              | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to return quality analysis scores for the image. Default: false.                                                                                                       |
| `accessibilityAnalysis`                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to return accessibility analysis scores for the image. Default: false.                                                                                                 |
| `pages`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.                                                                                     |
| `phash`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection. Default: false.                                                           |
| `coordinates`                                                                                                                                                                  | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include previously specified custom cropping coordinates and faces coordinates. Default: false.                                                                     |
| `versions`                                                                                                                                                                     | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include details of all the backed up versions of the asset. Default: false.                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of derived assets to return. Default: 10.                                                                                                                       |
| `derivedNextCursor`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for the next page of derived assets when there are more derived images than max_results.                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Info](../../models/components/info.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateResourceByPublicId

Updates one or more attributes of a specified resource (asset) identified by its public ID. Note that you can also update many attributes of an existing asset using the explicit method, which is not rate limited.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.updateResourceByPublicId("image", "dailymotion", "<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    accessControl: "[{\"access_type\":\"token\"}]",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsUpdateResourceByPublicId } from "@cloudinary/assets/funcs/assetsUpdateResourceByPublicId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsUpdateResourceByPublicId(cloudinaryAssets, "image", "dailymotion", "<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    accessControl: "[{\"access_type\":\"token\"}]",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsUpdateResourceByPublicId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.UpdateResourceByPublicIdType](../../models/operations/updateresourcebypublicidtype.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset to update.                                                                                                                                          |
| `resourceUpdateRequest`                                                                                                                                                        | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Info](../../models/components/info.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getResourceByAssetId

Returns the details of a single resource specified by its asset ID.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.getResourceByAssetId("e9b44a374f66ad53a64a74c7398f7");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsGetResourceByAssetId } from "@cloudinary/assets/funcs/assetsGetResourceByAssetId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGetResourceByAssetId(cloudinaryAssets, "e9b44a374f66ad53a64a74c7398f7");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsGetResourceByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `colors`                                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include color information (predominant colors and histogram of 32 leading colors). Default: false.                                                                  |                                                                                                                                                                                |
| `mediaMetadata`                                                                                                                                                                | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include IPTC, XMP, and detailed Exif metadata in the response. Default: false.                                                                                      |                                                                                                                                                                                |
| `faces`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include a list of coordinates of detected faces. Default: false.                                                                                                    |                                                                                                                                                                                |
| `qualityAnalysis`                                                                                                                                                              | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to return quality analysis scores for the image. Default: false.                                                                                                       |                                                                                                                                                                                |
| `accessibilityAnalysis`                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to return accessibility analysis scores for the image. Default: false.                                                                                                 |                                                                                                                                                                                |
| `pages`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to report the number of pages in multi-page documents (e.g., PDF). Default: false.                                                                                     |                                                                                                                                                                                |
| `phash`                                                                                                                                                                        | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the perceptual hash (pHash) of the uploaded photo for image similarity detection. Default: false.                                                           |                                                                                                                                                                                |
| `coordinates`                                                                                                                                                                  | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include previously specified custom cropping coordinates and faces coordinates. Default: false.                                                                     |                                                                                                                                                                                |
| `versions`                                                                                                                                                                     | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include details of all the backed up versions of the asset. Default: false.                                                                                         |                                                                                                                                                                                |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of derived assets to return. Default: 10.                                                                                                                       |                                                                                                                                                                                |
| `derivedNextCursor`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for the next page of derived assets when there are more derived images than max_results.                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.Info](../../models/components/info.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateResourceByAssetId

Updates one or more attributes of a specified resource (asset) by its asset ID. This enables you to update details of an asset by its unique and immutable identifier, regardless of public ID, display name, asset folder, resource type or deliver type. Note that you can also update many attributes of an existing asset using the explicit method, which is not rate-limited.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.updateResourceByAssetId("<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    accessControl: "[{\"access_type\":\"token\"}]",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsUpdateResourceByAssetId } from "@cloudinary/assets/funcs/assetsUpdateResourceByAssetId.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsUpdateResourceByAssetId(cloudinaryAssets, "<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    accessControl: "[{\"access_type\":\"token\"}]",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsUpdateResourceByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique asset ID of the asset to update.                                                                                                                                    |
| `resourceUpdateRequest`                                                                                                                                                        | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Info](../../models/components/info.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourceTags

Retrieves a comprehensive list of all tags that exist in your product environment for assets of the specified type.

[Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourceTags("raw");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourceTags } from "@cloudinary/assets/funcs/assetsListResourceTags.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourceTags(cloudinaryAssets, "raw");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourceTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The prefix to use if you want to limit the returned tags to those that start with the specified prefix.                                                                        |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListResourceTagsResponse](../../models/operations/listresourcetagsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteBackupVersions

Deletes specific backed up versions of an asset identified by asset ID.
This operation is irreversible and deleted versions cannot be recovered.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.deleteBackupVersions("e9b44a374f66ad53a64a74c7398f7", {
    versionIds: [
      "5552aa57e67445552a3cdc1110a0115",
      "383e22a57167445552a3cdc16f0a0c85",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDeleteBackupVersions } from "@cloudinary/assets/funcs/assetsDeleteBackupVersions.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDeleteBackupVersions(cloudinaryAssets, "e9b44a374f66ad53a64a74c7398f7", {
    versionIds: [
      "5552aa57e67445552a3cdc1110a0115",
      "383e22a57167445552a3cdc16f0a0c85",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDeleteBackupVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.DeleteBackupVersionsRequestBody](../../models/operations/deletebackupversionsrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DeleteBackupVersionsResponse](../../models/operations/deletebackupversionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## derivedDestroy

Deletes derived resources by derived resource ID

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.derivedDestroy({
    derivedResourceIds: [
      "1234567890abcdef",
      "fedcba0987654321",
    ],
    invalidate: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsDerivedDestroy } from "@cloudinary/assets/funcs/assetsDerivedDestroy.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDerivedDestroy(cloudinaryAssets, {
    derivedResourceIds: [
      "1234567890abcdef",
      "fedcba0987654321",
    ],
    invalidate: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDerivedDestroy failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `derivedResourceIds`                                                                                                                                                           | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | Array of derived resource IDs to delete specific derived resources                                                                                                             | [object Object]                                                                                                                                                                |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to invalidate the CDN cache for the deleted resources                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DerivedDestroyResponse](../../models/components/deriveddestroyresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |