# DestroyByAssetIdRequest

## Example Usage

```typescript
import { DestroyByAssetIdRequest } from "@cloudinary/asset-management/models/components";

let value: DestroyByAssetIdRequest = {
  assetId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `assetId`                                          | *string*                                           | :heavy_check_mark:                                 | A 32-character hexadecimal asset ID.               |
| `invalidate`                                       | *boolean*                                          | :heavy_minus_sign:                                 | Whether to invalidate CDN cache. Default is false. |
| `notificationUrl`                                  | *string*                                           | :heavy_minus_sign:                                 | URL to receive completion notification.            |
| `callback`                                         | *string*                                           | :heavy_minus_sign:                                 | URL for redirect after operation completion.       |