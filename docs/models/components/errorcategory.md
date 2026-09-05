# ErrorCategory

Coarse classification of an error, primarily used by clients to decide whether to retry.
* `user_error`: the request was invalid; do not retry without changes.
* `auth_error`: authentication or authorization failed.
* `server_error`: an unexpected server-side error; retrying may succeed.
* `rate_limit_error`: quota or rate limit exceeded; retry later.


## Example Usage

```typescript
import { ErrorCategory } from "@cloudinary/asset-management/models/components";

let value: ErrorCategory = "user_error";
```

## Values

```typescript
"user_error" | "auth_error" | "server_error" | "rate_limit_error"
```