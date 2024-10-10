# GetChannelResponseBody

200 response for get_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 65304,
  guildId: "<value>",
  name: "<value>",
  position: 783235,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 288398,
  recipients: [
    {
      id: "<value>",
      username: "Dayton_Franecki",
      discriminator: "<value>",
      publicFlags: 554688,
      flags: 287051,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 706575,
  recipients: [
    {
      id: "<value>",
      username: "Haskell_Shields4",
      discriminator: "<value>",
      publicFlags: 348519,
      flags: 814967,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 985492,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 968972,
  memberCount: 904949,
  totalMessageSent: 296556,
};
```

