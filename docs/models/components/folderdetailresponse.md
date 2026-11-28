# FolderDetailResponse

The details of a folder. Returns the standard folder fields plus aggregation and ancestor
fields when available.


## Example Usage

```typescript
import { FolderDetailResponse } from "@cloudinary/asset-management/models/components";

let value: FolderDetailResponse = {
  name: "a",
  path: "folder/a",
  externalId: "abcdefg1234567890",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the folder.                                                                       |                                                                                               |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The full path of the folder.                                                                  |                                                                                               |
| `externalId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The unique identifier for the folder.                                                         |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The timestamp when the folder was created.                                                    |                                                                                               |
| `resourceCount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The number of assets directly within the folder.                                              |                                                                                               |
| `totalBytes`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | The total size, in bytes, of the assets within the folder.                                    |                                                                                               |
| `lastUploadedAt`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | The Unix timestamp of the most recent upload into the folder.                                 |                                                                                               |
| `ancestors`                                                                                   | [components.Folder](../../models/components/folder.md)[]                                      | :heavy_minus_sign:                                                                            | The ancestor folders of this folder, ordered from root to parent.                             |                                                                                               |
| `additionalProperties`                                                                        | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           | {<br/>"name": "a",<br/>"path": "folder/a",<br/>"external_id": "abcdefg1234567890"<br/>}       |