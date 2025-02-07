# UpdateChannelResponseBody

200 response for update_channel


## Supported Types

### `components.GuildChannelResponse`

```typescript
const value: components.GuildChannelResponse = {
  id: "<value>",
  flags: 105906,
  guildId: "<value>",
  name: "<value>",
  position: 950953,
};
```

### `components.PrivateChannelResponse`

```typescript
const value: components.PrivateChannelResponse = {
  id: "<value>",
  flags: 233420,
  recipients: [
    {
      id: "<value>",
      username: "Mary_Renner",
      discriminator: "<value>",
      publicFlags: 374296,
      flags: 748789,
    },
  ],
};
```

### `components.PrivateGroupChannelResponse`

```typescript
const value: components.PrivateGroupChannelResponse = {
  id: "<value>",
  flags: 237807,
  recipients: [
    {
      id: "<value>",
      username: "Celestino_Haag",
      discriminator: "<value>",
      publicFlags: 942584,
      flags: 633998,
    },
  ],
};
```

### `components.ThreadResponse`

```typescript
const value: components.ThreadResponse = {
  id: "<value>",
  flags: 867290,
  guildId: "<value>",
  name: "<value>",
  ownerId: "<value>",
  messageCount: 940210,
  memberCount: 750765,
  totalMessageSent: 699575,
};
```

