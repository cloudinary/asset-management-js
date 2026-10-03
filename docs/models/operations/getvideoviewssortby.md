# GetVideoViewsSortBy

Specifies the expression field by which to sort the results. Prepend values with a '-' to reverse the order.

## Example Usage

```typescript
import { GetVideoViewsSortBy } from "@cloudinary/asset-management/models/operations";

let value: GetVideoViewsSortBy = "-view_watch_time";
```

## Values

```typescript
"view_ended_at" | "video_duration" | "view_watch_time" | "-view_ended_at" | "-video_duration" | "-view_watch_time"
```