# Storage

## Example Usage

```typescript
import { Storage } from "@cloudinary/asset-management/models/components";

let value: Storage = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `usage`                          | *number*                         | :heavy_minus_sign:               | Storage used in bytes            |
| `limit`                          | *number*                         | :heavy_minus_sign:               | Storage limit for the plan       |
| `usedPercent`                    | *number*                         | :heavy_minus_sign:               | Percentage of storage limit used |