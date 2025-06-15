# DestroyAssetRequest

## Example Usage

```typescript
import { DestroyAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: DestroyAssetRequest = {
  resourceType: "image",
  publicId: "<id>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resourceType`                                                                             | [operations.DestroyAssetResourceType](../../models/operations/destroyassetresourcetype.md) | :heavy_check_mark:                                                                         | The type of asset/resource to destroy                                                      |
| `publicId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | The public ID of the asset/resource to destroy                                             |
| `invalidate`                                                                               | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | Whether to invalidate CDN cached copies of the asset                                       |