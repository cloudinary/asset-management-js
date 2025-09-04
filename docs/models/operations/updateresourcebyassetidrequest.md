# UpdateResourceByAssetIdRequest

## Example Usage

```typescript
import { UpdateResourceByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateResourceByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
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
    detection: "captioning",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: new Date("2024-03-15T09:00:00Z"),
        end: new Date("2024-06-30T23:59:59Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The asset ID of the resource. Must be a 32-character hexadecimal string.             | f4e6579cf84dd9cf5683b21f5b30c7d9                                                     |
| `resourceUpdateRequest`                                                              | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |