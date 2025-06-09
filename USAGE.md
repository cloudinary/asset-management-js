<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinaryAssets } from "@cloudinary/assets";
import { openAsBlob } from "node:fs";

const cloudinaryAssets = new CloudinaryAssets({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssets.upload.uploadMultipart("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->