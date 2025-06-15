# DeleteResourcesByPublicIdRequest

## Example Usage

```typescript
import { DeleteResourcesByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteResourcesByPublicIdRequest = {
  resourceType: "raw",
  type: "twitter",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                 | :heavy_check_mark:                                                                                   | The type the of asset.                                                                               |
| `type`                                                                                               | [operations.DeleteResourcesByPublicIdType](../../models/operations/deleteresourcesbypublicidtype.md) | :heavy_check_mark:                                                                                   | The delivery type of the asset.                                                                      |
| `deleteResourceByPublicIdsRequest`                                                                   | *components.DeleteResourceByPublicIdsRequestUnion*                                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |