# ErrorWrappedResponse

A response envelope returned when a request fails.

## Example Usage

```typescript
import { ErrorWrappedResponse } from "@cloudinary/asset-management/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique id for the request, useful when contacting support.                                   | 6ec0bd7f11c043da975e2a8ad9ebae0b                                                               |
| `error`                                                                                        | [components.MessageWrappedResponseData](../../models/components/messagewrappedresponsedata.md) | :heavy_check_mark:                                                                             | An object carrying a human-readable message.                                                   |                                                                                                |