# ExplicitAssetRequest

## Example Usage

```typescript
import { ExplicitAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: ExplicitAssetRequest = {
  resourceType: "raw",
  explicitRequest: {
    autoTagging: 0.5,
    autoTranscription: true,
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
    backgroundRemoval: "cloudinary_ai",
    categorization: "google_tagging",
    detection: "coco_v2",
    format: "jpg",
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
    moderation: "aws_rek|duplicate:0|perception_point|manual",
    ocr: "adv_ocr",
    publicId: "<id>",
    rawConvert: "google_speech:vtt:en-US",
    regions:
      "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}",
    tags: "animal,dog",
    context: "alt=My image|caption=Nice photo",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    faceCoordinates: "10,20,150,130|213,345,82,61",
    customCoordinates: "10,20,150,130",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `resourceType`                                                           | [components.ResourceType](../../models/components/resourcetype.md)       | :heavy_check_mark:                                                       | The type of resource (image, video, or raw).                             |
| `explicitRequest`                                                        | [components.ExplicitRequest](../../models/components/explicitrequest.md) | :heavy_check_mark:                                                       | The asset and operations to apply.                                       |