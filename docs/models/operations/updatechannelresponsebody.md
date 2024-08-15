# UpdateChannelResponseBody

200 response for update_channel

## Example Usage

```typescript
import { UpdateChannelResponseBody } from "discord/models/operations";

let value: UpdateChannelResponseBody = {
    id: "<value>",
    flags: 841386,
    recipients: [
        {
            id: "<value>",
            username: "Edyth39",
            discriminator: "<value>",
            publicFlags: 586513,
            flags: 552822,
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

