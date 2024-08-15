/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type MessageEmbedImageResponse = {
    url?: string | null | undefined;
    proxyUrl?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    placeholder?: string | null | undefined;
    placeholderVersion?: number | null | undefined;
};

/** @internal */
export const MessageEmbedImageResponse$inboundSchema: z.ZodType<
    MessageEmbedImageResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        url: z.nullable(z.string()).optional(),
        proxy_url: z.nullable(z.string()).optional(),
        width: z.nullable(z.number().int()).optional(),
        height: z.nullable(z.number().int()).optional(),
        placeholder: z.nullable(z.string()).optional(),
        placeholder_version: z.nullable(z.number().int()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            proxy_url: "proxyUrl",
            placeholder_version: "placeholderVersion",
        });
    });

/** @internal */
export type MessageEmbedImageResponse$Outbound = {
    url?: string | null | undefined;
    proxy_url?: string | null | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    placeholder?: string | null | undefined;
    placeholder_version?: number | null | undefined;
};

/** @internal */
export const MessageEmbedImageResponse$outboundSchema: z.ZodType<
    MessageEmbedImageResponse$Outbound,
    z.ZodTypeDef,
    MessageEmbedImageResponse
> = z
    .object({
        url: z.nullable(z.string()).optional(),
        proxyUrl: z.nullable(z.string()).optional(),
        width: z.nullable(z.number().int()).optional(),
        height: z.nullable(z.number().int()).optional(),
        placeholder: z.nullable(z.string()).optional(),
        placeholderVersion: z.nullable(z.number().int()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            proxyUrl: "proxy_url",
            placeholderVersion: "placeholder_version",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageEmbedImageResponse$ {
    /** @deprecated use `MessageEmbedImageResponse$inboundSchema` instead. */
    export const inboundSchema = MessageEmbedImageResponse$inboundSchema;
    /** @deprecated use `MessageEmbedImageResponse$outboundSchema` instead. */
    export const outboundSchema = MessageEmbedImageResponse$outboundSchema;
    /** @deprecated use `MessageEmbedImageResponse$Outbound` instead. */
    export type Outbound = MessageEmbedImageResponse$Outbound;
}
