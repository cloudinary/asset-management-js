# Invalidation

## Example Usage

```typescript
import { Invalidation } from "@cloudinary/asset-management/models/components";

let value: Invalidation = {
  took: 25,
  urls: [
    "/image/upload/w_100/sample",
    "/image/upload/w_200/sample",
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `took`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Time taken for CDN invalidation in seconds                     | 25                                                             |
| `urls`                                                         | *string*[]                                                     | :heavy_minus_sign:                                             | Array of URLs that were invalidated                            | [<br/>"/image/upload/w_100/sample",<br/>"/image/upload/w_200/sample"<br/>] |