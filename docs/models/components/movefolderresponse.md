# MoveFolderResponse

## Example Usage

```typescript
import { MoveFolderResponse } from "@cloudinary/asset-management/models/components";

let value: MoveFolderResponse = {
  from: {
    name: "<value>",
    path: "/opt/share",
  },
  to: {
    name: "<value>",
    path: "/usr/src",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `from`                                                                 | [components.FolderNamePath](../../models/components/foldernamepath.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `to`                                                                   | [components.FolderNamePath](../../models/components/foldernamepath.md) | :heavy_check_mark:                                                     | N/A                                                                    |