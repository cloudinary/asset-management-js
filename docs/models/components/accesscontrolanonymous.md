# AccessControlAnonymous

Anonymous access control that allows public access during a specified time range.

## Example Usage

```typescript
import { AccessControlAnonymous } from "@cloudinary/asset-management/models/components";

let value: AccessControlAnonymous = {
  accessType: "anonymous",
  start: new Date("2024-03-15T09:00:00Z"),
  end: new Date("2024-06-30T23:59:59Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accessType`                                                                                               | [components.AccessControlAnonymousAccessType](../../models/components/accesscontrolanonymousaccesstype.md) | :heavy_check_mark:                                                                                         | The type of access control to apply to the asset.                                                          |                                                                                                            |
| `start`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | The start date and time (in ISO 8601 format) when anonymous access becomes available.                      | 2024-03-15T09:00:00Z                                                                                       |
| `end`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_minus_sign:                                                                                         | The end date and time (in ISO 8601 format) when anonymous access expires.                                  | 2024-06-30T23:59:59Z                                                                                       |
| `path`                                                                                                     | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The specific path pattern for which this access control applies.                                           | /images/public/*                                                                                           |