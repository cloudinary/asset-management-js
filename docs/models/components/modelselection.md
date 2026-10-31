# ModelSelection

Selects the model, in one of three mutually exclusive forms (omit to use
the default: `nano-banana-2`, or `nano-banana-2-edit` for
image-to-image):
  * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time
    selector.
  * `ModelById`: an explicit `id`, pinning one exact model.
  * `ModelAuto`: `mode: auto`, letting the service choose the model for
    the request (+ optional `preference`).



## Supported Types

### `components.ModelByFamily`

```typescript
const value: components.ModelByFamily = {
  family: "flux",
};
```

### `components.ModelById`

```typescript
const value: components.ModelById = {
  id: "flux-2-pro",
};
```

### `components.ModelAuto`

```typescript
const value: components.ModelAuto = {
  mode: "auto",
  preference: "quality",
};
```

