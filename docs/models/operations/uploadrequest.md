# UploadRequest

## Example Usage

```typescript
import { UploadRequest } from "@cloudinary/asset-management/models/operations";

let value: UploadRequest = {
  uploadRequest: {
    autoTranscription: true,
    colors: false,
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

| Field                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                                                                                                                | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                            | The type of resource to upload:<br/>- "image" for uploading strictly images<br/>- "video" for uploading strictly videos<br/>- "raw" for uploading non-media files<br/>- "auto" for allowing Cloudinary to automatically detect the type of the uploaded file<br/> |
| `uploadRequest`                                                                                                                                                                                                                               | *components.UploadRequest*                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                           |