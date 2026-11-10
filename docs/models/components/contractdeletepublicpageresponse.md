# ContractDeletePublicPageResponse

Response returned by the **Unpublish a collection's public page** endpoint.

## Example Usage

```typescript
import { ContractDeletePublicPageResponse } from "@cloudinary/asset-management/models/components";

let value: ContractDeletePublicPageResponse = {
  message: "Public page deleted successfully.",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `message`                                      | *string*                                       | :heavy_check_mark:                             | Confirmation that the public page was deleted. | Public page deleted successfully.              |