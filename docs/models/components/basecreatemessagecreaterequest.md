# BaseCreateMessageCreateRequest

## Example Usage

```typescript
import { BaseCreateMessageCreateRequest } from "discord/models/components";

let value: BaseCreateMessageCreateRequest = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `content`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `embeds`                                                                                             | [components.RichEmbed](../../models/components/richembed.md)[]                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `allowedMentions`                                                                                    | [components.MessageAllowedMentionsRequest](../../models/components/messageallowedmentionsrequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `stickerIds`                                                                                         | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `components`                                                                                         | [components.ActionRow](../../models/components/actionrow.md)[]                                       | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `flags`                                                                                              | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `attachments`                                                                                        | [components.MessageAttachmentRequest](../../models/components/messageattachmentrequest.md)[]         | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |