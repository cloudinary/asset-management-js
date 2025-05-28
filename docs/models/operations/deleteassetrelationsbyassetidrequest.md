# DeleteAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByAssetIdRequest } from "@cloudinary/assets/models/operations";

let value: DeleteAssetRelationsByAssetIdRequest = {
  assetId: "<id>",
  requestBody: {
    assetsToUnrelate: [
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
| `requestBody`                                                                                                              | [operations.DeleteAssetRelationsByAssetIdRequestBody](../../models/operations/deleteassetrelationsbyassetidrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |