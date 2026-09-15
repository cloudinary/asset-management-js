<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinaryAssetMgmt } from "@cloudinary/asset-management";

const cloudinaryAssetMgmt = new CloudinaryAssetMgmt({
  cloudName: "my_cloud",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinaryAssetMgmt.upload.upload("auto", {
    autoTagging: 0.5,
    backgroundRemoval: "pixelz",
    detection: "coco_v2",
    format: "jpg",
    moderation: "google_video_moderation",
    rawConvert: "google_speech:vtt:en-US",
    allowedFormats: "mp4,ogv,jpg,png,pdf",
    headers: "X-Robots-Tag: noindex",
    file: "", // Populate with string from file, for example example.file,
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->