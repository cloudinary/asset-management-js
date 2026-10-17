# PeopleInspectionGroup

The items to inspect for a type and the actions to check against them.

## Example Usage

```typescript
import { PeopleInspectionGroup } from "@cloudinary/asset-management/models/components";

let value: PeopleInspectionGroup = {
  items: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  actions: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | A map of caller-supplied cache keys to the person identifier to inspect. |
| `actions`                                                                | Record<string, *any*>                                                    | :heavy_check_mark:                                                       | A map of action names to optional action context to inspect.             |