# ListResourcesByModerationKindAndStatusRequest

## Example Usage

```typescript
import { ListResourcesByModerationKindAndStatusRequest } from "@cloudinary/asset-management/models/operations";

let value: ListResourcesByModerationKindAndStatusRequest = {
  resourceType: "video",
  moderationKind: "duplicate",
  moderationStatus: "queued",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [components.ResourceType](../../models/components/resourcetype.md)         | :heavy_check_mark:                                                         | The type of resource.                                                      |
| `moderationKind`                                                           | [operations.ModerationKind](../../models/operations/moderationkind.md)     | :heavy_check_mark:                                                         | N/A                                                                        |
| `moderationStatus`                                                         | [operations.ModerationStatus](../../models/operations/moderationstatus.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `fields`                                                                   | [components.FieldsSpec](../../models/components/fieldsspec.md)[]           | :heavy_minus_sign:                                                         | N/A                                                                        |
| `nextCursor`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | Cursor for pagination.                                                     |
| `maxResults`                                                               | *number*                                                                   | :heavy_minus_sign:                                                         | Maximum number of results to return (1-500).                               |
| `direction`                                                                | [components.Direction](../../models/components/direction.md)               | :heavy_minus_sign:                                                         | Sort direction.                                                            |