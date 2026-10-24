# FolderDescendantsRequest

The parent folder identifier and optional descendant filter.

## Example Usage

```typescript
import { FolderDescendantsRequest } from "@cloudinary/asset-management/models/components";

let value: FolderDescendantsRequest = {
  id: "cd7e9d690a014c68ae8b58f08e090cb03a",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The immutable identifier of the parent folder whose descendants are returned.                        | cd7e9d690a014c68ae8b58f08e090cb03a                                                                   |
| `filterIds`                                                                                          | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | A list of folder identifiers to restrict the returned descendants to.                                |                                                                                                      |
| `inclusive`                                                                                          | *boolean*                                                                                            | :heavy_minus_sign:                                                                                   | Whether to include the parent folder itself in the results. If false, only descendants are returned. |                                                                                                      |