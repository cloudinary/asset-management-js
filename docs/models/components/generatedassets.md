# GeneratedAssets

Wrapper holding the array of generated assets.

## Example Usage

```typescript
import { GeneratedAssets } from "@cloudinary/asset-management/models/components";

let value: GeneratedAssets = {
  assets: [
    {
      storage: {
        storageType: "managed_asset",
        secureUrl:
          "https://res.cloudinary.com/demo/image/upload/v1/my-public-id.png",
        publicId: "my-public-id",
        resourceType: "image",
        type: "upload",
        version: 55270,
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
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `assets`                                                                 | [components.GeneratedAsset](../../models/components/generatedasset.md)[] | :heavy_check_mark:                                                       | The generated assets. Currently a single asset is returned.              |