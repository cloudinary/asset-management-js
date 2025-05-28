# BinaryUploadRequestCategorization

A comma-separated list of the categorization add-ons to run on the asset. Set to google_tagging, google_video_tagging, imagga_tagging and/or aws_rek_tagging to automatically classify the scenes of the uploaded asset.

## Example Usage

```typescript
import { BinaryUploadRequestCategorization } from "@cloudinary/assets/models/components";

let value: BinaryUploadRequestCategorization = "google_video_tagging";
```

## Values

```typescript
"rekognition_scene" | "imagga_tagging" | "aws_rek_tagging" | "google_video_tagging" | "google_tagging" | "visenze_recognition" | "azure_video_indexer"
```