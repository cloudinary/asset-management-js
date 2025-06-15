# ListResourcesByContextRequest

## Example Usage

```typescript
import { ListResourcesByContextRequest } from "@cloudinary/asset-management/models/operations";

let value: ListResourcesByContextRequest = {
  resourceType: "video",
  key: "<key>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceType`                                                                       | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md) | :heavy_check_mark:                                                                   | The type the of asset.                                                               |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Context key to filter by.                                                            |
| `value`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Context value to filter by.                                                          |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Cursor for pagination.                                                               |
| `maxResults`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | Maximum number of results to return (1-500).                                         |
| `direction`                                                                          | [components.Direction](../../models/components/direction.md)                         | :heavy_minus_sign:                                                                   | Sort direction.                                                                      |
| `fields`                                                                             | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                     | :heavy_minus_sign:                                                                   | N/A                                                                                  |