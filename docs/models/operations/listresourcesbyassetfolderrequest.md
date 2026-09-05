# ListResourcesByAssetFolderRequest

## Example Usage

```typescript
import { ListResourcesByAssetFolderRequest } from "@cloudinary/asset-management/models/operations";

let value: ListResourcesByAssetFolderRequest = {
  assetFolder: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `assetFolder`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The full path of the asset folder.                                                                   |
| `resourceType`                                                                                       | [components.ResourceType](../../models/components/resourcetype.md)                                   | :heavy_minus_sign:                                                                                   | Resource type filter.                                                                                |
| `nextCursor`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Cursor for pagination.                                                                               |
| `maxResults`                                                                                         | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Maximum number of results to return (1-500).                                                         |
| `direction`                                                                                          | [components.DirectionEnum](../../models/components/directionenum.md)                                 | :heavy_minus_sign:                                                                                   | The sort direction for the results. Default is "desc".                                               |
| `fields`                                                                                             | *components.Fields*                                                                                  | :heavy_minus_sign:                                                                                   | Additional fields to include in the response. The fields public_id and asset_id are always included. |