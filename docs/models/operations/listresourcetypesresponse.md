# ListResourceTypesResponse

The list of resource types.

## Example Usage

```typescript
import { ListResourceTypesResponse } from "@cloudinary/assets/models/operations";

let value: ListResourceTypesResponse = {
  resourceTypes: [
    "image",
    "raw",
    "video",
  ],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `resourceTypes`                                                                                        | [operations.ListResourceTypesResourceType](../../models/operations/listresourcetypesresourcetype.md)[] | :heavy_minus_sign:                                                                                     | The list of available resource types.                                                                  | [<br/>"image",<br/>"raw",<br/>"video"<br/>]                                                            |