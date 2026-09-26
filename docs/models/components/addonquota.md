# AddonQuota

Quota usage for a single add-on.

## Example Usage

```typescript
import { AddonQuota } from "@cloudinary/asset-management/models/components";

let value: AddonQuota = {
  type: "image_generation",
  usedByRequest: 264613,
  remaining: 69849,
  limit: 836104,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `type`                                                   | [components.Feature](../../models/components/feature.md) | :heavy_check_mark:                                       | The add-on a quota applies to.                           |
| `usedByRequest`                                          | *number*                                                 | :heavy_check_mark:                                       | Number of generations consumed by this request.          |
| `remaining`                                              | *number*                                                 | :heavy_check_mark:                                       | Generations remaining in the current period.             |
| `limit`                                                  | *number*                                                 | :heavy_check_mark:                                       | Maximum generations allowed per period.                  |