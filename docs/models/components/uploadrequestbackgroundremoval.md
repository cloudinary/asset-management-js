# UploadRequestBackgroundRemoval

Automatically remove the background of an image using an add-on.
- Set to cloudinary_ai to use the deep-learning based Cloudinary AI Background Removal add-on.
- Note: this feature has been superseded by background removal on the fly.
- Set to pixelz to use the human-powered Pixelz Remove-The-Background Editing add-on service.
Relevant for images only.


## Example Usage

```typescript
import { UploadRequestBackgroundRemoval } from "@cloudinary/asset-management/models/components";

let value: UploadRequestBackgroundRemoval = "pixelz";
```

## Values

```typescript
"cloudinary_ai" | "remove_the_background" | "pixelz"
```