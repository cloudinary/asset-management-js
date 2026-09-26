# GenerateImageResult

Successful synchronous image-generation response.

## Example Usage

```typescript
import { GenerateImageResult } from "@cloudinary/asset-management/models/components";

let value: GenerateImageResult = {
  data: {
    assets: [],
  },
  limits: {
    addonsQuota: [
      {
        type: "image_generation",
        usedByRequest: 1,
        remaining: 48,
        limit: 50,
      },
    ],
  },
  requestId: "17c3b70c5096df0e77e838323abb7029",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [components.GeneratedAssets](../../models/components/generatedassets.md) | :heavy_minus_sign:                                                       | Wrapper holding the array of generated assets.                           |                                                                          |
| `limits`                                                                 | [components.Limits](../../models/components/limits.md)                   | :heavy_minus_sign:                                                       | Rate limit information for the account's add-on quotas.                  |                                                                          |
| `requestId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Unique identifier for this request, for correlation and support.         | 17c3b70c5096df0e77e838323abb7029                                         |