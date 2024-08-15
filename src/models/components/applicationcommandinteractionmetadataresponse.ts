/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    UserResponse,
    UserResponse$inboundSchema,
    UserResponse$Outbound,
    UserResponse$outboundSchema,
} from "./userresponse.js";
import * as z from "zod";

export type ApplicationCommandInteractionMetadataResponse = {
    id: string;
    type?: 1 | undefined;
    user?: UserResponse | null | undefined;
    authorizingIntegrationOwners: { [k: string]: string };
    originalResponseMessageId?: string | null | undefined;
};

/** @internal */
export const ApplicationCommandInteractionMetadataResponse$inboundSchema: z.ZodType<
    ApplicationCommandInteractionMetadataResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        type: z.literal(1).optional(),
        user: z.nullable(UserResponse$inboundSchema).optional(),
        authorizing_integration_owners: z.record(z.string()),
        original_response_message_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            authorizing_integration_owners: "authorizingIntegrationOwners",
            original_response_message_id: "originalResponseMessageId",
        });
    });

/** @internal */
export type ApplicationCommandInteractionMetadataResponse$Outbound = {
    id: string;
    type: 1;
    user?: UserResponse$Outbound | null | undefined;
    authorizing_integration_owners: { [k: string]: string };
    original_response_message_id?: string | null | undefined;
};

/** @internal */
export const ApplicationCommandInteractionMetadataResponse$outboundSchema: z.ZodType<
    ApplicationCommandInteractionMetadataResponse$Outbound,
    z.ZodTypeDef,
    ApplicationCommandInteractionMetadataResponse
> = z
    .object({
        id: z.string(),
        type: z.literal(1).default(1 as const),
        user: z.nullable(UserResponse$outboundSchema).optional(),
        authorizingIntegrationOwners: z.record(z.string()),
        originalResponseMessageId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            authorizingIntegrationOwners: "authorizing_integration_owners",
            originalResponseMessageId: "original_response_message_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationCommandInteractionMetadataResponse$ {
    /** @deprecated use `ApplicationCommandInteractionMetadataResponse$inboundSchema` instead. */
    export const inboundSchema = ApplicationCommandInteractionMetadataResponse$inboundSchema;
    /** @deprecated use `ApplicationCommandInteractionMetadataResponse$outboundSchema` instead. */
    export const outboundSchema = ApplicationCommandInteractionMetadataResponse$outboundSchema;
    /** @deprecated use `ApplicationCommandInteractionMetadataResponse$Outbound` instead. */
    export type Outbound = ApplicationCommandInteractionMetadataResponse$Outbound;
}
