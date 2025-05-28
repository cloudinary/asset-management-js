# UpdateResourceByAssetIdRequest

## Example Usage

```typescript
import { UpdateResourceByAssetIdRequest } from "@cloudinary/assets/models/operations";

let value: UpdateResourceByAssetIdRequest = {
  assetId: "<id>",
  resourceUpdateRequest: {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "product,summer,sale",
    context: "alt=My product image|caption=Summer collection",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions: "{\"name1\":[[1,2],[3,4]],\"name2\":[[5,6],[7,8],[9,10]]}",
    qualityOverride: "80:420",
    detection: "watermark-detection",
    accessControl:
      "[{\"access_type\":\"anonymous\",\"start\":\"2017-12-15T12:00Z\",\"end\":\"2018-01-20T12:00Z\"}]",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The unique asset ID of the asset to update.                                          |
| `resourceUpdateRequest`                                                              | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |