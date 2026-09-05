# SearchFoldersRequest

## Example Usage

```typescript
import { SearchFoldersRequest } from "@cloudinary/asset-management/models/operations";

let value: SearchFoldersRequest = {
  sortBy: [
    {
      "created_at": "desc",
    },
    {
      "public_id": "asc",
    },
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `expression`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The (Lucene-like) string expression specifying the search query. If not passed, returns all folders (up to max_results). |                                                                                                                          |
| `sortBy`                                                                                                                 | Record<string, [components.DirectionEnum](../../models/components/directionenum.md)>[]                                   | :heavy_minus_sign:                                                                                                       | Sort order for the results. Each item maps a field name to a direction.                                                  | [<br/>{<br/>"created_at": "desc"<br/>},<br/>{<br/>"public_id": "asc"<br/>}<br/>]                                         |
| `maxResults`                                                                                                             | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Maximum number of folders to return (max 500, default 50).                                                               |                                                                                                                          |
| `nextCursor`                                                                                                             | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results.           |                                                                                                                          |