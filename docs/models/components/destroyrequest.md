# DestroyRequest

## Example Usage

```typescript
import { DestroyRequest } from "@cloudinary/asset-management/models/components";

let value: DestroyRequest = {
  assetId: "<id>",
  timestamp: 541435,
  apiKey: "<value>",
  signature: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `assetId`                                          | *string*                                           | :heavy_check_mark:                                 | The ID of the asset to delete.                     |
| `timestamp`                                        | *number*                                           | :heavy_check_mark:                                 | The current Unix timestamp.                        |
| `apiKey`                                           | *string*                                           | :heavy_check_mark:                                 | The API key for authentication.                    |
| `signature`                                        | *string*                                           | :heavy_check_mark:                                 | The signed request signature.                      |
| `invalidate`                                       | *boolean*                                          | :heavy_minus_sign:                                 | Whether to invalidate CDN cache. Default is false. |
| `notificationUrl`                                  | *string*                                           | :heavy_minus_sign:                                 | URL to receive completion notification.            |
| `callback`                                         | *string*                                           | :heavy_minus_sign:                                 | URL for redirect after operation completion.       |