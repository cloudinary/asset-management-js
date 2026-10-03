# GetUsageRequest

## Example Usage

```typescript
import { GetUsageRequest } from "@cloudinary/asset-management/models/operations";

let value: GetUsageRequest = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `date`                                                                                                  | [RFCDate](../../types/rfcdate.md)                                                                       | :heavy_minus_sign:                                                                                      | The date for which to retrieve usage details (YYYY-MM-DD). If not specified, returns the current usage. |