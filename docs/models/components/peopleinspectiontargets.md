# PeopleInspectionTargets

A map of inspectable types to the items and actions to inspect.

## Example Usage

```typescript
import { PeopleInspectionTargets } from "@cloudinary/asset-management/models/components";

let value: PeopleInspectionTargets = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `person`                                                                             | [components.PeopleInspectionGroup](../../models/components/peopleinspectiongroup.md) | :heavy_minus_sign:                                                                   | The items to inspect for a type and the actions to check against them.               |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |