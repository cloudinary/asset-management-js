# Bandwidth

## Example Usage

```typescript
import { Bandwidth } from "@cloudinary/assets/models/components";

let value: Bandwidth = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `usage`                            | *number*                           | :heavy_minus_sign:                 | Bandwidth used in bytes            |
| `limit`                            | *number*                           | :heavy_minus_sign:                 | Bandwidth limit for the plan       |
| `usedPercent`                      | *number*                           | :heavy_minus_sign:                 | Percentage of bandwidth limit used |