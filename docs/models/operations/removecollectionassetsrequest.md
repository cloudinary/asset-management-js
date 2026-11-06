# RemoveCollectionAssetsRequest

## Example Usage

```typescript
import { RemoveCollectionAssetsRequest } from "@cloudinary/asset-management/models/operations";

let value: RemoveCollectionAssetsRequest = {
  collectionId: "<id>",
  requestBody: [
    "ast_1a2b3c4d5e6f",
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `collectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | External ID of the collection whose assets to list, add, or remove. |
| `requestBody`                                                       | *string*[]                                                          | :heavy_check_mark:                                                  | N/A                                                                 |