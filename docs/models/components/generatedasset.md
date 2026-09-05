# GeneratedAsset

A generated asset: where it is stored (`storage`) plus its media
metadata. The media fields are populated once the task completes; an
in-progress asset carries only `storage`.


## Example Usage

```typescript
import { GeneratedAsset } from "@cloudinary/asset-management/models/components";

let value: GeneratedAsset = {
  storage: {
    storageType: "managed_asset",
    secureUrl:
      "https://res.cloudinary.com/demo/image/upload/v1/my-public-id.png",
    publicId: "my-public-id",
    resourceType: "image",
    type: "upload",
    version: 921646,
  },
  format: "png",
  width: 1024,
  height: 768,
  bytes: 2048576,
  model: {
    family: "flux",
    tier: "premium",
    id: "flux-2-pro",
  },
  seed: 42,
  createdAt: new Date("2026-04-21T14:30:00Z"),
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `storage`                                                                                                                        | *components.Storage*                                                                                                             | :heavy_check_mark:                                                                                                               | Where a generated asset is stored — mirrors the request `target`,<br/>determined by `storage_type`. `secure_url` is always present.<br/> |                                                                                                                                  |
| `format`                                                                                                                         | [components.Format](../../models/components/format.md)                                                                           | :heavy_minus_sign:                                                                                                               | The image format of the stored asset.                                                                                            | png                                                                                                                              |
| `width`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The width of the generated image in pixels; zero if the model doesn't provide dimensions.                                        | 1024                                                                                                                             |
| `height`                                                                                                                         | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The height of the generated image in pixels; zero if the model doesn't provide dimensions.                                       | 768                                                                                                                              |
| `bytes`                                                                                                                          | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The size of the generated image in bytes.                                                                                        | 2048576                                                                                                                          |
| `model`                                                                                                                          | [components.Model](../../models/components/model.md)                                                                             | :heavy_minus_sign:                                                                                                               | Identifies the model that produced a generation result.                                                                          |                                                                                                                                  |
| `seed`                                                                                                                           | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | The seed used for generation. Echoes input or returns the model-generated seed.<br/>Null when the model doesn't support seeds.<br/> | 42                                                                                                                               |
| `createdAt`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                    | :heavy_minus_sign:                                                                                                               | The timestamp when the image was generated.                                                                                      | 2026-04-21 14:30:00 +0000 UTC                                                                                                    |