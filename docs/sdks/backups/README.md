# Backups

## Overview

Enables you to manage backup versions.

### Available Operations

* [deleteBackupVersions](#deletebackupversions) - Delete backed up versions

## deleteBackupVersions

Deletes specific backed up versions of an asset identified by asset ID (`version_ids` in the body), or every backed up version of the asset (`all=true`).
With `all=true` one call removes up to 100 versions; an asset with more versions is rejected with a 400 asking for `async=true`, which removes them in the background.
This operation is irreversible and deleted versions cannot be recovered.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteBackupVersions" method="delete" path="/v1_1/{cloud_name}/resources/backup/{asset_id}" -->
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
  const result = await cloudinaryAssetMgmt.backups.deleteBackupVersions("e9b44a374f66ad53a64a74c7398f7", false, false, {
    versionIds: [
      "5552aa57e67445552a3cdc1110a0115",
      "383e22a57167445552a3cdc16f0a0c85",
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
import { assetsDeleteBackupVersions } from "@cloudinary/asset-management/funcs/assetsDeleteBackupVersions.js";

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
  const res = await assetsDeleteBackupVersions(cloudinaryAssetMgmt, "e9b44a374f66ad53a64a74c7398f7", false, false, {
    versionIds: [
      "5552aa57e67445552a3cdc1110a0115",
      "383e22a57167445552a3cdc16f0a0c85",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("assetsDeleteBackupVersions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                               | Type                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                | Description                                                                                                                                                                                                             | Example                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                      | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                                                                                                                | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                                                                                                                        |
| `all`                                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                      | Set to `true` to delete every backed up version of the asset. Cannot be combined with `version_ids`.                                                                                                                    |                                                                                                                                                                                                                         |
| `async`                                                                                                                                                                                                                 | *boolean*                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                      | With `all=true`, set to `true` to delete the versions in the background; the response is `{"status":"pending"}` and completion is confirmed by listing the asset's versions later. Only valid together with `all=true`. |                                                                                                                                                                                                                         |
| `deleteBackupVersionsRequest`                                                                                                                                                                                           | [components.DeleteBackupVersionsRequest](../../models/components/deletebackupversionsrequest.md)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                      | The version IDs to delete. Required unless `all=true` is passed.                                                                                                                                                        |                                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                   |                                                                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                          |                                                                                                                                                                                                                         |
| `options.retries`                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                        |                                                                                                                                                                                                                         |

### Response

**Promise\<[operations.DeleteBackupVersionsResponse](../../models/operations/deletebackupversionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |