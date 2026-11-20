# ListResponse

## Example Usage

```typescript
import { ListResponse } from "@cloudinary/asset-management/models/components";

let value: ListResponse = {
  resources: [
    {
      moderationKind: "manual",
      moderationStatus: "pending",
      accessControl: [
        {
          accessType: "token",
          key: "prod2024",
        },
        {
          accessType: "anonymous",
          start: "2024-03-15T09:00:00Z",
          end: "2024-06-30T23:59:59Z",
        },
      ],
      derivatives: null,
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