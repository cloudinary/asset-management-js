# CoordinatesResponse

Coordinate data for faces and custom regions.

## Example Usage

```typescript
import { CoordinatesResponse } from "@cloudinary/asset-management/models/components";

let value: CoordinatesResponse = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `faces`                                                    | *number*[][]                                               | :heavy_minus_sign:                                         | Detected face coordinate rectangles [x, y, width, height]. |
| `custom`                                                   | *number*[][]                                               | :heavy_minus_sign:                                         | Custom coordinate rectangles [x, y, width, height].        |