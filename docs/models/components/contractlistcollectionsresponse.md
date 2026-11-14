# ContractListCollectionsResponse

Response returned by the **List collections** endpoint. `data` and `total_count` are always present, so a search that matches nothing returns `{"data": [], "total_count": 0}` rather than an empty object. `next_cursor` follows the usual cursor convention and is omitted once there are no further pages.


## Example Usage

```typescript
import { ContractListCollectionsResponse } from "@cloudinary/asset-management/models/components";

let value: ContractListCollectionsResponse = {
  data: [
    {
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
  ],
  nextCursor: "eyJsYXN0X21vZGlmaWVkX2F0IjoxNzQwNTg0MzAwfQ",
  totalCount: 42,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.EntityCollection](../../models/components/entitycollection.md)[] | :heavy_check_mark:                                                           | The page of collections.                                                     |                                                                              |
| `nextCursor`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | Opaque cursor for the next page. Omitted when there are no further pages.    | eyJsYXN0X21vZGlmaWVkX2F0IjoxNzQwNTg0MzAwfQ                                   |
| `totalCount`                                                                 | *number*                                                                     | :heavy_check_mark:                                                           | Total number of collections matching the query across all pages.             | 42                                                                           |