# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 699575,
  guildId: "<value>",
  name: "<value>",
  position: 967966,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 994401,
  recipients: [
    {
      id: "<value>",
      username: "Ivy.Greenholt41",
      discriminator: "<value>",
      publicFlags: 604118,
      flags: 382808,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 895386,
  recipients: [
    {
      id: "<value>",
      username: "Viviane_Goodwin",
      discriminator: "<value>",
      publicFlags: 552078,
      flags: 271653,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 455444,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 401713,
  memberCount: 248413,
  totalMessageSent: 505866,
};
```

