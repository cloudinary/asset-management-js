# PersonDetails

Detailed information about a recognized person.

## Example Usage

```typescript
import { PersonDetails } from "@cloudinary/asset-management/models/components";

let value: PersonDetails = {
  id: "a1b2c3d4e5f6",
  name: "Jane Doe",
  status: "active",
  thumbnail: {
    assetId: "2262b0b5eb88f1fd7724e29b0e57d730",
    boundingBox: [
      10,
      20,
      100,
      150,
    ],
    url: "https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg",
    resourceType: "image",
    type: "upload",
    publicId: "sample",
    version: 1234567890,
  },
  createdAt: new Date("2025-01-15T10:30:00Z"),
  updatedAt: new Date("2025-01-20T14:45:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The unique identifier of the person.                                                          | a1b2c3d4e5f6                                                                                  |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The display name of the person, or null if not named.                                         | Jane Doe                                                                                      |
| `status`                                                                                      | [components.PersonStatus](../../models/components/personstatus.md)                            | :heavy_minus_sign:                                                                            | The status of a person.                                                                       | active                                                                                        |
| `thumbnail`                                                                                   | [components.Thumbnail](../../models/components/thumbnail.md)                                  | :heavy_minus_sign:                                                                            | The thumbnail image for a person.                                                             |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the person was first detected.                                         | 2025-01-15T10:30:00Z                                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the person was last updated.                                           | 2025-01-20T14:45:00Z                                                                          |