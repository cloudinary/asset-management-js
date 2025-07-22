# CreateAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateAssetRelationsByPublicIdRequest = {
  resourceType: "video",
  type: "upload",
  publicId: "<id>",
  requestBody: {
    assetsToRelate: [
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
| `type`                                                                                                                       | [components.StorageType](../../models/components/storagetype.md)                                                             | :heavy_check_mark:                                                                                                           | The delivery type of the asset.                                                                                              |
| `publicId`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The public ID of the asset.                                                                                                  |
| `requestBody`                                                                                                                | [operations.CreateAssetRelationsByPublicIdRequestBody](../../models/operations/createassetrelationsbypublicidrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |