# TextResponse

Text image created successfully

## Example Usage

```typescript
import { TextResponse } from "@cloudinary/assets/models/operations";

let value: TextResponse = {
  assetId: "<id>",
  publicId: "<id>",
  version: 9,
  versionId: "<id>",
  signature: "<value>",
  width: 499655,
  height: 424763,
  format: "<value>",
  resourceType: "<value>",
  createdAt: new Date("2025-10-13T08:50:59.670Z"),
  bytes: 499263,
  type: "<value>",
  url: "https://worthy-cap.info",
  secureUrl: "https://sore-hope.org/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `assetId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the asset.                                                           |
| `publicId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The public identifier of the asset.                                                           |
| `version`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The version number of the asset.                                                              |
| `versionId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The version identifier of the asset.                                                          |
| `signature`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The signature for the asset.                                                                  |
| `width`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The width of the generated image in pixels.                                                   |
| `height`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | The height of the generated image in pixels.                                                  |
| `format`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The format of the generated image.                                                            |
| `resourceType`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of resource (image).                                                                 |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The creation timestamp.                                                                       |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Array of tags assigned to the asset.                                                          |
| `pages`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Number of pages in the asset.                                                                 |
| `bytes`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | Size of the asset in bytes.                                                                   |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The storage type of the asset.                                                                |
| `etag`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ETag of the asset.                                                                        |
| `placeholder`                                                                                 | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether the asset is a placeholder.                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The HTTP URL for accessing the asset.                                                         |
| `secureUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The HTTPS URL for accessing the asset.                                                        |
| `displayName`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the asset.                                                                |
| `accessMode`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | The access mode of the asset.                                                                 |
| `accessControl`                                                                               | [operations.AccessControl](../../models/operations/accesscontrol.md)[]                        | :heavy_minus_sign:                                                                            | Access control settings for the asset.                                                        |
| `regions`                                                                                     | [operations.Region](../../models/operations/region.md)[]                                      | :heavy_minus_sign:                                                                            | Region information for the asset.                                                             |
| `moderation`                                                                                  | [operations.TextModeration](../../models/operations/textmoderation.md)                        | :heavy_minus_sign:                                                                            | Moderation information for the asset.                                                         |
| `info`                                                                                        | [operations.Info](../../models/operations/info.md)                                            | :heavy_minus_sign:                                                                            | Additional information about the asset.                                                       |