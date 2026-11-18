# RenameAssetRequest

## Example Usage

```typescript
import { RenameAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: RenameAssetRequest = {
  resourceType: "raw",
  requestBody: {
    fromPublicId: "<id>",
    toPublicId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `resourceType`                                                                         | [components.ResourceType](../../models/components/resourcetype.md)                     | :heavy_check_mark:                                                                     | The type of resource (image, video, or raw).                                           |
| `requestBody`                                                                          | [operations.RenameAssetRequestBody](../../models/operations/renameassetrequestbody.md) | :heavy_check_mark:                                                                     | The rename request parameters.                                                         |