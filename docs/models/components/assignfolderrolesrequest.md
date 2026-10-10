# AssignFolderRolesRequest

## Example Usage

```typescript
import { AssignFolderRolesRequest } from "@cloudinary/asset-management/models/components";

let value: AssignFolderRolesRequest = {
  principal: {
    type: "apiKey",
    id: "799451857115779",
  },
  operation: "add",
  roles: [
    "cld::role::folder::contributor",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `principal`                                                                                                            | [components.Principal](../../models/components/principal.md)                                                           | :heavy_check_mark:                                                                                                     | The user, group, or API key whose role assignments are being modified.                                                 |                                                                                                                        |
| `operation`                                                                                                            | [components.Operation](../../models/components/operation.md)                                                           | :heavy_check_mark:                                                                                                     | The operation to perform on the principal’s role assignments. `add` grants the specified roles; `remove` revokes them. | add                                                                                                                    |
| `roles`                                                                                                                | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | The role IDs to add or remove.                                                                                         | [<br/>"cld::role::folder::viewer"<br/>]                                                                                |