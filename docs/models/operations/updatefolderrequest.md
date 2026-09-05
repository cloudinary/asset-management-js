# UpdateFolderRequest

## Example Usage

```typescript
import { UpdateFolderRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateFolderRequest = {
  folder: "product/test",
  moveFolderRequest: {
    toFolder: "product1/test1",
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `folder`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. | product/test                                                                                                                                   |
| `moveFolderRequest`                                                                                                                            | [components.MoveFolderRequest](../../models/components/movefolderrequest.md)                                                                   | :heavy_check_mark:                                                                                                                             | The new folder path.                                                                                                                           |                                                                                                                                                |