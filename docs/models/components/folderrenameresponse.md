# FolderRenameResponse

The result of renaming or moving a folder.

## Example Usage

```typescript
import { FolderRenameResponse } from "@cloudinary/asset-management/models/components";

let value: FolderRenameResponse = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `folderDeleted`                                       | *boolean*                                             | :heavy_minus_sign:                                    | Whether the source folder was deleted after the move. |
| `moved`                                               | *number*                                              | :heavy_minus_sign:                                    | The number of assets successfully moved.              |
| `rejected`                                            | *number*                                              | :heavy_minus_sign:                                    | The number of assets rejected during the move.        |
| `failed`                                              | *number*                                              | :heavy_minus_sign:                                    | The number of assets that failed to move.             |