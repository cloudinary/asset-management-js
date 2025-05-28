# CreateAssetRelationsByAssetIdRequestBody

## Example Usage

```typescript
import { CreateAssetRelationsByAssetIdRequestBody } from "@cloudinary/assets/models/operations";

let value: CreateAssetRelationsByAssetIdRequestBody = {
  assetsToRelate: [
    "f12345a5c789c",
    "bbb0efc00c0f12",
  ],
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `assetsToRelate`                                                                                              | *string*[]                                                                                                    | :heavy_check_mark:                                                                                            | Relates the asset to all the assets specified in this array of up to 10 assets, specified by their asset IDs. | [<br/>"f12345a5c789c",<br/>"bbb0efc00c0f12"<br/>]                                                             |