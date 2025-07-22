# DeleteResourcesByPublicIdRequest

## Example Usage

```typescript
import { DeleteResourcesByPublicIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteResourcesByPublicIdRequest = {
  resourceType: "raw",
  type: "facebook",
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
| `resourceType`                                                                   | [components.ResourceType](../../models/components/resourcetype.md)               | :heavy_check_mark:                                                               | The type of resource.                                                            |
| `type`                                                                           | [components.ExtendedStorageType](../../models/components/extendedstoragetype.md) | :heavy_check_mark:                                                               | The extended storage type of the resource.                                       |
| `deleteResourceByPublicIdsRequest`                                               | *components.DeleteResourceByPublicIdsRequestUnion*                               | :heavy_check_mark:                                                               | N/A                                                                              |