# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@speakeasy-sdks/discord/models/components";

let value: ResolvedObjectsResponse = {
  users: {
    "key": {
      id: "<value>",
      username: "Kitty_Watsica",
      discriminator: "<value>",
      publicFlags: 730122,
      flags: 311945,
    },
  },
  members: {
    "key": {
      flags: 398221,
      joinedAt: new Date("2022-08-18T23:43:47.903Z"),
      pending: false,
      roles: [
        "<value>",
      ],
      user: {
        id: "<value>",
        username: "Christy.Ritchie22",
        discriminator: "<value>",
        publicFlags: 58029,
        flags: 434417,
      },
      mute: false,
      deaf: false,
    },
  },
  channels: {
    "key": {
      id: "<value>",
      flags: 696344,
      recipients: [
        {
          id: "<value>",
          username: "Gayle.Bailey",
          discriminator: "<value>",
          publicFlags: 536579,
          flags: 896672,
        },
      ],
    },
  },
  roles: {
    "key": {
      id: "<value>",
      name: "<value>",
      permissions: "<value>",
      position: 990339,
      color: 216897,
      hoist: false,
      managed: false,
      mentionable: false,
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `users`                                                                                          | Record<string, [components.UserResponse](../../models/components/userresponse.md)>               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `members`                                                                                        | Record<string, [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `channels`                                                                                       | Record<string, *components.Channels*>                                                            | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `roles`                                                                                          | Record<string, [components.GuildRoleResponse](../../models/components/guildroleresponse.md)>     | :heavy_check_mark:                                                                               | N/A                                                                                              |