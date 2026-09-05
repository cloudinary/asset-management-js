# TaskResponse

Envelope for an async generation task — returned by the accepted (202)
response and by GET /tasks/{task_id}.


## Example Usage

```typescript
import { TaskResponse } from "@cloudinary/asset-management/models/components";

let value: TaskResponse = {
  data: {
    taskId:
      "053f4bde4b933c8ecef23724ecde63b667c1ea21816d56c161c7ec1df6297da4b43109625650e9edf0f42152cc4cc32c8ad57824ac75ba8e05020f827c415559ac1248076a2d72c0a73af0479cca77eb",
    status: "pending",
  },
  requestId: "17c3b70c5096df0e77e838323abb7029",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                          | [components.Task](../../models/components/task.md)                                                                                                                              | :heavy_minus_sign:                                                                                                                                                              | An async generation task. Returned when a generation is accepted (202)<br/>and from GET /tasks/{task_id} as it progresses. The `result` is filled<br/>in once `status` is `completed`.<br/> |                                                                                                                                                                                 |
| `requestId`                                                                                                                                                                     | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | Unique identifier for this request, for correlation and support.                                                                                                                | 17c3b70c5096df0e77e838323abb7029                                                                                                                                                |