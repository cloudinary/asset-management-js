# FolderRoleAssignment

## Example Usage

```typescript
import { FolderRoleAssignment } from "@cloudinary/asset-management/models/components";

let value: FolderRoleAssignment = {
  type: "apiKey",
  id: "cec735fd65b7d541f35d9f661d130f",
  folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
  roles: [],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.PrincipalType](../../models/components/principaltype.md)                                                     | :heavy_check_mark:                                                                                                       | The type of principal.                                                                                                   |                                                                                                                          |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The unique identifier of the principal. For `apiKey`, provide the API key value.                                         | cec735fd65b7d541f35d9f661d130f                                                                                           |
| `folderId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the folder where this role assignment was defined, either the requested folder or one of its ancestor folders. | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                       |
| `roles`                                                                                                                  | [components.FolderRole](../../models/components/folderrole.md)[]                                                         | :heavy_check_mark:                                                                                                       | The roles assigned to this principal for this folder.                                                                    |                                                                                                                          |