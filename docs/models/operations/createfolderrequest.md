# CreateFolderRequest

## Example Usage

```typescript
import { CreateFolderRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateFolderRequest = {
  folder: "product/test",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `folder`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. | product/test                                                                                                                                   |