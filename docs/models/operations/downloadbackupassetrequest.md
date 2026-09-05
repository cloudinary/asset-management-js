# DownloadBackupAssetRequest

## Example Usage

```typescript
import { DownloadBackupAssetRequest } from "@cloudinary/asset-management/models/operations";

let value: DownloadBackupAssetRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  versionId: "a3978316b0045e5eaf198f4d6885ca35",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The asset ID of the resource. Must be a 32-character hexadecimal string.             | f4e6579cf84dd9cf5683b21f5b30c7d9                                                     |
| `versionId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The version ID of the backup to download. Must be a 32-character hexadecimal string. | a3978316b0045e5eaf198f4d6885ca35                                                     |