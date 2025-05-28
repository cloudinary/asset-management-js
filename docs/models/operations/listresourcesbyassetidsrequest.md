# ListResourcesByAssetIDsRequest

## Example Usage

```typescript
import { ListResourcesByAssetIDsRequest } from "@cloudinary/assets/models/operations";

let value: ListResourcesByAssetIDsRequest = {
  assetIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `assetIds`                                                                                                       | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | List of asset IDs to retrieve (max 100).                                                                         |
| `resourceType`                                                                                                   | [operations.ListResourcesByAssetIDsResourceType](../../models/operations/listresourcesbyassetidsresourcetype.md) | :heavy_minus_sign:                                                                                               | Resource type (optional, can sometimes disambiguate).                                                            |
| `fields`                                                                                                         | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                 | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |