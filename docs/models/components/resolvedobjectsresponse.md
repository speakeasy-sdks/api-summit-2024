# ResolvedObjectsResponse

## Example Usage

```typescript
import { ResolvedObjectsResponse } from "@speakeasy-sdks/discord/models/components";

let value: ResolvedObjectsResponse = {
    users: {
        key: {
            id: "<value>",
            username: "Steve.Parker",
            discriminator: "<value>",
            publicFlags: 613064,
            flags: 437032,
        },
    },
    members: {
        key: {
            flags: 902349,
            joinedAt: new Date("2024-02-04T14:29:27.472Z"),
            pending: false,
            roles: ["<value>"],
            user: {
                id: "<value>",
                username: "Baby_Beier65",
                discriminator: "<value>",
                publicFlags: 670638,
                flags: 170909,
            },
            mute: false,
            deaf: false,
        },
    },
    channels: {},
    roles: {
        key: {
            id: "<value>",
            name: "<value>",
            permissions: "<value>",
            position: 210382,
            color: 358152,
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