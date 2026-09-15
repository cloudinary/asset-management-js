# MoveFolderRequest

The folder move/rename request.

## Example Usage

```typescript
import { MoveFolderRequest } from "@cloudinary/asset-management/models/components";

let value: MoveFolderRequest = {
  toFolder: "product1/test1",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `toFolder`                   | *string*                     | :heavy_check_mark:           | The new path for the folder. | product1/test1               |