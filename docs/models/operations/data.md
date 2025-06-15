# Data

## Example Usage

```typescript
import { Data } from "@cloudinary/asset-management/models/operations";

let value: Data = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `videoPublicId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The full public ID of the video                                                               |
| `videoDuration`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The duration in seconds of the video                                                          |
| `videoTransformation`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The transformation applied to the video                                                       |
| `videoExtension`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The file extension of the video                                                               |
| `viewerApplicationName`                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The application used to view the video                                                        |
| `viewerLocationCountryCode`                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The 2-digit ISO country code of the viewer location                                           |
| `viewerOsIdentifier`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The full identifier for the viewer's operating system                                         |
| `viewWatchTime`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The length of time the video was viewed                                                       |
| `viewEndedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date when the video view ended                                                            |