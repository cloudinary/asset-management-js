# AssetRelations
(*assetRelations*)

## Overview

Enables you to manage relationships between assets.

### Available Operations

* [createAssetRelationsByAssetId](#createassetrelationsbyassetid) - Add related assets by asset ID
* [deleteAssetRelationsByAssetId](#deleteassetrelationsbyassetid) - Delete asset relations by asset ID
* [createAssetRelationsByPublicId](#createassetrelationsbypublicid) - Create asset relations by public ID
* [deleteAssetRelationsByPublicId](#deleteassetrelationsbypublicid) - Delete asset relations by public ID

## createAssetRelationsByAssetId

Relates an asset to other assets by their asset IDs, an immutable identifier, regardless of public ID, display name, asset folder, resource type or deliver type. This is a bidirectional process, meaning that the asset will also be added as a related_asset to all the other assets specified. The relation is also a one to many relationship, where the asset is related to all the assets specified, but those assets aren't also related to each other.

### Example Usage

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
  const result = await cloudinaryAssetMgmt.assetRelations.createAssetRelationsByAssetId("<id>", {
    assetsToRelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
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
import { assetRelationsCreateAssetRelationsByAssetId } from "@cloudinary/asset-management/funcs/assetRelationsCreateAssetRelationsByAssetId.js";

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
  const res = await assetRelationsCreateAssetRelationsByAssetId(cloudinaryAssetMgmt, "<id>", {
    assetsToRelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetRelationsCreateAssetRelationsByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the asset to update.                                                                                                                                           |
| `requestBody`                                                                                                                                                                  | [operations.CreateAssetRelationsByAssetIdRequestBody](../../models/operations/createassetrelationsbyassetidrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AssetRelationsResponse](../../models/components/assetrelationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteAssetRelationsByAssetId

Unrelates the asset from other assets, specified by their asset IDs, an immutable identifier, regardless of public ID, display name, asset folder, resource type or deliver type. This is a bidirectional process, meaning that the asset will also be removed as a related_asset from all the other assets specified.

### Example Usage

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
  const result = await cloudinaryAssetMgmt.assetRelations.deleteAssetRelationsByAssetId("<id>", {
    assetsToUnrelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
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
import { assetRelationsDeleteAssetRelationsByAssetId } from "@cloudinary/asset-management/funcs/assetRelationsDeleteAssetRelationsByAssetId.js";

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
  const res = await assetRelationsDeleteAssetRelationsByAssetId(cloudinaryAssetMgmt, "<id>", {
    assetsToUnrelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetRelationsDeleteAssetRelationsByAssetId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset ID of the asset to update.                                                                                                                                           |
| `requestBody`                                                                                                                                                                  | [operations.DeleteAssetRelationsByAssetIdRequestBody](../../models/operations/deleteassetrelationsbyassetidrequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AssetRelationsDeleteResponse](../../models/components/assetrelationsdeleteresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createAssetRelationsByPublicId

Relates an asset to other assets by public IDs. This allows you to indicate that the asset is logically related to other assets in some way (e.g., similar content, or a peripheral asset like video/transcript, etc). This is a bidirectional process, meaning that the asset is also added as a related_asset to all the other assets specified. The relation is also a one to many relationship, where the asset is related to all the assets specified, but those assets aren't also related to each other.

### Example Usage

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
  const result = await cloudinaryAssetMgmt.assetRelations.createAssetRelationsByPublicId("raw", "upload", "<id>", {
    assetsToRelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
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
import { assetRelationsCreateAssetRelationsByPublicId } from "@cloudinary/asset-management/funcs/assetRelationsCreateAssetRelationsByPublicId.js";

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
  const res = await assetRelationsCreateAssetRelationsByPublicId(cloudinaryAssetMgmt, "raw", "upload", "<id>", {
    assetsToRelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetRelationsCreateAssetRelationsByPublicId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.CreateAssetRelationsByPublicIdType](../../models/operations/createassetrelationsbypublicidtype.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset.                                                                                                                                                    |
| `requestBody`                                                                                                                                                                  | [operations.CreateAssetRelationsByPublicIdRequestBody](../../models/operations/createassetrelationsbypublicidrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AssetRelationsResponse](../../models/components/assetrelationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteAssetRelationsByPublicId

Unrelates the asset from other assets, specified by public IDs. This is a bidirectional process, meaning that the asset will also be removed as a related_asset from all the other assets specified.

### Example Usage

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
  const result = await cloudinaryAssetMgmt.assetRelations.deleteAssetRelationsByPublicId("raw", "upload", "<id>", {
    assetsToUnrelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
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
import { assetRelationsDeleteAssetRelationsByPublicId } from "@cloudinary/asset-management/funcs/assetRelationsDeleteAssetRelationsByPublicId.js";

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
  const res = await assetRelationsDeleteAssetRelationsByPublicId(cloudinaryAssetMgmt, "raw", "upload", "<id>", {
    assetsToUnrelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetRelationsDeleteAssetRelationsByPublicId failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The type the of asset.                                                                                                                                                         |
| `type`                                                                                                                                                                         | [operations.DeleteAssetRelationsByPublicIdType](../../models/operations/deleteassetrelationsbypublicidtype.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The delivery type of the asset.                                                                                                                                                |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset.                                                                                                                                                    |
| `requestBody`                                                                                                                                                                  | [operations.DeleteAssetRelationsByPublicIdRequestBody](../../models/operations/deleteassetrelationsbypublicidrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AssetRelationsDeleteResponse](../../models/components/assetrelationsdeleteresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |