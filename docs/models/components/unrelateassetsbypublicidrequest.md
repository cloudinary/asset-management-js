# UnrelateAssetsByPublicIdRequest

The asset unrelation request.

## Example Usage

```typescript
import { UnrelateAssetsByPublicIdRequest } from "@cloudinary/asset-management/models/components";

let value: UnrelateAssetsByPublicIdRequest = {
  assetsToUnrelate: [
    "raw/upload/dog_subtitles.srt",
    "image/authenticated/dog_license",
  ],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `assetsToUnrelate`                                                                                                    | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | Unrelates the asset from all the assets specified in this array of assets, specified as resource_type/type/public_id. | [<br/>"raw/upload/dog_subtitles.srt",<br/>"image/authenticated/dog_license"<br/>]                                     |