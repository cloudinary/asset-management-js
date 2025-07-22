# Moderations
(*moderations*)

## Overview

### Available Operations

* [listResourcesByModerationKindAndStatus](#listresourcesbymoderationkindandstatus) - Get resources by moderation kind and status

## listResourcesByModerationKindAndStatus

Retrieves resources matching specific moderation kind and status.

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
  cloudName: "<value>",
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource.                                                                                                                                                          |
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