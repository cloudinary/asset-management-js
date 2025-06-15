# DeleteBackupVersionsRequestBody

## Example Usage

```typescript
import { DeleteBackupVersionsRequestBody } from "@cloudinary/asset-management/models/operations";

let value: DeleteBackupVersionsRequestBody = {
  versionIds: [
    "5552aa57e67445552a3cdc1110a0115",
    "383e22a57167445552a3cdc16f0a0c85",
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `versionIds`                                                              | *string*[]                                                                | :heavy_check_mark:                                                        | The list of version IDs to delete from backup.                            | [<br/>"5552aa57e67445552a3cdc1110a0115",<br/>"383e22a57167445552a3cdc16f0a0c85"<br/>] |