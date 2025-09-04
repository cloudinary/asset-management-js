# AccessControl


## Supported Types

### `components.AccessControlToken`

```typescript
const value: components.AccessControlToken = {
  accessType: "token",
  key: "prod2024",
};
```

### `components.AccessControlAnonymous`

```typescript
const value: components.AccessControlAnonymous = {
  accessType: "anonymous",
  start: new Date("2024-03-15T09:00:00Z"),
  end: new Date("2024-06-30T23:59:59Z"),
};
```

