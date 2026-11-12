# ContractAddCollectionAssetsResponse

Response returned by the **Add assets to a collection** endpoint.

## Example Usage

```typescript
import { ContractAddCollectionAssetsResponse } from "@cloudinary/asset-management/models/components";

let value: ContractAddCollectionAssetsResponse = {
  data: {
    id: "col_8f3a2b1c9d4e",
    name: "Summer Campaign Assets",
    creatorType: "user",
    creatorId: "usr_4a1b2c3d5e6f",
    createdAt: new Date("2026-03-14T10:15:00Z"),
    updatedAt: new Date("2026-03-15T09:30:00Z"),
    description: "Approved photography for the summer campaign launch.",
    type: "dynamic",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
    assetCount: 12,
    coverAssetUrl: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.EntityCollection](../../models/components/entitycollection.md) | :heavy_minus_sign:                                                         | A collection resource.                                                     |