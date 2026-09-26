# ManagedAssetReference

A reference to a managed asset in the caller's product environment, by
asset ID.


## Example Usage

```typescript
import { ManagedAssetReference } from "@cloudinary/asset-management/models/components";

let value: ManagedAssetReference = {
  sourceType: "managed_asset",
  assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sourceType`                                                             | *"managed_asset"*                                                        | :heavy_check_mark:                                                       | Discriminator identifying this as a managed-asset reference.             |                                                                          |
| `assetId`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Cloudinary asset ID of the reference image. READ permission is enforced. | 0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a                                         |