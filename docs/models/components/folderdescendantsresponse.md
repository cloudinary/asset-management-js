# FolderDescendantsResponse

The descendant folders of a folder.

## Example Usage

```typescript
import { FolderDescendantsResponse } from "@cloudinary/asset-management/models/components";

let value: FolderDescendantsResponse = {
  folders: [
    {
      name: "a",
      path: "folder/a",
      externalId: "abcdefg1234567890",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `folders`                                                                            | [components.FolderDetailResponse](../../models/components/folderdetailresponse.md)[] | :heavy_check_mark:                                                                   | The descendant folders.                                                              |