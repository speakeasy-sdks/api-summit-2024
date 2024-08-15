# InnerErrors

## Example Usage

```typescript
import { InnerErrors } from "@speakeasy-sdks/discord/models/components";

let value: InnerErrors = {
    errors: [
        {
            code: 468651,
            message: "<value>",
        },
    ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `errors`                                                 | [components.ErrorT](../../models/components/errort.md)[] | :heavy_check_mark:                                       | The list of errors for this field                        |