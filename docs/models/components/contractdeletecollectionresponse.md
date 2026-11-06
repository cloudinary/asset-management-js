# ContractDeleteCollectionResponse

Response returned by the **Delete a collection** endpoint.

## Example Usage

```typescript
import { ContractDeleteCollectionResponse } from "@cloudinary/asset-management/models/components";

let value: ContractDeleteCollectionResponse = {
  message: "Collection deleted successfully.",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `message`                                     | *string*                                      | :heavy_check_mark:                            | Confirmation that the collection was deleted. | Collection deleted successfully.              |