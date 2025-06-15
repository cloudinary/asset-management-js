# UpdateResourceByPublicIdRequest

## Example Usage

```typescript
import { UpdateResourceByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateResourceByPublicIdRequest = {
  resourceType: "video",
  type: "dailymotion",
  publicId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                     | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)               | :heavy_check_mark:                                                                                 | The type the of asset.                                                                             |
| `type`                                                                                             | [operations.UpdateResourceByPublicIdType](../../models/operations/updateresourcebypublicidtype.md) | :heavy_check_mark:                                                                                 | The delivery type of the asset.                                                                    |
| `publicId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The public ID of the asset to update.                                                              |
| `resourceUpdateRequest`                                                                            | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |