# DeleteAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByPublicIdRequest } from "@cloudinary/assets/models/operations";

let value: DeleteAssetRelationsByPublicIdRequest = {
  resourceType: "video",
  type: "upload",
  publicId: "<id>",
  requestBody: {
    assetsToUnrelate: [
      "raw/upload/dog_subtitles.srt",
      "image/authenticated/dog_license",
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                               | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                         | :heavy_check_mark:                                                                                                           | The type the of asset.                                                                                                       |
| `type`                                                                                                                       | [operations.DeleteAssetRelationsByPublicIdType](../../models/operations/deleteassetrelationsbypublicidtype.md)               | :heavy_check_mark:                                                                                                           | The delivery type of the asset.                                                                                              |
| `publicId`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The public ID of the asset.                                                                                                  |
| `requestBody`                                                                                                                | [operations.DeleteAssetRelationsByPublicIdRequestBody](../../models/operations/deleteassetrelationsbypublicidrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |