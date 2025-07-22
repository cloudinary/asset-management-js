# Derivative

## Example Usage

```typescript
import { Derivative } from "@cloudinary/asset-management/models/components";

let value: Derivative = {
  id: "5a73fd588cb301206c0a5c5c6ad796b3",
  transformation: "w_300,h_100/",
  transformationSignature: "658a49d8-2944-37db-9825-1ddface10c7b",
  secureUrl: "https://res.cloudinary.com/demo/image/upload/w_300,h_100/sample",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | The unique identifier of the derived resource                   | 5a73fd588cb301206c0a5c5c6ad796b3                                |
| `transformation`                                                | *string*                                                        | :heavy_minus_sign:                                              | The transformation string that was applied                      | w_300,h_100/                                                    |
| `transformationSignature`                                       | *string*                                                        | :heavy_minus_sign:                                              | The unique signature of the transformation                      | 658a49d8-2944-37db-9825-1ddface10c7b                            |
| `secureUrl`                                                     | *string*                                                        | :heavy_minus_sign:                                              | The secure URL for accessing the derived resource               | https://res.cloudinary.com/demo/image/upload/w_300,h_100/sample |