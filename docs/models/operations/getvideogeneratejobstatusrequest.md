# GetVideoGenerateJobStatusRequest

## Example Usage

```typescript
import { GetVideoGenerateJobStatusRequest } from "@cloudinary/asset-management/models/operations";

let value: GetVideoGenerateJobStatusRequest = {
  jobId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `jobId`                                                        | *string*                                                       | :heavy_check_mark:                                             | The video generation job ID returned from the create endpoint. |