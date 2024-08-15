# CreateMessageRequest

## Example Usage

```typescript
import { CreateMessageRequest } from "discord/models/operations";

let value: CreateMessageRequest = {
    channelId: "<value>",
    messageCreateRequest: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `channelId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `messageCreateRequest`                                                             | [components.MessageCreateRequest](../../models/components/messagecreaterequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |