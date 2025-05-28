# DestroyResponse

## Example Usage

```typescript
import { DestroyResponse } from "@cloudinary/assets/models/components";

let value: DestroyResponse = {
  result: "not found",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `result`                                                                | [components.Result](../../models/components/result.md)                  | :heavy_check_mark:                                                      | The result of the deletion operation.                                   |
| `assetFolder`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The asset folder path. Only included when folder decoupling is enabled. |