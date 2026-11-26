# DeleteResourcesByPublicIdRequest

## Example Usage

```typescript
import { DeleteResourcesByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteResourcesByPublicIdRequest = {
  resourceType: "raw",
  type: "twitter_name",
  deleteResourceByPublicIdsRequest: {
    publicIds: [],
    resourceType: "image",
    keepOriginal: false,
    invalidate: false,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resourceType`                                                                   | [components.ResourceType](../../models/components/resourcetype.md)               | :heavy_check_mark:                                                               | The type of resource (image, video, or raw).                                     |
| `type`                                                                           | [components.DeliveryTypeAllEnum](../../models/components/deliverytypeallenum.md) | :heavy_check_mark:                                                               | The delivery type of the asset.                                                  |
| `deleteResourceByPublicIdsRequest`                                               | *components.DeleteResourceByPublicIdsRequestUnion*                               | :heavy_check_mark:                                                               | The public IDs and options for the resources to delete.                          |