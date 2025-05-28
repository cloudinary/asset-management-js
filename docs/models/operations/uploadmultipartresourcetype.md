# UploadMultipartResourceType

The type of resource to upload. "image" for uploading strictly images, "video" for uploading strictly videos, "raw" for uploading non-media files, or "auto" for allowing Cloudinary to automatically detect the type of the uploaded file.

## Example Usage

```typescript
import { UploadMultipartResourceType } from "@cloudinary/assets/models/operations";

let value: UploadMultipartResourceType = "raw";
```

## Values

```typescript
"image" | "video" | "raw" | "auto"
```