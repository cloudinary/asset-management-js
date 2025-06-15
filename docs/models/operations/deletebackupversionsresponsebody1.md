# DeleteBackupVersionsResponseBody1

Backup versions successfully deleted

## Example Usage

```typescript
import { DeleteBackupVersionsResponseBody1 } from "@cloudinary/asset-management/models/operations";

let value: DeleteBackupVersionsResponseBody1 = {
  assetId: "<id>",
  deletedVersionIds: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `assetId`                                               | *string*                                                | :heavy_check_mark:                                      | The asset ID of the resource.                           |
| `deletedVersionIds`                                     | *string*[]                                              | :heavy_check_mark:                                      | The list of version IDs that were successfully deleted. |