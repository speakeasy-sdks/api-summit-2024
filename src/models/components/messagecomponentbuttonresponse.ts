/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    MessageComponentEmojiResponse,
    MessageComponentEmojiResponse$inboundSchema,
    MessageComponentEmojiResponse$Outbound,
    MessageComponentEmojiResponse$outboundSchema,
} from "./messagecomponentemojiresponse.js";
import * as z from "zod";

export type MessageComponentButtonResponse = {
    type?: 1 | undefined;
    id: number;
    customId?: string | null | undefined;
    style?: 1 | undefined;
    label?: string | null | undefined;
    disabled?: boolean | null | undefined;
    emoji?: MessageComponentEmojiResponse | null | undefined;
    url?: string | null | undefined;
    skuId?: string | null | undefined;
};

/** @internal */
export const MessageComponentButtonResponse$inboundSchema: z.ZodType<
    MessageComponentButtonResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        type: z.literal(1).optional(),
        id: z.number().int(),
        custom_id: z.nullable(z.string()).optional(),
        style: z.literal(1).optional(),
        label: z.nullable(z.string()).optional(),
        disabled: z.nullable(z.boolean()).optional(),
        emoji: z.nullable(MessageComponentEmojiResponse$inboundSchema).optional(),
        url: z.nullable(z.string()).optional(),
        sku_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            custom_id: "customId",
            sku_id: "skuId",
        });
    });

/** @internal */
export type MessageComponentButtonResponse$Outbound = {
    type: 1;
    id: number;
    custom_id?: string | null | undefined;
    style: 1;
    label?: string | null | undefined;
    disabled?: boolean | null | undefined;
    emoji?: MessageComponentEmojiResponse$Outbound | null | undefined;
    url?: string | null | undefined;
    sku_id?: string | null | undefined;
};

/** @internal */
export const MessageComponentButtonResponse$outboundSchema: z.ZodType<
    MessageComponentButtonResponse$Outbound,
    z.ZodTypeDef,
    MessageComponentButtonResponse
> = z
    .object({
        type: z.literal(1).default(1 as const),
        id: z.number().int(),
        customId: z.nullable(z.string()).optional(),
        style: z.literal(1).default(1 as const),
        label: z.nullable(z.string()).optional(),
        disabled: z.nullable(z.boolean()).optional(),
        emoji: z.nullable(MessageComponentEmojiResponse$outboundSchema).optional(),
        url: z.nullable(z.string()).optional(),
        skuId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            customId: "custom_id",
            skuId: "sku_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageComponentButtonResponse$ {
    /** @deprecated use `MessageComponentButtonResponse$inboundSchema` instead. */
    export const inboundSchema = MessageComponentButtonResponse$inboundSchema;
    /** @deprecated use `MessageComponentButtonResponse$outboundSchema` instead. */
    export const outboundSchema = MessageComponentButtonResponse$outboundSchema;
    /** @deprecated use `MessageComponentButtonResponse$Outbound` instead. */
    export type Outbound = MessageComponentButtonResponse$Outbound;
}
