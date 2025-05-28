# VisualSearchParameters1

## Example Usage

```typescript
import { VisualSearchParameters1 } from "@cloudinary/assets/models/components";

let value: VisualSearchParameters1 = {
  imageUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  threshold: 0.8,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `imageUrl`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The URL of an image to use as the source for finding visually similar images                              | https://res.cloudinary.com/demo/image/upload/sample.jpg                                                   |
| `threshold`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The minimum similarity score (between 0 and 1.0) that a resource must have to be included in the response | 0.8                                                                                                       |