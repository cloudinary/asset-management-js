# CreateAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateAssetRelationsByPublicIdRequest = {
  resourceType: "video",
  publicId: "sample",
  relateAssetsByPublicIdRequest: {
    assetsToRelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                                   | :heavy_check_mark:                                                                                   | The type of resource (image, video, or raw).                                                         |                                                                                                      |
| `type`                                                                                               | [components.DeliveryType](../../models/components/deliverytype.md)                                   | :heavy_check_mark:                                                                                   | The delivery type of the asset.                                                                      |                                                                                                      |
| `publicId`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | The public ID of the asset.                                                                          | sample                                                                                               |
| `relateAssetsByPublicIdRequest`                                                                      | [components.RelateAssetsByPublicIdRequest](../../models/components/relateassetsbypublicidrequest.md) | :heavy_check_mark:                                                                                   | The assets to relate by public ID.                                                                   |                                                                                                      |