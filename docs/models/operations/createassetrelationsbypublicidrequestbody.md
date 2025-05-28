# CreateAssetRelationsByPublicIdRequestBody

## Example Usage

```typescript
import { CreateAssetRelationsByPublicIdRequestBody } from "@cloudinary/assets/models/operations";

let value: CreateAssetRelationsByPublicIdRequestBody = {
  assetsToRelate: [
    "raw/upload/dog_subtitles.srt",
    "image/authenticated/dog_license",
  ],
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `assetsToRelate`                                                                                                                 | *string*[]                                                                                                                       | :heavy_check_mark:                                                                                                               | Relates the asset to all the other assets specified in this array of up to 10 assets, specified as resource_type/type/public_id. | [<br/>"raw/upload/dog_subtitles.srt",<br/>"image/authenticated/dog_license"<br/>]                                                |