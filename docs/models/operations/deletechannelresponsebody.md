# DeleteChannelResponseBody

200 response for delete_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 783235,
  guildId: "<value>",
  name: "<value>",
  position: 288398,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 241418,
  recipients: [
    {
      id: "<value>",
      username: "Makayla_OReilly",
      discriminator: "<value>",
      publicFlags: 287051,
      flags: 706575,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 414857,
  recipients: [
    {
      id: "<value>",
      username: "Forest.Walsh",
      discriminator: "<value>",
      publicFlags: 814967,
      flags: 985492,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 968972,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 904949,
  memberCount: 296556,
  totalMessageSent: 992012,
};
```

