# AssetRelationsDeleteResponse

## Example Usage

```typescript
import { AssetRelationsDeleteResponse } from "@cloudinary/assets/models/components";

let value: AssetRelationsDeleteResponse = {
  failed: [],
  success: [
    {
      message: "success",
    },
    {
      message: "success",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `failed`                                                                       | [components.AssetRelationInfo](../../models/components/assetrelationinfo.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `success`                                                                      | [components.AssetRelationInfo](../../models/components/assetrelationinfo.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |