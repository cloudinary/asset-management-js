# TagsUpdateRequestCommand

The tag operation to apply.

- `add` adds the given tags, leaving existing tags untouched.
- `remove` removes the given tags, leaving other tags untouched.
- `replace` overwrites the full tag list with the given tags.
- `remove_all` clears every tag. The `tags` field is ignored.

## Example Usage

```typescript
import { TagsUpdateRequestCommand } from "@cloudinary/asset-management/models/components";

let value: TagsUpdateRequestCommand = "remove_all";
```

## Values

```typescript
"add" | "remove" | "replace" | "remove_all"
```