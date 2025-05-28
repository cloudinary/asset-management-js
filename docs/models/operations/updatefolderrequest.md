# UpdateFolderRequest

## Example Usage

```typescript
import { UpdateFolderRequest } from "@cloudinary/assets/models/operations";

let value: UpdateFolderRequest = {
  folder: "product/test",
  requestBody: {
    toFolder: "product1/test1",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `folder`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | product/test                                                                             |
| `requestBody`                                                                            | [operations.UpdateFolderRequestBody](../../models/operations/updatefolderrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |