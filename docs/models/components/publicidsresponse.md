# PublicIdsResponse

The result of a bulk operation addressed by public ID.

## Example Usage

```typescript
import { PublicIdsResponse } from "@cloudinary/asset-management/models/components";

let value: PublicIdsResponse = {};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicIds`                                                                                                                                                   | *string*[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                            | The public IDs the operation was actually applied to. Shorter than the requested list when assets were missing, unauthorized, or beyond the 1000-asset limit. |
| `unauthorized`                                                                                                                                                | *string*[]                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                            | The public IDs the caller lacks update permission for. Present only when at least one requested asset was unauthorized.                                       |