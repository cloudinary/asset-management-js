# InitialBackupSummary

## Example Usage

```typescript
import { InitialBackupSummary } from "@cloudinary/asset-management/models/components";

let value: InitialBackupSummary = {
  id: "abc123def456",
  status: "failed",
  createdAt: new Date("2024-05-07T10:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier of the initial backup operation.                                        | abc123def456                                                                                  |
| `status`                                                                                      | [components.InitialBackupStatusEnum](../../models/components/initialbackupstatusenum.md)      | :heavy_check_mark:                                                                            | The current status of the initial backup operation.                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The date and time when the initial backup operation was created.                              | 2024-05-07T10:00:00Z                                                                          |