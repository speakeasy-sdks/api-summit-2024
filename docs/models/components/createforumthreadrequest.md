# CreateForumThreadRequest

## Example Usage

```typescript
import { CreateForumThreadRequest } from "@speakeasy-sdks/discord/models/components";

let value: CreateForumThreadRequest = {
  name: "<value>",
  message: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `autoArchiveDuration`                                                                                  | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `rateLimitPerUser`                                                                                     | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `appliedTags`                                                                                          | *string*[]                                                                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `message`                                                                                              | [components.BaseCreateMessageCreateRequest](../../models/components/basecreatemessagecreaterequest.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |