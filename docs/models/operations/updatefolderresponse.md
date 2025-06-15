# UpdateFolderResponse

Folder renamed successfully

## Example Usage

```typescript
import { UpdateFolderResponse } from "@cloudinary/asset-management/models/operations";

let value: UpdateFolderResponse = {
  from: {
    name: "test",
    path: "product/test",
  },
  to: {
    name: "test1",
    path: "product1/test1",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `from`                                             | [operations.From](../../models/operations/from.md) | :heavy_check_mark:                                 | N/A                                                |
| `to`                                               | [operations.To](../../models/operations/to.md)     | :heavy_check_mark:                                 | N/A                                                |