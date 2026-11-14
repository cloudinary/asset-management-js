# DownloadAssetByAssetIdRequest

## Example Usage

```typescript
import { DownloadAssetByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DownloadAssetByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `assetId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | The asset ID of the resource. Must be a 32-character hexadecimal string. | f4e6579cf84dd9cf5683b21f5b30c7d9                                         |
| `format`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | The format to convert the asset to before downloading.                   |                                                                          |
| `transformation`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | A transformation to apply to the asset before downloading.               |                                                                          |
| `attachment`                                                             | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to force download as an attachment.                              |                                                                          |
| `targetFilename`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | The desired filename for the downloaded file.                            |                                                                          |
| `streamingAttachment`                                                    | *boolean*                                                                | :heavy_minus_sign:                                                       | Whether to stream a video asset as an attachment.                        |                                                                          |
| `expiresAt`                                                              | *number*                                                                 | :heavy_minus_sign:                                                       | Unix timestamp indicating when the download URL should expire.           |                                                                          |