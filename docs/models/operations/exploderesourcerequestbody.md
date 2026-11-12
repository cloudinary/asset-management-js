# ExplodeResourceRequestBody

The explode operation parameters.

## Example Usage

```typescript
import { ExplodeResourceRequestBody } from "@cloudinary/asset-management/models/operations";

let value: ExplodeResourceRequestBody = {
  publicId: "<id>",
  transformation: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `publicId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The public ID of the PDF or animated image to generate from.                           |
| `format`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | The format for the generated derived images. Default: png                              |
| `transformation`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The transformation to apply. Must contain exactly one pg_all transformation parameter. |
| `notificationUrl`                                                                      | *string*                                                                               | :heavy_minus_sign:                                                                     | The webhook URL to notify when the operation is complete.                              |
| `type`                                                                                 | [components.ManagedDeliveryType](../../models/components/manageddeliverytype.md)       | :heavy_minus_sign:                                                                     | Managed delivery types for assets uploaded and stored by Cloudinary.                   |