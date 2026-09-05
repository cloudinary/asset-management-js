# AssetMetadata

## Overview

Enables you to manage the tags, contextual metadata, and structured metadata values stored on specific assets.

### Available Operations

* [updateAssetsTags](#updateassetstags) - Adds, removes, or replaces tags on multiple assets
* [updateAssetsContext](#updateassetscontext) - Adds or clears contextual metadata on multiple assets
* [updateAssetsMetadata](#updateassetsmetadata) - Sets structured metadata values on multiple assets

## updateAssetsTags

Applies a tag command to the given assets, addressing them by public ID.

The number of tags multiplied by the number of public IDs must not exceed 10,000.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAssetsTags" method="post" path="/v1_1/{cloud_name}/{resource_type}/tags" -->
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
  const result = await cloudinaryAssetMgmt.assetMetadata.updateAssetsTags("image", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "add",
    tags: [
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
import { assetMetadataUpdateAssetsTags } from "@cloudinary/asset-management/funcs/assetMetadataUpdateAssetsTags.js";

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
  const res = await assetMetadataUpdateAssetsTags(cloudinaryAssetMgmt, "image", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "add",
    tags: [
      "animal",
      "dog",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetMetadataUpdateAssetsTags failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `tagsUpdateRequest`                                                                                                                                                            | [components.TagsUpdateRequest](../../models/components/tagsupdaterequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The tag command, the tags to apply, and the assets to apply them to.                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PublicIdsResponse](../../models/components/publicidsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateAssetsContext

Applies a contextual-metadata command to the given assets, addressing them by public ID.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAssetsContext" method="post" path="/v1_1/{cloud_name}/{resource_type}/context" -->
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
  const result = await cloudinaryAssetMgmt.assetMetadata.updateAssetsContext("raw", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "add",
    context: "alt=My image|caption=Nice photo",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetMetadataUpdateAssetsContext } from "@cloudinary/asset-management/funcs/assetMetadataUpdateAssetsContext.js";

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
  const res = await assetMetadataUpdateAssetsContext(cloudinaryAssetMgmt, "raw", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "add",
    context: "alt=My image|caption=Nice photo",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetMetadataUpdateAssetsContext failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `contextUpdateRequest`                                                                                                                                                         | [components.ContextUpdateRequest](../../models/components/contextupdaterequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The context command, the metadata to apply, and the assets to apply it to.                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PublicIdsResponse](../../models/components/publicidsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateAssetsMetadata

Assigns structured metadata field values to the given assets, addressing them by public ID.

Values are merged into each asset's existing structured metadata: fields not mentioned
keep their current values, and an empty value clears the field. Every referenced field
must already exist in the product environment. Conditional metadata rules are evaluated
as part of the update.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAssetsMetadata" method="post" path="/v1_1/{cloud_name}/{resource_type}/metadata" -->
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
  const result = await cloudinaryAssetMgmt.assetMetadata.updateAssetsMetadata("image", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    metadata: {
      "in_stock_id": 50,
      "color_id": [
        "green",
        "red",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { assetMetadataUpdateAssetsMetadata } from "@cloudinary/asset-management/funcs/assetMetadataUpdateAssetsMetadata.js";

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
  const res = await assetMetadataUpdateAssetsMetadata(cloudinaryAssetMgmt, "image", {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    metadata: {
      "in_stock_id": 50,
      "color_id": [
        "green",
        "red",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetMetadataUpdateAssetsMetadata failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `metadataUpdateRequest`                                                                                                                                                        | [components.MetadataUpdateRequest](../../models/components/metadataupdaterequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The structured metadata values to assign and the assets to assign them to.                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PublicIdsResponse](../../models/components/publicidsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |