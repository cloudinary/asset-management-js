# UpdateResourceByPublicIdRequest

## Example Usage

```typescript
import { UpdateResourceByPublicIdRequest } from "@cloudinary/assets/models/operations";

let value: UpdateResourceByPublicIdRequest = {
  resourceType: "video",
  type: "dailymotion",
  publicId: "<id>",
  resourceUpdateRequest: {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "auto:best",
    detection: "coco_v2",
    accessControl: "[{\"access_type\":\"token\"}]",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                     | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)               | :heavy_check_mark:                                                                                 | The type the of asset.                                                                             |
| `type`                                                                                             | [operations.UpdateResourceByPublicIdType](../../models/operations/updateresourcebypublicidtype.md) | :heavy_check_mark:                                                                                 | The delivery type of the asset.                                                                    |
| `publicId`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | The public ID of the asset to update.                                                              |
| `resourceUpdateRequest`                                                                            | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |