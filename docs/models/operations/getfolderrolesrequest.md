# GetFolderRolesRequest

## Example Usage

```typescript
import { GetFolderRolesRequest } from "@cloudinary/asset-management/models/operations";

let value: GetFolderRolesRequest = {
  folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints.                                             | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                                 |
| `permittedRoles`                                                                                                                                   | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether to include in the response the roles the authenticated user can assign on this folder, based on their permission level. Default: `false`.<br/> |                                                                                                                                                    |