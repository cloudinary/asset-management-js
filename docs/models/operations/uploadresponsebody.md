# UploadResponseBody

Successful upload


## Supported Types

### `components.UploadResponse`

```typescript
const value: components.UploadResponse = {
  url:
    "http://res.cloudinary.com/cld-docs/image/upload/v1719307544/gotjephlnz2jgiu20zni.jpg",
  secureUrl:
    "https://res.cloudinary.com/cld-docs/image/upload/v1719307544/gotjephlnz2jgiu20zni.jpg",
  publicId: "gotjephlnz2jgiu20zni",
  version: 1719307544,
  versionId: "7d2cc533bee9ff39f7da7414b61fce7e",
  signature: "d0b1009e3271a942836c25756ce3e04d205bf754",
  width: 1920,
  height: 1441,
  assetId: "3515c6000a548515f1134043f9785c2f",
  format: "jpg",
  resourceType: "image",
  createdAt: "2024-06-25T09:25:44Z",
  tags: [],
  pages: 1,
  bytes: 896838,
  type: "upload",
  etag: "2a2df1d2d2c3b675521e866599273083",
  placeholder: false,
  originalFilename: "sample",
  imageMetadata: {},
  illustrationScore: 0,
  semiTransparent: false,
  grayscale: false,
  eager: [
    {
      transformation: "c_pad,h_300,w_400",
      width: 400,
      height: 300,
      bytes: 26775,
      format: "jpg",
      url:
        "http://res.cloudinary.com/cld-docs/image/upload/c_pad,h_300,w_400/v1719307544/gotjephlnz2jgiu20zni.jpg",
      secureUrl:
        "https://res.cloudinary.com/cld-docs/image/upload/c_pad,h_300,w_400/v1719307544/gotjephlnz2jgiu20zni.jpg",
    },
  ],
  apiKey: "614335564976464",
};
```

### `components.AsyncUploadResponse`

```typescript
const value: components.AsyncUploadResponse = {
  status: "pending",
  resourceType: "image",
  publicId: "sample_image",
  batchId: "9c2f5a46b3a6c4d9e8f7g0h1i2j3k4l5",
};
```

