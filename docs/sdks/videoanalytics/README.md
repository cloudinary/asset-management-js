# VideoAnalytics
(*videoAnalytics*)

## Overview

Gets video analytics

### Available Operations

* [getVideoViews](#getvideoviews) - Get video views

## getVideoViews

Retrieves analytics data for video views. Results can be filtered using expressions based on various criteria
such as video public ID, view duration, viewer information, and more.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getVideoViews" method="get" path="/v1_1/{cloud_name}/video/analytics/views" -->
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
  const result = await cloudinaryAssetMgmt.videoAnalytics.getVideoViews();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { videoAnalyticsGetVideoViews } from "@cloudinary/asset-management/funcs/videoAnalyticsGetVideoViews.js";

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
  const res = await videoAnalyticsGetVideoViews(cloudinaryAssetMgmt);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("videoAnalyticsGetVideoViews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expression`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A set of conditions used to limit the results to rows that match those conditions. For example: `?expression=video_public_id=skate`                                            |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of results to return. Default is 10.                                                                                                                        |
| `sortBy`                                                                                                                                                                       | [operations.SortBy](../../models/operations/sortby.md)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Specifies the expression field by which to sort the results. Prepend values with a '-' to reverse the order.                                                                   |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results.                                                                 |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVideoViewsResponse](../../models/operations/getvideoviewsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |