# ProvenanceResponse

Provenance indications derived from the asset at upload. Returned in searches including a with_field parameter specifying provenance. A key is present only when there is an answer for it.

## Example Usage

```typescript
import { ProvenanceResponse } from "@cloudinary/asset-management/models/components";

let value: ProvenanceResponse = {
  hasC2pa: false,
  aiGenerated: true,
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasC2pa`                                                                                                                                          | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether the asset carries a C2PA content credentials manifest. False when no manifest was found.                                                   | false                                                                                                                                              |
| `aiGenerated`                                                                                                                                      | *boolean*                                                                                                                                          | :heavy_minus_sign:                                                                                                                                 | Whether the asset is AI-generated, either declared on upload or read from its C2PA manifest. Omitted when unknown, which is not the same as false. | true                                                                                                                                               |