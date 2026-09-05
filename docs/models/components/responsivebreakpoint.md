# ResponsiveBreakpoint

## Example Usage

```typescript
import { ResponsiveBreakpoint } from "@cloudinary/asset-management/models/components";

let value: ResponsiveBreakpoint = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `createDerived`                                                         | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether to generate and store the derived images. Default is true.      |
| `maxWidth`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | The maximum width for responsive breakpoint images.                     |
| `minWidth`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | The minimum width for responsive breakpoint images.                     |
| `bytesStep`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The minimum byte size difference between consecutive breakpoint images. |
| `maxImages`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | The maximum number of breakpoint images to generate.                    |
| `transformation`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | A transformation string to apply before generating breakpoints.         |