# ImageToVideoPromptCreatePayload

## Example Usage

```typescript
import { ImageToVideoPromptCreatePayload } from "@cloudinary/asset-management/models/components";

let value: ImageToVideoPromptCreatePayload = {
  displayName: "Franco_Olson70",
  prompt: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `displayName`                                               | *string*                                                    | :heavy_check_mark:                                          | A human-readable name for the prompt.                       |
| `prompt`                                                    | *string*                                                    | :heavy_check_mark:                                          | The prompt text describing the motion or scene to generate. |