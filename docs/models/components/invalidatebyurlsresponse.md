# InvalidateByUrlsResponse

The result of invalidating derived assets by delivery URLs.

## Example Usage

```typescript
import { InvalidateByUrlsResponse } from "@cloudinary/asset-management/models/components";

let value: InvalidateByUrlsResponse = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `cdnInvalidated`                                                                 | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether the assets were invalidated directly on the CDN.                         |
| `took`                                                                           | *number*                                                                         | :heavy_minus_sign:                                                               | The time the invalidation took, in seconds.                                      |
| `urls`                                                                           | *string*[]                                                                       | :heavy_minus_sign:                                                               | The delivery URLs that were invalidated.                                         |
| `unauthorizedUrls`                                                               | *string*[]                                                                       | :heavy_minus_sign:                                                               | The delivery URLs that were skipped because the caller lacked update permission. |