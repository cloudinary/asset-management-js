# DeleteAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { DeleteAssetRelationsByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteAssetRelationsByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  requestBody: {
    assetsToUnrelate: [
      "f12345a5c789c",
      "bbb0efc00c0f12",
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The asset ID of the resource. Must be a 32-character hexadecimal string.                                                   | f4e6579cf84dd9cf5683b21f5b30c7d9                                                                                           |
| `requestBody`                                                                                                              | [operations.DeleteAssetRelationsByAssetIdRequestBody](../../models/operations/deleteassetrelationsbyassetidrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |