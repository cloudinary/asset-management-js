# DownloadAssetRequest

## Example Usage

```typescript
import { DownloadAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: DownloadAssetRequest = {
  resourceType: "video",
  publicId: "<id>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `resourceType`                                                                   | [components.ResourceType](../../models/components/resourcetype.md)               | :heavy_check_mark:                                                               | The type of resource (image, video, or raw).                                     |
| `publicId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The public ID of the asset.                                                      |
| `format`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | The format to convert the asset to before downloading.                           |
| `type`                                                                           | [components.ManagedDeliveryType](../../models/components/manageddeliverytype.md) | :heavy_minus_sign:                                                               | The delivery type of the asset. Default is "upload".                             |
| `expiresAt`                                                                      | *number*                                                                         | :heavy_minus_sign:                                                               | Unix timestamp indicating when the download URL should expire.                   |
| `attachment`                                                                     | *boolean*                                                                        | :heavy_minus_sign:                                                               | Whether to force download as an attachment.                                      |
| `targetFilename`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The desired filename for the downloaded file.                                    |
| `transformation`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | A transformation to apply to the asset before downloading.                       |