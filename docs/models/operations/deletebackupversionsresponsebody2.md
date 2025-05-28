# DeleteBackupVersionsResponseBody2

Multi-status - some versions deleted successfully, others failed

## Example Usage

```typescript
import { DeleteBackupVersionsResponseBody2 } from "@cloudinary/assets/models/operations";

let value: DeleteBackupVersionsResponseBody2 = {
  assetId: "<id>",
  deletedVersionIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `assetId`                                                          | *string*                                                           | :heavy_check_mark:                                                 | The asset ID of the resource.                                      |
| `deletedVersionIds`                                                | *string*[]                                                         | :heavy_check_mark:                                                 | The list of version IDs that were successfully deleted.            |
| `failures`                                                         | [operations.Failure](../../models/operations/failure.md)[]         | :heavy_minus_sign:                                                 | The list of version IDs that failed to delete with error messages. |