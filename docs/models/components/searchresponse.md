# SearchResponse

The response object returned by search operations.

## Example Usage

```typescript
import { SearchResponse } from "@cloudinary/assets/models/components";

let value: SearchResponse = {
  totalCount: 42,
  time: 42,
  resources: [
    {
      assetId: "09169cf604b03521789d1b3b8cca53d1",
      publicId: "blue_sweater",
      assetFolder: "Clothing Sale",
      filename: "blue_sweater",
      displayName: "blue_sweater",
      format: "jpg",
      version: 1719316754,
      resourceType: "image",
      type: "upload",
      createdAt: new Date("2024-06-25T11:59:14+00:00"),
      uploadedAt: new Date("2024-06-25T11:59:14+00:00"),
      bytes: 71063,
      backupBytes: 71063,
      width: 4800,
      height: 6400,
      aspectRatio: 0.75,
      pixels: 307200,
      url:
        "http://res.cloudinary.com/demo/image/upload/v1719316754/blue_sweater.jpg",
      secureUrl:
        "https://res.cloudinary.com/demo/image/upload/v1719316754/blue_sweater.jpg",
      status: "active",
      accessMode: "public",
      accessControl: null,
      etag: "7242da7b353e7da2c3eb8c006165b385",
      createdBy: {
        accessKey: "614335564976464",
      },
      uploadedBy: {
        accessKey: "614335564976464",
      },
    },
  ],
  nextCursor: "e4d03a236b27e306e56719f74d05cdef",
  aggregations: {
    values: [
      {
        value: "jpg",
        count: 42,
      },
    ],
    ranges: [
      {
        from: 0,
        to: 1048576,
        count: 17,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                            | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The total number of resources matching the search criteria.                                                             | 42                                                                                                                      |
| `time`                                                                                                                  | *number*                                                                                                                | :heavy_minus_sign:                                                                                                      | The time taken to execute the search query in milliseconds.                                                             | 42                                                                                                                      |
| `resources`                                                                                                             | [components.Resource](../../models/components/resource.md)[]                                                            | :heavy_minus_sign:                                                                                                      | The list of resources matching the search criteria. Can be empty if no results found.                                   |                                                                                                                         |
| `nextCursor`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | A cursor for pagination. Only included when there are more results available.                                           | e4d03a236b27e306e56719f74d05cdef                                                                                        |
| `aggregations`                                                                                                          | [components.Aggregations](../../models/components/aggregations.md)                                                      | :heavy_minus_sign:                                                                                                      | Aggregation results when the aggregate parameter is used in the request. Only included when aggregations are requested. |                                                                                                                         |