# UpdateCollectionPublicPageRequest

## Example Usage

```typescript
import { UpdateCollectionPublicPageRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateCollectionPublicPageRequest = {
  collectionId: "<id>",
  publicPageId: "<id>",
  contractUpdatePublicPageRequestPayload: {
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
    protectionMode: "email_otp",
    allowedEmails: [
      "alice@example.com",
      "bob@example.com",
    ],
    allowedDomains: [
      "example.com",
    ],
    allowAny: false,
    customLayoutUrl:
      "https://res.cloudinary.com/demo/raw/upload/layouts/summer.html",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `collectionId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | External ID of the collection the public page belongs to.                                                              |
| `publicPageId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | External ID of the public page.                                                                                        |
| `contractUpdatePublicPageRequestPayload`                                                                               | [components.ContractUpdatePublicPageRequestPayload](../../models/components/contractupdatepublicpagerequestpayload.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |