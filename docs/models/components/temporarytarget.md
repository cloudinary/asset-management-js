# TemporaryTarget

Store the output as a short-lived asset on the upload service.

## Example Usage

```typescript
import { TemporaryTarget } from "@cloudinary/asset-management/models/components";

let value: TemporaryTarget = {
  targetType: "temporary",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `targetType`                                          | *"temporary"*                                         | :heavy_check_mark:                                    | Discriminator identifying this as a temporary target. |