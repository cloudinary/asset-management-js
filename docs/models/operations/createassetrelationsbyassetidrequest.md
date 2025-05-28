# CreateAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByAssetIdRequest } from "@cloudinary/assets/models/operations";

let value: CreateAssetRelationsByAssetIdRequest = {
  assetId: "<id>",
  requestBody: {
    assetsToRelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The asset ID of the asset to update.                                                                                       |
| `requestBody`                                                                                                              | [operations.CreateAssetRelationsByAssetIdRequestBody](../../models/operations/createassetrelationsbyassetidrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |