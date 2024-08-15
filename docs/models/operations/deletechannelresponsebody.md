# DeleteChannelResponseBody

200 response for delete_channel

## Example Usage

```typescript
import { DeleteChannelResponseBody } from "@speakeasy-sdks/discord/models/operations";

let value: DeleteChannelResponseBody = {
    id: "<value>",
    flags: 83112,
    recipients: [
        {
            id: "<value>",
            username: "Tobin0",
            discriminator: "<value>",
            publicFlags: 667411,
            flags: 842342,
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

