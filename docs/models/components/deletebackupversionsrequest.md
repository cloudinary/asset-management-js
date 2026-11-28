# DeleteBackupVersionsRequest

## Example Usage

```typescript
import { DeleteBackupVersionsRequest } from "@cloudinary/asset-management/models/components";

let value: DeleteBackupVersionsRequest = {
  versionIds: [
    "5552aa57e67445552a3cdc1110a0115",
    "383e22a57167445552a3cdc16f0a0c85",
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `versionIds`                                                                                                                                   | *string*[]                                                                                                                                     | :heavy_minus_sign:                                                                                                                             | The list of version IDs to delete from backup. Omit it and pass the `all=true` query parameter to delete every backed up version of the asset. | [<br/>"5552aa57e67445552a3cdc1110a0115",<br/>"383e22a57167445552a3cdc16f0a0c85"<br/>]                                                          |