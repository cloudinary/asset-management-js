# GetVideoViewsResponse

List of video views retrieved

## Example Usage

```typescript
import { GetVideoViewsResponse } from "@cloudinary/assets/models/operations";

let value: GetVideoViewsResponse = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `requestId`                                          | *string*                                             | :heavy_minus_sign:                                   | Unique identifier for the request                    |
| `nextCursor`                                         | *string*                                             | :heavy_minus_sign:                                   | Cursor value for pagination                          |
| `data`                                               | [operations.Data](../../models/operations/data.md)[] | :heavy_minus_sign:                                   | N/A                                                  |