# ImageSize

Desired output size, given in **one** of two mutually exclusive forms:

  * `DimensionsImageSize`: `width` and `height` in pixels, for precise
    control.
  * `DeclarativeImageSize`: `aspect_ratio` (and an optional `resolution`
    tier), resolved server-side to the closest size the chosen model
    supports. This is the portable form: most providers natively accept
    an aspect ratio plus a resolution tier rather than raw pixels.

Omit `image_size` entirely to use the model's default size.



## Supported Types

### `components.DimensionsImageSize`

```typescript
const value: components.DimensionsImageSize = {
  width: 1280,
  height: 720,
};
```

### `components.DeclarativeImageSize`

```typescript
const value: components.DeclarativeImageSize = {
  aspectRatio: "16:9",
  resolution: "2K",
};
```

