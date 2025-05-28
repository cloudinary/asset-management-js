# Fields

A comma-separated list of fields to include in the response.
Notes:
This parameter takes precedence over other parameters requesting details in the response (e.g., tags or context), so include them in this list if you also want their details returned.
The following fields are always included in the response: public_id, and asset_id.


## Example Usage

```typescript
import { Fields } from "@cloudinary/assets/models/operations";

let value: Fields =
  "asset_folder folder filename format version version_id signature resource_type created_at uploaded_at bytes backup_bytes width height aspect_ratio access_control metadata context tags pixels custom moderation url secure_url status etag";
```

## Values

```typescript
"asset_folder folder filename format version version_id signature resource_type created_at uploaded_at bytes backup_bytes width height aspect_ratio access_control metadata context tags pixels custom moderation url secure_url status etag"
```