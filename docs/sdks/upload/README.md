# Upload

## Overview

Uploads files to the active product environment.

### Available Operations

* [upload](#upload) - Uploads media assets (images, videos, raw files) to your Cloudinary product environment
* [uploadNoResourceType](#uploadnoresourcetype) - Upload with automatic file type detection
* [uploadChunk](#uploadchunk) - Upload a single chunk of a large file
* [destroyAsset](#destroyasset) - Destroys an asset/resource
* [text](#text) - Create image from text
* [concat](#concat) - Concatenate ordered video segments into a single MP4 asset
* [evalUploadParams](#evaluploadparams) - Evaluate a dynamic upload-parameter expression

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

Transform media files using transformation syntax in delivery URLs, which creates derived files accessible immediately without re-uploading the original.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="upload" method="post" path="/v1_1/{cloud_name}/{resource_type}/upload" -->
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
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
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
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await uploadUpload(cloudinaryAssetMgmt, "auto", {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
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

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                 | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, raw, or auto).                                                                                                                             |
| `uploadRequest`                                                                                                                                                                | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The file to upload and associated parameters.                                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadResponse](../../models/operations/uploadresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## uploadNoResourceType

Uploads a file to Cloudinary. The file type is automatically detected based on its content, so you don't need to specify the type manually.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadNoResourceType" method="post" path="/v1_1/{cloud_name}/upload" -->
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
  const result = await cloudinaryAssetMgmt.upload.uploadNoResourceType({
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "aws_rek_video",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    file: "[object Object]",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadUploadNoResourceType } from "@cloudinary/asset-management/funcs/uploadUploadNoResourceType.js";

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
  const res = await uploadUploadNoResourceType(cloudinaryAssetMgmt, {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "aws_rek_video",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    file: "[object Object]",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadUploadNoResourceType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadNoResourceTypeResponse](../../models/operations/uploadnoresourcetyperesponse.md)\>**

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

The `file` field accepts either the chunk bytes (multipart) or an HTTP/HTTPS URL. When a URL is supplied,
Cloudinary downloads it and validates the response `Content-Length` against the chunk-size contract
(exact match in the uniform-size flow; within 5 MB floor and 5 GiB cap in explicit-order mode) before
storing any bytes. A mismatch aborts with 400 and persists no state. The remote server must return a
`Content-Length` header; chunked transfer-encoded responses are rejected.

**Explicit-order totals** (`X-Upload-Part-Number`): `X-Upload-Total-Parts` may be omitted on non-terminal
chunks until the session total *N* is established by any earlier chunk that sent the header. After *N* is
known, the chunk for part index *N* must include `X-Upload-Total-Parts: N`. Whenever the header appears,
its value must be the same integer *N* for that `X-Unique-Upload-Id` (no conflicting totals).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadChunk" method="post" path="/v1_1/{cloud_name}/{resource_type}/upload_chunked" -->
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
  const result = await cloudinaryAssetMgmt.upload.uploadChunk("auto", "2fd4e1c67a2d28fce", {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "duplicate",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    file: "" // Populate with string from file, for example example.file,
  }, "bytes 0-999999/3000000", 2, 3);

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
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await uploadUploadChunk(cloudinaryAssetMgmt, "auto", "2fd4e1c67a2d28fce", {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "duplicate",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    file: "" // Populate with string from file, for example example.file,
  }, "bytes 0-999999/3000000", 2, 3);
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

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | The type of resource (image, video, raw, or auto).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `xUniqueUploadId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | A unique identifier for the upload. Must be the same for all chunks of the same file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 2fd4e1c67a2d28fce                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `uploadRequest`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | The file to upload and associated parameters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `contentRange`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | The range of bytes being uploaded in the current chunk, in the format "bytes start-end/total".<br/>For example, "bytes 0-999999/3000000" indicates the first 1MB chunk of a 3MB file. Required for the<br/>default uniform-size chunked upload flow. In explicit-order mode (`X-Upload-Part-Number`), this<br/>header remains optional; clients do not have to send `Content-Range`, `X-Upload-Part-Number`, and<br/>`X-Upload-Total-Parts` together on every request—`X-Upload-Total-Parts` may be omitted on some chunks<br/>subject to the rules documented on that header.<br/>                                                                                                                          | bytes 0-999999/3000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `xUploadPartNumber`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | The 1-based part number for this chunk when uploading parts of uneven size with explicit<br/>client-supplied order. Requires `X-Unique-Upload-Id`. When present, activates explicit-order mode<br/>and `Content-Range` is optional. Parts must use contiguous indices `1`…`N`, where `N` is the session<br/>total. If `X-Upload-Total-Parts` is omitted on a chunk, the server still enforces `X-Upload-Part-Number ≤ N`<br/>once `N` has been learned from any prior chunk for the same upload that supplied `X-Upload-Total-Parts`.<br/>                                                                                                                                                                   | 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `xUploadTotalParts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Declared session total `N` (optional on chunks where omission is allowed). When present on a chunk,<br/>it must satisfy either `X-Upload-Part-Number < X-Upload-Total-Parts` (non-terminal) or<br/>`X-Upload-Part-Number == X-Upload-Total-Parts` (terminal). The same integer `N` must appear whenever<br/>this header is sent for a given `X-Unique-Upload-Id` (no conflicting declared totals). Chunks may omit<br/>the header entirely until `N` is established; after `N` is known, non-terminal indices may still omit<br/>it. Once `N` is known for the session, the request for part index `N` (the final part) must include<br/>`X-Upload-Total-Parts: N`. The upload completes when all parts `1`…`N` have been received.<br/> | 3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

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

<!-- UsageSnippet language="typescript" operationID="destroyAsset" method="post" path="/v1_1/{cloud_name}/{resource_type}/destroy" -->
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
  const result = await cloudinaryAssetMgmt.upload.destroyAsset("raw", {
    publicId: "<id>",
  });

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
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await uploadDestroyAsset(cloudinaryAssetMgmt, "raw", {
    publicId: "<id>",
  });
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
| `resourceType`                                                                                                                                                                 | [components.ResourceType](../../models/components/resourcetype.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of resource (image, video, or raw).                                                                                                                                   |
| `requestBody`                                                                                                                                                                  | [operations.DestroyAssetRequestBody](../../models/operations/destroyassetrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset to destroy and related options.                                                                                                                                      |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DestroyResponse](../../models/components/destroyresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## text

Dynamically generates an image from a specified text string.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="text" method="post" path="/v1_1/{cloud_name}/{resource_type}/text" -->
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
  cloudName: "my_cloud",
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
| `textRequest`                                                                                                                                                                  | [components.TextRequest](../../models/components/textrequest.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The text content and styling parameters for image generation.                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TextResponse](../../models/components/textresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## concat

Accepts an ordered list of remote HTTP(S) URLs pointing to video segments
and concatenates them, remuxing the result into a single MP4 asset that is
uploaded to your product environment using the supplied upload parameters.
Concatenation and the resulting upload happen asynchronously; supply a
`notification_url` to be notified when the upload completes.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="concat" method="post" path="/v1_1/{cloud_name}/video/concat" -->
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
  const result = await cloudinaryAssetMgmt.upload.concat({
    autoTagging: 0.5,
    autoTranscription: true,
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
    backgroundRemoval: "cloudinary_ai",
    categorization: "google_tagging",
    detection: "coco_v2",
    format: "jpg",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    moderation: "aws_rek|duplicate:0|perception_point|manual",
    ocr: "adv_ocr",
    rawConvert: "google_speech:vtt:en-US",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130",
    urls: [],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadConcat } from "@cloudinary/asset-management/funcs/uploadConcat.js";

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
  const res = await uploadConcat(cloudinaryAssetMgmt, {
    autoTagging: 0.5,
    autoTranscription: true,
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
    backgroundRemoval: "cloudinary_ai",
    categorization: "google_tagging",
    detection: "coco_v2",
    format: "jpg",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    moderation: "aws_rek|duplicate:0|perception_point|manual",
    ocr: "adv_ocr",
    rawConvert: "google_speech:vtt:en-US",
    regions: "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130",
    urls: [],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadConcat failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.ConcatRequest](../../models/components/concatrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ConcatResponse](../../models/components/concatresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## evalUploadParams

Evaluates a dynamic eval expression against the supplied upload parameters and returns the resulting upload parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="evalUploadParams" method="post" path="/v1_1/{cloud_name}/eval" -->
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
  const result = await cloudinaryAssetMgmt.upload.evalUploadParams({
    eval: "upload_options.quality_analysis = resource_info.quality_score * 100",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { uploadEvalUploadParams } from "@cloudinary/asset-management/funcs/uploadEvalUploadParams.js";

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
  const res = await uploadEvalUploadParams(cloudinaryAssetMgmt, {
    eval: "upload_options.quality_analysis = resource_info.quality_score * 100",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("uploadEvalUploadParams failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `eval`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The dynamic eval expression to evaluate against the upload parameters.                                                                                                         | upload_options.quality_analysis = resource_info.quality_score * 100                                                                                                            |
| `publicId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The public ID of the asset the eval expression applies to.                                                                                                                     |                                                                                                                                                                                |
| `additionalProperties`                                                                                                                                                         | Record<string, *any*>                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[{ [k: string]: any }](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |