# ListResponse

## Example Usage

```typescript
import { ListResponse } from "@cloudinary/asset-management/models/components";

let value: ListResponse = {
  resources: [
    {
      moderationKind: "manual",
      moderationStatus: "pending",
      derivatives: [
        {
          id: "5a73fd588cb301206c0a5c5c6ad796b3",
          transformation: "w_300,h_100/",
          transformationSignature: "658a49d8-2944-37db-9825-1ddface10c7b",
          secureUrl:
            "https://res.cloudinary.com/demo/image/upload/w_300,h_100/sample",
        },
      ],
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