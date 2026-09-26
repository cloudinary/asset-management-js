# ContextFullResponse

Contextual metadata grouped by kind. Custom user context appears under the 'custom' key. Other context kinds may also appear as additional keys.

## Example Usage

```typescript
import { ContextFullResponse } from "@cloudinary/asset-management/models/components";

let value: ContextFullResponse = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `custom`                                             | Record<string, *string*>                             | :heavy_minus_sign:                                   | User-defined contextual metadata as key-value pairs. |
| `additionalProperties`                               | Record<string, Record<string, *string*>>             | :heavy_minus_sign:                                   | N/A                                                  |