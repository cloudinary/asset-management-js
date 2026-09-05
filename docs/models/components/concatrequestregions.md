# ConcatRequestRegions

Named region coordinate groups for cropping with region gravity.
Can be a JSON-encoded string or an object. Each region name may contain
only letters, numbers, or hyphens, and must have at least two coordinate pairs.



## Supported Types

### `string`

```typescript
const value: string =
  "{\"face\": [[100, 200], [300, 400]], \"body\": [[50, 60], [70, 80], [90, 100]]}";
```

### `{ [k: string]: number[][] }`

```typescript
const value: { [k: string]: number[][] } = {
  "face": [
    [
      100,
      200,
    ],
    [
      300,
      400,
    ],
  ],
  "body": [
    [
      50,
      60,
    ],
    [
      70,
      80,
    ],
    [
      90,
      100,
    ],
  ],
};
```

