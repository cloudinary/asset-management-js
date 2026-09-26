# TaskStatus

The status of an async generation task.
* `pending`: accepted and queued, not yet started.
* `processing`: generation is in progress.
* `completed`: generation finished; `result` is populated.
* `failed`: generation did not complete successfully.


## Example Usage

```typescript
import { TaskStatus } from "@cloudinary/asset-management/models/components";

let value: TaskStatus = "processing";
```

## Values

```typescript
"pending" | "processing" | "completed" | "failed"
```