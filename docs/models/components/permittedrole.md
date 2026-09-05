# PermittedRole

## Example Usage

```typescript
import { PermittedRole } from "@cloudinary/asset-management/models/components";

let value: PermittedRole = {
  id: "cld::role::folder::manager",
  name: "Manager",
  description:
    "Editor permissions, plus delete, share, and full download access.",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | The role identifier.                                              | cld::role::folder::manager                                        |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The human-readable name of the role.                              | Manager                                                           |
| `description`                                                     | *string*                                                          | :heavy_check_mark:                                                | A description of the role's permissions.                          | Editor permissions, plus delete, share, and full download access. |