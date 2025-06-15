# CreateFolderResponse

Folder created successfully

## Example Usage

```typescript
import { CreateFolderResponse } from "@cloudinary/asset-management/models/operations";

let value: CreateFolderResponse = {
  success: true,
  path: "samples/food",
  name: "food",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `success`                            | *boolean*                            | :heavy_minus_sign:                   | Whether the operation was successful | true                                 |
| `path`                               | *string*                             | :heavy_minus_sign:                   | The path of the created folder       | samples/food                         |
| `name`                               | *string*                             | :heavy_minus_sign:                   | The name of the created folder       | food                                 |