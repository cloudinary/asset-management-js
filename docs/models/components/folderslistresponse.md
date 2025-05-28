# FoldersListResponse

## Example Usage

```typescript
import { FoldersListResponse } from "@cloudinary/assets/models/components";

let value: FoldersListResponse = {
  folders: [
    {
      name: "a",
      path: "folder/a",
      externalId: "abcdefg1234567890",
    },
    {
      name: "b",
      path: "folder/b",
      externalId: "hijklmn0987654321",
    },
  ],
  nextCursor: null,
  totalCount: 2,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `folders`                                                | [components.Folder](../../models/components/folder.md)[] | :heavy_check_mark:                                       | The root folders in the product environment.             |
| `nextCursor`                                             | *string*                                                 | :heavy_check_mark:                                       | A cursor for pagination. Always null for root folders.   |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | The total number of root folders.                        |