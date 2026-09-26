# BackupVersionFailure

## Example Usage

```typescript
import { BackupVersionFailure } from "@cloudinary/asset-management/models/components";

let value: BackupVersionFailure = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `versionId`                                                                       | *string*                                                                          | :heavy_minus_sign:                                                                | Hexadecimal version ID; length is a positive multiple of 32 (typically 32 or 64). |
| `error`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | The error message explaining the failure.                                         |