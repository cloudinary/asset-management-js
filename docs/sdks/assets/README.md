# Assets

## Overview

Enables you to manage all the resources (assets) stored in your product environment.

### Available Operations

* [renameAsset](#renameasset) - Updates an existing asset's identifier (public ID) and optionally other metadata in your Cloudinary account
* [downloadAsset](#downloadasset) - Generates a download link for a specific asset (image)
* [explicitAsset](#explicitasset) - Apply operations on an existing asset
* [generateArchive](#generatearchive) - Creates an archive (ZIP or TGZ file) that contains a set of assets from your product environment.
* [downloadBackupAsset](#downloadbackupasset) - Download a backup copy of an asset
* [destroyByAssetId](#destroybyassetid) - Delete asset by asset ID
* [downloadAssetByAssetId](#downloadassetbyassetid) - Download an asset by asset ID
* [listResourceTypes](#listresourcetypes) - Get resource types
* [listImages](#listimages) - Get image assets
* [listVideos](#listvideos) - Get video assets
* [listRawFiles](#listrawfiles) - Get raw assets
* [listResourcesByAssetFolder](#listresourcesbyassetfolder) - Get resources by asset folder
* [listResourcesByAssetIDs](#listresourcesbyassetids) - Get resources by asset IDs
* [listResourcesByContext](#listresourcesbycontext) - Get resources by context
* [listResourcesByModerationKindAndStatus](#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
* [restoreResourcesByAssetIDs](#restoreresourcesbyassetids) - Restore assets by asset ID
* [deleteResourcesByPublicId](#deleteresourcesbypublicid) - Delete resources by public ID
* [getResourceByPublicId](#getresourcebypublicid) - Get resource by public ID
* [updateResourceByPublicId](#updateresourcebypublicid) - Update asset by public ID
* [getResourceByAssetId](#getresourcebyassetid) - Get resource by asset ID
* [updateResourceByAssetId](#updateresourcebyassetid) - Updates an existing asset's metadata, tags, and other attributes using its asset ID
* [listResourceTags](#listresourcetags) - Retrieves a list of tags currently applied to assets in your Cloudinary account
* [deleteBackupVersions](#deletebackupversions) - Delete backed up versions
* [derivedDestroy](#deriveddestroy) - Delete derived resources
* [invalidateDerivedByUrls](#invalidatederivedbyurls) - Invalidate derived assets by delivery URLs
* [getResourceByBody](#getresourcebybody) - Get the details of a single asset by body parameters
* [updateResourceByBody](#updateresourcebybody) - Update the details of a single asset by body parameters
* [listResourcesByContainerId](#listresourcesbycontainerid) - List the assets in a folder by container ID

## renameAsset

Updates an existing asset's identifier (public ID) and optionally other metadata in your Cloudinary account

### Example Usage

<!-- UsageSnippet language="typescript" operationID="renameAsset" method="post" path="/v1_1/{cloud_name}/{resource_type}/rename" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.renameAsset("video", {
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRenameAsset } from "@cloudinary/asset-management/funcs/assetsRenameAsset.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRenameAsset(cloudinaryAssetMgmt, "video", {
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.RenameAssetRequestBody](../../models/operations/renameassetrequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The rename request parameters.                                                                                                                                                 |
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

<!-- UsageSnippet language="typescript" operationID="downloadAsset" method="get" path="/v1_1/{cloud_name}/{resource_type}/download" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.downloadAsset("image", "<id>", undefined, "upload");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDownloadAsset } from "@cloudinary/asset-management/funcs/assetsDownloadAsset.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDownloadAsset(cloudinaryAssetMgmt, "image", "<id>", undefined, "upload");
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset.                                                                                                                                                    |
| `format`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The format to convert the asset to before downloading.                                                                                                                         |
| `type`                                                                                                                                                                         | [components.ManagedDeliveryType](../../models/components/manageddeliverytype.md)                                                                                               | :heavy_minus_sign:                                                                                                                                                             | The delivery type of the asset. Default is "upload".                                                                                                                           |
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

Note: Always prefer delivery URL transformations over this method, unless eager transformations are specifically required.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="explicitAsset" method="post" path="/v1_1/{cloud_name}/{resource_type}/explicit" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.explicitAsset("image", {
    autoTagging: 0.5,
    autoTranscription: true,
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
    backgroundRemoval: "cloudinary_ai",
    categorization: "google_tagging",
    detection: "coco_v2",
    format: "jpg",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    moderation: "aws_rek_video",
    ocr: "adv_ocr",
    publicId: "<id>",
    rawConvert: "google_speech:vtt:en-US",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsExplicitAsset } from "@cloudinary/asset-management/funcs/assetsExplicitAsset.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsExplicitAsset(cloudinaryAssetMgmt, "image", {
    autoTagging: 0.5,
    autoTranscription: true,
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
    backgroundRemoval: "cloudinary_ai",
    categorization: "google_tagging",
    detection: "coco_v2",
    format: "jpg",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    moderation: "aws_rek_video",
    ocr: "adv_ocr",
    publicId: "<id>",
    rawConvert: "google_speech:vtt:en-US",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130",
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `explicitRequest`                                                                                                                                                              | [components.ExplicitRequest](../../models/components/explicitrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset and operations to apply.                                                                                                                                             |
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

<!-- UsageSnippet language="typescript" operationID="generateArchive" method="post" path="/v1_1/{cloud_name}/{resource_type}/generate_archive" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.generateArchive("image", {
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsGenerateArchive } from "@cloudinary/asset-management/funcs/assetsGenerateArchive.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsGenerateArchive(cloudinaryAssetMgmt, "image", {
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
| `resourceType`                                                                                                                                                                 | [components.ArchiveResourceType](../../models/components/archiveresourcetype.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The type of resource for archive generation (image, video, or raw).                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.GenerateArchiveRequestBody](../../models/operations/generatearchiverequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The archive generation parameters.                                                                                                                                             |
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

<!-- UsageSnippet language="typescript" operationID="downloadBackupAsset" method="get" path="/v1_1/{cloud_name}/download_backup" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.downloadBackupAsset("f4e6579cf84dd9cf5683b21f5b30c7d9", "a3978316b0045e5eaf198f4d6885ca35");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDownloadBackupAsset } from "@cloudinary/asset-management/funcs/assetsDownloadBackupAsset.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDownloadBackupAsset(cloudinaryAssetMgmt, "f4e6579cf84dd9cf5683b21f5b30c7d9", "a3978316b0045e5eaf198f4d6885ca35");
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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                       | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                               |
| `versionId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The version ID of the backup to download. Must be a 32-character hexadecimal string.                                                                                           | a3978316b0045e5eaf198f4d6885ca35                                                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DownloadBackupAssetResponse](../../models/operations/downloadbackupassetresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## destroyByAssetId

Deletes an asset using its immutable asset ID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="destroyByAssetId" method="post" path="/v1_1/{cloud_name}/asset/destroy" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.destroyByAssetId({
    assetId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDestroyByAssetId } from "@cloudinary/asset-management/funcs/assetsDestroyByAssetId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDestroyByAssetId(cloudinaryAssetMgmt, {
    assetId: "<id>",
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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A 32-character hexadecimal asset ID.                                                                                                                                           |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to invalidate CDN cache. Default is false.                                                                                                                             |
| `notificationUrl`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | URL to receive completion notification.                                                                                                                                        |
| `callback`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | URL for redirect after operation completion.                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DestroyByAssetIdResponse](../../models/components/destroybyassetidresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## downloadAssetByAssetId

Generates a download link for a specific asset identified by its immutable asset ID,
instead of the resource type, delivery type and public ID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="downloadAssetByAssetId" method="get" path="/v1_1/{cloud_name}/asset/download" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.downloadAssetByAssetId("f4e6579cf84dd9cf5683b21f5b30c7d9");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDownloadAssetByAssetId } from "@cloudinary/asset-management/funcs/assetsDownloadAssetByAssetId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDownloadAssetByAssetId(cloudinaryAssetMgmt, "f4e6579cf84dd9cf5683b21f5b30c7d9");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDownloadAssetByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                       | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                               |
| `format`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The format to convert the asset to before downloading.                                                                                                                         |                                                                                                                                                                                |
| `transformation`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A transformation to apply to the asset before downloading.                                                                                                                     |                                                                                                                                                                                |
| `attachment`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to force download as an attachment.                                                                                                                                    |                                                                                                                                                                                |
| `targetFilename`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The desired filename for the downloaded file.                                                                                                                                  |                                                                                                                                                                                |
| `streamingAttachment`                                                                                                                                                          | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to stream a video asset as an attachment.                                                                                                                              |                                                                                                                                                                                |
| `expiresAt`                                                                                                                                                                    | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Unix timestamp indicating when the download URL should expire.                                                                                                                 |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.DownloadAssetByAssetIdResponse](../../models/operations/downloadassetbyassetidresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## listResourceTypes

Returns a list of all resource types that correspond to assets currently in your product environment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listResourceTypes" method="get" path="/v1_1/{cloud_name}/resources" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourceTypes({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourceTypes } from "@cloudinary/asset-management/funcs/assetsListResourceTypes.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourceTypes(cloudinaryAssetMgmt, {});
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

**Promise\<[components.ResourceTypesResponse](../../models/components/resourcetypesresponse.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.UnauthorizedError | 401                      | application/json         |
| errors.SDKError          | 4XX, 5XX                 | \*/\*                    |

## listImages

Retrieves a list of image assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listImages" method="get" path="/v1_1/{cloud_name}/resources/image" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listImages(undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListImages } from "@cloudinary/asset-management/funcs/assetsListImages.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListImages(cloudinaryAssetMgmt, undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | *components.DeliveryTypeAll*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | The delivery type to filter by. When omitted, returns assets of all delivery types.                                                                                            |                                                                                                                                                                                |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A public_id prefix. When specified, all assets with that prefix are returned.                                                                                                  |                                                                                                                                                                                |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              | [<br/>"sample",<br/>"product_image",<br/>"banner_2023"<br/>]                                                                                                                   |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default is false.                                                                                             |                                                                                                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |                                                                                                                                                                                |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |                                                                                                                                                                                |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |                                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed.              |                                                                                                                                                                                |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listVideos

Retrieves a list of video assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listVideos" method="get" path="/v1_1/{cloud_name}/resources/video" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listVideos(undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListVideos } from "@cloudinary/asset-management/funcs/assetsListVideos.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListVideos(cloudinaryAssetMgmt, undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | *components.DeliveryTypeAll*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | The delivery type to filter by. When omitted, returns assets of all delivery types.                                                                                            |                                                                                                                                                                                |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A public_id prefix. When specified, all assets with that prefix are returned.                                                                                                  |                                                                                                                                                                                |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              | [<br/>"sample",<br/>"product_image",<br/>"banner_2023"<br/>]                                                                                                                   |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default is false.                                                                                             |                                                                                                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |                                                                                                                                                                                |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |                                                                                                                                                                                |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |                                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed.              |                                                                                                                                                                                |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ListResponse](../../models/components/listresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listRawFiles

Retrieves a list of raw assets. Results can be filtered by various criteria like tags, prefix, or specific public IDs.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRawFiles" method="get" path="/v1_1/{cloud_name}/resources/raw" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listRawFiles(undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListRawFiles } from "@cloudinary/asset-management/funcs/assetsListRawFiles.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListRawFiles(cloudinaryAssetMgmt, undefined, undefined, [
    "sample",
    "product_image",
    "banner_2023",
  ]);
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | *components.DeliveryTypeAll*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | The delivery type to filter by. When omitted, returns assets of all delivery types.                                                                                            |                                                                                                                                                                                |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A public_id prefix. When specified, all assets with that prefix are returned.                                                                                                  |                                                                                                                                                                                |
| `publicIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | An array of public IDs to return.                                                                                                                                              | [<br/>"sample",<br/>"product_image",<br/>"banner_2023"<br/>]                                                                                                                   |
| `tags`                                                                                                                                                                         | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the list of tag names assigned to each asset. Default is false.                                                                                             |                                                                                                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |                                                                                                                                                                                |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |                                                                                                                                                                                |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |                                                                                                                                                                                |
| `startAt`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                  | :heavy_minus_sign:                                                                                                                                                             | An ISO-8601 formatted timestamp. When specified, returns resources created since that timestamp. Supported only if neither `prefix` nor `public_ids` were passed.              |                                                                                                                                                                                |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

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

<!-- UsageSnippet language="typescript" operationID="listResourcesByAssetFolder" method="get" path="/v1_1/{cloud_name}/resources/by_asset_folder" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourcesByAssetFolder("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourcesByAssetFolder } from "@cloudinary/asset-management/funcs/assetsListResourcesByAssetFolder.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourcesByAssetFolder(cloudinaryAssetMgmt, "<value>");
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | Resource type filter.                                                                                                                                                          |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |
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

<!-- UsageSnippet language="typescript" operationID="listResourcesByAssetIDs" method="get" path="/v1_1/{cloud_name}/resources/by_asset_ids" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourcesByAssetIDs([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsListResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourcesByAssetIDs(cloudinaryAssetMgmt, []);
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | Resource type filter.                                                                                                                                                          |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |
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

<!-- UsageSnippet language="typescript" operationID="listResourcesByContext" method="get" path="/v1_1/{cloud_name}/resources/{resource_type}/context" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourcesByContext("raw", "<key>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourcesByContext } from "@cloudinary/asset-management/funcs/assetsListResourcesByContext.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourcesByContext(cloudinaryAssetMgmt, "raw", "<key>");
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `key`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | Context key to filter by.                                                                                                                                                      |
| `value`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Context value to filter by.                                                                                                                                                    |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |
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

<!-- UsageSnippet language="typescript" operationID="listResourcesByModerationKindAndStatus" method="get" path="/v1_1/{cloud_name}/resources/{resource_type}/moderations/{moderation_kind}/{moderation_status}" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourcesByModerationKindAndStatus("raw", "aws_rek", "aborted");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourcesByModerationKindAndStatus } from "@cloudinary/asset-management/funcs/assetsListResourcesByModerationKindAndStatus.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourcesByModerationKindAndStatus(cloudinaryAssetMgmt, "raw", "aws_rek", "aborted");
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `moderationKind`                                                                                                                                                               | [components.ModerationKind](../../models/components/moderationkind.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The type of moderation to filter by.                                                                                                                                           |
| `moderationStatus`                                                                                                                                                             | [components.ModerationStatusParameter](../../models/components/moderationstatusparameter.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The moderation status to filter by.                                                                                                                                            |
| `fields`                                                                                                                                                                       | *components.Fields*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                             | Additional fields to include in the response. The fields public_id and asset_id are always included.                                                                           |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |
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

### Example Usage: all_failed_restore

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="all_failed_restore" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: basic_restore

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="basic_restore" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
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
### Example Usage: invalid_asset_id

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="invalid_asset_id" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: missing_parameter

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="missing_parameter" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: mixed_restore_results

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="mixed_restore_results" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: restoreResponseFailedRestoreExample

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="restoreResponseFailedRestoreExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: restoreResponseFullRestoreExample

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="restoreResponseFullRestoreExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: restoreResponsePartialRestoreExample

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="restoreResponsePartialRestoreExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: restore_specific_versions

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="restore_specific_versions" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
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
### Example Usage: restore_with_notification

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="restore_with_notification" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: successful_restore

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="successful_restore" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
### Example Usage: version_count_mismatch

<!-- UsageSnippet language="typescript" operationID="restoreResourcesByAssetIDs" method="post" path="/v1_1/{cloud_name}/resources/restore" example="version_count_mismatch" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.restoreResourcesByAssetIDs({
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsRestoreResourcesByAssetIDs } from "@cloudinary/asset-management/funcs/assetsRestoreResourcesByAssetIDs.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsRestoreResourcesByAssetIDs(cloudinaryAssetMgmt, {
    assetIds: [
      "2262b0b5eb88f1fd7724e29b0e57d730",
      "d23c0526e6feca2c343e40c2fce5231a",
    ],
    versions: [
      "c3fe4be5921eb89acd9af738c892f654",
      "d214063097a43d1d1293db61a397f60f",
    ],
    notificationUrl: "https://example.com/webhook",
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
| `assetIds`                                                                                                                                                                     | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The unique and immutable asset IDs of backed up assets to restore.                                                                                                             | [<br/>"2262b0b5eb88f1fd7724e29b0e57d730",<br/>"d23c0526e6feca2c343e40c2fce5231a"<br/>]                                                                                         |
| `versions`                                                                                                                                                                     | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | If you specify versions, the number of versions in the array must exactly match the number of asset_ids.                                                                       | [<br/>"c3fe4be5921eb89acd9af738c892f654",<br/>"d214063097a43d1d1293db61a397f60f"<br/>]                                                                                         |
| `notificationUrl`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The URL that will receive notification when restore is complete.                                                                                                               | https://example.com/webhook                                                                                                                                                    |
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

<!-- UsageSnippet language="typescript" operationID="deleteResourcesByPublicId" method="delete" path="/v1_1/{cloud_name}/resources/{resource_type}/{type}" example="deleteResourceResponseExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.deleteResourcesByPublicId("raw", "authenticated", {
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDeleteResourcesByPublicId } from "@cloudinary/asset-management/funcs/assetsDeleteResourcesByPublicId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDeleteResourcesByPublicId(cloudinaryAssetMgmt, "raw", "authenticated", {
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `type`                                                                                                                                                                         | [components.DeliveryTypeAllEnum](../../models/components/deliverytypeallenum.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `deleteResourceByPublicIdsRequest`                                                                                                                                             | *components.DeleteResourceByPublicIdsRequestUnion*                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The public IDs and options for the resources to delete.                                                                                                                        |
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

<!-- UsageSnippet language="typescript" operationID="getResourceByPublicId" method="get" path="/v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}" example="getResourceResponseExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.getResourceByPublicId("raw", "list", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsGetResourceByPublicId } from "@cloudinary/asset-management/funcs/assetsGetResourceByPublicId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsGetResourceByPublicId(cloudinaryAssetMgmt, "raw", "list", "<id>");
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |                                                                                                                                                                                |
| `type`                                                                                                                                                                         | [components.DeliveryTypeAllEnum](../../models/components/deliverytypeallenum.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |                                                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset.                                                                                                                                                    | sample                                                                                                                                                                         |
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

## updateResourceByPublicId

Updates one or more attributes of a specified resource (asset) identified by its public ID. Note that you can also update many attributes of an existing asset using the explicit method, which is not rate limited.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateResourceByPublicId" method="post" path="/v1_1/{cloud_name}/resources/{resource_type}/{type}/{public_id}" example="updateResourceResponseExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.updateResourceByPublicId("image", "dailymotion", "<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    ocr: "adv_ocr",
    rawConvert: "google_speech",
    categorization: "google_tagging",
    backgroundRemoval: "cloudinary_ai",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsUpdateResourceByPublicId } from "@cloudinary/asset-management/funcs/assetsUpdateResourceByPublicId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsUpdateResourceByPublicId(cloudinaryAssetMgmt, "image", "dailymotion", "<id>", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    ocr: "adv_ocr",
    rawConvert: "google_speech",
    categorization: "google_tagging",
    backgroundRemoval: "cloudinary_ai",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |                                                                                                                                                                                |
| `type`                                                                                                                                                                         | [components.DeliveryTypeAllEnum](../../models/components/deliverytypeallenum.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |                                                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset.                                                                                                                                                    | sample                                                                                                                                                                         |
| `resourceUpdateRequest`                                                                                                                                                        | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The asset attributes to update.                                                                                                                                                |                                                                                                                                                                                |
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

## getResourceByAssetId

Returns the details of a single resource specified by its asset ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getResourceByAssetId" method="get" path="/v1_1/{cloud_name}/resources/{asset_id}" example="getResourceResponseExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.getResourceByAssetId("f4e6579cf84dd9cf5683b21f5b30c7d9");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsGetResourceByAssetId } from "@cloudinary/asset-management/funcs/assetsGetResourceByAssetId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsGetResourceByAssetId(cloudinaryAssetMgmt, "f4e6579cf84dd9cf5683b21f5b30c7d9");
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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                       | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                               |
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

Updates one or more attributes of a specified resource (asset) by its asset ID. This enables you to update details of an asset by its unique and immutable identifier, regardless of public ID, display name, asset folder, resource type or delivery type. Note that you can also update attributes of an existing asset using the explicit API endpoint.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateResourceByAssetId" method="put" path="/v1_1/{cloud_name}/resources/{asset_id}" example="updateResourceResponseExample" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.updateResourceByAssetId("f4e6579cf84dd9cf5683b21f5b30c7d9", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "animal,dog",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    ocr: "adv_ocr",
    rawConvert: "google_speech",
    categorization: "google_tagging",
    backgroundRemoval: "cloudinary_ai",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsUpdateResourceByAssetId } from "@cloudinary/asset-management/funcs/assetsUpdateResourceByAssetId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsUpdateResourceByAssetId(cloudinaryAssetMgmt, "f4e6579cf84dd9cf5683b21f5b30c7d9", {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "animal,dog",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    ocr: "adv_ocr",
    rawConvert: "google_speech",
    categorization: "google_tagging",
    backgroundRemoval: "cloudinary_ai",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                       | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                               |
| `resourceUpdateRequest`                                                                                                                                                        | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The asset attributes to update.                                                                                                                                                |                                                                                                                                                                                |
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

## listResourceTags

Retrieves a comprehensive list of all tags that exist in your product environment for assets of the specified type.

[Cloudinary Admin API documentation](https://cloudinary.com/documentation/admin_api)


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listResourceTags" method="get" path="/v1_1/{cloud_name}/tags/{resource_type}" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourceTags("raw");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourceTags } from "@cloudinary/asset-management/funcs/assetsListResourceTags.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourceTags(cloudinaryAssetMgmt, "raw");
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `prefix`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Limit the returned tags to those that start with the specified prefix.                                                                                                         |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Cursor for pagination.                                                                                                                                                         |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of results to return (1-500).                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TagsListResponse](../../models/components/tagslistresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteBackupVersions

Deletes specific backed up versions of an asset identified by asset ID.
This operation is irreversible and deleted versions cannot be recovered.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteBackupVersions" method="delete" path="/v1_1/{cloud_name}/resources/backup/{asset_id}" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.deleteBackupVersions("e9b44a374f66ad53a64a74c7398f7", {
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDeleteBackupVersions } from "@cloudinary/asset-management/funcs/assetsDeleteBackupVersions.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDeleteBackupVersions(cloudinaryAssetMgmt, "e9b44a374f66ad53a64a74c7398f7", {
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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                       | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                               |
| `deleteBackupVersionsRequest`                                                                                                                                                  | [components.DeleteBackupVersionsRequest](../../models/components/deletebackupversionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The asset IDs and version IDs to delete.                                                                                                                                       |                                                                                                                                                                                |
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

<!-- UsageSnippet language="typescript" operationID="derivedDestroy" method="delete" path="/v1_1/{cloud_name}/derived_resources" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.derivedDestroy({
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
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsDerivedDestroy } from "@cloudinary/asset-management/funcs/assetsDerivedDestroy.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsDerivedDestroy(cloudinaryAssetMgmt, {
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
| `derivedResourceIds`                                                                                                                                                           | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | Array of derived resource IDs to delete specific derived resources                                                                                                             | [<br/>"1234567890abcdef",<br/>"fedcba0987654321"<br/>]                                                                                                                         |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to invalidate the CDN cache for the deleted resources                                                                                                                  | true                                                                                                                                                                           |
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

## invalidateDerivedByUrls

Deletes and invalidates the cached derived assets that back the specified delivery URLs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="invalidateDerivedByUrls" method="delete" path="/v1_1/{cloud_name}/derived_resources/invalidate_by_urls" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.invalidateDerivedByUrls({
    urls: [
      "https://res.cloudinary.com/demo/image/upload/w_100/sample.jpg",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsInvalidateDerivedByUrls } from "@cloudinary/asset-management/funcs/assetsInvalidateDerivedByUrls.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsInvalidateDerivedByUrls(cloudinaryAssetMgmt, {
    urls: [
      "https://res.cloudinary.com/demo/image/upload/w_100/sample.jpg",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsInvalidateDerivedByUrls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `urls`                                                                                                                                                                         | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The delivery URLs whose cached derived assets should be invalidated.                                                                                                           | [<br/>"https://res.cloudinary.com/demo/image/upload/w_100/sample.jpg"<br/>]                                                                                                    |
| `skipReporting`                                                                                                                                                                | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to skip recording this invalidation against the product environment usage. If false, the invalidation is counted towards usage. Default is false.                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.InvalidateByUrlsResponse](../../models/components/invalidatebyurlsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getResourceByBody

Returns the details of a single asset identified by its public ID, delivery type, and resource type passed in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getResourceByBody" method="post" path="/v1_1/{cloud_name}/resources/get_resource" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.getResourceByBody({
    publicId: "sample",
    resourceType: "image",
    kind: "upload",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsGetResourceByBody } from "@cloudinary/asset-management/funcs/assetsGetResourceByBody.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsGetResourceByBody(cloudinaryAssetMgmt, {
    publicId: "sample",
    resourceType: "image",
    kind: "upload",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsGetResourceByBody failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset to retrieve.                                                                                                                                        | sample                                                                                                                                                                         |
| `resourceType`                                                                                                                                                                 | [components.ResourceGetByBodyRequestResourceType](../../models/components/resourcegetbybodyrequestresourcetype.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The type of the asset (image, video, or raw).                                                                                                                                  | image                                                                                                                                                                          |
| `kind`                                                                                                                                                                         | [components.ResourceGetByBodyRequestKind](../../models/components/resourcegetbybodyrequestkind.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                | upload                                                                                                                                                                         |
| `withElastic`                                                                                                                                                                  | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to source the asset details from the search index. If false, the details are read directly from the canonical store. Default is true.                                  |                                                                                                                                                                                |
| `derived`                                                                                                                                                                      | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the derived assets of this asset in the response. Default is true.                                                                                          |                                                                                                                                                                                |
| `versions`                                                                                                                                                                     | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the backup versions of this asset in the response. Default is false.                                                                                        |                                                                                                                                                                                |
| `additionalProperties`                                                                                                                                                         | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ResourceInternalResponse](../../models/components/resourceinternalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateResourceByBody

Updates the details of an existing asset (such as tags, contextual metadata, structured metadata, and moderation status) identified by its public ID, delivery type, and resource type passed in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateResourceByBody" method="post" path="/v1_1/{cloud_name}/resources/update" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.updateResourceByBody({
    publicId: "sample",
    resourceType: "image",
    kind: "upload",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsUpdateResourceByBody } from "@cloudinary/asset-management/funcs/assetsUpdateResourceByBody.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsUpdateResourceByBody(cloudinaryAssetMgmt, {
    publicId: "sample",
    resourceType: "image",
    kind: "upload",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsUpdateResourceByBody failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset to update.                                                                                                                                          | sample                                                                                                                                                                         |
| `resourceType`                                                                                                                                                                 | [components.ResourceUpdateByBodyRequestResourceType](../../models/components/resourceupdatebybodyrequestresourcetype.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The type of the asset (image, video, or raw).                                                                                                                                  | image                                                                                                                                                                          |
| `kind`                                                                                                                                                                         | [components.ResourceUpdateByBodyRequestKind](../../models/components/resourceupdatebybodyrequestkind.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                | upload                                                                                                                                                                         |
| `tags`                                                                                                                                                                         | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The list of tags to assign to the asset, replacing any existing tags.                                                                                                          |                                                                                                                                                                                |
| `context`                                                                                                                                                                      | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | The key-value pairs of contextual metadata to assign to the asset.                                                                                                             |                                                                                                                                                                                |
| `metadata`                                                                                                                                                                     | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | The structured metadata field values to assign to the asset.                                                                                                                   |                                                                                                                                                                                |
| `assetFolder`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The asset folder to move the asset into.                                                                                                                                       |                                                                                                                                                                                |
| `displayName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The display name to assign to the asset.                                                                                                                                       |                                                                                                                                                                                |
| `moderationStatus`                                                                                                                                                             | [components.ResourceUpdateByBodyRequestModerationStatus](../../models/components/resourceupdatebybodyrequestmoderationstatus.md)                                               | :heavy_minus_sign:                                                                                                                                                             | The moderation status to set on the asset.                                                                                                                                     |                                                                                                                                                                                |
| `adminContext`                                                                                                                                                                 | [components.AdminContextOperation](../../models/components/admincontextoperation.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Internal-only contextual metadata operations applied with add/remove semantics. Each<br/>entry names a context key, the value(s) to apply, the value type, and the operation.<br/> |                                                                                                                                                                                |
| `responseType`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The shape of the asset representation to return (for example, "public").                                                                                                       |                                                                                                                                                                                |
| `skipPermissionCheck`                                                                                                                                                          | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to skip permission enforcement for the update. Internal use only. Default is false.                                                                                    |                                                                                                                                                                                |
| `additionalProperties`                                                                                                                                                         | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ResourceInternalResponse](../../models/components/resourceinternalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByContainerId

Returns the assets contained in the folder identified by the given container ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listResourcesByContainerId" method="get" path="/v1_1/{cloud_name}/resources/by_container_id/{container_id}" -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.assets.listResourcesByContainerId("cd7e9d690a014c68ae8b58f08e090cb03a");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetsListResourcesByContainerId } from "@cloudinary/asset-management/funcs/assetsListResourcesByContainerId.js";

// Use `CloudinaryAssetMgmtCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssetMgmt = new CloudinaryAssetMgmtCore({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await assetsListResourcesByContainerId(cloudinaryAssetMgmt, "cd7e9d690a014c68ae8b58f08e090cb03a");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsListResourcesByContainerId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `containerId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The immutable identifier of the folder container whose assets are listed.                                                                                                      | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                                             |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of results to return. Default is 10.                                                                                                                        |                                                                                                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results.                                                                 |                                                                                                                                                                                |
| `sortBy`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The field by which the assets are sorted. Default is "uploaded_at".                                                                                                            |                                                                                                                                                                                |
| `fields`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A comma-separated list of asset fields to include in each returned asset.                                                                                                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.ResourcesByContainerIdResponse](../../models/components/resourcesbycontaineridresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |