# DerivedDestroyResponse

Response for derived resource deletion

## Example Usage

```typescript
import { DerivedDestroyResponse } from "@cloudinary/assets/models/components";

let value: DerivedDestroyResponse = {
  deleted: {
    "1234567890abcdef": "deleted",
    "fedcba0987654321": "not_found",
  },
  invalidation: {
    took: 25,
    urls: [
      "/image/upload/w_100/sample",
      "/image/upload/w_200/sample",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `deleted`                                                                | Record<string, [components.Deleted](../../models/components/deleted.md)> | :heavy_minus_sign:                                                       | Map of derived resource IDs to deletion status                           | {<br/>"1234567890abcdef": "deleted",<br/>"fedcba0987654321": "not_found"<br/>} |
| `unauthorized`                                                           | *string*[]                                                               | :heavy_minus_sign:                                                       | Array of derived resource IDs that were not authorized to be deleted     |                                                                          |
| `invalidation`                                                           | [components.Invalidation](../../models/components/invalidation.md)       | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |