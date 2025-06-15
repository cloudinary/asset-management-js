# UpdateResourceByAssetIdRequest

## Example Usage

```typescript
import { UpdateResourceByAssetIdRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateResourceByAssetIdRequest = {
  assetId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `assetId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | The unique asset ID of the asset to update.                                          |
| `resourceUpdateRequest`                                                              | [components.ResourceUpdateRequest](../../models/components/resourceupdaterequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |