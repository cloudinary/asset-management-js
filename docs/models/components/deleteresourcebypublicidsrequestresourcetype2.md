# DeleteResourceByPublicIdsRequestResourceType2

The type of asset. Relevant as a parameter only when using the SDKs (the resource_type is included in the endpoint URL when using the REST API). Note: use video for all video and audio assets, such as .mp3. Default: image.

## Example Usage

```typescript
import { DeleteResourceByPublicIdsRequestResourceType2 } from "@cloudinary/asset-management/models/components";

let value: DeleteResourceByPublicIdsRequestResourceType2 = "raw";
```

## Values

```typescript
"image" | "video" | "raw"
```