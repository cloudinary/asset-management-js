# AddonQuota

Credit usage for a single add-on.

## Example Usage

```typescript
import { AddonQuota } from "@cloudinary/asset-management/models/components";

let value: AddonQuota = {
  type: "image_generation",
  usedByRequest: 1,
  remaining: 48,
  limit: 50,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [components.Feature](../../models/components/feature.md)     | :heavy_check_mark:                                           | The add-on a quota applies to.                               | image_generation                                             |
| `usedByRequest`                                              | *number*                                                     | :heavy_check_mark:                                           | Credits used by this request; 0 when no image was generated. | 1                                                            |
| `remaining`                                                  | *number*                                                     | :heavy_check_mark:                                           | Credits remaining in the current period.                     | 48                                                           |
| `limit`                                                      | *number*                                                     | :heavy_check_mark:                                           | Credits available per period.                                | 50                                                           |