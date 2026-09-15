# Model

Identifies the model that produced a generation result.

## Example Usage

```typescript
import { Model } from "@cloudinary/asset-management/models/components";

let value: Model = {
  family: "flux",
  tier: "premium",
  id: "flux-2-pro",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `family`                                        | *string*                                        | :heavy_check_mark:                              | The model family used.                          | flux                                            |
| `tier`                                          | *string*                                        | :heavy_check_mark:                              | The quality tier used.                          | premium                                         |
| `id`                                            | *string*                                        | :heavy_check_mark:                              | The exact model identifier used for generation. | flux-2-pro                                      |