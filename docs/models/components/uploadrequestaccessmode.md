# ~~UploadRequestAccessMode~~

Allows the asset to behave as if it's of the authenticated 'type' (see above) while still using the default 'upload' type in delivery URLs. The asset can later be made public by changing its access_mode via the Admin API, without having to update any delivery URLs. Valid values: public, and authenticated.


> :warning: **DEPRECATED**: The access_mode parameter is no longer supported. To restrict access to assets, you can use the access_control parameter.. Use `accessControl` instead.

## Example Usage

```typescript
import { UploadRequestAccessMode } from "@cloudinary/assets/models/components";

let value: UploadRequestAccessMode = "authenticated";
```

## Values

```typescript
"public" | "authenticated"
```