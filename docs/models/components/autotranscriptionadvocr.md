# AutoTranscriptionAdvOcr

Configuration object for automatic video transcription with translation options.

## Example Usage

```typescript
import { AutoTranscriptionAdvOcr } from "@cloudinary/asset-management/models/components";

let value: AutoTranscriptionAdvOcr = {
  translate: [
    "pl-PL",
    "he-IL",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `translate`                                                   | *string*[]                                                    | :heavy_minus_sign:                                            | Array of target language codes for transcription translation. | [<br/>"pl-PL",<br/>"he-IL"<br/>]                              |