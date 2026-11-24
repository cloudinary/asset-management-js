# ContractListCollectionAssetsResponse

Response returned by the **List a collection's assets** endpoint. `data` and `total_count` are always present, so a collection with no assets returns `{"data": [], "total_count": 0}`. `next_cursor` follows the usual cursor convention and is omitted once there are no further pages.


## Example Usage

```typescript
import { ContractListCollectionAssetsResponse } from "@cloudinary/asset-management/models/components";

let value: ContractListCollectionAssetsResponse = {
  data: [],
  nextCursor: "8edbc61040178db60b0973ca9494bf3a",
  totalCount: 12,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [components.EntityCollectionAsset](../../models/components/entitycollectionasset.md)[] | :heavy_check_mark:                                                                     | The page of assets.                                                                    |                                                                                        |
| `nextCursor`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Opaque cursor for the next page. Omitted when there are no further pages.              | 8edbc61040178db60b0973ca9494bf3a                                                       |
| `totalCount`                                                                           | *number*                                                                               | :heavy_check_mark:                                                                     | Total number of assets in the collection that the caller may view.                     | 12                                                                                     |