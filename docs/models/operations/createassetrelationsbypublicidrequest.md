# CreateAssetRelationsByPublicIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByPublicIdRequest } from "@cloudinary/assets/models/operations";

let value: CreateAssetRelationsByPublicIdRequest = {
  resourceType: "video",
  publicId: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                               | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                                         | :heavy_check_mark:                                                                                                           | The type the of asset.                                                                                                       |
| `type`                                                                                                                       | [operations.CreateAssetRelationsByPublicIdType](../../models/operations/createassetrelationsbypublicidtype.md)               | :heavy_check_mark:                                                                                                           | The delivery type of the asset.                                                                                              |
| `publicId`                                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The public ID of the asset.                                                                                                  |
| `requestBody`                                                                                                                | [operations.CreateAssetRelationsByPublicIdRequestBody](../../models/operations/createassetrelationsbypublicidrequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |