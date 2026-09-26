# ErrorResponse

Wrapper for error responses; includes the error object and a request_id for correlation.

## Example Usage

```typescript
import { ErrorResponse } from "@cloudinary/asset-management/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `error`                                                                                                                                | [components.ErrorT](../../models/components/errort.md)                                                                                 | :heavy_check_mark:                                                                                                                     | Details of an error, including a coarse category for retry logic, a stable error code, and a human-readable message.                   | {<br/>"category": "user_error",<br/>"code": "MG_00001",<br/>"message": "missing parameters",<br/>"details": {<br/>"parameters": [<br/>"param1",<br/>"param2"<br/>]<br/>}<br/>} |
| `requestId`                                                                                                                            | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Unique identifier for this request, for correlation and support.                                                                       | 17c3b70c5096df0e77e838323abb7029                                                                                                       |