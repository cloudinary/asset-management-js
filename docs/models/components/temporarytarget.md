# TemporaryTarget

Return the image at a short-lived URL (valid until `expires_at`) without
saving it to the user's Cloudinary account.


## Example Usage

```typescript
import { TemporaryTarget } from "@cloudinary/asset-management/models/components";

let value: TemporaryTarget = {
  targetType: "temporary",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `targetType`                                          | *"temporary"*                                         | :heavy_check_mark:                                    | Discriminator identifying this as a temporary target. | temporary                                             |