# AssetRelationsDeleteResponse

## Example Usage

```typescript
import { AssetRelationsDeleteResponse } from "@cloudinary/asset-management/models/components";

let value: AssetRelationsDeleteResponse = {
  failed: [],
  success: [
    {
      message: "success",
      code: "success_ids",
      asset: "fd19f6964b9d377b7ac39752f03d7596",
      status: 200,
    },
    {
      message: "success",
      code: "success_ids",
      asset: "b7dcc099f53ea9b2e9eb602634fc0fc7",
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