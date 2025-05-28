# FoldersSearchResponse

## Example Usage

```typescript
import { FoldersSearchResponse } from "@cloudinary/assets/models/components";

let value: FoldersSearchResponse = {
  totalCount: 14,
  time: 1136,
  nextCursor:
    "0a37f8c9f65e79c1cbe782d47987ed108d9f9e0dad4b0666adbf4eac9a634191996204a0ef84ce7b3e0e",
  folders: [
    {
      name: "1_folder_param",
      path: "my_parent/1_folder_param",
      externalId: "c7c08f8ecf093353d669d2ea3123967c7",
    },
    {
      name: "a_folder_param",
      path: "my_parent/a_folder_param",
      externalId: "c7c08b736592482c1125ba5d689ab8779",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `totalCount`                                             | *number*                                                 | :heavy_check_mark:                                       | The total number of folders matching the search.         |
| `time`                                                   | *number*                                                 | :heavy_check_mark:                                       | The time taken to execute the search (ms).               |
| `nextCursor`                                             | *string*                                                 | :heavy_minus_sign:                                       | A cursor for pagination.                                 |
| `folders`                                                | [components.Folder](../../models/components/folder.md)[] | :heavy_check_mark:                                       | The folders matching the search.                         |