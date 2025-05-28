# Backups
(*backups*)

## Overview

Enables you to manage backup versions.

### Available Operations

* [deleteBackupVersions](#deletebackupversions) - Delete backed up versions

## deleteBackupVersions

Deletes specific backed up versions of an asset identified by asset ID.
This operation is irreversible and deleted versions cannot be recovered.


### Example Usage

```typescript
import { CloudinaryAssets } from "@cloudinary/assets";

const cloudinaryAssets = new CloudinaryAssets({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.backups.deleteBackupVersions({
    assetId: "e9b44a374f66ad53a64a74c7398f7",
    requestBody: {
      versionIds: [
        "5552aa57e67445552a3cdc1110a0115",
        "383e22a57167445552a3cdc16f0a0c85",
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinaryAssetsCore } from "@cloudinary/assets/core.js";
import { backupsDeleteBackupVersions } from "@cloudinary/assets/funcs/backupsDeleteBackupVersions.js";

// Use `CloudinaryAssetsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinaryAssets = new CloudinaryAssetsCore({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await backupsDeleteBackupVersions(cloudinaryAssets, {
    assetId: "e9b44a374f66ad53a64a74c7398f7",
    requestBody: {
      versionIds: [
        "5552aa57e67445552a3cdc1110a0115",
        "383e22a57167445552a3cdc16f0a0c85",
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteBackupVersionsRequest](../../models/operations/deletebackupversionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteBackupVersionsResponse](../../models/operations/deletebackupversionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |