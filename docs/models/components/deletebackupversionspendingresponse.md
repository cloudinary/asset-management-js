# DeleteBackupVersionsPendingResponse

Returned for `all=true&async=true`; the versions are deleted in the background.

## Example Usage

```typescript
import { DeleteBackupVersionsPendingResponse } from "@cloudinary/asset-management/models/components";

let value: DeleteBackupVersionsPendingResponse = {
  status: "pending",
  assetId: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                     | [components.DeleteBackupVersionsPendingResponseStatus](../../models/components/deletebackupversionspendingresponsestatus.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `assetId`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | A 32-character hexadecimal asset ID.                                                                                         |