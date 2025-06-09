# UploadResourceType

The type of resource to upload:
- "image" for uploading strictly images
- "video" for uploading strictly videos  
- "raw" for uploading non-media files
- "auto" for allowing Cloudinary to automatically detect the type of the uploaded file


## Example Usage

```typescript
import { UploadResourceType } from "@cloudinary/assets/models/components";

let value: UploadResourceType = "video";
```

## Values

```typescript
"image" | "video" | "raw" | "auto"
```