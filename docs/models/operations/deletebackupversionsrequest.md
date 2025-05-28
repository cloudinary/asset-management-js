# DeleteBackupVersionsRequest

## Example Usage

```typescript
import { DeleteBackupVersionsRequest } from "@cloudinary/assets/models/operations";

let value: DeleteBackupVersionsRequest = {
  assetId: "e9b44a374f66ad53a64a74c7398f7",
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
| `assetId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The asset ID of the resource.                                                                            | e9b44a374f66ad53a64a74c7398f7                                                                            |
| `requestBody`                                                                                            | [operations.DeleteBackupVersionsRequestBody](../../models/operations/deletebackupversionsrequestbody.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |