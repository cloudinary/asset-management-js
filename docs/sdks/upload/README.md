# Upload
(*upload*)

## Overview

Uploads files to the active product environment.

### Available Operations

* [upload](#upload) - Uploads media assets (images, videos, raw files) to your Cloudinary product environment
* [uploadChunk](#uploadchunk) - Upload a single chunk of a large file
* [destroyAsset](#destroyasset) - Destroys an asset/resource
* [text](#text) - Create image from text

## upload

Uploads media assets (images, videos, raw files) to your Cloudinary product environment. The file is securely stored 
in the cloud with backup and revision history. Cloudinary automatically analyzes and saves important data about each 
asset, such as format, size, resolution, and prominent colors, which is indexed to enable searching on those attributes.

Supports uploading from:
- Local file paths (SDKs/MCP server only). For MCP server path MUST start with file://
- Remote HTTP/HTTPS URLs
- Base64 Data URIs (max ~60 MB)
- Private storage buckets (S3 or Google Storage)
- FTP addresses

The uploaded asset is immediately available for transformation and delivery upon successful upload.


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
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "" // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadUpload } from "@cloudinary/asset-management/funcs/uploadUpload.js";

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
  const res = await uploadUpload(cloudinaryAssetMgmt, "auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "" // Populate with string from file, for example example.file,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadUpload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                                                                                                                  | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                              | The type of resource to upload:<br/>- "image" for uploading strictly images<br/>- "video" for uploading strictly videos  <br/>- "raw" for uploading non-media files<br/>- "auto" for allowing Cloudinary to automatically detect the type of the uploaded file<br/> |
| `uploadRequest`                                                                                                                                                                                                                                 | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                           |
| `options.fetchOptions`                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                  |
| `options.retries`                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                |

### Response

**Promise\<[operations.UploadResponse](../../models/operations/uploadresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## uploadChunk

Uploads a single chunk of a large file as part of a chunked upload process. This enables efficient upload of 
large files with the ability to resume interrupted uploads. Each request uploads one chunk of the file.
It is required for any files that are larger than 100 MB. This is often relevant for video files, as they 
tend to have larger file sizes. Minimum chunk size is 5 MB.


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
  const result = await cloudinaryAssetMgmt.upload.uploadChunk("auto", "bytes 0-999999/3000000", "2fd4e1c67a2d28fce", {
    headers: "X-Robots-Tag: noindex",
    moderation: "duplicate",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "" // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadUploadChunk } from "@cloudinary/asset-management/funcs/uploadUploadChunk.js";

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
  const res = await uploadUploadChunk(cloudinaryAssetMgmt, "auto", "bytes 0-999999/3000000", "2fd4e1c67a2d28fce", {
    headers: "X-Robots-Tag: noindex",
    moderation: "duplicate",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "" // Populate with string from file, for example example.file,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadUploadChunk failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                                                                                                                  | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                              | The type of resource to upload:<br/>- "image" for uploading strictly images<br/>- "video" for uploading strictly videos  <br/>- "raw" for uploading non-media files<br/>- "auto" for allowing Cloudinary to automatically detect the type of the uploaded file<br/> |                                                                                                                                                                                                                                                 |
| `contentRange`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | The range of bytes being uploaded in the current chunk, in the format "bytes start-end/total". For example, "bytes 0-999999/3000000" indicates the first 1MB chunk of a 3MB file.                                                               | [object Object]                                                                                                                                                                                                                                 |
| `xUniqueUploadId`                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                              | A unique identifier for the upload. Must be the same for all chunks of the same file.                                                                                                                                                           | [object Object]                                                                                                                                                                                                                                 |
| `uploadRequest`                                                                                                                                                                                                                                 | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                           |                                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                  |                                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                |                                                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.UploadChunkResponse](../../models/operations/uploadchunkresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## destroyAsset

Destroys an asset/resource

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
  const result = await cloudinaryAssetMgmt.upload.destroyAsset("raw", "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadDestroyAsset } from "@cloudinary/asset-management/funcs/uploadDestroyAsset.js";

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
  const res = await uploadDestroyAsset(cloudinaryAssetMgmt, "raw", "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadDestroyAsset failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.DestroyAssetResourceType](../../models/operations/destroyassetresourcetype.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The type of asset/resource to destroy                                                                                                                                          |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The public ID of the asset/resource to destroy                                                                                                                                 |
| `invalidate`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to invalidate CDN cached copies of the asset                                                                                                                           |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DestroyAssetResponse](../../models/operations/destroyassetresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## text

Dynamically generates an image from a specified text string.

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
  const result = await cloudinaryAssetMgmt.upload.text("image", {
    text: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadText } from "@cloudinary/asset-management/funcs/uploadText.js";

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
  const res = await uploadText(cloudinaryAssetMgmt, "image", {
    text: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadText failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [operations.TextResourceType](../../models/operations/textresourcetype.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The type of resource to create. Must be "image" for text generation.                                                                                                           |
| `requestBody`                                                                                                                                                                  | [operations.TextRequestBody](../../models/operations/textrequestbody.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TextResponse](../../models/operations/textresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |