# Collections

## Overview

Create and manage collections of assets, and publish shareable public pages for them.

### Available Operations

* [listCollections](#listcollections) - List collections
* [createCollection](#createcollection) - Create a collection
* [getCollection](#getcollection) - Get a collection
* [updateCollection](#updatecollection) - Update a collection
* [deleteCollection](#deletecollection) - Delete a collection
* [listCollectionAssets](#listcollectionassets) - List a collection's assets
* [addCollectionAssets](#addcollectionassets) - Add assets to a collection
* [removeCollectionAssets](#removecollectionassets) - Remove assets from a collection
* [createCollectionPublicPage](#createcollectionpublicpage) - Publish a collection
* [listCollectionPublicPages](#listcollectionpublicpages) - List a collection's public pages
* [getCollectionPublicPage](#getcollectionpublicpage) - Get a public page
* [updateCollectionPublicPage](#updatecollectionpublicpage) - Update a public page
* [deleteCollectionPublicPage](#deletecollectionpublicpage) - Unpublish a collection's public page

## listCollections

Returns the collections the caller may read, most-recently-updated first by default (`updated_at desc`). Results are paginated: pass the returned `next_cursor` back to fetch the next page.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCollections" method="get" path="/v2/asset_management/{cloud_name}/collections" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.listCollections("summer", "name asc", 20);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsListCollections } from "@cloudinary/asset-management/funcs/collectionsListCollections.js";

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
  const res = await collectionsListCollections(cloudinaryAssetMgmt, "summer", "name asc", 20);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsListCollections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Case-insensitive filter on the collection name. Returns collections with a word in their name that starts with this text (for example, `sum` matches "Summer Campaign").                                                                                                                         |
| `sortBy`                                                                                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Sort expression: `<field> <direction>`, optionally comma-separated for a multi-key sort (e.g. `name asc, created_at desc`). `field` is one of `name`, `created_at`, or `updated_at`, the same field names the response uses, and `direction` is `asc` or `desc`. Defaults to `updated_at desc`.<br/> |
| `maxResults`                                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Maximum number of collections to return (1-100, default 20).                                                                                                                                                                                                                                     |
| `nextCursor`                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Opaque cursor from a previous response's `next_cursor` to fetch the next page.                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                   |
| `options.retries`                                                                                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                 |

### Response

**Promise\<[components.ContractListCollectionsResponse](../../models/components/contractlistcollectionsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## createCollection

Creates a collection under the given product environment and makes the caller the owner.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCollection" method="post" path="/v2/asset_management/{cloud_name}/collections" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.createCollection({
    name: "Summer campaign images",
    type: "dynamic",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsCreateCollection } from "@cloudinary/asset-management/funcs/collectionsCreateCollection.js";

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
  const res = await collectionsCreateCollection(cloudinaryAssetMgmt, {
    name: "Summer campaign images",
    type: "dynamic",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsCreateCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                       | Name of the collection.                                                                                                                                                                                                                  | Summer Campaign Assets                                                                                                                                                                                                                   |
| `description`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                       | Optional description of the collection.                                                                                                                                                                                                  | Approved photography for the summer campaign launch.                                                                                                                                                                                     |
| `type`                                                                                                                                                                                                                                   | [components.ContractCreateCollectionRequestPayloadType](../../models/components/contractcreatecollectionrequestpayloadtype.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                       | Type of the collection. `manual` holds an explicit asset list and starts empty until you add assets with the **Add assets to a collection** endpoint; `dynamic` is defined by a saved filter expression and is populated automatically.<br/> | dynamic                                                                                                                                                                                                                                  |
| `configuration`                                                                                                                                                                                                                          | [components.EntityCollectionConfiguration](../../models/components/entitycollectionconfiguration.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                       | Configuration for a `dynamic` collection. Required when creating a `dynamic` collection, and not allowed for a `manual` collection.<br/>                                                                                                 |                                                                                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                                    |                                                                                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                           |                                                                                                                                                                                                                                          |
| `options.retries`                                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                         |                                                                                                                                                                                                                                          |

### Response

**Promise\<[components.ContractCreateCollectionResponse](../../models/components/contractcreatecollectionresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## getCollection

Returns a single collection by its external ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCollection" method="get" path="/v2/asset_management/{cloud_name}/collections/{collection_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.getCollection("col_8f3a2b1c9d4e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsGetCollection } from "@cloudinary/asset-management/funcs/collectionsGetCollection.js";

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
  const res = await collectionsGetCollection(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsGetCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection to retrieve, update, or delete.                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractGetCollectionResponse](../../models/components/contractgetcollectionresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## updateCollection

Updates a collection's name, description, and (for dynamic collections) configuration. Only the fields you include in the request are changed. The caller must be allowed to update the collection. A collection's type (manual/dynamic) is fixed at creation and can't be changed.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCollection" method="put" path="/v2/asset_management/{cloud_name}/collections/{collection_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.updateCollection("col_8f3a2b1c9d4e", {
    name: "Summer Campaign Assets 2026",
    description: "Approved photography for the 2026 summer campaign launch.",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsUpdateCollection } from "@cloudinary/asset-management/funcs/collectionsUpdateCollection.js";

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
  const res = await collectionsUpdateCollection(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", {
    name: "Summer Campaign Assets 2026",
    description: "Approved photography for the 2026 summer campaign launch.",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsUpdateCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection to retrieve, update, or delete.                                                                                                                  |
| `contractUpdateCollectionRequestPayload`                                                                                                                                       | [components.ContractUpdateCollectionRequestPayload](../../models/components/contractupdatecollectionrequestpayload.md)                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractUpdateCollectionResponse](../../models/components/contractupdatecollectionresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## deleteCollection

Deletes a collection. The caller must be allowed to update the collection; the underlying assets are not modified or deleted.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCollection" method="delete" path="/v2/asset_management/{cloud_name}/collections/{collection_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.deleteCollection("col_8f3a2b1c9d4e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsDeleteCollection } from "@cloudinary/asset-management/funcs/collectionsDeleteCollection.js";

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
  const res = await collectionsDeleteCollection(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsDeleteCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection to retrieve, update, or delete.                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractDeleteCollectionResponse](../../models/components/contractdeletecollectionresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## listCollectionAssets

Returns the assets in a collection, newest first by default. For a `manual` collection, these are the assets that have been added to it; for a `dynamic` collection, they're the assets currently matching its filter expression. Only assets the caller has permission to view are included. Results are paginated: pass the returned `next_cursor` back to fetch the next page.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCollectionAssets" method="get" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/assets" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.listCollectionAssets("col_8f3a2b1c9d4e", "bytes desc", 20);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsListCollectionAssets } from "@cloudinary/asset-management/funcs/collectionsListCollectionAssets.js";

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
  const res = await collectionsListCollectionAssets(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", "bytes desc", 20);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsListCollectionAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collectionId`                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                      | External ID of the collection whose assets to list, add, or remove.                                                                                                                                                                                                                                                                                                                                                     |
| `sortBy`                                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Sort expression: `<field> <direction>`, optionally comma-separated for a multi-key sort (e.g. `bytes desc, created_at asc`). `field` is one of `created_at`, `uploaded_at`, `public_id`, `display_name`, or `bytes`, and `direction` is `asc` or `desc`. Defaults to `created_at desc`. When paging with `next_cursor`, send the same `sort_by` on every page; a cursor is only valid for the sort it was issued with.<br/> |
| `maxResults`                                                                                                                                                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Maximum number of assets to return (1-100, default 20).                                                                                                                                                                                                                                                                                                                                                                 |
| `nextCursor`                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Opaque cursor from a previous response's `next_cursor` to fetch the next page. Send it with the same `sort_by` (and `max_results`) as the request that returned it.<br/>                                                                                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                          |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                        |

### Response

**Promise\<[components.ContractListCollectionAssetsResponse](../../models/components/contractlistcollectionassetsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## addCollectionAssets

Adds assets to an existing collection. The caller must be allowed to update the collection and view the assets.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="addCollectionAssets" method="post" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/assets" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.addCollectionAssets("col_8f3a2b1c9d4e", [
    "ast_1a2b3c4d5e6f",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsAddCollectionAssets } from "@cloudinary/asset-management/funcs/collectionsAddCollectionAssets.js";

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
  const res = await collectionsAddCollectionAssets(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", [
    "ast_1a2b3c4d5e6f",
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsAddCollectionAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection whose assets to list, add, or remove.                                                                                                            |
| `requestBody`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractAddCollectionAssetsResponse](../../models/components/contractaddcollectionassetsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## removeCollectionAssets

Removes the specified assets from an existing collection. The caller must be allowed to update the collection. Assets that are not in the collection are ignored, and the underlying assets are not modified or deleted.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCollectionAssets" method="delete" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/assets" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.removeCollectionAssets("col_8f3a2b1c9d4e", [
    "ast_1a2b3c4d5e6f",
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsRemoveCollectionAssets } from "@cloudinary/asset-management/funcs/collectionsRemoveCollectionAssets.js";

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
  const res = await collectionsRemoveCollectionAssets(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", [
    "ast_1a2b3c4d5e6f",
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsRemoveCollectionAssets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection whose assets to list, add, or remove.                                                                                                            |
| `requestBody`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractRemoveCollectionAssetsResponse](../../models/components/contractremovecollectionassetsresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## createCollectionPublicPage

Creates a shareable public page for the collection and returns its URL.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCollectionPublicPage" method="post" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/public_pages" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.createCollectionPublicPage("col_8f3a2b1c9d4e", {
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
      },
      {
        name: "trimmed_preview",
        types: [
          "video",
        ],
      },
    ],
    createDownloadTransformations: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsCreateCollectionPublicPage } from "@cloudinary/asset-management/funcs/collectionsCreateCollectionPublicPage.js";

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
  const res = await collectionsCreateCollectionPublicPage(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", {
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
      },
      {
        name: "trimmed_preview",
        types: [
          "video",
        ],
      },
    ],
    createDownloadTransformations: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsCreateCollectionPublicPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection to create or list public pages for.                                                                                                              |
| `contractCreatePublicPageRequestPayload`                                                                                                                                       | [components.ContractCreatePublicPageRequestPayload](../../models/components/contractcreatepublicpagerequestpayload.md)                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractCreatePublicPageResponse](../../models/components/contractcreatepublicpageresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## listCollectionPublicPages

Returns the public pages (shareable links) that have been created for the collection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCollectionPublicPages" method="get" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/public_pages" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.listCollectionPublicPages("col_8f3a2b1c9d4e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsListCollectionPublicPages } from "@cloudinary/asset-management/funcs/collectionsListCollectionPublicPages.js";

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
  const res = await collectionsListCollectionPublicPages(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsListCollectionPublicPages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection to create or list public pages for.                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractListCollectionPublicPagesResponse](../../models/components/contractlistcollectionpublicpagesresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## getCollectionPublicPage

Returns a single public page of a collection by its external ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCollectionPublicPage" method="get" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/public_pages/{public_page_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.getCollectionPublicPage("col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsGetCollectionPublicPage } from "@cloudinary/asset-management/funcs/collectionsGetCollectionPublicPage.js";

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
  const res = await collectionsGetCollectionPublicPage(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsGetCollectionPublicPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection the public page belongs to.                                                                                                                      |
| `publicPageId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the public page.                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractGetCollectionPublicPageResponse](../../models/components/contractgetcollectionpublicpageresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## updateCollectionPublicPage

Updates the settings of a collection's public page and returns the updated page. Protecting a page (`protection_mode: email_otp`) requires the secured-sharing feature on your plan; otherwise the request fails with 403. Invalid protection settings fail with 400 and error code `invalid_protection_settings`, listing every problem found.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCollectionPublicPage" method="put" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/public_pages/{public_page_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.updateCollectionPublicPage("col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b", {
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
      },
      {
        name: "trimmed_preview",
        types: [
          "video",
        ],
      },
    ],
    createDownloadTransformations: true,
    protectionMode: "email_otp",
    allowedEmails: [
      "alice@example.com",
      "bob@example.com",
    ],
    allowedDomains: [
      "example.com",
    ],
    allowAny: false,
    customLayoutUrl: "https://res.cloudinary.com/demo/raw/upload/layouts/summer.html",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsUpdateCollectionPublicPage } from "@cloudinary/asset-management/funcs/collectionsUpdateCollectionPublicPage.js";

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
  const res = await collectionsUpdateCollectionPublicPage(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b", {
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
      },
      {
        name: "trimmed_preview",
        types: [
          "video",
        ],
      },
    ],
    createDownloadTransformations: true,
    protectionMode: "email_otp",
    allowedEmails: [
      "alice@example.com",
      "bob@example.com",
    ],
    allowedDomains: [
      "example.com",
    ],
    allowAny: false,
    customLayoutUrl: "https://res.cloudinary.com/demo/raw/upload/layouts/summer.html",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsUpdateCollectionPublicPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection the public page belongs to.                                                                                                                      |
| `publicPageId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the public page.                                                                                                                                                |
| `contractUpdatePublicPageRequestPayload`                                                                                                                                       | [components.ContractUpdatePublicPageRequestPayload](../../models/components/contractupdatepublicpagerequestpayload.md)                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractUpdatePublicPageResponse](../../models/components/contractupdatepublicpageresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsBadRequestResponseError     | 400                                           | application/json                              |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## deleteCollectionPublicPage

Deletes a collection's public page so it's no longer shareable. The collection and its assets aren't changed or deleted.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteCollectionPublicPage" method="delete" path="/v2/asset_management/{cloud_name}/collections/{collection_id}/public_pages/{public_page_id}" example="default" -->
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
  const result = await cloudinaryAssetMgmt.collections.deleteCollectionPublicPage("col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { collectionsDeleteCollectionPublicPage } from "@cloudinary/asset-management/funcs/collectionsDeleteCollectionPublicPage.js";

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
  const res = await collectionsDeleteCollectionPublicPage(cloudinaryAssetMgmt, "col_8f3a2b1c9d4e", "pub_2c4d6e8f0a1b");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("collectionsDeleteCollectionPublicPage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `collectionId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the collection the public page belongs to.                                                                                                                      |
| `publicPageId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | External ID of the public page.                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContractDeletePublicPageResponse](../../models/components/contractdeletepublicpageresponse.md)\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.CollectionsUnauthorizedResponseError   | 401                                           | application/json                              |
| errors.CollectionsForbiddenResponseError      | 403                                           | application/json                              |
| errors.CollectionsNotFoundResponseError       | 404                                           | application/json                              |
| errors.CollectionsInternalServerErrorResponse | 500                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |