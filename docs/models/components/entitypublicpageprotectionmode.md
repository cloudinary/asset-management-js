# EntityPublicPageProtectionMode

Secured-sharing protection mode of the public page. `none` means the page is unprotected; `email_otp` means viewers must verify an allowed email address with a one-time passcode before accessing the page.


## Example Usage

```typescript
import { EntityPublicPageProtectionMode } from "@cloudinary/asset-management/models/components";

let value: EntityPublicPageProtectionMode = "email_otp";
```

## Values

```typescript
"none" | "email_otp"
```