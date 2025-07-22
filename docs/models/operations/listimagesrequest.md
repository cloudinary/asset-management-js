# ListImagesRequest

## Example Usage

```typescript
import { ListImagesRequest } from "@cloudinary/asset-management/models/operations";

let value: ListImagesRequest = {
  publicIds: [
    "sample",
    "product_image",
    "banner_2023",
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.ListStorageType](../../models/components/liststoragetype.md)                      | :heavy_minus_sign:                                                                            | The storage type of the assets. Necessary for prefix filtering.                               |                                                                                               |
| `prefix`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Find resources with a public ID prefix. Requires the `type` parameter.                        |                                                                                               |
| `publicIds`                                                                                   | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | An array of public IDs to return.                                                             | [<br/>"sample",<br/>"product_image",<br/>"banner_2023"<br/>]                                  |
| `tags`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether to include the list of tag names assigned to each asset. Default: false               |                                                                                               |
| `nextCursor`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Cursor for pagination.                                                                        |                                                                                               |
| `maxResults`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum number of results to return (1-500).                                                  |                                                                                               |
| `direction`                                                                                   | [components.Direction](../../models/components/direction.md)                                  | :heavy_minus_sign:                                                                            | Sort direction.                                                                               |                                                                                               |
| `startAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Retrieve resources uploaded after this timestamp.                                             |                                                                                               |
| `fields`                                                                                      | [components.FieldsSpec](../../models/components/fieldsspec.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |