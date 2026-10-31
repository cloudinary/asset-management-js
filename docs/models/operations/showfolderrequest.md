# ShowFolderRequest

## Example Usage

```typescript
import { ShowFolderRequest } from "@cloudinary/asset-management/models/operations";

let value: ShowFolderRequest = {
  folder: "product/test",
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `folder`                                                                                                                                       | *string*                                                                                                                                       | :heavy_check_mark:                                                                                                                             | The full path of the folder, including any nested folders. Must not be empty, and must not contain double slashes or leading/trailing slashes. | product/test                                                                                                                                   |