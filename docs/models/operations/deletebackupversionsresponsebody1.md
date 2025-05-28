# DeleteBackupVersionsResponseBody1

Backup versions successfully deleted

## Example Usage

```typescript
import { DeleteBackupVersionsResponseBody1 } from "@cloudinary/assets/models/operations";

let value: DeleteBackupVersionsResponseBody1 = {
  assetId: "<id>",
  deletedVersionIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `assetId`                                               | *string*                                                | :heavy_check_mark:                                      | The asset ID of the resource.                           |
| `deletedVersionIds`                                     | *string*[]                                              | :heavy_check_mark:                                      | The list of version IDs that were successfully deleted. |