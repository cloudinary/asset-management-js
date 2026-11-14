# FolderByPathRequest

The path of the folder to retrieve.

## Example Usage

```typescript
import { FolderByPathRequest } from "@cloudinary/asset-management/models/components";

let value: FolderByPathRequest = {
  path: "product/test",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `path`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The full path of the folder to retrieve. Use an empty string for the root folder.                    | product/test                                                                                         |
| `caseSensitive`                                                                                      | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether to match the folder path case-sensitively. If false, the path is matched case-insensitively. |                                                                                                      |