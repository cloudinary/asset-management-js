# ModerationAdvOcr

For all asset types, set to:
- manual to add the uploaded asset to a list of pending assets that can be moderated using the Admin API or the Cloudinary Console.
- perception_point to automatically moderate the uploaded asset using the Perception Point Malware Detection add-on.

For images only, set to:
- webpurify to automatically moderate the uploaded image using the WebPurify Image Moderation add-on.
- aws_rek to automatically moderate the uploaded image using the Amazon Rekognition AI Moderation add-on.
- duplicate:<threshold> to detect if the same or a similar image already exists using the Cloudinary Duplicate Image Detection add-on. Set threshold to a float greater than 0 and less than or equal to 1.0 to specify how similar an image needs to be in order to be considered a duplicate. Set threshold to 0 to add an image to the index of images that are searched when duplicate detection is invoked for another image.

For videos only, set to:
- aws_rek_video to automatically moderate the uploaded video using the Amazon Rekognition Video Moderation add-on.
- google_video_moderation automatically moderate the uploaded video using the Google AI Video Moderation add-on.

To request multiple moderations in a single API call:
- Send the desired list of moderations as a pipe-separated string with manual moderation, if relevant, being last.

Note: Rejected assets are automatically invalidated on the CDN within approximately ten minutes.


## Example Usage

```typescript
import { ModerationAdvOcr } from "@cloudinary/asset-management/models/components";

let value: ModerationAdvOcr = "perception_point";
```

## Values

```typescript
"manual" | "webpurify" | "metascan" | "aws_rek" | "aws_rek_video" | "google_video_moderation" | "perception_point" | "duplicate" | "cld"
```