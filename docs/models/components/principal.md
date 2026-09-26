# Principal

The user, group, or API key whose role assignments are being modified.

## Example Usage

```typescript
import { Principal } from "@cloudinary/asset-management/models/components";

let value: Principal = {
  type: "group",
  id: "799451857115779",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `type`                                                                           | [components.PrincipalType](../../models/components/principaltype.md)             | :heavy_check_mark:                                                               | The type of principal.                                                           |                                                                                  |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The unique identifier of the principal. For `apiKey`, provide the API key value. | 799451857115779                                                                  |