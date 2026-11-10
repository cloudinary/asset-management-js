# RenameAssetRequestBody

The rename request parameters.

## Example Usage

```typescript
import { RenameAssetRequestBody } from "@cloudinary/asset-management/models/operations";

let value: RenameAssetRequestBody = {
  fromPublicId: "<id>",
  toPublicId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `fromPublicId`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | The public ID of the asset to rename.                                                            |
| `toPublicId`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | The new public ID for the asset.                                                                 |
| `type`                                                                                           | *components.UploadDeliveryType*                                                                  | :heavy_minus_sign:                                                                               | The current delivery type of the asset.                                                          |
| `toType`                                                                                         | *components.UploadDeliveryType*                                                                  | :heavy_minus_sign:                                                                               | The target delivery type for the renamed asset. If omitted, the delivery type remains unchanged. |
| `overwrite`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to overwrite the target asset if it already exists. Default is false.                    |
| `invalidate`                                                                                     | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to invalidate CDN cache copies of the renamed asset. Default is false.                   |
| `context`                                                                                        | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to include contextual metadata in the response. Default is false.                        |
| `metadata`                                                                                       | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether to include structured metadata in the response. Default is false.                        |
| `notificationUrl`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | URL to notify when the operation is complete.                                                    |