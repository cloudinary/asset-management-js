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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                                   | :heavy_check_mark:                                                                                   | The type of resource (image, video, or raw).                                                         |
| `moderationKind`                                                                                     | [components.ModerationKind](../../models/components/moderationkind.md)                               | :heavy_check_mark:                                                                                   | The type of moderation to filter by.                                                                 |
| `moderationStatus`                                                                                   | [components.ModerationStatusParameter](../../models/components/moderationstatusparameter.md)         | :heavy_check_mark:                                                                                   | The moderation status to filter by.                                                                  |
| `fields`                                                                                             | *components.Fields*                                                                                  | :heavy_minus_sign:                                                                                   | Additional fields to include in the response. The fields public_id and asset_id are always included. |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Cursor for pagination.                                                                               |
| `maxResults`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of results to return (1-500).                                                         |
| `direction`                                                                                          | [components.DirectionEnum](../../models/components/directionenum.md)                                 | :heavy_minus_sign:                                                                                   | The sort direction for the results. Default is "desc".                                               |