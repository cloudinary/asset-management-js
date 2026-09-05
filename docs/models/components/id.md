# Id

Exact model identifier; overrides family/tier when provided. The
`-edit` models accept reference images and are selectable only on
`image_to_image`; the others only on `text_to_image`.


## Example Usage

```typescript
import { Id } from "@cloudinary/asset-management/models/components";

let value: Id = "flux-2-pro";
```

## Values

```typescript
"nano-banana-1" | "nano-banana-2" | "flux-2-klein-9b" | "flux-2-pro" | "recraft-v3" | "recraft-v4" | "gpt-image-1-mini" | "gpt-image-2" | "ideogram-v4-base" | "ideogram-v4-turbo" | "nano-banana-1-edit" | "nano-banana-2-edit" | "flux-2-klein-9b-edit" | "flux-2-pro-edit" | "recraft-v3-edit" | "gpt-image-1-mini-edit" | "gpt-image-2-edit"
```