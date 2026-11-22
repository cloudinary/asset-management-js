# ContractListCollectionPublicPagesResponse

Response returned by the **List a collection's public pages** endpoint. `data` is always present; a collection with no public pages returns `{"data": []}`.


## Example Usage

```typescript
import { ContractListCollectionPublicPagesResponse } from "@cloudinary/asset-management/models/components";

let value: ContractListCollectionPublicPagesResponse = {
  data: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `data`                                                                       | [components.EntityPublicPage](../../models/components/entitypublicpage.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |