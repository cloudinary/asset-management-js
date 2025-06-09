# GenerateArchiveRequest

## Example Usage

```typescript
import { GenerateArchiveRequest } from "@cloudinary/assets/models/operations";

let value: GenerateArchiveRequest = {
  resourceType: "all",
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                | [operations.GenerateArchiveResourceType](../../models/operations/generatearchiveresourcetype.md)                                              | :heavy_check_mark:                                                                                                                            | The type of resources to include in the archive. "image" for images, "video" for videos, "raw" for non-media files, or "all" for mixed types. |
| `requestBody`                                                                                                                                 | [operations.GenerateArchiveRequestBody](../../models/operations/generatearchiverequestbody.md)                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |