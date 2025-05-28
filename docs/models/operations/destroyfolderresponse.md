# DestroyFolderResponse

Folder deleted successfully

## Example Usage

```typescript
import { DestroyFolderResponse } from "@cloudinary/assets/models/operations";

let value: DestroyFolderResponse = {
  deleted: [
    "product/test",
  ],
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `deleted`                    | *string*[]                   | :heavy_check_mark:           | List of deleted folder paths | [<br/>"product/test"<br/>]   |