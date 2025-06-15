# BadRequestError

## Example Usage

```typescript
import { BadRequestError } from "@cloudinary/asset-management/models/operations";

let value: BadRequestError = {
  httpCode: 400,
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `message`                                          | *string*                                           | :heavy_minus_sign:                                 | A problem with one of the parameters or timestamp. |                                                    |
| `httpCode`                                         | *number*                                           | :heavy_minus_sign:                                 | The HTTP status code.                              | 400                                                |