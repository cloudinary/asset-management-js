# Limits

Rate limit information for the account's add-on quotas.

## Example Usage

```typescript
import { Limits } from "@cloudinary/asset-management/models/components";

let value: Limits = {
  addonsQuota: [
    {
      type: "image_generation",
      usedByRequest: 1,
      remaining: 48,
      limit: 50,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `addonsQuota`                                                                          | [components.AddonQuota](../../models/components/addonquota.md)[]                       | :heavy_minus_sign:                                                                     | Per-add-on quota usage for this account.                                               | [<br/>{<br/>"type": "image_generation",<br/>"used_by_request": 1,<br/>"remaining": 48,<br/>"limit": 50<br/>}<br/>] |