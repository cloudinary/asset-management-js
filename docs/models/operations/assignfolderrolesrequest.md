# AssignFolderRolesRequest

## Example Usage

```typescript
import { AssignFolderRolesRequest } from "@cloudinary/asset-management/models/operations";

let value: AssignFolderRolesRequest = {
  folderId: "cd7e9d690a014c68ae8b58f08e090cb03a",
  assignFolderRolesRequest: {
    principal: {
      type: "apiKey",
      id: "799451857115779",
    },
    operation: "add",
    roles: [
      "cld::role::folder::contributor",
    ],
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `folderId`                                                                                                                        | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | The immutable identifier of the folder, returned by the Get root folders and Get subfolders endpoints.                            | cd7e9d690a014c68ae8b58f08e090cb03a                                                                                                |
| `assignFolderRolesRequest`                                                                                                        | [components.AssignFolderRolesRequest](../../models/components/assignfolderrolesrequest.md)                                        | :heavy_check_mark:                                                                                                                | The folder role assignments.                                                                                                      | {<br/>"principal": {<br/>"id": "799451857115779",<br/>"type": "apiKey"<br/>},<br/>"operation": "add",<br/>"roles": [<br/>"cld::role::folder::contributor"<br/>]<br/>} |