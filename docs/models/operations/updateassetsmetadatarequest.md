# UpdateAssetsMetadataRequest

## Example Usage

```typescript
import { UpdateAssetsMetadataRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateAssetsMetadataRequest = {
  resourceType: "image",
  metadataUpdateRequest: {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    metadata: "in_stock_id=50|color_id=[\"green\",\"red\"]",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceType`                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                   | :heavy_check_mark:                                                                   | The type of resource (image, video, or raw).                                         |
| `metadataUpdateRequest`                                                              | [components.MetadataUpdateRequest](../../models/components/metadataupdaterequest.md) | :heavy_check_mark:                                                                   | The structured metadata values to assign and the assets to assign them to.           |