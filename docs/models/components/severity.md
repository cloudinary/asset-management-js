# Severity

How much weight to give the message.
* `info`: for awareness; nothing to do.
* `warning`: worth relaying to the user before continuing.
* `blocking`: the request was not served; the text says what unblocks it.


## Example Usage

```typescript
import { Severity } from "@cloudinary/asset-management/models/components";

let value: Severity = "blocking";
```

## Values

```typescript
"info" | "warning" | "blocking"
```