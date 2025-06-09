# Explode
(*explode*)

## Overview

Generates derived images from a multi-frame/page file.

### Available Operations

* [explodeResource](#exploderesource) - Create derived images from multi-page file

## explodeResource

Generates derived images for each of the individual pages/frames in a multi-page/frame file (such as a PDF or animated image).

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
  const result = await cloudinaryAssets.explode.explodeResource("image", {
    publicId: "<id>",
    transformation: "<value>",
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
import { explodeExplodeResource } from "@cloudinary/assets/funcs/explodeExplodeResource.js";

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
  const res = await explodeExplodeResource(cloudinaryAssets, "image", {
    publicId: "<id>",
    transformation: "<value>",
    signature: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("explodeExplodeResource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.ExplodeResourceResourceType](../../models/operations/exploderesourceresourcetype.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The type of resource to explode. only "image"                                                                                                                                  |
| `requestBody`                                                                                                                                                                  | [operations.ExplodeResourceRequestBody](../../models/operations/exploderesourcerequestbody.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExplodeResourceResponse](../../models/operations/exploderesourceresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |