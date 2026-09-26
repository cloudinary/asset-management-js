# FolderRolesResponse

## Example Usage

```typescript
import { FolderRolesResponse } from "@cloudinary/asset-management/models/components";

let value: FolderRolesResponse = {
  sharedWith: [
    {
      type: "user",
      id: "cec735fd65b7d541f35d9f661d130f",
      folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
      roles: [
        {
          id: "cld::role::folder::viewer",
          name: "Viewer",
          description: "View and download public assets.",
          inherited: false,
        },
      ],
    },
  ],
  permittedRoles: [
    {
      id: "cld::role::folder::viewer",
      name: "Viewer",
      description: "View and download public assets.",
    },
    {
      id: "cld::role::folder::contributor",
      name: "Contributor",
      description: "Viewer permissions, plus add assets and create subfolders.",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                  | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sharedWith`                                                                                                                                                                                           | [components.FolderRoleAssignment](../../models/components/folderroleassignment.md)[]                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                     | An array of principals (users, groups, or API keys) with their role assignments on this folder, including roles inherited from ancestor folders.                                                       |
| `permittedRoles`                                                                                                                                                                                       | [components.PermittedRole](../../models/components/permittedrole.md)[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                     | The roles the authenticated user can assign on this folder. Users can assign only roles at or below their own permission level for this folder. Returned only when `include_assignable_roles` is true. |