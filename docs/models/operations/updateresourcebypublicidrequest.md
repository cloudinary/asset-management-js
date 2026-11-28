# UpdateResourceByPublicIdRequest

## Example Usage

```typescript
import { UpdateResourceByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateResourceByPublicIdRequest = {
  resourceType: "video",
  type: "media_optimization",
  publicId: "sample",
  resourceUpdateRequest: {
    displayName: "My Product Image",
    assetFolder: "products/summer",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130|213,345,82,61",
    regions:
      "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    qualityOverride: "80:420",
    detection: "captioning",
    ocr: "adv_ocr",
    rawConvert: "google_speech",
    categorization: "google_tagging",
    backgroundRemoval: "cloudinary_ai",
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: "2024-03-15T09:00:00Z",
        end: "2024-06-30T23:59:59Z",
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceType`                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                   | :heavy_check_mark:                                                                   | The type of resource (image, video, or raw).                                         |                                                                                      |
| `type`                                                                               | [components.DeliveryTypeAllEnum](../../models/components/deliverytypeallenum.md)     | :heavy_check_mark:                                                                   | The delivery type of the asset.                                                      |                                                                                      |
| `publicId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The public ID of the asset.                                                          | sample                                                                               |
| `resourceUpdateRequest`                                                              | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md) | :heavy_check_mark:                                                                   | The asset attributes to update.                                                      |                                                                                      |