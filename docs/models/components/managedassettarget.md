# ManagedAssetTarget

Store the output as a permanent managed asset in your Cloudinary product environment (the default).

## Example Usage

```typescript
import { ManagedAssetTarget } from "@cloudinary/asset-management/models/components";

let value: ManagedAssetTarget = {
  targetType: "managed_asset",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `targetType`                                                                 | *"managed_asset"*                                                            | :heavy_check_mark:                                                           | Discriminator identifying this as a managed-asset target.                    | managed_asset                                                                |
| `publicId`                                                                   | *string*                                                                     | :heavy_minus_sign:                                                           | Public ID to store the asset under. Auto-assigned when omitted.              | my-public-id                                                                 |
| `uploadPreset`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Upload preset to apply. Uses the product environment's default when omitted. | some-preset                                                                  |