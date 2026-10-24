# EvalRequest

The eval expression and the upload parameters to evaluate it against. The `eval` field holds
the dynamic expression; any other upload parameters may be supplied alongside it.


## Example Usage

```typescript
import { EvalRequest } from "@cloudinary/asset-management/models/components";

let value: EvalRequest = {
  eval: "upload_options.quality_analysis = resource_info.quality_score * 100",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `eval`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The dynamic eval expression to evaluate against the upload parameters. | upload_options.quality_analysis = resource_info.quality_score * 100    |
| `publicId`                                                             | *string*                                                               | :heavy_minus_sign:                                                     | The public ID of the asset the eval expression applies to.             |                                                                        |
| `additionalProperties`                                                 | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |