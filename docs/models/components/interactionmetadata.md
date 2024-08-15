# InteractionMetadata

## Example Usage

```typescript
import { InteractionMetadata } from "@speakeasy-sdks/discord/models/components";

let value: InteractionMetadata = {
    id: "<value>",
    authorizingIntegrationOwners: {
        key: "<value>",
    },
    triggeringInteractionMetadata: {
        id: "<value>",
        authorizingIntegrationOwners: {
            key: "<value>",
        },
        interactedMessageId: "<value>",
    },
};
```

## Supported Types

### `components.ApplicationCommandInteractionMetadataResponse`

```typescript
const value: components.ApplicationCommandInteractionMetadataResponse = /* values here */
```

### `components.MessageComponentInteractionMetadataResponse`

```typescript
const value: components.MessageComponentInteractionMetadataResponse = /* values here */
```

### `components.ModalSubmitInteractionMetadataResponse`

```typescript
const value: components.ModalSubmitInteractionMetadataResponse = /* values here */
```

