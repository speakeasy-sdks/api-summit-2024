# RecurrenceRuleResponse

## Example Usage

```typescript
import { RecurrenceRuleResponse } from "discord/models/components";

let value: RecurrenceRuleResponse = {
    start: new Date("2022-11-06T22:57:15.343Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `frequency`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `interval`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `byWeekday`                                                                                   | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `byNWeekday`                                                                                  | [components.ByNWeekdayResponse](../../models/components/bynweekdayresponse.md)[]              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `byMonth`                                                                                     | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `byMonthDay`                                                                                  | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `byYearDay`                                                                                   | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `count`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |