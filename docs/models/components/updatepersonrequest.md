# UpdatePersonRequest

## Example Usage

```typescript
import { UpdatePersonRequest } from "@cloudinary/asset-management/models/components";

let value: UpdatePersonRequest = {
  name: "Jane Doe",
  status: "active",
  thumbnailAssetId: "2262b0b5eb88f1fd7724e29b0e57d730",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The display name for the person. Maximum 255 characters.                           | Jane Doe                                                                           |
| `status`                                                                           | [components.PersonStatus](../../models/components/personstatus.md)                 | :heavy_minus_sign:                                                                 | The status of a person.                                                            | active                                                                             |
| `thumbnailAssetId`                                                                 | *string*                                                                           | :heavy_minus_sign:                                                                 | The external ID of an asset containing this person's face to use as the thumbnail. | 2262b0b5eb88f1fd7724e29b0e57d730                                                   |