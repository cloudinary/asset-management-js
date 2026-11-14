# ImageToVideoPrompts

## Overview

Manage reusable image-to-video prompts.

### Available Operations

* [getImageToVideoPrompts](#getimagetovideoprompts) - Get a list of image to video prompts
* [createImageToVideoPrompt](#createimagetovideoprompt) - Create an image to video prompt
* [getImageToVideoPrompt](#getimagetovideoprompt) - Get an image to video prompt
* [updateImageToVideoPrompt](#updateimagetovideoprompt) - Update an image to video prompt
* [deleteImageToVideoPrompt](#deleteimagetovideoprompt) - Delete an image to video prompt

## getImageToVideoPrompts

Returns all saved image-to-video prompts for your product environment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getImageToVideoPrompts" method="get" path="/v2/video/{cloud_name}/image_to_video/prompts" example="default" -->
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
  const result = await cloudinaryAssetMgmt.imageToVideoPrompts.getImageToVideoPrompts({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { imageToVideoPromptsGetImageToVideoPrompts } from "@cloudinary/asset-management/funcs/imageToVideoPromptsGetImageToVideoPrompts.js";

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
  const res = await imageToVideoPromptsGetImageToVideoPrompts(cloudinaryAssetMgmt, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imageToVideoPromptsGetImageToVideoPrompts failed:", res.error);
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

**Promise\<[components.ImageToVideoPromptsWrappedResponse](../../models/components/imagetovideopromptswrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401                    | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## createImageToVideoPrompt

Saves a reusable prompt with a display name so you can apply it to future generations.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createImageToVideoPrompt" method="post" path="/v2/video/{cloud_name}/image_to_video/prompts" example="default" -->
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
  const result = await cloudinaryAssetMgmt.imageToVideoPrompts.createImageToVideoPrompt({
    displayName: "Beach sunset",
    prompt: "A serene beach at sunset with gentle waves rolling in",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { imageToVideoPromptsCreateImageToVideoPrompt } from "@cloudinary/asset-management/funcs/imageToVideoPromptsCreateImageToVideoPrompt.js";

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
  const res = await imageToVideoPromptsCreateImageToVideoPrompt(cloudinaryAssetMgmt, {
    displayName: "Beach sunset",
    prompt: "A serene beach at sunset with gentle waves rolling in",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imageToVideoPromptsCreateImageToVideoPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A human-readable name for the prompt.                                                                                                                                          |
| `prompt`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The prompt text describing the motion or scene to generate.                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageToVideoPromptWrappedResponse](../../models/components/imagetovideopromptwrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401                    | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## getImageToVideoPrompt

Returns a single saved prompt by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getImageToVideoPrompt" method="get" path="/v2/video/{cloud_name}/image_to_video/prompts/{promptId}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.imageToVideoPrompts.getImageToVideoPrompt("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { imageToVideoPromptsGetImageToVideoPrompt } from "@cloudinary/asset-management/funcs/imageToVideoPromptsGetImageToVideoPrompt.js";

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
  const res = await imageToVideoPromptsGetImageToVideoPrompt(cloudinaryAssetMgmt, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imageToVideoPromptsGetImageToVideoPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `promptId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the image-to-video prompt.                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageToVideoPromptWrappedResponse](../../models/components/imagetovideopromptwrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401, 404               | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## updateImageToVideoPrompt

Updates the display name and/or prompt text of a saved prompt.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateImageToVideoPrompt" method="patch" path="/v2/video/{cloud_name}/image_to_video/prompts/{promptId}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.imageToVideoPrompts.updateImageToVideoPrompt("<id>", {
    displayName: "Beach sunset (golden hour)",
    prompt: "A serene beach during golden hour with gentle waves",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { imageToVideoPromptsUpdateImageToVideoPrompt } from "@cloudinary/asset-management/funcs/imageToVideoPromptsUpdateImageToVideoPrompt.js";

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
  const res = await imageToVideoPromptsUpdateImageToVideoPrompt(cloudinaryAssetMgmt, "<id>", {
    displayName: "Beach sunset (golden hour)",
    prompt: "A serene beach during golden hour with gentle waves",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imageToVideoPromptsUpdateImageToVideoPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `promptId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the image-to-video prompt.                                                                                                                                           |
| `imageToVideoPromptUpdatePayload`                                                                                                                                              | [components.ImageToVideoPromptUpdatePayload](../../models/components/imagetovideopromptupdatepayload.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | A JSON object with the fields to update (display name and/or prompt text).                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageToVideoPromptWrappedResponse](../../models/components/imagetovideopromptwrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401, 404               | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## deleteImageToVideoPrompt

Permanently deletes a saved prompt by its ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteImageToVideoPrompt" method="delete" path="/v2/video/{cloud_name}/image_to_video/prompts/{promptId}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.imageToVideoPrompts.deleteImageToVideoPrompt("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { imageToVideoPromptsDeleteImageToVideoPrompt } from "@cloudinary/asset-management/funcs/imageToVideoPromptsDeleteImageToVideoPrompt.js";

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
  const res = await imageToVideoPromptsDeleteImageToVideoPrompt(cloudinaryAssetMgmt, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imageToVideoPromptsDeleteImageToVideoPrompt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `promptId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the image-to-video prompt.                                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MessageWrappedResponse](../../models/components/messagewrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401, 404               | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |