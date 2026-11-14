# ImageToVideoGeneratePayloadAspectRatio

Video aspect ratio. `auto` resolves based on image dimensions (defaults to landscape). `16:9` = landscape, `9:16` = portrait.

## Example Usage

```typescript
import { ImageToVideoGeneratePayloadAspectRatio } from "@cloudinary/asset-management/models/components";

let value: ImageToVideoGeneratePayloadAspectRatio = "9:16";
```

## Values

```typescript
"auto" | "16:9" | "9:16"
```