# SearchResponseRange

## Example Usage

```typescript
import { SearchResponseRange } from "@cloudinary/asset-management/models/components";

let value: SearchResponseRange = {
  from: 0,
  to: 1048576,
  count: 17,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `from`                                   | *number*                                 | :heavy_minus_sign:                       | Start of the range (inclusive)           | 0                                        |
| `to`                                     | *number*                                 | :heavy_minus_sign:                       | End of the range (exclusive)             | 1048576                                  |
| `count`                                  | *number*                                 | :heavy_minus_sign:                       | The count of resources within this range | 17                                       |