# ResourcesByContainerIdResponse

A page of assets contained in a folder, with pagination metadata.

## Example Usage

```typescript
import { ResourcesByContainerIdResponse } from "@cloudinary/asset-management/models/components";

let value: ResourcesByContainerIdResponse = {
  resources: [],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `resources`                                                                                  | [components.ResourceInternalResponse](../../models/components/resourceinternalresponse.md)[] | :heavy_check_mark:                                                                           | The assets contained in the folder.                                                          |
| `totalCount`                                                                                 | *number*                                                                                     | :heavy_minus_sign:                                                                           | The total number of assets in the folder.                                                    |
| `nextCursor`                                                                                 | *string*                                                                                     | :heavy_minus_sign:                                                                           | A cursor for retrieving the next page of results, when more results are available.           |