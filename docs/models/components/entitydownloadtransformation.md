# EntityDownloadTransformation

A transformation template offered for download on a public page.

## Example Usage

```typescript
import { EntityDownloadTransformation } from "@cloudinary/asset-management/models/components";

let value: EntityDownloadTransformation = {
  name: "thumbnail_400",
  transformation: "c_thumb,w_400,g_face",
  types: [
    "image",
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Name of the transformation template.                                                                         | thumbnail_400                                                                                                |
| `transformation`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The transformation definition behind the name.                                                               | c_thumb,w_400,g_face                                                                                         |
| `types`                                                                                                      | [components.EntityDownloadTransformationType](../../models/components/entitydownloadtransformationtype.md)[] | :heavy_minus_sign:                                                                                           | Asset types the transformation is offered for.                                                               | [<br/>"image"<br/>]                                                                                          |