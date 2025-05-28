# DerivedDestroyRequest

Request parameters for deleting derived resources

## Example Usage

```typescript
import { DerivedDestroyRequest } from "@cloudinary/assets/models/components";

let value: DerivedDestroyRequest = {
  derivedResourceIds: [
    "1234567890abcdef",
    "fedcba0987654321",
  ],
  invalidate: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `derivedResourceIds`                                               | *string*[]                                                         | :heavy_check_mark:                                                 | Array of derived resource IDs to delete specific derived resources | [<br/>"1234567890abcdef",<br/>"fedcba0987654321"<br/>]             |
| `invalidate`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether to invalidate the CDN cache for the deleted resources      | true                                                               |