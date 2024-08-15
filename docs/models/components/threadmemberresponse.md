# ThreadMemberResponse

## Example Usage

```typescript
import { ThreadMemberResponse } from "discord/models/components";

let value: ThreadMemberResponse = {
    id: "<value>",
    userId: "<value>",
    joinTimestamp: new Date("2024-04-11T10:37:31.008Z"),
    flags: 521848,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `joinTimestamp`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `flags`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `member`                                                                                      | [components.GuildMemberResponse](../../models/components/guildmemberresponse.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |