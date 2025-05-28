# ExplicitAssetRequest

## Example Usage

```typescript
import { ExplicitAssetRequest } from "@cloudinary/assets/models/operations";

let value: ExplicitAssetRequest = {
  resourceType: "raw",
  requestBody: {
    headers: "X-Robots-Tag: noindex",
    moderation: "webpurify",
    publicId: "<id>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                     | [operations.ExplicitAssetResourceType](../../models/operations/explicitassetresourcetype.md)                       | :heavy_check_mark:                                                                                                 | The type of resource to apply operations on. "image" for images, "video" for videos, or "raw" for non-media files. |
| `requestBody`                                                                                                      | [operations.ExplicitAssetRequestBody](../../models/operations/explicitassetrequestbody.md)                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |