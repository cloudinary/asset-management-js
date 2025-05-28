# ListResourceTagsRequest

## Example Usage

```typescript
import { ListResourceTagsRequest } from "@cloudinary/assets/models/operations";

let value: ListResourceTagsRequest = {
  resourceType: "raw",
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                          | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md)                    | :heavy_check_mark:                                                                                      | The type the of asset.                                                                                  |
| `prefix`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The prefix to use if you want to limit the returned tags to those that start with the specified prefix. |
| `nextCursor`                                                                                            | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Cursor for pagination.                                                                                  |
| `maxResults`                                                                                            | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Maximum number of results to return (1-500).                                                            |