# AssetRelationInfo

## Example Usage

```typescript
import { AssetRelationInfo } from "@cloudinary/assets/models/components";

let value: AssetRelationInfo = {
  message: "success",
  code: "success_ids",
  asset: "f12345a5c789c",
  status: 200,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `message`                                                       | *string*                                                        | :heavy_minus_sign:                                              | The message indicating the result of the operation.             | success                                                         |
| `code`                                                          | [components.Code](../../models/components/code.md)              | :heavy_minus_sign:                                              | The code indicating the result of the operation.                | success_ids                                                     |
| `asset`                                                         | *string*                                                        | :heavy_minus_sign:                                              | The identifier of the asset, either asset ID or public ID path. | f12345a5c789c                                                   |
| `status`                                                        | *number*                                                        | :heavy_minus_sign:                                              | The HTTP status code indicating the result of the operation.    | 200                                                             |