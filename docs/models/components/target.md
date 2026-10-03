# Target

Where to store the generated output, determined by `target_type`.
Optional; defaults to a `managed_asset` target when omitted.



## Supported Types

### `components.ManagedAssetTarget`

```typescript
const value: components.ManagedAssetTarget = {
  targetType: "managed_asset",
  publicId: "my-public-id",
  uploadPreset: "some-preset",
};
```

### `components.TemporaryTarget`

```typescript
const value: components.TemporaryTarget = {
  targetType: "temporary",
};
```

