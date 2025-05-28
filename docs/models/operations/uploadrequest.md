# UploadRequest

## Example Usage

```typescript
import { UploadRequest } from "@cloudinary/assets/models/operations";

let value: UploadRequest = {
  resourceType: "raw",
  uploadRequest: {
    headers: "X-Robots-Tag: noindex",
    moderation: "aws_rek",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                                                                                                              | [operations.UploadResourceType](../../models/operations/uploadresourcetype.md)                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                          | The type of resource to upload. "image" for uploading strictly images, "video" for uploading strictly videos, "raw" for uploading non-media files, or "auto" for allowing Cloudinary to automatically detect the type of the uploaded file. |
| `uploadRequest`                                                                                                                                                                                                                             | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                         |