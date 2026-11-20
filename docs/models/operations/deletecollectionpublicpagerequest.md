# DeleteCollectionPublicPageRequest

## Example Usage

```typescript
import { DeleteCollectionPublicPageRequest } from "@cloudinary/asset-management/models/operations";

let value: DeleteCollectionPublicPageRequest = {
  collectionId: "<id>",
  publicPageId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `collectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | External ID of the collection the public page belongs to. |
| `publicPageId`                                            | *string*                                                  | :heavy_check_mark:                                        | External ID of the public page.                           |