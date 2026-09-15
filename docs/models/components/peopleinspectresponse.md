# PeopleInspectResponse

The permission inspection results.

## Example Usage

```typescript
import { PeopleInspectResponse } from "@cloudinary/asset-management/models/components";

let value: PeopleInspectResponse = {
  message: "ok",
  inspections: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `message`                                                                               | *string*                                                                                | :heavy_minus_sign:                                                                      | A status message for the inspection request.                                            | ok                                                                                      |
| `inspections`                                                                           | Record<string, *any*>                                                                   | :heavy_check_mark:                                                                      | A map of inspected type to per-item, per-action permission results (true if permitted). |                                                                                         |