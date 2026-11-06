# TaskResult

The generated assets. Populated once `status` is `completed`.


## Example Usage

```typescript
import { TaskResult } from "@cloudinary/asset-management/models/components";

let value: TaskResult = {
  assets: [
    {
      storage: {
        storageType: "temporary",
        secureUrl:
          "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/image.png",
        expiresAt: new Date("2026-06-25T12:50:26Z"),
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                     | Type                                                                                                                                                                                                      | Required                                                                                                                                                                                                  | Description                                                                                                                                                                                               | Example                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets`                                                                                                                                                                                                  | [components.GeneratedAsset](../../models/components/generatedasset.md)[]                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                        | The generated assets. Currently a single asset is returned.                                                                                                                                               | [<br/>{<br/>"storage": {<br/>"storage_type": "temporary",<br/>"secure_url": "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/image.png",<br/>"expires_at": "2026-06-25T12:50:26Z"<br/>}<br/>}<br/>] |