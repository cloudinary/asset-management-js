# RestoreResourcesByAssetIDsRequest

## Example Usage

```typescript
import { RestoreResourcesByAssetIDsRequest } from "@cloudinary/asset-management/models/operations";

let value: RestoreResourcesByAssetIDsRequest = {
  assetIds: [
    "2262b0b5eb88f1fd7724e29b0e57d730",
    "d23c0526e6feca2c343e40c2fce5231a",
  ],
  versions: [
    "c3fe4be5921eb89acd9af738c892f654",
    "d214063097a43d1d1293db61a397f60f",
  ],
  notificationUrl: "https://example.com/webhook",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `assetIds`                                                                        | *string*[]                                                                        | :heavy_check_mark:                                                                | The unique and immutable asset IDs of backed up assets to restore.                | [<br/>"2262b0b5eb88f1fd7724e29b0e57d730",<br/>"d23c0526e6feca2c343e40c2fce5231a"<br/>] |
| `versions`                                                                        | *string*[]                                                                        | :heavy_minus_sign:                                                                | The version of each asset to restore. Must match length of asset_ids if provided. | [<br/>"c3fe4be5921eb89acd9af738c892f654",<br/>"d214063097a43d1d1293db61a397f60f"<br/>] |
| `notificationUrl`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | The URL that will receive notification when restore is complete.                  | https://example.com/webhook                                                       |