# UpdateCollectionRequest

## Example Usage

```typescript
import { UpdateCollectionRequest } from "@cloudinary/asset-management/models/operations";

let value: UpdateCollectionRequest = {
  collectionId: "<id>",
  contractUpdateCollectionRequestPayload: {
    name: "Summer Campaign Assets 2026",
    description: "Approved photography for the 2026 summer campaign launch.",
    configuration: {
      expression: "tags = \"summer-campaign\" AND resource_type:image",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `collectionId`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | External ID of the collection to retrieve, update, or delete.                                                          |
| `contractUpdateCollectionRequestPayload`                                                                               | [components.ContractUpdateCollectionRequestPayload](../../models/components/contractupdatecollectionrequestpayload.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |