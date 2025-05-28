# Mode

The method for generating and delivering the archive. Options:
download - Generates and delivers the archive file without storing it
create - Creates and stores the archive as a raw asset, returning URLs in the response
create_and_download - Creates, stores, and delivers the archive file


## Example Usage

```typescript
import { Mode } from "@cloudinary/assets/models/operations";

let value: Mode = "create_and_download";
```

## Values

```typescript
"download" | "create" | "create_and_download"
```