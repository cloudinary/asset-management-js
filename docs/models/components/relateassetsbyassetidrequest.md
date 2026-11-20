# RelateAssetsByAssetIdRequest

The asset relation request.

## Example Usage

```typescript
import { RelateAssetsByAssetIdRequest } from "@cloudinary/asset-management/models/components";

let value: RelateAssetsByAssetIdRequest = {
  assetsToRelate: [
    "fd19f6964b9d377b7ac39752f03d7596",
    "b7dcc099f53ea9b2e9eb602634fc0fc7",
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `assetsToRelate`                                                                                              | *string*[]                                                                                                    | :heavy_check_mark:                                                                                            | Relates the asset to all the assets specified in this array of up to 10 assets, specified by their asset IDs. | [<br/>"fd19f6964b9d377b7ac39752f03d7596",<br/>"b7dcc099f53ea9b2e9eb602634fc0fc7"<br/>]                        |