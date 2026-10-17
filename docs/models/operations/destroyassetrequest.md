# DestroyAssetRequest

## Example Usage

```typescript
import { DestroyAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: DestroyAssetRequest = {
  resourceType: "image",
  requestBody: {
    publicId: "<id>",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `resourceType`                                                                           | [components.ResourceType](../../models/components/resourcetype.md)                       | :heavy_check_mark:                                                                       | The type of resource (image, video, or raw).                                             |
| `requestBody`                                                                            | [operations.DestroyAssetRequestBody](../../models/operations/destroyassetrequestbody.md) | :heavy_check_mark:                                                                       | The asset to destroy and related options.                                                |