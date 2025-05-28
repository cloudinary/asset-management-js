# ListResourcesByAssetFolderRequest

## Example Usage

```typescript
import { ListResourcesByAssetFolderRequest } from "@cloudinary/assets/models/operations";

let value: ListResourcesByAssetFolderRequest = {
  assetFolder: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `assetFolder`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The full path of the asset folder.                                                                                     |
| `resourceType`                                                                                                         | [operations.ListResourcesByAssetFolderResourceType](../../models/operations/listresourcesbyassetfolderresourcetype.md) | :heavy_minus_sign:                                                                                                     | Filter by resource type within the folder.                                                                             |
| `nextCursor`                                                                                                           | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Cursor for pagination.                                                                                                 |
| `maxResults`                                                                                                           | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Maximum number of results to return (1-500).                                                                           |
| `direction`                                                                                                            | [components.Direction](../../models/components/direction.md)                                                           | :heavy_minus_sign:                                                                                                     | Sort direction.                                                                                                        |
| `fields`                                                                                                               | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                                                       | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |