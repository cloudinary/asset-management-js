# UpdateImageToVideoPromptRequest

## Example Usage

```typescript
import { UpdateImageToVideoPromptRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateImageToVideoPromptRequest = {
  promptId: "<id>",
  imageToVideoPromptUpdatePayload: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `promptId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The ID of the image-to-video prompt.                                                                     |
| `imageToVideoPromptUpdatePayload`                                                                        | [components.ImageToVideoPromptUpdatePayload](../../models/components/imagetovideopromptupdatepayload.md) | :heavy_check_mark:                                                                                       | A JSON object with the fields to update (display name and/or prompt text).                               |