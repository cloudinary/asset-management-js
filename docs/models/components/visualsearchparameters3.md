# VisualSearchParameters3

## Example Usage

```typescript
import { VisualSearchParameters3 } from "@cloudinary/assets/models/components";

let value: VisualSearchParameters3 = {
  text: "shirts",
  threshold: 0.8,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `text`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | A textual description to find visually similar images                                                     | shirts                                                                                                    |
| `threshold`                                                                                               | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The minimum similarity score (between 0 and 1.0) that a resource must have to be included in the response | 0.8                                                                                                       |