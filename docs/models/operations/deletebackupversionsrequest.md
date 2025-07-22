# DeleteBackupVersionsRequest

## Example Usage

```typescript
import { DeleteBackupVersionsRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteBackupVersionsRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  requestBody: {
    versionIds: [
      "5552aa57e67445552a3cdc1110a0115",
      "383e22a57167445552a3cdc16f0a0c85",
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The asset ID of the resource. Must be a 32-character hexadecimal string.                                 | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                         |
| `requestBody`                                                                                            | [operations.DeleteBackupVersionsRequestBody](../../models/operations/deletebackupversionsrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |