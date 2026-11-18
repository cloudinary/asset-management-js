# ContractUpdateCollectionRequestPayload

The collection attributes to update. Only the fields you include are changed. A collection's type is set when the collection is created and can't be changed.


## Example Usage

```typescript
import { ContractUpdateCollectionRequestPayload } from "@cloudinary/asset-management/models/components";

let value: ContractUpdateCollectionRequestPayload = {
  name: "Summer Campaign Assets 2026",
  description: "Approved photography for the 2026 summer campaign launch.",
  configuration: {
    expression: "tags = \"summer-campaign\" AND resource_type:image",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | New name for the collection. Omit to leave the current name unchanged.                                                               | Summer Campaign Assets 2026                                                                                                          |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | New description for the collection. Send `null` or an empty string to clear it. Omit to leave the current description unchanged.     | Approved photography for the 2026 summer campaign launch.                                                                            |
| `configuration`                                                                                                                      | [components.EntityCollectionConfiguration](../../models/components/entitycollectionconfiguration.md)                                 | :heavy_minus_sign:                                                                                                                   | Configuration for a `dynamic` collection. Required when creating a `dynamic` collection, and not allowed for a `manual` collection.<br/> |                                                                                                                                      |