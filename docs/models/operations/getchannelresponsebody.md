# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 869489,
  guildId: "<value>",
  name: "<value>",
  position: 454162,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 326701,
  recipients: [
    {
      id: "<value>",
      username: "Darlene.Bartoletti42",
      discriminator: "<value>",
      publicFlags: 251941,
      flags: 221161,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 253191,
  recipients: [
    {
      id: "<value>",
      username: "Brenda97",
      discriminator: "<value>",
      publicFlags: 409054,
      flags: 162954,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 638762,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 490305,
  memberCount: 989410,
  totalMessageSent: 65304,
};
```

