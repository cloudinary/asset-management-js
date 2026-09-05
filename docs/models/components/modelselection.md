# ModelSelection

Selects the model, in one of two mutually exclusive forms (omit to use
the global default):
  * `ModelByFamily`: `family` (+ optional `tier`); the stable-over-time
    selector.
  * `ModelById`: an explicit `id`, pinning one exact model.



## Supported Types

### `components.ModelByFamily`

```typescript
const value: components.ModelByFamily = {
  family: "flux",
  tier: "premium",
};
```

### `components.ModelById`

```typescript
const value: components.ModelById = {
  id: "flux-2-pro",
};
```

