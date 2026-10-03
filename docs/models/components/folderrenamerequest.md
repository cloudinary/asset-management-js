# FolderRenameRequest

The source and destination folder paths.

## Example Usage

```typescript
import { FolderRenameRequest } from "@cloudinary/asset-management/models/components";

let value: FolderRenameRequest = {
  path: "product/test",
  toPath: "product/test_renamed",
  resourcesLimit: 100000,
  resourcesSizeLimit: 1099511627776,
  maxDerived: 1000000,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                  | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The full path of the folder to rename or move.                                                                          | product/test                                                                                                            |
| `toPath`                                                                                                                | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The new full path for the folder.                                                                                       | product/test_renamed                                                                                                    |
| `resourcesLimit`                                                                                                        | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The maximum number of assets that may be moved by the rename. Assets beyond this limit cause the rename to be rejected. | 100000                                                                                                                  |
| `resourcesSizeLimit`                                                                                                    | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The maximum total size, in bytes, of the assets that may be moved by the rename.                                        | 1099511627776                                                                                                           |
| `maxDerived`                                                                                                            | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The maximum number of derived assets that may be moved by the rename.                                                   | 1000000                                                                                                                 |