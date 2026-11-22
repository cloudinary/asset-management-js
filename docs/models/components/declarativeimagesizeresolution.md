# DeclarativeImageSizeResolution

Output resolution tier, measured on the longest edge. Defaults to
`1K` when omitted.
* `0.5K`: ~512 px
* `1K`: ~1024 px
* `2K`: ~2048 px
* `4K`: ~4096 px


## Example Usage

```typescript
import { DeclarativeImageSizeResolution } from "@cloudinary/asset-management/models/components";

let value: DeclarativeImageSizeResolution = "2K";
```

## Values

```typescript
"0.5K" | "1K" | "2K" | "4K"
```