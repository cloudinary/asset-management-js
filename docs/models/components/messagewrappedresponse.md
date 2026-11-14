# MessageWrappedResponse

A response envelope wrapping a simple message.

## Example Usage

```typescript
import { MessageWrappedResponse } from "@cloudinary/asset-management/models/components";

let value: MessageWrappedResponse = {
  requestId: "6ec0bd7f11c043da975e2a8ad9ebae0b",
  data: {},
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | A unique id for the request, useful when contacting support.                                   | 6ec0bd7f11c043da975e2a8ad9ebae0b                                                               |
| `data`                                                                                         | [components.MessageWrappedResponseData](../../models/components/messagewrappedresponsedata.md) | :heavy_check_mark:                                                                             | An object carrying a human-readable message.                                                   |                                                                                                |