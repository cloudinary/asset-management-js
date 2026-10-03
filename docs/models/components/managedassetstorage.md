# ManagedAssetStorage

A generated asset stored as a permanent managed asset. Reference it in
other Cloudinary APIs by `asset_id`, or by the
`resource_type` / `type` / `public_id` triple.


## Example Usage

```typescript
import { ManagedAssetStorage } from "@cloudinary/asset-management/models/components";

let value: ManagedAssetStorage = {
  storageType: "managed_asset",
  secureUrl: "https://res.cloudinary.com/demo/image/upload/v1/my-public-id.png",
  assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
  publicId: "my-public-id",
  resourceType: "image",
  type: "upload",
  version: 992528,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `storageType`                                                                                            | *"managed_asset"*                                                                                        | :heavy_check_mark:                                                                                       | Discriminator identifying this as managed-asset storage.                                                 |                                                                                                          |
| `secureUrl`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The URL to fetch the generated asset.                                                                    | https://res.cloudinary.com/demo/image/upload/v1/my-public-id.png                                         |
| `assetId`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Cloudinary asset ID — a stable, globally-unique reference to the asset.                                  | 0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a                                                                         |
| `publicId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Public ID of the stored asset.                                                                           | my-public-id                                                                                             |
| `resourceType`                                                                                           | [components.ManagedAssetStorageResourceType](../../models/components/managedassetstorageresourcetype.md) | :heavy_check_mark:                                                                                       | Cloudinary resource type of the stored asset.                                                            | image                                                                                                    |
| `type`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Cloudinary delivery type of the stored asset (e.g. `upload`, `private`, `authenticated`).                | upload                                                                                                   |
| `version`                                                                                                | *number*                                                                                                 | :heavy_check_mark:                                                                                       | Version of the stored asset.                                                                             |                                                                                                          |