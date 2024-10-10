# RoleSelect

## Example Usage

```typescript
import { RoleSelect } from "@speakeasy-sdks/discord/models/components";

let value: RoleSelect = {
  customId: "<id>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `customId`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `placeholder`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `minValues`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `maxValues`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `disabled`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `defaultValues`                                                                          | [components.RoleSelectDefaultValue](../../models/components/roleselectdefaultvalue.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |