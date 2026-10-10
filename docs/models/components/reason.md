# Reason

A reason code explaining why progress is unavailable. Present only when processed_assets_count is null.

## Example Usage

```typescript
import { Reason } from "@cloudinary/asset-management/models/components";

let value: Reason = "elasticsearch_not_enabled";
```

## Values

```typescript
"elasticsearch_not_enabled" | "no_results_from_search" | "no_assets_were_processed"
```