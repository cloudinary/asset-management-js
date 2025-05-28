# AsyncUploadResponse

Response returned when an upload is processed asynchronously (async=true)

## Example Usage

```typescript
import { AsyncUploadResponse } from "@cloudinary/assets/models/components";

let value: AsyncUploadResponse = {
  status: "pending",
  resourceType: "image",
  publicId: "sample_image",
  batchId: "9c2f5a46b3a6c4d9e8f7g0h1i2j3k4l5",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                              | [components.AsyncUploadResponseStatus](../../models/components/asyncuploadresponsestatus.md)                          | :heavy_check_mark:                                                                                                    | The status of the asynchronous upload. Will be 'pending' for async uploads.                                           |
| `resourceType`                                                                                                        | [components.AsyncUploadResponseResourceType](../../models/components/asyncuploadresponseresourcetype.md)              | :heavy_minus_sign:                                                                                                    | The type of resource being uploaded. This field may be omitted if resource_type is not known at the time of the call. |
| `type`                                                                                                                | [components.AsyncUploadResponseType](../../models/components/asyncuploadresponsetype.md)                              | :heavy_minus_sign:                                                                                                    | The storage type of the asset. Defaults to 'upload'.                                                                  |
| `publicId`                                                                                                            | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The public ID assigned to the upload. May be omitted if it will be auto-generated.                                    |
| `batchId`                                                                                                             | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | A unique identifier for the asynchronous upload job.                                                                  |
| `requesterIp`                                                                                                         | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | The IP address of the requester. This is only included if a product environment has requester_ip tracking enabled.    |