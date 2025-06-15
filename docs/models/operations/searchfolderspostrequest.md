# SearchFoldersPostRequest

## Example Usage

```typescript
import { SearchFoldersPostRequest } from "@cloudinary/asset-management/models/operations";

let value: SearchFoldersPostRequest = {
  sortBy: [
    "name:asc",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `expression`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The (Lucene-like) string expression specifying the search query.                       |                                                                                        |
| `sortBy`                                                                               | *string*[]                                                                             | :heavy_minus_sign:                                                                     | An array of key-value pairs for sorting. Each value is a key and direction (asc/desc). | [<br/>"name:asc"<br/>]                                                                 |
| `maxResults`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | Maximum number of folders to return (max 500, default 50).                             |                                                                                        |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | When more results are available, use the next_cursor value from the previous response. |                                                                                        |