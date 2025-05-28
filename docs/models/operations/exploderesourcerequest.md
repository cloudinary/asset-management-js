# ExplodeResourceRequest

## Example Usage

```typescript
import { ExplodeResourceRequest } from "@cloudinary/assets/models/operations";

let value: ExplodeResourceRequest = {
  resourceType: "image",
  requestBody: {
    publicId: "<id>",
    transformation: "<value>",
    signature: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                   | [operations.ExplodeResourceResourceType](../../models/operations/exploderesourceresourcetype.md) | :heavy_check_mark:                                                                               | The type of resource to explode. only "image"                                                    |
| `requestBody`                                                                                    | [operations.ExplodeResourceRequestBody](../../models/operations/exploderesourcerequestbody.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |