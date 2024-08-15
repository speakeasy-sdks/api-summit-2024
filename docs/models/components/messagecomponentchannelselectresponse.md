# MessageComponentChannelSelectResponse

## Example Usage

```typescript
import { MessageComponentChannelSelectResponse } from "discord/models/components";

let value: MessageComponentChannelSelectResponse = {
    id: 466311,
    customId: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *number*           | :heavy_check_mark: | N/A                |
| `id`               | *number*           | :heavy_check_mark: | N/A                |
| `customId`         | *string*           | :heavy_check_mark: | N/A                |
| `placeholder`      | *string*           | :heavy_minus_sign: | N/A                |
| `minValues`        | *number*           | :heavy_minus_sign: | N/A                |
| `maxValues`        | *number*           | :heavy_minus_sign: | N/A                |
| `disabled`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `channelTypes`     | *number*[]         | :heavy_minus_sign: | N/A                |