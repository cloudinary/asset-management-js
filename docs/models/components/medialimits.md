# MediaLimits

Upload size and pixel limits

## Example Usage

```typescript
import { MediaLimits } from "@cloudinary/asset-management/models/components";

let value: MediaLimits = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `imageMaxSizeBytes`                 | *number*                            | :heavy_minus_sign:                  | Maximum size for images in bytes    |
| `videoMaxSizeBytes`                 | *number*                            | :heavy_minus_sign:                  | Maximum size for videos in bytes    |
| `rawMaxSizeBytes`                   | *number*                            | :heavy_minus_sign:                  | Maximum size for raw files in bytes |
| `imageMaxPx`                        | *number*                            | :heavy_minus_sign:                  | Maximum pixels for images           |
| `assetMaxTotalPx`                   | *number*                            | :heavy_minus_sign:                  | Maximum total pixels for assets     |