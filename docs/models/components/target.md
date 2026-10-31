# Target

Where the generated image goes, determined by `target_type`. Use
`temporary` when the user only wants the image: a short-lived URL,
nothing saved to their account. Omit it, or use `managed_asset`, to
store the image permanently in their Media Library. If the caller lacks
upload permission, the image is returned as `temporary` instead, with a
`warning` notice.



## Supported Types

### `components.ManagedAssetTarget`

```typescript
const value: components.ManagedAssetTarget = {
  targetType: "managed_asset",
};
```

### `components.TemporaryTarget`

```typescript
const value: components.TemporaryTarget = {
  targetType: "temporary",
};
```

