# AdminContextOperation

A single internal contextual-metadata operation.

## Example Usage

```typescript
import { AdminContextOperation } from "@cloudinary/asset-management/models/components";

let value: AdminContextOperation = {
  name: "<value>",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | The context key to operate on.                                                        |
| `value`                                                                               | *string*[]                                                                            | :heavy_minus_sign:                                                                    | The value(s) to apply for the context key.                                            |
| `type`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The value type of the context entry.                                                  |
| `op`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The operation to apply to the context key (for example, "+" to add or "-" to remove). |