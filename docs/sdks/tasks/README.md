# Tasks

## Overview

Query the status of async generation tasks.

### Available Operations

* [getGenerationTaskStatus](#getgenerationtaskstatus) - Get a generation task

## getGenerationTaskStatus

Get the status of a generation task.

### Example Usage: Completed

<!-- UsageSnippet language="typescript" operationID="get_generation_task_status" method="get" path="/v2/generate/{cloud_name}/tasks/{task_id}" example="Completed" -->
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
  const result = await cloudinaryAssetMgmt.tasks.getGenerationTaskStatus("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { tasksGetGenerationTaskStatus } from "@cloudinary/asset-management/funcs/tasksGetGenerationTaskStatus.js";

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
  const res = await tasksGetGenerationTaskStatus(cloudinaryAssetMgmt, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksGetGenerationTaskStatus failed:", res.error);
  }
}

run();
```
### Example Usage: default

<!-- UsageSnippet language="typescript" operationID="get_generation_task_status" method="get" path="/v2/generate/{cloud_name}/tasks/{task_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.tasks.getGenerationTaskStatus("053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { tasksGetGenerationTaskStatus } from "@cloudinary/asset-management/funcs/tasksGetGenerationTaskStatus.js";

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
  const res = await tasksGetGenerationTaskStatus(cloudinaryAssetMgmt, "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tasksGetGenerationTaskStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `taskId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the generation task.                                                                                                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.TaskResponse](../../models/components/taskresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.ErrorResponse            | 400, 401, 404                   | application/json                |
| errors.RateLimitedResponseError | 429                             | application/json                |
| errors.ErrorResponse            | 500                             | application/json                |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |