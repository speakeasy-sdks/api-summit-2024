# UpdateMessageRequest

## Example Usage

```typescript
import { UpdateMessageRequest } from "@speakeasy-sdks/discord/models/operations";

let value: UpdateMessageRequest = {
    channelId: "<value>",
    messageId: "<value>",
    messageEditRequestPartial: {},
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `channelId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageId`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messageEditRequestPartial`                                                                  | [components.MessageEditRequestPartial](../../models/components/messageeditrequestpartial.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |