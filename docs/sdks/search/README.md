# Search

## Overview

APIs for searching resources using text and visual search capabilities

### Available Operations

* [searchAssets](#searchassets) - Provides a powerful query interface to filter and retrieve assets and their details
* [visualSearchAssets](#visualsearchassets) - Finds images in your asset library based on visual similarity or content

## searchAssets

Returns a list of resources matching the specified search criteria.

Uses a Lucene-like query language to filter assets by descriptive attributes (`public_id`, `asset_id`, `filename`, `display_name`, `folder` / `asset_folder`, `tags`, `context.<key>`), file details (`resource_type`, `type`, `format`, `bytes`, `width`, `height`, `duration`, `pages`, `aspect_ratio`, `transparent`, `grayscale`), lifecycle dates (`uploaded_at`, `created_at`, `taken_at`, `updated_at`, `last_updated.<kind>`), moderation and lifecycle state (`status`, `moderation_status`, `moderation_kind`), embedded data (`image_metadata.*`), structured metadata (`metadata.<external_id>`), and analysis fields (`face_count`, `colors`, `quality_score`, `illustration_score`, `accessibility_analysis.*`). Supports sorting, aggregate counts, and complex boolean expressions.

Examples: `tags:shirt AND uploaded_at>1d`, `resource_type:image AND bytes>1000000`, `folder:products OR context.category:electronics`. See the [search expressions guide](https://cloudinary.com/documentation/search_expressions.md) for the full syntax and field reference.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchAssets" method="post" path="/v1_1/{cloud_name}/resources/search" -->
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
    withField: [
      "tags",
      "context",
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
  cloudName: "my_cloud",
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
    withField: [
      "tags",
      "context",
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

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expression`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The Lucene-like search expression. Supports token match (`field:value`), exact match (`field=value`), trailing `*` for prefix match, ranges (`[a TO b]`, `{a TO b}`), and comparisons (`>`, `<`, `>=`, `<=`). Combine terms with uppercase `AND`, `OR`, `NOT`, or `+`/`-`, and group with parentheses. Wrap values containing reserved characters (spaces, colons, etc.) in double quotes. See the [search expressions guide](https://cloudinary.com/documentation/search_expressions.md) for the full syntax and supported fields.<br/> | resource_type:image AND tags:kitten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `sortBy`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Record<string, [components.DirectionEnum](../../models/components/directionenum.md)>[]                                                                                                                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | An array of single-key objects mapping a field to a sort direction. Each object must contain exactly one field name mapped to 'asc' or 'desc'.<br/>Default: [{"created_at": "desc"}].<br/>                                                                                                                                                                                                                                                                                                                                           | [<br/>{<br/>"created_at": "desc"<br/>},<br/>{<br/>"public_id": "asc"<br/>}<br/>]                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `maxResults`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The maximum number of results to return. Default - 50. Maximum - 500.<br/>Set to `0` to get only `total_count` and `aggregations` without any resources in the response — useful for counting or aggregation-only queries.<br/>                                                                                                                                                                                                                                                                                                      | 30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `nextCursor`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The cursor value to get the next page of results. Available when a previous search returned more results than max_results.                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `aggregate`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | *components.AggregateUnion*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Fields or ranges to aggregate search results by. Requires a Tier 2 search plan; on Tier 1 the field is accepted but aggregations are omitted from the response.<br/>                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `withField`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | [components.WithField](../../models/components/withfield.md)[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | The additional asset attributes to include in each search result. The `fields` parameter takes precedence over this parameter. `image_metadata`, `image_analysis`, and `metadata` require a Tier 2 search plan.<br/>                                                                                                                                                                                                                                                                                                                 | [<br/>"tags",<br/>"context"<br/>]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `fields`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | A comma-separated list of fields to include in the response.<br/>Notes:<br/>- This parameter takes precedence over the with_field parameter, so if you want any additional asset attributes returned, make sure to also include them in this list (e.g., tags or context).<br/>- The following fields are always included in the response: public_id, asset_id, asset_folder, created_at, status, type, and resource_type.<br/>                                                                                                      | tags,context,metadata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

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
- Specify the asset ID of an existing image
- Provide a textual description


### Example Usage

<!-- UsageSnippet language="typescript" operationID="visualSearchAssets" method="post" path="/v1_1/{cloud_name}/resources/visual_search" -->
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
  cloudName: "my_cloud",
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