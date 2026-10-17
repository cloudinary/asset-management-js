# UpdatePersonResponse

## Example Usage

```typescript
import { UpdatePersonResponse } from "@cloudinary/asset-management/models/components";

let value: UpdatePersonResponse = {
  personId: "f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2",
  name: "Jane Doe",
  status: "active",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `personId`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The unique identifier of the person.                               | f10f893da5a1586dca6764b22514aa0d25e6b867baffc4fb43a2318a25d8e5b2   |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | The display name of the person.                                    | Jane Doe                                                           |
| `status`                                                           | [components.PersonStatus](../../models/components/personstatus.md) | :heavy_minus_sign:                                                 | The status of a person.                                            | active                                                             |