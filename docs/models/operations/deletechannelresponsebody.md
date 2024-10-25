# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 992012,
  guildId: "<value>",
  name: "<value>",
  position: 249420,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 105906,
  recipients: [
    {
      id: "<value>",
      username: "Valerie73",
      discriminator: "<value>",
      publicFlags: 272437,
      flags: 379057,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 374296,
  recipients: [
    {
      id: "<value>",
      username: "Nelle30",
      discriminator: "<value>",
      publicFlags: 237742,
      flags: 502389,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 942584,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 633998,
  memberCount: 867290,
  totalMessageSent: 940210,
};
```

