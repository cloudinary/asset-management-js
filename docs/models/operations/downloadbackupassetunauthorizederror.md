# DownloadBackupAssetUnauthorizedError

## Example Usage

```typescript
import { DownloadBackupAssetUnauthorizedError } from "@cloudinary/assets/models/operations";

let value: DownloadBackupAssetUnauthorizedError = {
  message:
    "Invalid Signature abc123. String to sign - 'timestamp=1234567890&api_key=12345'.",
  httpCode: 401,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `message`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | Invalid Signature or timestamp expired.                                          | Invalid Signature abc123. String to sign - 'timestamp=1234567890&api_key=12345'. |
| `httpCode`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | The HTTP status code.                                                            | 401                                                                              |