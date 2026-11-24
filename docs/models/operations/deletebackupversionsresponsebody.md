# DeleteBackupVersionsResponseBody

Backup versions successfully deleted, or, with `async=true`, the deletion was accepted and runs in the background.


## Supported Types

### `components.DeleteBackupVersionsResponse`

```typescript
const value: components.DeleteBackupVersionsResponse = {
  assetId: "<id>",
  deletedVersionIds: [],
};
```

### `components.DeleteBackupVersionsPendingResponse`

```typescript
const value: components.DeleteBackupVersionsPendingResponse = {
  status: "pending",
  assetId: "<id>",
};
```

