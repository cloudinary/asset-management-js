# Generation

## Overview

Generate images from text prompts using AI models.

### Available Operations

* [generateImage](#generateimage) - Generate an image
* [generateImageFromImages](#generateimagefromimages) - Generate an image from reference images

## generateImage

Generate an image from a text prompt using AI models.

The model is selected via the optional `model` object:
1. If `model.id` is provided, use that exact model.
2. Else if `model.family` (+ optional `model.tier`) is provided, resolve via the model registry; a missing tier defaults to `standard`.
3. If `model` is omitted, use the global default (nano-banana / premium, i.e. `nano-banana-2`).


### Example Usage: AsyncExample

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="AsyncExample" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A futuristic city skyline at night",
    model: {
      family: "gpt-image",
      tier: "premium",
    },
    async: true,
    notificationUrl: "https://path.to/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A futuristic city skyline at night",
    model: {
      family: "gpt-image",
      tier: "premium",
    },
    async: true,
    notificationUrl: "https://path.to/webhook",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: BasicExample

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="BasicExample" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A man with a hat",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A man with a hat",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: DeclarativeSizeExample

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="DeclarativeSizeExample" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      aspectRatio: "16:9",
      resolution: "2K",
    },
    target: {
      targetType: "managed_asset",
      publicId: "my-public-id",
      uploadPreset: "some-preset",
    },
    seed: 42,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      aspectRatio: "16:9",
      resolution: "2K",
    },
    target: {
      targetType: "managed_asset",
      publicId: "my-public-id",
      uploadPreset: "some-preset",
    },
    seed: 42,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: DimensionsSizeExample

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="DimensionsSizeExample" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      id: "flux-2-pro",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    target: {
      targetType: "temporary",
    },
    seed: 42,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      id: "flux-2-pro",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    target: {
      targetType: "temporary",
    },
    seed: 42,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: RateLimited

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="RateLimited" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: Success

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="Success" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```
### Example Usage: SuccessManagedAsset

<!-- UsageSnippet language="typescript" operationID="generate_image" method="post" path="/v2/generate/{cloud_name}/text_to_image" example="SuccessManagedAsset" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImage({
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImage } from "@cloudinary/asset-management/funcs/generationGenerateImage.js";

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
  const res = await generationGenerateImage(cloudinaryAssetMgmt, {
    prompt: "A photorealistic sunset over a mountain lake, 8K detail",
    model: {
      family: "flux",
      tier: "premium",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prompt`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The text description of the image to generate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | A photorealistic sunset over a mountain lake, 8K detail                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `model`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *components.ModelSelection*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Selects the model, in one of two mutually exclusive forms (omit to use<br/>the global default):<br/>  * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time<br/>    selector.<br/>  * `ModelById`: an explicit `id`, pinning one exact model.<br/>                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `imageSize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *components.ImageSize*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Desired output size, given in **one** of two mutually exclusive forms:<br/><br/>  * `DimensionsImageSize`: `width` and `height` in pixels, for precise<br/>    control.<br/>  * `DeclarativeImageSize`: `aspect_ratio` (and an optional `resolution`<br/>    tier), resolved server-side to the closest size the chosen model<br/>    supports. This is the portable form: most providers natively accept<br/>    an aspect ratio plus a resolution tier rather than raw pixels.<br/><br/>Omit `image_size` entirely to use the model's default size.<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `format`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [components.ImageFormat](../../models/components/imageformat.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Desired output image format. Optional; defaults to `png` when omitted.<br/>Mapped to the closest format the chosen model supports — `webp` falls<br/>back to `png` on models that don't support it (e.g. FLUX.2 Pro), and the<br/>request is ignored entirely by models that don't expose a format option<br/>(e.g. Recraft).<br/>                                                                                                                                                                                 | png                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `target`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *components.Target*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Where to store the generated output, determined by `target_type`.<br/>Optional; defaults to a `managed_asset` target when omitted.<br/>                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `seed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Seed for reproducible generation. Supported by most models. Silently<br/>ignored by models that don't support it.<br/>                                                                                                                                                                                                                                                                                                                                                                                             | 42                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `async`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Whether to perform the generation asynchronously. When true, the API<br/>returns immediately with a 202 and completes in the background. Once<br/>complete, a webhook notification is sent to the specified URL and/or to<br/>the URLs defined in the product environment's settings.<br/>                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `notificationUrl`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The webhook URL to notify when the generation is complete. Only relevant when `async` is set to true.                                                                                                                                                                                                                                                                                                                                                                                                              | https://path.to/webhook                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.GenerateImageResponse](../../models/operations/generateimageresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 422                   | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500, 502                        | application/json                |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## generateImageFromImages

Generate an image guided by one or more **reference images** — restyle,
on-brand variants, character consistency, virtual try-on, edit/extend —
steered by `prompt`.

Only edit-capable models are selectable here. The model is selected via
the optional `model` object, exactly like `text_to_image`, but IDs are
restricted to edit models:
1. If `model.id` is provided, use that exact edit model.
2. Else if `model.family` (+ optional `model.tier`) is provided, resolve







   to that family's edit model (e.g. `nano-banana` / `premium` →
   `nano-banana-2-edit`).
3. If `model` is omitted, use the default edit model (`nano-banana-2-edit`).

Each reference image is either a stored managed asset (by `asset_id`,
read-permission checked) or an external HTTPS `url`.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="generate_image_from_images" method="post" path="/v2/generate/{cloud_name}/image_to_image" example="RateLimited" -->
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
  const result = await cloudinaryAssetMgmt.generation.generateImageFromImages({
    prompt: "Place the product from [1] on a marble kitchen counter, soft morning light",
    referenceImages: [
      {
        sourceType: "managed_asset",
        assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
      },
    ],
    model: {
      id: "flux-2-pro",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { generationGenerateImageFromImages } from "@cloudinary/asset-management/funcs/generationGenerateImageFromImages.js";

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
  const res = await generationGenerateImageFromImages(cloudinaryAssetMgmt, {
    prompt: "Place the product from [1] on a marble kitchen counter, soft morning light",
    referenceImages: [
      {
        sourceType: "managed_asset",
        assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
      },
    ],
    model: {
      id: "flux-2-pro",
    },
    imageSize: {
      width: 1280,
      height: 720,
    },
    format: "png",
    target: {
      targetType: "managed_asset",
    },
    seed: 42,
    notificationUrl: "https://path.to/webhook",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("generationGenerateImageFromImages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `prompt`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The text instruction describing the desired edit / output.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Place the product from [1] on a marble kitchen counter, soft morning light                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `referenceImages`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *components.ReferenceImage*[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Reference images that steer the generation, in order (1-indexed; the<br/>prompt may address them positionally as `[1]`, `[2]`, …). Each entry<br/>is either a managed asset (by `asset_id`) or an external `url`. The<br/>platform accepts up to 4; a specific model may accept fewer (e.g.<br/>Recraft accepts 1) — exceeding the selected model's capacity returns<br/>400.<br/>                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `model`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *components.ModelSelection*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Selects the model, in one of two mutually exclusive forms (omit to use<br/>the global default):<br/>  * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time<br/>    selector.<br/>  * `ModelById`: an explicit `id`, pinning one exact model.<br/>                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `imageSize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *components.ImageSize*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Desired output size, given in **one** of two mutually exclusive forms:<br/><br/>  * `DimensionsImageSize`: `width` and `height` in pixels, for precise<br/>    control.<br/>  * `DeclarativeImageSize`: `aspect_ratio` (and an optional `resolution`<br/>    tier), resolved server-side to the closest size the chosen model<br/>    supports. This is the portable form: most providers natively accept<br/>    an aspect ratio plus a resolution tier rather than raw pixels.<br/><br/>Omit `image_size` entirely to use the model's default size.<br/> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `format`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | [components.ImageFormat](../../models/components/imageformat.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Desired output image format. Optional; defaults to `png` when omitted.<br/>Mapped to the closest format the chosen model supports — `webp` falls<br/>back to `png` on models that don't support it (e.g. FLUX.2 Pro), and the<br/>request is ignored entirely by models that don't expose a format option<br/>(e.g. Recraft).<br/>                                                                                                                                                                                 | png                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `target`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *components.Target*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Where to store the generated output, determined by `target_type`.<br/>Optional; defaults to a `managed_asset` target when omitted.<br/>                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `seed`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Seed for reproducible generation. Supported by most models. Silently<br/>ignored by models that don't support it.<br/>                                                                                                                                                                                                                                                                                                                                                                                             | 42                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `async`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *boolean*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Whether to perform the generation asynchronously. When true, the API<br/>returns immediately with a 202 and completes in the background. Once<br/>complete, a webhook notification is sent to the specified URL and/or to<br/>the URLs defined in the product environment's settings.<br/>                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `notificationUrl`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The webhook URL to notify when the generation is complete. Only relevant when `async` is set to true.                                                                                                                                                                                                                                                                                                                                                                                                              | https://path.to/webhook                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.GenerateImageFromImagesResponse](../../models/operations/generateimagefromimagesresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 403, 404, 422         | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500, 502                        | application/json                |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |