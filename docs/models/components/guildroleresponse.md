# GuildRoleResponse

## Example Usage

```typescript
import { GuildRoleResponse } from "@speakeasy-sdks/discord/models/components";

let value: GuildRoleResponse = {
    id: "<value>",
    name: "<value>",
    permissions: "<value>",
    position: 128926,
    color: 750686,
    hoist: false,
    managed: false,
    mentionable: false,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `permissions`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `position`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `color`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `hoist`                                                                              | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `managed`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mentionable`                                                                        | *boolean*                                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `icon`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `unicodeEmoji`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tags`                                                                               | [components.GuildRoleTagsResponse](../../models/components/guildroletagsresponse.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |