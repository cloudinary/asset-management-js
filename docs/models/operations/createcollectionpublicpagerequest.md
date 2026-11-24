# CreateCollectionPublicPageRequest

## Example Usage

```typescript
import { CreateCollectionPublicPageRequest } from "@cloudinary/asset-management/models/operations";

let value: CreateCollectionPublicPageRequest = {
  collectionId: "<id>",
  contractCreatePublicPageRequestPayload: {
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
      },
      {
        name: "trimmed_preview",
        types: [
          "video",
        ],
      },
    ],
    createDownloadTransformations: true,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `collectionId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | External ID of the collection to create or list public pages for.                                                      |
| `contractCreatePublicPageRequestPayload`                                                                               | [components.ContractCreatePublicPageRequestPayload](../../models/components/contractcreatepublicpagerequestpayload.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |