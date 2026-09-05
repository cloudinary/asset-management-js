# PeopleInspectRequest

The people and actions to inspect.

## Example Usage

```typescript
import { PeopleInspectRequest } from "@cloudinary/asset-management/models/components";

let value: PeopleInspectRequest = {
  inspections: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inspections`                                                                            | [components.PeopleInspectionTargets](../../models/components/peopleinspectiontargets.md) | :heavy_check_mark:                                                                       | A map of inspectable types to the items and actions to inspect.                          |