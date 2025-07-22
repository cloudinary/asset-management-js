# GenerateArchiveRequest

## Example Usage

```typescript
import { GenerateArchiveRequest } from "@cloudinary/asset-management/models/operations";

let value: GenerateArchiveRequest = {
  resourceType: "all",
  requestBody: {
    targetTags: [
      "animal",
      "dog",
    ],
  },
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                                                                | [components.ArchiveResourceType](../../models/components/archiveresourcetype.md)                                                              | :heavy_check_mark:                                                                                                                            | The type of resources to include in the archive. "image" for images, "video" for videos, "raw" for non-media files, or "all" for mixed types. |
| `requestBody`                                                                                                                                 | [operations.GenerateArchiveRequestBody](../../models/operations/generatearchiverequestbody.md)                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |