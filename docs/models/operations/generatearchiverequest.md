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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                 | [components.ArchiveResourceType](../../models/components/archiveresourcetype.md)               | :heavy_check_mark:                                                                             | The type of resource for archive generation (image, video, or raw).                            |
| `requestBody`                                                                                  | [operations.GenerateArchiveRequestBody](../../models/operations/generatearchiverequestbody.md) | :heavy_check_mark:                                                                             | The archive generation parameters.                                                             |