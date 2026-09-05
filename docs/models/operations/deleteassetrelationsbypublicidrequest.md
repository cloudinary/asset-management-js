# DeleteAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteAssetRelationsByPublicIdRequest = {
  resourceType: "video",
  publicId: "sample",
  unrelateAssetsByPublicIdRequest: {
    assetsToUnrelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
    ],
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                           | [components.ResourceType](../../models/components/resourcetype.md)                                       | :heavy_check_mark:                                                                                       | The type of resource (image, video, or raw).                                                             |                                                                                                          |
| `type`                                                                                                   | [components.DeliveryType](../../models/components/deliverytype.md)                                       | :heavy_check_mark:                                                                                       | The delivery type of the asset.                                                                          |                                                                                                          |
| `publicId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The public ID of the asset.                                                                              | sample                                                                                                   |
| `unrelateAssetsByPublicIdRequest`                                                                        | [components.UnrelateAssetsByPublicIdRequest](../../models/components/unrelateassetsbypublicidrequest.md) | :heavy_check_mark:                                                                                       | The assets to unrelate by public ID.                                                                     |                                                                                                          |