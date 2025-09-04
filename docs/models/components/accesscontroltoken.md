# AccessControlToken

Token-based access control that requires authentication to access the asset.

## Example Usage

```typescript
import { AccessControlToken } from "@cloudinary/asset-management/models/components";

let value: AccessControlToken = {
  accessType: "token",
  key: "prod2024",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `accessType`                                                                                                           | [components.AccessControlTokenAccessType](../../models/components/accesscontroltokenaccesstype.md)                     | :heavy_check_mark:                                                                                                     | The type of access control to apply to the asset.                                                                      |                                                                                                                        |
| `key`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The authentication key identifier for token-based access. Default key is used if not specified or if set to 'default'. | prod2024                                                                                                               |
| `path`                                                                                                                 | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The specific path pattern for which this access control applies.                                                       | /images/restricted/*                                                                                                   |