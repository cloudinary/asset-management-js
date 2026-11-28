# PeopleByAssetResponse

## Example Usage

```typescript
import { PeopleByAssetResponse } from "@cloudinary/asset-management/models/components";

let value: PeopleByAssetResponse = {
  assetId: "2262b0b5eb88f1fd7724e29b0e57d730",
  people: [
    {
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
        url:
          "https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg",
        resourceType: "image",
        type: "upload",
        publicId: "sample",
        version: 1234567890,
      },
      createdAt: new Date("2025-01-15T10:30:00Z"),
      updatedAt: new Date("2025-01-20T14:45:00Z"),
      face: {
        assetId: "2262b0b5eb88f1fd7724e29b0e57d730",
        boundingBox: [
          10,
          20,
          100,
          150,
        ],
        url:
          "https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg",
        resourceType: "image",
        type: "upload",
        publicId: "sample",
        version: 1234567890,
      },
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `assetId`                                                              | *string*                                                               | :heavy_minus_sign:                                                     | The external ID of the asset.                                          | 2262b0b5eb88f1fd7724e29b0e57d730                                       |
| `people`                                                               | [components.PersonOnAsset](../../models/components/persononasset.md)[] | :heavy_minus_sign:                                                     | The recognized people found in the asset.                              |                                                                        |