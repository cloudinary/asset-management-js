# Search
(*search*)

## Overview

APIs for searching resources using text and visual search capabilities

### Available Operations

* [searchAssets](#searchassets) - Provides a powerful query interface to filter and retrieve assets and their details
* [visualSearchAssets](#visualsearchassets) - Finds images in your asset library based on visual similarity or content

## searchAssets

Returns a list of resources matching the specified search criteria.

Uses Lucene-like query language to search by descriptive attributes (public_id, filename, folder, tags, context), file details (resource_type, format, bytes, width, height), embedded data (image_metadata), and analyzed data (face_count, colors, quality_score). Supports aggregate counts and complex Boolean expressions.

Examples: tags:shirt AND uploaded_at>1d, resource_type:image AND bytes>1mb, folder:products OR context.category:electronics


### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchAssets" method="post" path="/v1_1/{cloud_name}/resources/search" -->
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
  const result = await cloudinaryAssetMgmt.search.searchAssets({
    expression: "resource_type:image AND tags:kitten",
    sortBy: [
      {
        "created_at": "desc",
      },
      {
        "public_id": "asc",
      },
    ],
    maxResults: 30,
    aggregate: [
      "format",
      "resource_type",
    ],
    fields: "tags,context,metadata",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { searchSearchAssets } from "@cloudinary/asset-management/funcs/searchSearchAssets.js";

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
  const res = await searchSearchAssets(cloudinaryAssetMgmt, {
    expression: "resource_type:image AND tags:kitten",
    sortBy: [
      {
        "created_at": "desc",
      },
      {
        "public_id": "asc",
      },
    ],
    maxResults: 30,
    aggregate: [
      "format",
      "resource_type",
    ],
    fields: "tags,context,metadata",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchSearchAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expression`                                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | The search expression. Supports exact match, wildcard match, presence, greater/less than, and range. For details on building expressions, see the Search API documentation.                                                                                                                                                                                                                                     | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                 |
| `sortBy`                                                                                                                                                                                                                                                                                                                                                                                                        | Record<string, [components.SearchSortPair](../../models/components/searchsortpair.md)>[]                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | An array of single-key objects mapping a field to a sort direction. Each object must contain exactly one field name mapped to 'asc' or 'desc'.<br/>Default: [{"created_at": "desc"}].<br/>                                                                                                                                                                                                                      | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                 |
| `maxResults`                                                                                                                                                                                                                                                                                                                                                                                                    | *number*                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | The maximum number of results to return. Default - 50. Maximum - 500.                                                                                                                                                                                                                                                                                                                                           | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                 |
| `nextCursor`                                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | The cursor value to get the next page of results. Available when a previous search returned more results than max_results.                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `aggregate`                                                                                                                                                                                                                                                                                                                                                                                                     | *components.AggregateUnion*                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `withField`                                                                                                                                                                                                                                                                                                                                                                                                     | [components.WithField](../../models/components/withfield.md)[]                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | The additional fields to include in the response. Note that the fields parameter takes precedence over this parameter.                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `fields`                                                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | A comma-separated list of fields to include in the response.<br/>Notes:<br/>- This parameter takes precedence over the with_field parameter, so if you want any additional asset attributes returned, make sure to also include them in this list (e.g., tags or context).<br/>- The following fields are always included in the response: public_id, asset_id, asset_folder, created_at, status, type, and resource_type.<br/> | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## visualSearchAssets

Returns a list of resources that are visually similar to a specified image. You can provide the source image for comparison in one of three ways:
- Provide a URL of an image
- Specify the public ID or asset ID of an existing image
- Provide a textual description


### Example Usage

<!-- UsageSnippet language="typescript" operationID="visualSearchAssets" method="post" path="/v1_1/{cloud_name}/resources/visual_search" -->
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
  const result = await cloudinaryAssetMgmt.search.visualSearchAssets({
    text: "shirts",
    threshold: 0.8,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { searchVisualSearchAssets } from "@cloudinary/asset-management/funcs/searchVisualSearchAssets.js";

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
  const res = await searchVisualSearchAssets(cloudinaryAssetMgmt, {
    text: "shirts",
    threshold: 0.8,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("searchVisualSearchAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.VisualSearchParametersUnion](../../models/components/visualsearchparametersunion.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |