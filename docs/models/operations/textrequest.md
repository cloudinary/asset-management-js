# TextRequest

## Example Usage

```typescript
import { TextRequest } from "@cloudinary/asset-management/models/operations";

let value: TextRequest = {
  resourceType: "image",
  textRequest: {
    text: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [operations.TextResourceType](../../models/operations/textresourcetype.md) | :heavy_check_mark:                                                         | The type of resource to create. Must be "image" for text generation.       |
| `textRequest`                                                              | [components.TextRequest](../../models/components/textrequest.md)           | :heavy_check_mark:                                                         | The text content and styling parameters for image generation.              |