# InitialBackupProgressResponse

## Example Usage

```typescript
import { InitialBackupProgressResponse } from "@cloudinary/asset-management/models/components";

let value: InitialBackupProgressResponse = {
  status: "active",
  startTime: new Date("2024-05-07T10:00:00Z"),
  completionTime: new Date("2024-05-07T11:00:00Z"),
  processedAssetsCount: 42,
  reason: "elasticsearch_not_enabled",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                  | [components.InitialBackupStatusEnum](../../models/components/initialbackupstatusenum.md)                  | :heavy_check_mark:                                                                                        | The current status of the initial backup operation.                                                       |                                                                                                           |
| `startTime`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | The date and time when the initial backup operation started.                                              | 2024-05-07T10:00:00Z                                                                                      |
| `completionTime`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_minus_sign:                                                                                        | The date and time when the initial backup operation completed. Null while the operation is still running. | 2024-05-07T11:00:00Z                                                                                      |
| `processedAssetsCount`                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The number of assets processed so far. Null when progress cannot be determined.                           | 42                                                                                                        |
| `reason`                                                                                                  | [components.Reason](../../models/components/reason.md)                                                    | :heavy_minus_sign:                                                                                        | A reason code explaining why progress is unavailable. Present only when processed_assets_count is null.   | elasticsearch_not_enabled                                                                                 |