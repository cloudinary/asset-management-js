# ContextUpdateRequestCommand

The contextual-metadata operation to apply.

- `add` merges the given key-value pairs into each asset's existing context. Keys
  already present are overwritten; keys not mentioned are left intact. `context`
  is required.
- `remove_all` clears all contextual metadata. The `context` field is ignored.

## Example Usage

```typescript
import { ContextUpdateRequestCommand } from "@cloudinary/asset-management/models/components";

let value: ContextUpdateRequestCommand = "add";
```

## Values

```typescript
"add" | "remove_all"
```