# Security

## Example Usage

```typescript
import { Security } from "@cloudinary/asset-management/models/components";

let value: Security = {
  cloudinaryAuth: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cloudinaryAuth`                                                                   | [components.SchemeCloudinaryAuth](../../models/components/schemecloudinaryauth.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `oauth2`                                                                           | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |