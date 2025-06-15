# VisualSearchParameters2

## Example Usage

```typescript
import { VisualSearchParameters2 } from "@cloudinary/asset-management/models/components";

let value: VisualSearchParameters2 = {
  imageAssetId: "09169cf604b03521789d1b3b8cca53d1",
  threshold: 0.8,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `imageAssetId`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The asset ID of an existing image to use as the source for finding visually similar images                | 09169cf604b03521789d1b3b8cca53d1                                                                          |
| `threshold`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The minimum similarity score (between 0 and 1.0) that a resource must have to be included in the response | 0.8                                                                                                       |