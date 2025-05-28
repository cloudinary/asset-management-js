# Assets
(*assets*)

## Overview

Enables you to manage all the resources (assets) stored in your product environment.

### Available Operations

* [renameAsset](#renameasset) - Renames an asset
* [downloadAsset](#downloadasset) - Downloads an asset
* [explicitAsset](#explicitasset) - Apply operations on an existing asset
* [generateArchive](#generatearchive) - Generate downloadable archive
* [downloadBackupAsset](#downloadbackupasset) - Download a backup copy of an asset
* [destroyByAssetId](#destroybyassetid) - Delete asset by ID
* [listResourceTypes](#listresourcetypes) - Get resource types
* [listImages](#listimages) - Get image assets
* [listVideos](#listvideos) - Get video assets
* [listRawFiles](#listrawfiles) - Get raw assets
* [listResourcesByAssetFolder](#listresourcesbyassetfolder) - Get resources by asset folder
* [listResourcesByAssetIDs](#listresourcesbyassetids) - Get resources by asset IDs
* [listResourcesByContext](#listresourcesbycontext) - Get resources by context
* [listResourcesByModerationKindAndStatus](#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status
* [restoreResourcesByAssetIDs](#restoreresourcesbyassetids) - Restore assets
* [listResourcesByExternalIDs](#listresourcesbyexternalids) - Get resources by external IDs
* [deleteResourcesByPublicId](#deleteresourcesbypublicid) - Delete resources by public ID
* [getResourceByPublicId](#getresourcebypublicid) - Get resource by public ID
* [updateResourceByPublicId](#updateresourcebypublicid) - Update asset by public ID
* [getResourceByAssetId](#getresourcebyassetid) - Get resource by asset ID
* [updateResourceByAssetId](#updateresourcebyassetid) - Update asset by asset ID
* [listResourceTags](#listresourcetags) - Get tags
* [deleteBackupVersions](#deletebackupversions) - Delete backed up versions
* [derivedDestroy](#deriveddestroy) - Delete derived resources

## renameAsset

Renames an asset

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.renameAsset({
    resourceType: "video",
    requestBody: {
      fromPublicId: "<id>",
      toPublicId: "<id>",
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsRenameAsset(cloudinaryAssets, {
    resourceType: "video",
    requestBody: {
      fromPublicId: "<id>",
      toPublicId: "<id>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RenameAssetRequest](../../models/operations/renameassetrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

Downloads an asset

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.downloadAsset({
    resourceType: "image",
    publicId: "<id>",
    apiKey: "<value>",
    signature: "<value>",
    timestamp: 444233,
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDownloadAsset(cloudinaryAssets, {
    resourceType: "image",
    publicId: "<id>",
    apiKey: "<value>",
    signature: "<value>",
    timestamp: 444233,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadAssetRequest](../../models/operations/downloadassetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.explicitAsset({
    resourceType: "image",
    requestBody: {
      headers: "X-Robots-Tag: noindex",
      moderation: "aws_rek_video",
      publicId: "<id>",
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsExplicitAsset(cloudinaryAssets, {
    resourceType: "image",
    requestBody: {
      headers: "X-Robots-Tag: noindex",
      moderation: "aws_rek_video",
      publicId: "<id>",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ExplicitAssetRequest](../../models/operations/explicitassetrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.generateArchive({
    resourceType: "image",
    requestBody: {
      targetTags: [
        "animal",
        "dog",
      ],
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGenerateArchive(cloudinaryAssets, {
    resourceType: "image",
    requestBody: {
      targetTags: [
        "animal",
        "dog",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GenerateArchiveRequest](../../models/operations/generatearchiverequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.downloadBackupAsset({
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    versionId: "a3978316b0045e5eaf198f4d6885ca35",
    apiKey: "<value>",
    signature: "<value>",
    timestamp: 723931,
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDownloadBackupAsset(cloudinaryAssets, {
    assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
    versionId: "a3978316b0045e5eaf198f4d6885ca35",
    apiKey: "<value>",
    signature: "<value>",
    timestamp: 723931,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DownloadBackupAssetRequest](../../models/operations/downloadbackupassetrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DestroyRequest](../../models/components/destroyrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourceTypes({});

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourceTypes(cloudinaryAssets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourceTypesRequest](../../models/operations/listresourcetypesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listImages({});

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListImages(cloudinaryAssets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListImagesRequest](../../models/operations/listimagesrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listVideos({});

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListVideos(cloudinaryAssets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListVideosRequest](../../models/operations/listvideosrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listRawFiles({});

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListRawFiles(cloudinaryAssets, {});

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListRawFilesRequest](../../models/operations/listrawfilesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByAssetFolder({
    assetFolder: "<value>",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByAssetFolder(cloudinaryAssets, {
    assetFolder: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourcesByAssetFolderRequest](../../models/operations/listresourcesbyassetfolderrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByAssetIDs({
    assetIds: [],
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByAssetIDs(cloudinaryAssets, {
    assetIds: [],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourcesByAssetIDsRequest](../../models/operations/listresourcesbyassetidsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByContext({
    resourceType: "raw",
    key: "<key>",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByContext(cloudinaryAssets, {
    resourceType: "raw",
    key: "<key>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourcesByContextRequest](../../models/operations/listresourcesbycontextrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByModerationKindAndStatus({
    resourceType: "raw",
    moderationKind: "aws_rek",
    moderationStatus: "aborted",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByModerationKindAndStatus(cloudinaryAssets, {
    resourceType: "raw",
    moderationKind: "aws_rek",
    moderationStatus: "aborted",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourcesByModerationKindAndStatusRequest](../../models/operations/listresourcesbymoderationkindandstatusrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RestoreResourcesByAssetIDsRequest](../../models/operations/restoreresourcesbyassetidsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[{ [k: string]: components.RestoreResponseUnion }](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listResourcesByExternalIDs

Retrieves details for specific resources using their external IDs (or asset IDs).

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourcesByExternalIDs({
    externalIds: [],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { assetsListResourcesByExternalIDs } from "@cloudinary/assets/funcs/assetsListResourcesByExternalIDs.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourcesByExternalIDs(cloudinaryAssets, {
    externalIds: [],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourcesByExternalIDsRequest](../../models/operations/listresourcesbyexternalidsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deleteResourcesByPublicId

Deletes assets uploaded to your product environment, identified by their public IDs.

### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.deleteResourcesByPublicId({
    resourceType: "raw",
    type: "authenticated",
    deleteResourceByPublicIdsRequest: {
      all: false,
      resourceType: "image",
      keepOriginal: false,
      invalidate: false,
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDeleteResourcesByPublicId(cloudinaryAssets, {
    resourceType: "raw",
    type: "authenticated",
    deleteResourceByPublicIdsRequest: {
      all: false,
      resourceType: "image",
      keepOriginal: false,
      invalidate: false,
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteResourcesByPublicIdRequest](../../models/operations/deleteresourcesbypublicidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.getResourceByPublicId({
    resourceType: "raw",
    type: "list",
    publicId: "<id>",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGetResourceByPublicId(cloudinaryAssets, {
    resourceType: "raw",
    type: "list",
    publicId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResourceByPublicIdRequest](../../models/operations/getresourcebypublicidrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.updateResourceByPublicId({
    resourceType: "image",
    type: "dailymotion",
    publicId: "<id>",
    resourceUpdateRequest: {
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
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsUpdateResourceByPublicId(cloudinaryAssets, {
    resourceType: "image",
    type: "dailymotion",
    publicId: "<id>",
    resourceUpdateRequest: {
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
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateResourceByPublicIdRequest](../../models/operations/updateresourcebypublicidrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.getResourceByAssetId({
    assetId: "e9b44a374f66ad53a64a74c7398f7",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsGetResourceByAssetId(cloudinaryAssets, {
    assetId: "e9b44a374f66ad53a64a74c7398f7",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetResourceByAssetIdRequest](../../models/operations/getresourcebyassetidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## updateResourceByAssetId

Updates one or more attributes of a specified resource (asset) by its asset ID. This enables you to update details of an asset by its unique and immutable identifier, regardless of public ID, display name, asset folder, resource type or deliver type. Note that you can also update many attributes of an existing asset using the explicit method, which is not rate-limited.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.updateResourceByAssetId({
    assetId: "<id>",
    resourceUpdateRequest: {
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
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsUpdateResourceByAssetId(cloudinaryAssets, {
    assetId: "<id>",
    resourceUpdateRequest: {
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
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateResourceByAssetIdRequest](../../models/operations/updateresourcebyassetidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.listResourceTags({
    resourceType: "raw",
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsListResourceTags(cloudinaryAssets, {
    resourceType: "raw",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListResourceTagsRequest](../../models/operations/listresourcetagsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.assets.deleteBackupVersions({
    assetId: "e9b44a374f66ad53a64a74c7398f7",
    requestBody: {
      versionIds: [
        "5552aa57e67445552a3cdc1110a0115",
        "383e22a57167445552a3cdc16f0a0c85",
      ],
    },
  });

  // Handle the result
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
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await assetsDeleteBackupVersions(cloudinaryAssets, {
    assetId: "e9b44a374f66ad53a64a74c7398f7",
    requestBody: {
      versionIds: [
        "5552aa57e67445552a3cdc1110a0115",
        "383e22a57167445552a3cdc16f0a0c85",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBackupVersionsRequest](../../models/operations/deletebackupversionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

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

  // Handle the result
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

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DerivedDestroyRequest](../../models/components/deriveddestroyrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DerivedDestroyResponse](../../models/components/deriveddestroyresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |