# UpdateAssetsTagsRequest

## Example Usage

```typescript
import { UpdateAssetsTagsRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateAssetsTagsRequest = {
  resourceType: "video",
  tagsUpdateRequest: {
    publicIds: [
      "sample",
      "product_image",
      "banner_2023",
    ],
    command: "remove_all",
    tags: [
      "animal",
      "dog",
    ],
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `resourceType`                                                               | [components.ResourceType](../../models/components/resourcetype.md)           | :heavy_check_mark:                                                           | The type of resource (image, video, or raw).                                 |
| `tagsUpdateRequest`                                                          | [components.TagsUpdateRequest](../../models/components/tagsupdaterequest.md) | :heavy_check_mark:                                                           | The tag command, the tags to apply, and the assets to apply them to.         |