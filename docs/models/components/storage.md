# Storage

Where the generated asset is actually stored, determined by
`storage_type`. Usually matches the request `target`; a `managed_asset`
request falls back to `temporary` when the caller lacks upload
permission. `secure_url` is always present.



## Supported Types

### `components.ManagedAssetStorage`

```typescript
const value: components.ManagedAssetStorage = {
  storageType: "managed_asset",
  secureUrl:
    "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/image.png",
  publicId: "my-public-id",
  resourceType: "image",
  type: "upload",
  version: 1750000000,
};
```

### `components.TemporaryStorage`

```typescript
const value: components.TemporaryStorage = {
  storageType: "temporary",
  secureUrl:
    "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/image.png",
  expiresAt: new Date("2026-06-25T12:50:26Z"),
};
```

