# CreateAssetRelationsByAssetIdRequest

## Example Usage

```typescript
import { CreateAssetRelationsByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateAssetRelationsByAssetIdRequest = {
  assetId: "f4e6579cf84dd9cf5683b21f5b30c7d9",
  requestBody: {
    assetsToRelate: [
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
| `requestBody`                                                                                                              | [operations.CreateAssetRelationsByAssetIdRequestBody](../../models/operations/createassetrelationsbyassetidrequestbody.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |