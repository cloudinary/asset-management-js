# ReferenceImage

A single reference image, in **one** of two mutually exclusive forms
determined by `source_type`:
  * `ManagedAssetReference`: a managed asset in the caller's product
    environment, by `asset_id` (read permission is checked).
  * `UrlReference`: an external image by HTTPS `url`.



## Supported Types

### `components.ManagedAssetReference`

```typescript
const value: components.ManagedAssetReference = {
  sourceType: "managed_asset",
  assetId: "0d6f8e1c2b3a4d5e6f7a8b9c0d1e2f3a",
};
```

### `components.UrlReference`

```typescript
const value: components.UrlReference = {
  sourceType: "url",
  url: "https://example.com/product.png",
};
```

