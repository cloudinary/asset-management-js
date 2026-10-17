# CreateAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateAssetRelationsByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  relateAssetsByAssetIdRequest: {
    assetsToRelate: [
      "fd19f6964b9d377b7ac39752f03d7596",
      "b7dcc099f53ea9b2e9eb602634fc0fc7",
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The asset ID of the resource. Must be a 32-character hexadecimal string.                           | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                   |
| `relateAssetsByAssetIdRequest`                                                                     | [components.RelateAssetsByAssetIdRequest](../../models/components/relateassetsbyassetidrequest.md) | :heavy_check_mark:                                                                                 | The asset IDs to relate.                                                                           |                                                                                                    |