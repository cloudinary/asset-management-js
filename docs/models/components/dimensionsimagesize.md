# DimensionsImageSize

Exact output dimensions in pixels. Both `width` and `height` are required together.

## Example Usage

```typescript
import { DimensionsImageSize } from "@cloudinary/asset-management/models/components";

let value: DimensionsImageSize = {
  width: 1280,
  height: 720,
};
```

## Fields

| Field                    | Type                     | Required                 | Description              | Example                  |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `width`                  | *number*                 | :heavy_check_mark:       | Output width in pixels.  | 1280                     |
| `height`                 | *number*                 | :heavy_check_mark:       | Output height in pixels. | 720                      |