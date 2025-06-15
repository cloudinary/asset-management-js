# AssetRelationsResponse

## Example Usage

```typescript
import { AssetRelationsResponse } from "@cloudinary/asset-management/models/components";

let value: AssetRelationsResponse = {
  failed: [],
  success: [
    {
      message: "success",
      code: "success_ids",
      asset: "f12345a5c789c",
      status: 200,
    },
    {
      message: "success",
      code: "success_ids",
      asset: "bbb0efc00c0f12",
      status: 200,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `failed`                                                                       | [components.AssetRelationInfo](../../models/components/assetrelationinfo.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `success`                                                                      | [components.AssetRelationInfo](../../models/components/assetrelationinfo.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |