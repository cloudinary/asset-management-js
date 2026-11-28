# ImageAnalysis

Results of image analysis.

## Example Usage

```typescript
import { ImageAnalysis } from "@cloudinary/asset-management/models/components";

let value: ImageAnalysis = {
  hdr: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `hdr`                                                                              | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether the stored asset is in high dynamic range. False when no HDR was detected. | false                                                                              |