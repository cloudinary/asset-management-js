# TemporaryStorage

A generated asset stored as a short-lived asset on the upload service.

## Example Usage

```typescript
import { TemporaryStorage } from "@cloudinary/asset-management/models/components";

let value: TemporaryStorage = {
  storageType: "temporary",
  secureUrl:
    "https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/stream",
  expiresAt: new Date("2026-06-25T12:50:26Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `storageType`                                                                                 | *"temporary"*                                                                                 | :heavy_check_mark:                                                                            | Discriminator identifying this as temporary storage.                                          |                                                                                               |
| `secureUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The URL to fetch the generated asset.                                                         | https://upload-global.cloudinary.com/v2/demo/uploads/a78a2e043c2da0b50a98961d60a8b05a/stream  |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Time in UTC when secure_url stops being valid.                                                | 2026-06-25 12:50:26 +0000 UTC                                                                 |