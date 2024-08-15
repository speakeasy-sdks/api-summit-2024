# ScheduledEventUserResponse

## Example Usage

```typescript
import { ScheduledEventUserResponse } from "@speakeasy-sdks/discord/models/components";

let value: ScheduledEventUserResponse = {
    guildScheduledEventId: "<value>",
    userId: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `guildScheduledEventId`                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `guildScheduledEventExceptionId`                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `userId`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `user`                                                                           | [components.UserResponse](../../models/components/userresponse.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |
| `member`                                                                         | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `response`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |