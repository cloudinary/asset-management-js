# UpdatePersonRequest

## Example Usage

```typescript
import { UpdatePersonRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdatePersonRequest = {
  personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
  updatePersonRequest: {
    name: "Jane Doe",
    status: "active",
    thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `personId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | The unique identifier of the person.                                             | f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2                 |
| `updatePersonRequest`                                                            | [components.UpdatePersonRequest](../../models/components/updatepersonrequest.md) | :heavy_check_mark:                                                               | The updated person attributes.                                                   |                                                                                  |