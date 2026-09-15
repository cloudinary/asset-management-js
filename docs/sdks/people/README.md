# People

## Overview

APIs for accessing and managing face recognition results.

### Available Operations

* [listPeople](#listpeople) - List recognized people
* [getPerson](#getperson) - Get person details
* [updatePerson](#updateperson) - Update a person
* [inspectPeoplePermissions](#inspectpeoplepermissions) - Inspect the caller's permitted actions on people

## listPeople

Returns a list of all recognized people in your product environment.
People Search must be enabled for this product environment.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPeople" method="get" path="/v1_1/{cloud_name}/people" -->
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
  const result = await cloudinaryAssetMgmt.people.listPeople(20, undefined, "named", "Alice", "active");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleListPeople } from "@cloudinary/asset-management/funcs/peopleListPeople.js";

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
  const res = await peopleListPeople(cloudinaryAssetMgmt, 20, undefined, "named", "Alice", "active");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleListPeople failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of people to return. Default: 50.                                                                                                                           | 20                                                                                                                                                                             |
| `nextCursor`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results.                                                                 |                                                                                                                                                                                |
| `nameStatus`                                                                                                                                                                   | [operations.NameStatus](../../models/operations/namestatus.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Filter by whether the person has been named. Default: all.                                                                                                                     | named                                                                                                                                                                          |
| `namePrefix`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Filter people whose names start with the given prefix (case insensitive).                                                                                                      | Alice                                                                                                                                                                          |
| `status`                                                                                                                                                                       | [components.PersonStatus](../../models/components/personstatus.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | Filter by person status.                                                                                                                                                       | active                                                                                                                                                                         |
| `sortBy`                                                                                                                                                                       | [operations.ListPeopleSortBy](../../models/operations/listpeoplesortby.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The field to sort results by. Default: name (ascending).<br/>                                                                                                                  | created_at                                                                                                                                                                     |
| `direction`                                                                                                                                                                    | [components.DirectionEnum](../../models/components/directionenum.md)                                                                                                           | :heavy_minus_sign:                                                                                                                                                             | The sort direction for the results. Default is "desc".                                                                                                                         |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PeopleListResponse](../../models/components/peoplelistresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getPerson

Returns details of a specific recognized person.
People Search must be enabled for this product environment.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerson" method="get" path="/v1_1/{cloud_name}/people/{person_id}" -->
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
  const result = await cloudinaryAssetMgmt.people.getPerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleGetPerson } from "@cloudinary/asset-management/funcs/peopleGetPerson.js";

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
  const res = await peopleGetPerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleGetPerson failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `personId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the person.                                                                                                                                           | f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2                                                                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.PersonResponse](../../models/components/personresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updatePerson

Updates a recognized person's name, status, or thumbnail image.
At least one of name, status, or thumbnail_asset_id must be provided.
People Search must be enabled for this product environment.


### Example Usage: invalid_status

<!-- UsageSnippet language="typescript" operationID="updatePerson" method="put" path="/v1_1/{cloud_name}/people/{person_id}" example="invalid_status" -->
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
  const result = await cloudinaryAssetMgmt.people.updatePerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleUpdatePerson } from "@cloudinary/asset-management/funcs/peopleUpdatePerson.js";

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
  const res = await peopleUpdatePerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleUpdatePerson failed:", res.error);
  }
}

run();
```
### Example Usage: missing_params

<!-- UsageSnippet language="typescript" operationID="updatePerson" method="put" path="/v1_1/{cloud_name}/people/{person_id}" example="missing_params" -->
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
  const result = await cloudinaryAssetMgmt.people.updatePerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleUpdatePerson } from "@cloudinary/asset-management/funcs/peopleUpdatePerson.js";

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
  const res = await peopleUpdatePerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleUpdatePerson failed:", res.error);
  }
}

run();
```
### Example Usage: name_too_long

<!-- UsageSnippet language="typescript" operationID="updatePerson" method="put" path="/v1_1/{cloud_name}/people/{person_id}" example="name_too_long" -->
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
  const result = await cloudinaryAssetMgmt.people.updatePerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleUpdatePerson } from "@cloudinary/asset-management/funcs/peopleUpdatePerson.js";

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
  const res = await peopleUpdatePerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleUpdatePerson failed:", res.error);
  }
}

run();
```
### Example Usage: no_face

<!-- UsageSnippet language="typescript" operationID="updatePerson" method="put" path="/v1_1/{cloud_name}/people/{person_id}" example="no_face" -->
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
  const result = await cloudinaryAssetMgmt.people.updatePerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleUpdatePerson } from "@cloudinary/asset-management/funcs/peopleUpdatePerson.js";

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
  const res = await peopleUpdatePerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleUpdatePerson failed:", res.error);
  }
}

run();
```
### Example Usage: wrong_person

<!-- UsageSnippet language="typescript" operationID="updatePerson" method="put" path="/v1_1/{cloud_name}/people/{person_id}" example="wrong_person" -->
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
  const result = await cloudinaryAssetMgmt.people.updatePerson("f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleUpdatePerson } from "@cloudinary/asset-management/funcs/peopleUpdatePerson.js";

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
  const res = await peopleUpdatePerson(cloudinaryAssetMgmt, "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2", {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleUpdatePerson failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `personId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the person.                                                                                                                                           | f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2                                                                                                               |
| `updatePersonRequest`                                                                                                                                                          | [components.UpdatePersonRequest](../../models/components/updatepersonrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The updated person attributes.                                                                                                                                                 |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.UpdatePersonResponse](../../models/components/updatepersonresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## inspectPeoplePermissions

Returns, for each requested person and action, whether the authenticated caller is permitted to perform that action.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="inspectPeoplePermissions" method="post" path="/v1_1/{cloud_name}/people/inspect" -->
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
  const result = await cloudinaryAssetMgmt.people.inspectPeoplePermissions({
    inspections: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetMgmtCore } from "@cloudinary/asset-management/core.js";
import { peopleInspectPeoplePermissions } from "@cloudinary/asset-management/funcs/peopleInspectPeoplePermissions.js";

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
  const res = await peopleInspectPeoplePermissions(cloudinaryAssetMgmt, {
    inspections: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("peopleInspectPeoplePermissions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `inspections`                                                                                                                                                                  | [components.PeopleInspectionTargets](../../models/components/peopleinspectiontargets.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | A map of inspectable types to the items and actions to inspect.                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PeopleInspectResponse](../../models/components/peopleinspectresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |