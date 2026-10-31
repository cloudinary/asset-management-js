# Moderations

## Overview

### Available Operations

* [listResourcesByModerationKindAndStatus](#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status

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
  const result = await cloudinaryAssetMgmt.moderations.listResourcesByModerationKindAndStatus("raw", "aws_rek", "aborted");

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