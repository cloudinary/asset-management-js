# CreateFolderResponse

## Example Usage

```typescript
import { CreateFolderResponse } from "@cloudinary/asset-management/models/components";

let value: CreateFolderResponse = {
  name: "a",
  path: "folder/a",
  externalId: "abcdefg1234567890",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the folder.                                                                       |                                                                                               |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The full path of the folder.                                                                  |                                                                                               |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the folder.                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the folder was created.                                                    |                                                                                               |
| `success`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the operation was successful.                                                         | true                                                                                          |