# InvalidateByUrlsRequest

The set of delivery URLs whose derived assets should be invalidated.

## Example Usage

```typescript
import { InvalidateByUrlsRequest } from "@cloudinary/asset-management/models/components";

let value: InvalidateByUrlsRequest = {
  urls: [
    "https://res.cloudinary.com/demo/image/upload/w_100/sample.jpg",
  ],
};
```

## Fields

| Field                                                                                                                                                     | Type                                                                                                                                                      | Required                                                                                                                                                  | Description                                                                                                                                               | Example                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `urls`                                                                                                                                                    | *string*[]                                                                                                                                                | :heavy_check_mark:                                                                                                                                        | The delivery URLs whose cached derived assets should be invalidated.                                                                                      | [<br/>"https://res.cloudinary.com/demo/image/upload/w_100/sample.jpg"<br/>]                                                                               |
| `skipReporting`                                                                                                                                           | *boolean*                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                        | Whether to skip recording this invalidation against the product environment usage. If false, the invalidation is counted towards usage. Default is false. |                                                                                                                                                           |