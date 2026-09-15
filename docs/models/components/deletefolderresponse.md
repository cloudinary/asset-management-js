# DeleteFolderResponse

## Example Usage

```typescript
import { DeleteFolderResponse } from "@cloudinary/asset-management/models/components";

let value: DeleteFolderResponse = {
  deleted: [
    "product/test",
  ],
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   | Example                       |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `deleted`                     | *string*[]                    | :heavy_check_mark:            | List of deleted folder paths. | [<br/>"product/test"<br/>]    |