# StructuredMetadataParam

A pipe-separated list or a map of custom metadata fields (by external_id) and the values to assign to each of them. The = " and | characters can be supported as values when escaped with a prepended backslash (\). For a multi-select field, you can set a maximum of 3000 different metadata values on an asset.



## Supported Types

### `string`

```typescript
const value: string = "in_stock_id=50|color_id=[\"green\",\"red\"]";
```

### `{ [k: string]: components.StructuredMetadataValue }`

```typescript
const value: { [k: string]: components.StructuredMetadataValue } = {
  "in_stock_id": 50,
  "color_id": [
    "green",
    "red",
  ],
  "caption_id": "Summer collection",
  "shot_date_id": "2024-06-15",
};
```

