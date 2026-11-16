# ContractCreateCollectionRequestPayloadType

Type of the collection. `manual` holds an explicit asset list and starts empty until you add assets with the **Add assets to a collection** endpoint; `dynamic` is defined by a saved filter expression and is populated automatically.


## Example Usage

```typescript
import { ContractCreateCollectionRequestPayloadType } from "@cloudinary/asset-management/models/components";

let value: ContractCreateCollectionRequestPayloadType = "dynamic";
```

## Values

```typescript
"manual" | "dynamic"
```