# DeleteBackupVersionsResponse

## Example Usage

```typescript
import { DeleteBackupVersionsResponse } from "@cloudinary/asset-management/models/components";

let value: DeleteBackupVersionsResponse = {
  assetId: "<id>",
  deletedVersionIds: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `assetId`                                               | *string*                                                | :heavy_check_mark:                                      | A 32-character hexadecimal asset ID.                    |
| `deletedVersionIds`                                     | *string*[]                                              | :heavy_check_mark:                                      | The list of version IDs that were successfully deleted. |