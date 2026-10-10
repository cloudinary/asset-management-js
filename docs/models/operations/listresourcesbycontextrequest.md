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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                                   | :heavy_check_mark:                                                                                   | The type of resource (image, video, or raw).                                                         |
| `key`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | Context key to filter by.                                                                            |
| `value`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Context value to filter by.                                                                          |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Cursor for pagination.                                                                               |
| `maxResults`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of results to return (1-500).                                                         |
| `direction`                                                                                          | [components.DirectionEnum](../../models/components/directionenum.md)                                 | :heavy_minus_sign:                                                                                   | The sort direction for the results. Default is "desc".                                               |
| `fields`                                                                                             | *components.Fields*                                                                                  | :heavy_minus_sign:                                                                                   | Additional fields to include in the response. The fields public_id and asset_id are always included. |