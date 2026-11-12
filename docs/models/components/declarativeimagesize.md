# DeclarativeImageSize

Declarative output size — an aspect ratio plus an optional resolution
tier, resolved server-side to the nearest size the model supports.


## Example Usage

```typescript
import { DeclarativeImageSize } from "@cloudinary/asset-management/models/components";

let value: DeclarativeImageSize = {
  aspectRatio: "16:9",
  resolution: "2K",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aspectRatio`                                                                                                                                              | [components.AspectRatio](../../models/components/aspectratio.md)                                                                                           | :heavy_check_mark:                                                                                                                                         | Output aspect ratio, width-to-height. Limited to the core ratios<br/>every model supports natively.<br/>                                                   | 16:9                                                                                                                                                       |
| `resolution`                                                                                                                                               | [components.Resolution](../../models/components/resolution.md)                                                                                             | :heavy_minus_sign:                                                                                                                                         | Output resolution tier, measured on the longest edge. Defaults to<br/>`1K` when omitted.<br/>* `0.5K`: ~512 px<br/>* `1K`: ~1024 px<br/>* `2K`: ~2048 px<br/>* `4K`: ~4096 px<br/> | 2K                                                                                                                                                         |