# Preference

What the choice optimizes for:
* `balanced` (default): quality and cost weighted equally.
* `quality`: quality only; cost isn't weighed.
* `economy`: cost first, quality second.
* `balanced_fast`, `quality_fast`, `economy_fast`: as above, but also







  favor faster generation, and never pick a model that typically
  takes longer than 30 seconds.


## Example Usage

```typescript
import { Preference } from "@cloudinary/asset-management/models/components";

let value: Preference = "quality";
```

## Values

```typescript
"balanced" | "quality" | "economy" | "balanced_fast" | "quality_fast" | "economy_fast"
```