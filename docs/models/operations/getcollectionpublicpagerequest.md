# GetCollectionPublicPageRequest

## Example Usage

```typescript
import { GetCollectionPublicPageRequest } from "@cloudinary/asset-management/models/operations";

let value: GetCollectionPublicPageRequest = {
  collectionId: "<id>",
  publicPageId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `collectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | External ID of the collection the public page belongs to. |
| `publicPageId`                                            | *string*                                                  | :heavy_check_mark:                                        | External ID of the public page.                           |