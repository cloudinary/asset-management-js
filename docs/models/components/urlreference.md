# UrlReference

A reference to an external image by HTTPS URL.

## Example Usage

```typescript
import { UrlReference } from "@cloudinary/asset-management/models/components";

let value: UrlReference = {
  sourceType: "url",
  url: "https://res.cloudinary.com/demo/image/upload/docs/shoes.jpg",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `sourceType`                                                 | *"url"*                                                      | :heavy_check_mark:                                           | Discriminator identifying this as an external-URL reference. | url                                                          |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | Public HTTPS URL of the reference image.                     | https://example.com/product.png                              |