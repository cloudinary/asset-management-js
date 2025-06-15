# UploadResponse

## Example Usage

```typescript
import { UploadResponse } from "@cloudinary/asset-management/models/components";

let value: UploadResponse = {
  url:
    "http://res.cloudinary.com/cld-docs/image/upload/v1719307544/gotjephlnz2jgiu20zni.jpg",
  secureUrl:
    "https://res.cloudinary.com/cld-docs/image/upload/v1719307544/gotjephlnz2jgiu20zni.jpg",
  publicId: "gotjephlnz2jgiu20zni",
  version: 1719307544,
  versionId: "7d2cc533bee9ff39f7da7414b61fce7e",
  signature: "d0b1009e3271a942836c25756ce3e04d205bf754",
  width: 1920,
  height: 1441,
  assetId: "3515c6000a548515f1134043f9785c2f",
  format: "jpg",
  resourceType: "image",
  createdAt: "2024-06-25T09:25:44Z",
  tags: [],
  pages: 1,
  bytes: 896838,
  type: "upload",
  etag: "2a2df1d2d2c3b675521e866599273083",
  placeholder: false,
  originalFilename: "sample",
  imageMetadata: {},
  illustrationScore: 0,
  semiTransparent: false,
  grayscale: false,
  eager: [
    {
      transformation: "c_pad,h_300,w_400",
      width: 400,
      height: 300,
      bytes: 26775,
      format: "jpg",
      url:
        "http://res.cloudinary.com/cld-docs/image/upload/c_pad,h_300,w_400/v1719307544/gotjephlnz2jgiu20zni.jpg",
      secureUrl:
        "https://res.cloudinary.com/cld-docs/image/upload/c_pad,h_300,w_400/v1719307544/gotjephlnz2jgiu20zni.jpg",
    },
  ],
  apiKey: "614335564976464",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `url`                                                                                              | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The URL of the uploaded file.                                                                      |
| `secureUrl`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The secure URL of the uploaded file.                                                               |
| `publicId`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The public ID of the uploaded file.                                                                |
| `version`                                                                                          | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The version of the uploaded file.                                                                  |
| `versionId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The version ID of the uploaded file.                                                               |
| `signature`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The signature of the uploaded file.                                                                |
| `width`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The width of the uploaded file.                                                                    |
| `height`                                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The height of the uploaded file.                                                                   |
| `assetId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The asset ID of the uploaded file. This is the ID of the uploaded file in the Cloudinary database. |
| `format`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The format of the uploaded file.                                                                   |
| `resourceType`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The type of resource that was uploaded.                                                            |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The date and time the file was uploaded.                                                           |
| `tags`                                                                                             | *string*[]                                                                                         | :heavy_minus_sign:                                                                                 | The tags of the uploaded file.                                                                     |
| `pages`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The number of pages in the uploaded file.                                                          |
| `bytes`                                                                                            | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The size of the uploaded file in bytes.                                                            |
| `type`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The type of the uploaded file.                                                                     |
| `etag`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The ETag of the uploaded file.                                                                     |
| `placeholder`                                                                                      | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the uploaded file is a placeholder.                                                        |
| `originalFilename`                                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The original filename of the uploaded file.                                                        |
| `imageMetadata`                                                                                    | [components.UploadResponseImageMetadata](../../models/components/uploadresponseimagemetadata.md)   | :heavy_minus_sign:                                                                                 | The image metadata of the uploaded file.                                                           |
| `illustrationScore`                                                                                | *number*                                                                                           | :heavy_minus_sign:                                                                                 | The illustration score of the uploaded file.                                                       |
| `semiTransparent`                                                                                  | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the uploaded file is semi-transparent.                                                     |
| `grayscale`                                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | Whether the uploaded file is grayscale.                                                            |
| `eager`                                                                                            | [components.Eager](../../models/components/eager.md)[]                                             | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `apiKey`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The API key used to upload the file.                                                               |