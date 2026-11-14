# VideoViewsResponse

## Example Usage

```typescript
import { VideoViewsResponse } from "@cloudinary/asset-management/models/components";

let value: VideoViewsResponse = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `requestId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for the request.                             |
| `nextCursor`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Cursor value for pagination.                                   |
| `data`                                                         | [components.VideoView](../../models/components/videoview.md)[] | :heavy_minus_sign:                                             | N/A                                                            |