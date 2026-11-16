# ContractCreatePublicPageResponse

Response returned by the **Publish a collection** endpoint.

## Example Usage

```typescript
import { ContractCreatePublicPageResponse } from "@cloudinary/asset-management/models/components";

let value: ContractCreatePublicPageResponse = {
  data: {
    id: "pub_2c4d6e8f0a1b",
    url: "https://collection.cloudinary.com/your-cloud-name/pub_2c4d6e8f0a1b",
    name: "Summer Campaign Preview",
    availableFrom: new Date("2026-03-20T00:00:00Z"),
    expiresAt: new Date("2026-04-20T00:00:00Z"),
    showDownloadOriginalOption: true,
    downloadTransformations: [
      {
        name: "thumbnail_400",
        transformation: "c_thumb,w_400,g_face",
        types: [
          "image",
        ],
      },
    ],
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
      "https://res.cloudinary.com/demo/raw/upload/layouts/summer-page.html",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                                              | [components.EntityPublicPage](../../models/components/entitypublicpage.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                  | A public page (shareable link) for a collection. Every field is always present in a response: an unset value is returned as `null` (or `false` / `[]`) rather than being omitted, so a read-modify-write round-trip never has to guess what an absent field meant.<br/> |