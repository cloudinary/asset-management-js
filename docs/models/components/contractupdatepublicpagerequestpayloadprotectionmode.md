# ContractUpdatePublicPageRequestPayloadProtectionMode

Secured-sharing protection mode. `none` removes protection and clears the allowed emails, domains and `allow_any`. `email_otp` protects the page so viewers must verify an allowed email address with a one-time passcode; a protected page needs at least one allowed email or domain, or `allow_any: true`. Omit to leave the current mode unchanged: on a protected page the allowlist fields below then update its allowlist, but on an unprotected page they are ignored, so send `email_otp` to protect it.


## Example Usage

```typescript
import { ContractUpdatePublicPageRequestPayloadProtectionMode } from "@cloudinary/asset-management/models/components";

let value: ContractUpdatePublicPageRequestPayloadProtectionMode = "email_otp";
```

## Values

```typescript
"none" | "email_otp"
```