# ResourceTypesResponse

## Example Usage

```typescript
import { ResourceTypesResponse } from "@cloudinary/asset-management/models/components";

let value: ResourceTypesResponse = {
  resourceTypes: [
    "image",
    "raw",
    "video",
  ],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `resourceTypes`                                                                                                | [components.ResourceTypesResponseResourceType](../../models/components/resourcetypesresponseresourcetype.md)[] | :heavy_minus_sign:                                                                                             | The list of available resource types.                                                                          | [<br/>"image",<br/>"raw",<br/>"video"<br/>]                                                                    |