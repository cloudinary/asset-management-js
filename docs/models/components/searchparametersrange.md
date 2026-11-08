# SearchParametersRange

## Example Usage

```typescript
import { SearchParametersRange } from "@cloudinary/asset-management/models/components";

let value: SearchParametersRange = {
  key: "small",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                    | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A label for the bucket, returned in the aggregation response. 1–20 chars, alphanumeric plus `-` and `_`. | small                                                                                                    |
| `from`                                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Start of the range (inclusive). At least one of `from` / `to` is required.                               |                                                                                                          |
| `to`                                                                                                     | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | End of the range (exclusive). At least one of `from` / `to` is required.                                 |                                                                                                          |