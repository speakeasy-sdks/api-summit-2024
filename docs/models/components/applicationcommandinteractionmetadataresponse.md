# ApplicationCommandInteractionMetadataResponse

## Example Usage

```typescript
import { ApplicationCommandInteractionMetadataResponse } from "discord/models/components";

let value: ApplicationCommandInteractionMetadataResponse = {
    id: "<value>",
    authorizingIntegrationOwners: {
        key: "<value>",
    },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `user`                                                             | [components.UserResponse](../../models/components/userresponse.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `authorizingIntegrationOwners`                                     | Record<string, *string*>                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originalResponseMessageId`                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |