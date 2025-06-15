# SortBy

Specifies the expression field by which to sort the results. Prepend values with a '-' to reverse the order.

## Example Usage

```typescript
import { SortBy } from "@cloudinary/asset-management/models/operations";

let value: SortBy = "-view_watch_time";
```

## Values

```typescript
"view_ended_at" | "video_duration" | "view_watch_time" | "-view_ended_at" | "-video_duration" | "-view_watch_time"
```