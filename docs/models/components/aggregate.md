# Aggregate

## Example Usage

```typescript
import { Aggregate } from "@cloudinary/asset-management/models/components";

let value: Aggregate = {
  type: "video_pixels",
  ranges: [],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                              | [components.Type](../../models/components/type.md)                                                                  | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `ranges`                                                                                                            | [components.SearchParametersRange](../../models/components/searchparametersrange.md)[]                              | :heavy_check_mark:                                                                                                  | One or more ranges for the numeric field. Each range must include a `key` label and at least one of `from` / `to`.<br/> |