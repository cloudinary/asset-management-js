# DeleteBackupVersionsPartialResponse

## Example Usage

```typescript
import { DeleteBackupVersionsPartialResponse } from "@cloudinary/asset-management/models/components";

let value: DeleteBackupVersionsPartialResponse = {
  assetId: "<id>",
  deletedVersionIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | A 32-character hexadecimal asset ID.                                                 |
| `deletedVersionIds`                                                                  | *string*[]                                                                           | :heavy_check_mark:                                                                   | The list of version IDs that were successfully deleted.                              |
| `failures`                                                                           | [components.BackupVersionFailure](../../models/components/backupversionfailure.md)[] | :heavy_minus_sign:                                                                   | The list of version IDs that failed to delete with error messages.                   |