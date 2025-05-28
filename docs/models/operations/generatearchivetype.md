# GenerateArchiveType

The specific file type of assets to include in the archive. Not applicable when "resource_type" is "all".

## Example Usage

```typescript
import { GenerateArchiveType } from "@cloudinary/assets/models/operations";

let value: GenerateArchiveType = "upload";
```

## Values

```typescript
"upload" | "private" | "authenticated" | "fetch"
```