# AggregateUnion

Fields or ranges to aggregate search results by. Requires a Tier 2 search plan; on Tier 1 the field is accepted but aggregations are omitted from the response.



## Supported Types

### `components.AggregateEnum[]`

```typescript
const value: components.AggregateEnum[] = [
  "format",
  "resource_type",
];
```

### `components.Aggregate[]`

```typescript
const value: components.Aggregate[] = [
  {
    type: "bytes",
    ranges: [
      {
        key: "small",
        from: 0,
        to: 10000,
      },
      {
        key: "medium",
        from: 10000,
        to: 100000,
      },
    ],
  },
];
```

