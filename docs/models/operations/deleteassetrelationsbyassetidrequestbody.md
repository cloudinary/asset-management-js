# DeleteAssetRelationsByAssetIdRequestBody

## Example Usage

```typescript
import { DeleteAssetRelationsByAssetIdRequestBody } from "@cloudinary/asset-management/models/operations";

let value: DeleteAssetRelationsByAssetIdRequestBody = {
  assetsToUnrelate: [
    "f12345a5c789c",
    "bbb0efc00c0f12",
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `assetsToUnrelate`                                                                                       | *string*[]                                                                                               | :heavy_check_mark:                                                                                       | Unrelates the asset from all the assets specified in this array of assets, specified by their asset IDs. | [<br/>"f12345a5c789c",<br/>"bbb0efc00c0f12"<br/>]                                                        |