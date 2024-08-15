# GetChannelResponseBody

200 response for get_channel

## Example Usage

```typescript
import { GetChannelResponseBody } from "@speakeasy-sdks/discord/models/operations";

let value: GetChannelResponseBody = {
    id: "<value>",
    flags: 865103,
    recipients: [
        {
            id: "<value>",
            username: "Dimitri_Lang",
            discriminator: "<value>",
            publicFlags: 93940,
            flags: 921158,
        },
    ],
};
```

## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = /* values here */
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = /* values here */
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = /* values here */
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = /* values here */
```

