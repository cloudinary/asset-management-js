# TextRequest

## Example Usage

```typescript
import { TextRequest } from "@cloudinary/assets/models/operations";

let value: TextRequest = {
  resourceType: "image",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `resourceType`                                                             | [operations.TextResourceType](../../models/operations/textresourcetype.md) | :heavy_check_mark:                                                         | The type of resource to create. Must be "image" for text generation.       |
| `requestBody`                                                              | [operations.TextRequestBody](../../models/operations/textrequestbody.md)   | :heavy_check_mark:                                                         | N/A                                                                        |