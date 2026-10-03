# DestroyFolderRequest

## Example Usage

```typescript
import { DestroyFolderRequest } from "@cloudinary/asset-management/models/operations";

let value: DestroyFolderRequest = {
  folder: "product/test",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `folder`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. | product/test                                                                                                                                   |