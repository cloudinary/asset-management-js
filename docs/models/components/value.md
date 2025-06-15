# Value

## Example Usage

```typescript
import { Value } from "@cloudinary/asset-management/models/components";

let value: Value = {
  value: "jpg",
  count: 42,
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `value`                                | *string*                               | :heavy_minus_sign:                     | The value being aggregated             | jpg                                    |
| `count`                                | *number*                               | :heavy_minus_sign:                     | The count of resources with this value | 42                                     |