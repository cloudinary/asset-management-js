# VideoGenerate

## Overview

Generate a video from an image and poll the generation job.

### Available Operations

* [createVideoGenerateJob](#createvideogeneratejob) - Create a video generation job
* [getVideoGenerateJobStatus](#getvideogeneratejobstatus) - Poll a video generation job

## createVideoGenerateJob

Submits an image and prompt for video generation and returns a job you can poll for the result.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createVideoGenerateJob" method="post" path="/v2/video/{cloud_name}/image_to_video/generate" example="default" -->
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
  const result = await cloudinaryAssetMgmt.videoGenerate.createVideoGenerateJob({
    prompt: "A serene beach at sunset with gentle waves rolling in",
    imageAssetId: "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
    aspectRatio: "16:9",
    resolution: "1080p",
    generateAudio: true,
    folder: "campaigns/spring",
    negativePrompt: [
      "watermark",
      "flickering",
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
import { videoGenerateCreateVideoGenerateJob } from "@cloudinary/asset-management/funcs/videoGenerateCreateVideoGenerateJob.js";

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
  const res = await videoGenerateCreateVideoGenerateJob(cloudinaryAssetMgmt, {
    prompt: "A serene beach at sunset with gentle waves rolling in",
    imageAssetId: "0a1b2c3d4e5f60718293a4b5c6d7e8f9",
    aspectRatio: "16:9",
    resolution: "1080p",
    generateAudio: true,
    folder: "campaigns/spring",
    negativePrompt: [
      "watermark",
      "flickering",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoGenerateCreateVideoGenerateJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prompt`                                                                                                                                                                                         | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | Video description prompt.                                                                                                                                                                        |
| `imageAssetId`                                                                                                                                                                                   | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | Cloudinary asset ID of the input image for image-to-video generation.                                                                                                                            |
| `aspectRatio`                                                                                                                                                                                    | [components.ImageToVideoGeneratePayloadAspectRatio](../../models/components/imagetovideogeneratepayloadaspectratio.md)                                                                           | :heavy_minus_sign:                                                                                                                                                                               | Video aspect ratio. `auto` resolves based on image dimensions (defaults to landscape). `16:9` = landscape, `9:16` = portrait.                                                                    |
| `resolution`                                                                                                                                                                                     | [components.ImageToVideoGeneratePayloadResolution](../../models/components/imagetovideogeneratepayloadresolution.md)                                                                             | :heavy_minus_sign:                                                                                                                                                                               | Video resolution. `1080p` is only supported with a duration of 8 seconds.                                                                                                                        |
| `duration`                                                                                                                                                                                       | [components.Duration](../../models/components/duration.md)                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Video duration in seconds.                                                                                                                                                                       |
| `generateAudio`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | Whether to generate audio. Enabling audio consumes twice as many credits.                                                                                                                        |
| `enhancePrompt`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                               | Whether to let Cloudinary automatically enhance the prompt.                                                                                                                                      |
| `lastFrameImageAssetId`                                                                                                                                                                          | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Cloudinary asset ID of the last frame image.                                                                                                                                                     |
| `referenceImageAssetIds`                                                                                                                                                                         | *string*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Cloudinary asset IDs of reference images.                                                                                                                                                        |
| `folder`                                                                                                                                                                                         | *string*                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                               | Path of the folder to save the generated video to, for example `campaigns/spring`. If the folder doesn't exist, it's created.                                                                    |
| `negativePrompt`                                                                                                                                                                                 | *string*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Elements the video should avoid, for example `watermark` or `flickering`. Items must not be blank. If omitted, a default list of common artifacts is applied. Send an empty array to apply none. |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[components.ImageToVideoGenerateWrappedResponse](../../models/components/imagetovideogeneratewrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 400, 401                    | application/json            |
| errors.ErrorWrappedResponse | 500                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |

## getVideoGenerateJobStatus

Returns the current status of a generation job. When the status is `completed`, the response includes the generated video's asset details and delivery URL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVideoGenerateJobStatus" method="get" path="/v2/video/{cloud_name}/image_to_video/generate/{jobId}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.videoGenerate.getVideoGenerateJobStatus("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { videoGenerateGetVideoGenerateJobStatus } from "@cloudinary/asset-management/funcs/videoGenerateGetVideoGenerateJobStatus.js";

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
  const res = await videoGenerateGetVideoGenerateJobStatus(cloudinaryAssetMgmt, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoGenerateGetVideoGenerateJobStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `jobId`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The video generation job ID returned from the create endpoint.                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ImageToVideoGenerateWrappedResponse](../../models/components/imagetovideogeneratewrappedresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorWrappedResponse | 401, 403, 404               | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |