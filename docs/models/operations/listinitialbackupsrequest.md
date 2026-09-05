# ListInitialBackupsRequest

## Example Usage

```typescript
import { ListInitialBackupsRequest } from "@cloudinary/asset-management/models/operations";

let value: ListInitialBackupsRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `maxResults`                                                                                                   | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | The maximum number of results to return. Default is 10.                                                        |
| `nextCursor`                                                                                                   | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The cursor for pagination. Use the next_cursor value from a previous response to get the next page of results. |