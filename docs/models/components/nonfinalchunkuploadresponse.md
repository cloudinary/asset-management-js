# NonFinalChunkUploadResponse

Status information returned for in-progress chunked uploads.
Note that fields that are not yet determined or not known at the time of the call are omitted from the response.


## Example Usage

```typescript
import { NonFinalChunkUploadResponse } from "@cloudinary/asset-management/models/components";

let value: NonFinalChunkUploadResponse = {
  done: false,
  bytes: 1000000,
  kind: "upload",
  resourceType: "image",
  publicId: "sample_image",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `done`                                                                                                                         | *boolean*                                                                                                                      | :heavy_check_mark:                                                                                                             | Whether the upload is complete. Will be false for all but the last chunk.                                                      |
| `bytes`                                                                                                                        | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | The total number of bytes uploaded so far.                                                                                     |
| `kind`                                                                                                                         | [components.StorageType](../../models/components/storagetype.md)                                                               | :heavy_minus_sign:                                                                                                             | The storage type of the resource.                                                                                              |
| `resourceType`                                                                                                                 | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The type of resource being uploaded (e.g., "image", "video", "raw"). May be omitted in early chunks when using auto detection. |
| `publicId`                                                                                                                     | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | The public ID assigned to the upload. May be omitted in early chunks if it will be auto-generated upon completion.             |