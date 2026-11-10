# ImageFormat

Desired output image format. Optional; defaults to `png` when omitted.
Mapped to the closest format the chosen model supports — `webp` falls
back to `png` on models that don't support it (e.g. FLUX.2 Pro), and the
request is ignored entirely by models that don't expose a format option
(e.g. Recraft).


## Example Usage

```typescript
import { ImageFormat } from "@cloudinary/asset-management/models/components";

let value: ImageFormat = "png";
```

## Values

```typescript
"jpeg" | "png" | "webp"
```