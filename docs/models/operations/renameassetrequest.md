# RenameAssetRequest

## Example Usage

```typescript
import { RenameAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: RenameAssetRequest = {
  resourceType: "raw",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `resourceType`                                                                           | [operations.RenameAssetResourceType](../../models/operations/renameassetresourcetype.md) | :heavy_check_mark:                                                                       | The type of resource to rename. "image", "video", or "raw".                              |
| `requestBody`                                                                            | [operations.RenameAssetRequestBody](../../models/operations/renameassetrequestbody.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |