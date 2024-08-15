/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type GetChannelRequest = {
    channelId: string;
};

/**
 * 200 response for get_channel
 */
export type GetChannelResponseBody =
    | components.PrivateChannelResponse
    | components.PrivateGroupChannelResponse
    | components.ThreadResponse
    | components.GuildChannelResponse;

/** @internal */
export const GetChannelRequest$inboundSchema: z.ZodType<GetChannelRequest, z.ZodTypeDef, unknown> =
    z
        .object({
            channel_id: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                channel_id: "channelId",
            });
        });

/** @internal */
export type GetChannelRequest$Outbound = {
    channel_id: string;
};

/** @internal */
export const GetChannelRequest$outboundSchema: z.ZodType<
    GetChannelRequest$Outbound,
    z.ZodTypeDef,
    GetChannelRequest
> = z
    .object({
        channelId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            channelId: "channel_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChannelRequest$ {
    /** @deprecated use `GetChannelRequest$inboundSchema` instead. */
    export const inboundSchema = GetChannelRequest$inboundSchema;
    /** @deprecated use `GetChannelRequest$outboundSchema` instead. */
    export const outboundSchema = GetChannelRequest$outboundSchema;
    /** @deprecated use `GetChannelRequest$Outbound` instead. */
    export type Outbound = GetChannelRequest$Outbound;
}

/** @internal */
export const GetChannelResponseBody$inboundSchema: z.ZodType<
    GetChannelResponseBody,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.PrivateChannelResponse$inboundSchema,
    components.PrivateGroupChannelResponse$inboundSchema,
    components.ThreadResponse$inboundSchema,
    components.GuildChannelResponse$inboundSchema,
]);

/** @internal */
export type GetChannelResponseBody$Outbound =
    | components.PrivateChannelResponse$Outbound
    | components.PrivateGroupChannelResponse$Outbound
    | components.ThreadResponse$Outbound
    | components.GuildChannelResponse$Outbound;

/** @internal */
export const GetChannelResponseBody$outboundSchema: z.ZodType<
    GetChannelResponseBody$Outbound,
    z.ZodTypeDef,
    GetChannelResponseBody
> = z.union([
    components.PrivateChannelResponse$outboundSchema,
    components.PrivateGroupChannelResponse$outboundSchema,
    components.ThreadResponse$outboundSchema,
    components.GuildChannelResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetChannelResponseBody$ {
    /** @deprecated use `GetChannelResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetChannelResponseBody$inboundSchema;
    /** @deprecated use `GetChannelResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetChannelResponseBody$outboundSchema;
    /** @deprecated use `GetChannelResponseBody$Outbound` instead. */
    export type Outbound = GetChannelResponseBody$Outbound;
}
