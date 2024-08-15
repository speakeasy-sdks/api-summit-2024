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

export type PrivateChannelResponse = {
    id: string;
    type?: 1 | undefined;
    lastMessageId?: string | null | undefined;
    flags: number;
    lastPinTimestamp?: Date | null | undefined;
    recipients: Array<UserResponse>;
};

/** @internal */
export const PrivateChannelResponse$inboundSchema: z.ZodType<
    PrivateChannelResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        type: z.literal(1).optional(),
        last_message_id: z.nullable(z.string()).optional(),
        flags: z.number().int(),
        last_pin_timestamp: z
            .nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            )
            .optional(),
        recipients: z.array(UserResponse$inboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            last_message_id: "lastMessageId",
            last_pin_timestamp: "lastPinTimestamp",
        });
    });

/** @internal */
export type PrivateChannelResponse$Outbound = {
    id: string;
    type: 1;
    last_message_id?: string | null | undefined;
    flags: number;
    last_pin_timestamp?: string | null | undefined;
    recipients: Array<UserResponse$Outbound>;
};

/** @internal */
export const PrivateChannelResponse$outboundSchema: z.ZodType<
    PrivateChannelResponse$Outbound,
    z.ZodTypeDef,
    PrivateChannelResponse
> = z
    .object({
        id: z.string(),
        type: z.literal(1).default(1 as const),
        lastMessageId: z.nullable(z.string()).optional(),
        flags: z.number().int(),
        lastPinTimestamp: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
        recipients: z.array(UserResponse$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            lastMessageId: "last_message_id",
            lastPinTimestamp: "last_pin_timestamp",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PrivateChannelResponse$ {
    /** @deprecated use `PrivateChannelResponse$inboundSchema` instead. */
    export const inboundSchema = PrivateChannelResponse$inboundSchema;
    /** @deprecated use `PrivateChannelResponse$outboundSchema` instead. */
    export const outboundSchema = PrivateChannelResponse$outboundSchema;
    /** @deprecated use `PrivateChannelResponse$Outbound` instead. */
    export type Outbound = PrivateChannelResponse$Outbound;
}
