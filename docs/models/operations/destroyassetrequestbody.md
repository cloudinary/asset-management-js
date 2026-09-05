# DestroyAssetRequestBody

The asset to destroy and related options.

## Example Usage

```typescript
import { DestroyAssetRequestBody } from "@cloudinary/asset-management/models/operations";

let value: DestroyAssetRequestBody = {
  publicId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `publicId`                                                    | *string*                                                      | :heavy_check_mark:                                            | The public ID of the asset to destroy.                        |
| `type`                                                        | *components.DeliveryTypeAll*                                  | :heavy_minus_sign:                                            | All supported delivery types.                                 |
| `invalidate`                                                  | *boolean*                                                     | :heavy_minus_sign:                                            | Whether to invalidate CDN cached copies of the asset.         |
| `notificationUrl`                                             | *string*                                                      | :heavy_minus_sign:                                            | URL to receive a notification when the operation is complete. |