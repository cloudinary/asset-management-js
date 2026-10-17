# Folders

## Overview

Enables you to manage the asset folders in your product environment.

### Available Operations

* [showFolder](#showfolder) - List sub-folders
* [updateFolder](#updatefolder) - Renames or moves an entire folder (along with all assets it contains) to a new location
* [createFolder](#createfolder) - Creates a new empty folder in your Cloudinary media library
* [destroyFolder](#destroyfolder) - Deletes an existing folder from your media library
* [listRootFolders](#listrootfolders) - Get root folders
* [searchFolders](#searchfolders) - Searches for folders whose attributes match a given expression
* [searchFoldersPost](#searchfolderspost) - Searches for folders in your product environment
* [getFolderRoles](#getfolderroles) - Get folder roles
* [assignFolderRoles](#assignfolderroles) - Assign folder roles
* [renameFolderOperation](#renamefolderoperation) - Rename or move a folder
* [getFolderById](#getfolderbyid) - Get a folder by its identifier
* [getFolderByPath](#getfolderbypath) - Get a folder by its path
* [getFolderDescendants](#getfolderdescendants) - Get the descendants of a folder

## showFolder

Returns a list of sub-folders under the specified folder path.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="showFolder" method="get" path="/v1_1/{cloud_name}/folders/{folder}" -->
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
  const result = await cloudinaryAssetMgmt.folders.showFolder("product/test");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersShowFolder } from "@cloudinary/asset-management/funcs/foldersShowFolder.js";

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
  const res = await foldersShowFolder(cloudinaryAssetMgmt, "product/test");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersShowFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes.                                 | product/test                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FoldersListResponse](../../models/components/folderslistresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updateFolder

Renames or moves an entire folder (along with all assets it contains) to a new location within your Cloudinary media library.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateFolder" method="put" path="/v1_1/{cloud_name}/folders/{folder}" -->
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
  const result = await cloudinaryAssetMgmt.folders.updateFolder("product/test", {
    toFolder: "product1/test1",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersUpdateFolder } from "@cloudinary/asset-management/funcs/foldersUpdateFolder.js";

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
  const res = await foldersUpdateFolder(cloudinaryAssetMgmt, "product/test", {
    toFolder: "product1/test1",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersUpdateFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes.                                 | product/test                                                                                                                                                                   |
| `moveFolderRequest`                                                                                                                                                            | [components.MoveFolderRequest](../../models/components/movefolderrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The new folder path.                                                                                                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MoveFolderResponse](../../models/components/movefolderresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createFolder

Creates a new folder at the specified path

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createFolder" method="post" path="/v1_1/{cloud_name}/folders/{folder}" -->
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
  const result = await cloudinaryAssetMgmt.folders.createFolder("product/test");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersCreateFolder } from "@cloudinary/asset-management/funcs/foldersCreateFolder.js";

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
  const res = await foldersCreateFolder(cloudinaryAssetMgmt, "product/test");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersCreateFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes.                                 | product/test                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.CreateFolderResponse](../../models/components/createfolderresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ApiError         | 400, 401, 403, 404, 409 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## destroyFolder

Deletes a folder and all assets within it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="destroyFolder" method="delete" path="/v1_1/{cloud_name}/folders/{folder}" -->
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
  const result = await cloudinaryAssetMgmt.folders.destroyFolder("product/test");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersDestroyFolder } from "@cloudinary/asset-management/funcs/foldersDestroyFolder.js";

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
  const res = await foldersDestroyFolder(cloudinaryAssetMgmt, "product/test");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersDestroyFolder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folder`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes.                                 | product/test                                                                                                                                                                   |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.DeleteFolderResponse](../../models/components/deletefolderresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listRootFolders

Retrieves an array of all root folders in your Cloudinary product environment. Limited to 2000 results.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listRootFolders" method="get" path="/v1_1/{cloud_name}/folders" -->
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
  const result = await cloudinaryAssetMgmt.folders.listRootFolders({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersListRootFolders } from "@cloudinary/asset-management/funcs/foldersListRootFolders.js";

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
  const res = await foldersListRootFolders(cloudinaryAssetMgmt, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersListRootFolders failed:", res.error);
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

**Promise\<[components.FoldersListResponse](../../models/components/folderslistresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## searchFolders

Lists the folders that match the specified search expression. Limited to 2000 results. If no parameters are passed, returns the 50 most recently created folders in descending order of creation time.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchFolders" method="get" path="/v1_1/{cloud_name}/folders/search" -->
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
  const result = await cloudinaryAssetMgmt.folders.searchFolders(undefined, [
    {
      "0": ,
      "1": ,
      "2": ,
      "3": ,
      "4": ,
      "5": ,
      "6": ,
      "7": ,
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersSearchFolders } from "@cloudinary/asset-management/funcs/foldersSearchFolders.js";

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
  const res = await foldersSearchFolders(cloudinaryAssetMgmt, undefined, [
    {
      "0": ,
      "1": ,
      "2": ,
      "3": ,
      "4": ,
      "5": ,
      "6": ,
      "7": ,
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersSearchFolders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expression`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The (Lucene-like) string expression specifying the search query. If not passed, returns all folders (up to max_results).                                                       |                                                                                                                                                                                |
| `sortBy`                                                                                                                                                                       | Record<string, [components.DirectionEnum](../../models/components/directionenum.md)>[]                                                                                         | :heavy_minus_sign:                                                                                                                                                             | Sort order for the results. Each item maps a field name to a direction.                                                                                                        | [<br/>{<br/>"created_at": "desc"<br/>},<br/>{<br/>"public_id": "asc"<br/>}<br/>]                                                                                               |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Maximum number of folders to return (max 500, default 50).                                                                                                                     |                                                                                                                                                                                |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results.                                                                 |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FoldersSearchResponse](../../models/components/folderssearchresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## searchFoldersPost

Lists the folders that match the specified search expression. Limited to 2000 results. If no parameters are passed, returns the 50 most recently created folders in descending order of creation time.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchFoldersPost" method="post" path="/v1_1/{cloud_name}/folders/search" -->
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
  const result = await cloudinaryAssetMgmt.folders.searchFoldersPost({
    expression: "name:folder AND path:my_parent AND created_at=>4w",
    sortBy: [
      {
        "0": ,
        "1": ,
        "2": ,
        "3": ,
        "4": ,
        "5": ,
        "6": ,
        "7": ,
      },
    ],
    maxResults: 10,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersSearchFoldersPost } from "@cloudinary/asset-management/funcs/foldersSearchFoldersPost.js";

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
  const res = await foldersSearchFoldersPost(cloudinaryAssetMgmt, {
    expression: "name:folder AND path:my_parent AND created_at=>4w",
    sortBy: [
      {
        "0": ,
        "1": ,
        "2": ,
        "3": ,
        "4": ,
        "5": ,
        "6": ,
        "7": ,
      },
    ],
    maxResults: 10,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersSearchFoldersPost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        | Example                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expression`                                                                                                                                                                       | *string*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | The (Lucene-like) string expression specifying the search query.                                                                                                                   |                                                                                                                                                                                    |
| `sortBy`                                                                                                                                                                           | Record<string, [components.DirectionEnum](../../models/components/directionenum.md)>[]                                                                                             | :heavy_minus_sign:                                                                                                                                                                 | An array of single-key objects mapping a field to a sort direction. Each object must contain exactly one field name mapped to 'asc' or 'desc'.<br/>Default: [{"created_at": "desc"}].<br/> | [<br/>{<br/>"created_at": "desc"<br/>},<br/>{<br/>"public_id": "asc"<br/>}<br/>]                                                                                                   |
| `maxResults`                                                                                                                                                                       | *number*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | Maximum number of folders to return (max 500, default 50).                                                                                                                         |                                                                                                                                                                                    |
| `nextCursor`                                                                                                                                                                       | *string*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | When more results are available, use the next_cursor value from the previous response.                                                                                             |                                                                                                                                                                                    |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |                                                                                                                                                                                    |

### Response

**Promise\<[components.FoldersSearchResponse](../../models/components/folderssearchresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFolderRoles

Lists the principals (users, groups, or API keys) and their role assignments on a specific folder, including roles inherited from ancestor folders. 


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFolderRoles" method="get" path="/v1_1/{cloud_name}/folder_operations/invite/{folder_id}" -->
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
  const result = await cloudinaryAssetMgmt.folders.getFolderRoles("cd7e9d690a014c68ae8b58f08e090cb03a");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersGetFolderRoles } from "@cloudinary/asset-management/funcs/foldersGetFolderRoles.js";

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
  const res = await foldersGetFolderRoles(cloudinaryAssetMgmt, "cd7e9d690a014c68ae8b58f08e090cb03a");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersGetFolderRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folderId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints.                                                                         | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                                             |
| `permittedRoles`                                                                                                                                                               | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include in the response the roles the authenticated user can assign on this folder, based on their permission level. Default: `false`.<br/>                         |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FolderRolesResponse](../../models/components/folderrolesresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## assignFolderRoles

Assigns or removes folder roles for a principal (user, group, or API key).
Supports all system folder roles (see [System roles reference](https://cloudinary.com/documentation/permissions_system_roles_policies#folder_roles)).
Enterprise customers can also assign custom roles by ID.
Note: Assigning roles to users or groups via this endpoint requires their user or group IDs, which are available through the Provisioning API (Enterprise only). Free customers can use this endpoint to assign roles only to API keys, but can assign folder roles to users and groups through the UI.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="assignFolderRoles" method="post" path="/v1_1/{cloud_name}/folder_operations/invite/{folder_id}" -->
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
  const result = await cloudinaryAssetMgmt.folders.assignFolderRoles("cd7e9d690a014c68ae8b58f08e090cb03a", {
    principal: {
      type: "apiKey",
      id: "799451857115779",
    },
    operation: "add",
    roles: [
      "cld::role::folder::contributor",
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
import { foldersAssignFolderRoles } from "@cloudinary/asset-management/funcs/foldersAssignFolderRoles.js";

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
  const res = await foldersAssignFolderRoles(cloudinaryAssetMgmt, "cd7e9d690a014c68ae8b58f08e090cb03a", {
    principal: {
      type: "apiKey",
      id: "799451857115779",
    },
    operation: "add",
    roles: [
      "cld::role::folder::contributor",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersAssignFolderRoles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `folderId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints.                                                                         | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                                             |
| `assignFolderRolesRequest`                                                                                                                                                     | [components.AssignFolderRolesRequest](../../models/components/assignfolderrolesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The folder role assignments.                                                                                                                                                   | {<br/>"principal": {<br/>"id": "799451857115779",<br/>"type": "apiKey"<br/>},<br/>"operation": "add",<br/>"roles": [<br/>"cld::role::folder::contributor"<br/>]<br/>}          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.SuccessResponse](../../models/components/successresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## renameFolderOperation

Renames or moves the folder at the specified path, along with all the assets it contains, to a new path.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="renameFolderOperation" method="put" path="/v1_1/{cloud_name}/folder_operations/rename" -->
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
  const result = await cloudinaryAssetMgmt.folders.renameFolderOperation({
    path: "product/test",
    toPath: "product/test_renamed",
    resourcesLimit: 100000,
    resourcesSizeLimit: 1099511627776,
    maxDerived: 1000000,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersRenameFolderOperation } from "@cloudinary/asset-management/funcs/foldersRenameFolderOperation.js";

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
  const res = await foldersRenameFolderOperation(cloudinaryAssetMgmt, {
    path: "product/test",
    toPath: "product/test_renamed",
    resourcesLimit: 100000,
    resourcesSizeLimit: 1099511627776,
    maxDerived: 1000000,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersRenameFolderOperation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `path`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder to rename or move.                                                                                                                                 | product/test                                                                                                                                                                   |
| `toPath`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The new full path for the folder.                                                                                                                                              | product/test_renamed                                                                                                                                                           |
| `resourcesLimit`                                                                                                                                                               | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of assets that may be moved by the rename. Assets beyond this limit cause the rename to be rejected.                                                        | 100000                                                                                                                                                                         |
| `resourcesSizeLimit`                                                                                                                                                           | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum total size, in bytes, of the assets that may be moved by the rename.                                                                                               | 1099511627776                                                                                                                                                                  |
| `maxDerived`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of derived assets that may be moved by the rename.                                                                                                          | 1000000                                                                                                                                                                        |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FolderRenameResponse](../../models/components/folderrenameresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFolderById

Returns the details of the folder with the specified identifier, including its ancestors.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFolderById" method="put" path="/v1_1/{cloud_name}/folders/by_id" -->
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
  const result = await cloudinaryAssetMgmt.folders.getFolderById({
    id: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersGetFolderById } from "@cloudinary/asset-management/funcs/foldersGetFolderById.js";

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
  const res = await foldersGetFolderById(cloudinaryAssetMgmt, {
    id: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersGetFolderById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The immutable identifier of the folder to retrieve.                                                                                                                            | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FolderDetailResponse](../../models/components/folderdetailresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFolderByPath

Returns the details of the folder at the specified path, including its ancestors.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFolderByPath" method="put" path="/v1_1/{cloud_name}/folders/by_path" -->
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
  const result = await cloudinaryAssetMgmt.folders.getFolderByPath({
    path: "product/test",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersGetFolderByPath } from "@cloudinary/asset-management/funcs/foldersGetFolderByPath.js";

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
  const res = await foldersGetFolderByPath(cloudinaryAssetMgmt, {
    path: "product/test",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersGetFolderByPath failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `path`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The full path of the folder to retrieve. Use an empty string for the root folder.                                                                                              | product/test                                                                                                                                                                   |
| `caseSensitive`                                                                                                                                                                | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to match the folder path case-sensitively. If false, the path is matched case-insensitively.                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FolderDetailResponse](../../models/components/folderdetailresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getFolderDescendants

Returns the descendant folders of the folder with the specified identifier, optionally filtered to a set of folder identifiers.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFolderDescendants" method="put" path="/v1_1/{cloud_name}/folders/descendants" -->
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
  const result = await cloudinaryAssetMgmt.folders.getFolderDescendants({
    id: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { foldersGetFolderDescendants } from "@cloudinary/asset-management/funcs/foldersGetFolderDescendants.js";

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
  const res = await foldersGetFolderDescendants(cloudinaryAssetMgmt, {
    id: "cd7e9d690a014c68ae8b58f08e090cb03a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("foldersGetFolderDescendants failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The immutable identifier of the parent folder whose descendants are returned.                                                                                                  | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                                             |
| `filterIds`                                                                                                                                                                    | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | A list of folder identifiers to restrict the returned descendants to.                                                                                                          |                                                                                                                                                                                |
| `inclusive`                                                                                                                                                                    | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to include the parent folder itself in the results. If false, only descendants are returned.                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.FolderDescendantsResponse](../../models/components/folderdescendantsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |