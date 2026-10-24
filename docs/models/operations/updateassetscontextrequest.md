# UpdateAssetsContextRequest

## Example Usage

```typescript
import { UpdateAssetsContextRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateAssetsContextRequest = {
  resourceType: "video",
  contextUpdateRequest: {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "remove_all",
    context: "alt=My image|caption=Nice photo",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `resourceType`                                                                     | [components.ResourceType](../../models/components/resourcetype.md)                 | :heavy_check_mark:                                                                 | The type of resource (image, video, or raw).                                       |
| `contextUpdateRequest`                                                             | [components.ContextUpdateRequest](../../models/components/contextupdaterequest.md) | :heavy_check_mark:                                                                 | The context command, the metadata to apply, and the assets to apply it to.         |