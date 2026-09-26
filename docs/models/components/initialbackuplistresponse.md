# InitialBackupListResponse

## Example Usage

```typescript
import { InitialBackupListResponse } from "@cloudinary/asset-management/models/components";

let value: InitialBackupListResponse = {
  initialBackups: [
    {
      id: "abc123def456",
      status: "active",
      createdAt: new Date("2024-05-07T10:00:00Z"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `initialBackups`                                                                     | [components.InitialBackupSummary](../../models/components/initialbackupsummary.md)[] | :heavy_check_mark:                                                                   | The list of initial backup operations.                                               |
| `nextCursor`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Cursor for the next page of results. Present only when more results are available.   |