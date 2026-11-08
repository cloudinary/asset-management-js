# AccessControlItem

Access control rule that defines when and how the asset can be accessed.

## Example Usage

```typescript
import { AccessControlItem } from "@cloudinary/asset-management/models/components";

let value: AccessControlItem = {
  accessType: "token",
  key: "prod2024",
  start: "2024-03-15T09:00:00Z",
  end: "2024-06-30T23:59:59Z",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `accessType`                                                                                                           | [components.AccessType](../../models/components/accesstype.md)                                                         | :heavy_check_mark:                                                                                                     | The type of access control to apply to the asset.                                                                      |                                                                                                                        |
| `key`                                                                                                                  | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The authentication key identifier for token-based access. Default key is used if not specified or if set to 'default'. | prod2024                                                                                                               |
| `start`                                                                                                                | *components.Start*                                                                                                     | :heavy_minus_sign:                                                                                                     | The start date and time when anonymous access becomes available. Accepts ISO 8601 string or Unix timestamp.            | 2024-03-15T09:00:00Z                                                                                                   |
| `end`                                                                                                                  | *components.End*                                                                                                       | :heavy_minus_sign:                                                                                                     | The end date and time when anonymous access expires. Accepts ISO 8601 string or Unix timestamp.                        | 2024-06-30T23:59:59Z                                                                                                   |