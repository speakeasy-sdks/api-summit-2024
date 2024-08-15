<!-- Start SDK Example Usage [usage] -->
```typescript
import { Discord } from "@speakeasy-sdks/discord";

const discord = new Discord({
    botToken: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await discord.messages.get({
        channelId: "<value>",
        messageId: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->