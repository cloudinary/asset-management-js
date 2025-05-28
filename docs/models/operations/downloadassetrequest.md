# DownloadAssetRequest

## Example Usage

```typescript
import { DownloadAssetRequest } from "@cloudinary/assets/models/operations";

let value: DownloadAssetRequest = {
  resourceType: "video",
  publicId: "<id>",
  apiKey: "<value>",
  signature: "<value>",
  timestamp: 924589,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `resourceType`                                                                       | [components.ResourceTypeParameter](../../models/components/resourcetypeparameter.md) | :heavy_check_mark:                                                                   | The type the of asset.                                                               |
| `publicId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | The public ID of the asset to download.                                              |
| `format`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | The format to convert the asset to before downloading.                               |
| `type`                                                                               | [operations.DownloadAssetType](../../models/operations/downloadassettype.md)         | :heavy_minus_sign:                                                                   | The storage type of the asset. Defaults to 'upload'.                                 |
| `expiresAt`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | Unix timestamp indicating when the download URL should expire.                       |
| `attachment`                                                                         | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether to force download as an attachment.                                          |
| `targetFilename`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | The desired filename for the downloaded file.                                        |
| `transformation`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | A transformation to apply to the asset before downloading.                           |
| `apiKey`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `signature`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `timestamp`                                                                          | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |