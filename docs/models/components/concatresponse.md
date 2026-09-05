# ConcatResponse

Response returned when a concat job is accepted.

## Example Usage

```typescript
import { ConcatResponse } from "@cloudinary/asset-management/models/components";

let value: ConcatResponse = {
  status: "processing",
  uniqueUploadId: "2fd4e1c67a2d28fce",
  publicId: "my_combined_video",
  resourceType: "video",
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                                      | [components.ConcatResponseStatus](../../models/components/concatresponsestatus.md)                                                                            | :heavy_check_mark:                                                                                                                                            | The status of the concat job. Always 'processing'.                                                                                                            |
| `uniqueUploadId`                                                                                                                                              | *string*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | Identifier shared by all chunked-upload parts produced for this concat job (sent as the `X-Unique-Upload-Id` header on each `/video/upload_chunked` request). |
| `publicId`                                                                                                                                                    | *string*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | The public ID assigned to the concatenated asset, if one was supplied in the request.                                                                         |
| `resourceType`                                                                                                                                                | [components.ConcatResponseResourceType](../../models/components/concatresponseresourcetype.md)                                                                | :heavy_minus_sign:                                                                                                                                            | Always 'video' — concat produces an MP4.                                                                                                                      |