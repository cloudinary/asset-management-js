# DeleteAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteAssetRelationsByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  unrelateAssetsByAssetIdRequest: {
    assetsToUnrelate: [
      "fd19f6964b9d377b7ac39752f03d7596",
      "b7dcc099f53ea9b2e9eb602634fc0fc7",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                              | *string*                                                                                               | :heavy_check_mark:                                                                                     | The asset ID of the resource. Must be a 32-character hexadecimal string.                               | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                       |
| `unrelateAssetsByAssetIdRequest`                                                                       | [components.UnrelateAssetsByAssetIdRequest](../../models/components/unrelateassetsbyassetidrequest.md) | :heavy_check_mark:                                                                                     | The asset IDs to unrelate.                                                                             |                                                                                                        |