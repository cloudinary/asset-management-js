# ListResponse

## Example Usage

```typescript
import { ListResponse } from "@cloudinary/assets/models/components";

let value: ListResponse = {
  resources: [
    {
      moderationKind: "manual",
      moderationStatus: "pending",
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `resources`                                          | [components.Info](../../models/components/info.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `nextCursor`                                         | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `totalCount`                                         | *number*                                             | :heavy_minus_sign:                                   | N/A                                                  |