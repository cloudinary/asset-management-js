# Thumbnail

The thumbnail image for a person.

## Example Usage

```typescript
import { Thumbnail } from "@cloudinary/asset-management/models/components";

let value: Thumbnail = {
  assetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  boundingBox: [
    10,
    20,
    100,
    150,
  ],
  url: "https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg",
  resourceType: "image",
  type: "upload",
  publicId: "sample",
  version: 1234567890,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `assetId`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | The external ID of the asset used for the thumbnail.                         | 2262b0b5eb88f1fd7724e29b0e57d730                                             |
| `boundingBox`                                                                | *number*[]                                                                   | :heavy_minus_sign:                                                           | The bounding box coordinates [x, y, width, height] of the face in the asset. | [<br/>10,<br/>20,<br/>100,<br/>150<br/>]                                     |
| `url`                                                                        | *string*                                                                     | :heavy_minus_sign:                                                           | The secure URL of the thumbnail asset.                                       | https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg          |
| `resourceType`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | The resource type of the asset.                                              | image                                                                        |
| `type`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The kind/type of the asset.                                                  | upload                                                                       |
| `publicId`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | The public ID of the asset.                                                  | sample                                                                       |
| `version`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | The version number of the asset.                                             | 1234567890                                                                   |