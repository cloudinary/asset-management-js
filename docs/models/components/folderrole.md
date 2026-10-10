# FolderRole

## Example Usage

```typescript
import { FolderRole } from "@cloudinary/asset-management/models/components";

let value: FolderRole = {
  id: "cld::role::folder::viewer",
  name: "Manager",
  description:
    "Editor permissions, plus delete, share, and full download access.",
  inherited: false,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The unique identifier of the role.                                                                                          | cld::role::folder::viewer                                                                                                   |
| `name`                                                                                                                      | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | The human-readable name of the role.                                                                                        | Manager                                                                                                                     |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | A summary of the permissions granted by this role.                                                                          | Editor permissions, plus delete, share, and full download access.                                                           |
| `inherited`                                                                                                                 | *boolean*                                                                                                                   | :heavy_check_mark:                                                                                                          | Indicates whether this role is inherited from an ancestor folder. If false, it's assigned directly to the requested folder. | false                                                                                                                       |