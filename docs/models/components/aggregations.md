# Aggregations

Aggregation results when the aggregate parameter is used in the request. Only included when aggregations are requested.

## Example Usage

```typescript
import { Aggregations } from "@cloudinary/asset-management/models/components";

let value: Aggregations = {
  values: [
    {
      value: "jpg",
      count: 42,
    },
  ],
  ranges: [
    {
      from: 0,
      to: 1048576,
      count: 17,
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `values`                                                                                                 | [components.Value](../../models/components/value.md)[]                                                   | :heavy_minus_sign:                                                                                       | Array of aggregation values when using simple aggregation (e.g., by format, resource_type, etc.)         |
| `ranges`                                                                                                 | [components.SearchResponseRange](../../models/components/searchresponserange.md)[]                       | :heavy_minus_sign:                                                                                       | Array of range-based aggregation results when using range aggregation (e.g., bytes, width, height, etc.) |