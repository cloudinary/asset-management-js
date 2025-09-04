# DeleteAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteAssetRelationsByPublicIdRequest = {
  resourceType: "video",
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
| `resourceType`                                                                                                               | [components.ResourceType](../../models/components/resourcetype.md)                                                           | :heavy_check_mark:                                                                                                           | The type of resource.                                                                                                        |
| `type`                                                                                                                       | [components.StorageTypeParameter](../../models/components/storagetypeparameter.md)                                           | :heavy_check_mark:                                                                                                           | The delivery type of the asset.                                                                                              |
| `publicId`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The public ID of the asset.                                                                                                  |
| `requestBody`                                                                                                                | [operations.DeleteAssetRelationsByPublicIdRequestBody](../../models/operations/deleteassetrelationsbypublicidrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |