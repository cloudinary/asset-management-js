# UnrelateAssetsByAssetIdRequest

The asset unrelation request.

## Example Usage

```typescript
import { UnrelateAssetsByAssetIdRequest } from "@cloudinary/asset-management/models/components";

let value: UnrelateAssetsByAssetIdRequest = {
  assetsToUnrelate: [
    "fd19f6964b9d377b7ac39752f03d7596",
    "b7dcc099f53ea9b2e9eb602634fc0fc7",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `assetsToUnrelate`                                                                                       | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Unrelates the asset from all the assets specified in this array of assets, specified by their asset IDs. | [<br/>"fd19f6964b9d377b7ac39752f03d7596",<br/>"b7dcc099f53ea9b2e9eb602634fc0fc7"<br/>]                   |