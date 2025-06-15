<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    headers: "X-Robots-Tag: noindex",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    backgroundRemoval: "pixelz",
    format: "jpg",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    autoTagging: 0.5,
    detection: "coco_v2",
    file: "", // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->