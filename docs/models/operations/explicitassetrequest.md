# ExplicitAssetRequest

## Example Usage

```typescript
import { ExplicitAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: ExplicitAssetRequest = {
  resourceType: "raw",
  requestBody: {
    autoTranscription: true,
    headers: "X-Robots-Tag: noindex",
    moderation: "webpurify",
    publicId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resourceType`                                                                             | [components.ResourceType](../../models/components/resourcetype.md)                         | :heavy_check_mark:                                                                         | The type of resource.                                                                      |
| `requestBody`                                                                              | [operations.ExplicitAssetRequestBody](../../models/operations/explicitassetrequestbody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |