# Storage

Where a generated asset is stored — mirrors the request `target`,
determined by `storage_type`. `secure_url` is always present.



## Supported Types

### `components.ManagedAssetStorage`

```typescript
const value: components.ManagedAssetStorage = {
  storageType: "managed_asset",
  secureUrl: "https://res.cloudinary.com/demo/image/upload/v1/my-public-id.png",
  assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
  publicId: "my-public-id",
  resourceType: "image",
  type: "upload",
  version: 992528,
};
```

### `components.TemporaryStorage`

```typescript
const value: components.TemporaryStorage = {
  storageType: "temporary",
  secureUrl:
    "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/stream",
  expiresAt: new Date("2026-06-25T12:50:26Z"),
};
```

