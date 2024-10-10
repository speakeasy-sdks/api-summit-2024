# ThreadMemberResponse

## Example Usage

```typescript
import { ThreadMemberResponse } from "@speakeasy-sdks/discord/models/components";

let value: ThreadMemberResponse = {
  id: "<value>",
  userId: "<value>",
  joinTimestamp: new Date("2022-07-20T18:39:56.110Z"),
  flags: 586513,
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