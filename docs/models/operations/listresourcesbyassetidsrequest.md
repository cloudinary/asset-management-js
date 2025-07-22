# ListResourcesByAssetIDsRequest

## Example Usage

```typescript
import { ListResourcesByAssetIDsRequest } from "@cloudinary/asset-management/models/operations";

let value: ListResourcesByAssetIDsRequest = {
  assetIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `assetIds`                                                         | *string*[]                                                         | :heavy_check_mark:                                                 | List of asset IDs to retrieve (max 100).                           |
| `resourceType`                                                     | [components.ResourceType](../../models/components/resourcetype.md) | :heavy_minus_sign:                                                 | Resource type (optional, can sometimes disambiguate).              |
| `fields`                                                           | [components.FieldsSpec](../../models/components/fieldsspec.md)[]   | :heavy_minus_sign:                                                 | N/A                                                                |