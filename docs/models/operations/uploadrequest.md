# UploadRequest

## Example Usage

```typescript
import { UploadRequest } from "@cloudinary/asset-management/models/operations";

let value: UploadRequest = {
  uploadRequest: {
    autoTranscription: true,
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    accessControl: [
      {
        accessType: "token",
        key: "prod2024",
      },
      {
        accessType: "anonymous",
        start: new Date("2024-03-15T09:00:00Z"),
        end: new Date("2024-06-30T23:59:59Z"),
      },
    ],
    detection: "coco_v2",
    file: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                          | Required                                                                                                                                                                                                                                      | Description                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                                                                                                                | [components.UploadResourceType](../../models/components/uploadresourcetype.md)                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                            | The type of resource to upload:<br/>- "image" for uploading strictly images<br/>- "video" for uploading strictly videos<br/>- "raw" for uploading non-media files<br/>- "auto" for allowing Cloudinary to automatically detect the type of the uploaded file<br/> |
| `uploadRequest`                                                                                                                                                                                                                               | [components.UploadRequest](../../models/components/uploadrequest.md)                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                            | N/A                                                                                                                                                                                                                                           |