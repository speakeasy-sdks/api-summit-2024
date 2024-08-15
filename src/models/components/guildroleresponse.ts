/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    GuildRoleTagsResponse,
    GuildRoleTagsResponse$inboundSchema,
    GuildRoleTagsResponse$Outbound,
    GuildRoleTagsResponse$outboundSchema,
} from "./guildroletagsresponse.js";
import * as z from "zod";

export type GuildRoleResponse = {
    id: string;
    name: string;
    description?: string | null | undefined;
    permissions: string;
    position: number;
    color: number;
    hoist: boolean;
    managed: boolean;
    mentionable: boolean;
    icon?: string | null | undefined;
    unicodeEmoji?: string | null | undefined;
    tags?: GuildRoleTagsResponse | null | undefined;
};

/** @internal */
export const GuildRoleResponse$inboundSchema: z.ZodType<GuildRoleResponse, z.ZodTypeDef, unknown> =
    z
        .object({
            id: z.string(),
            name: z.string(),
            description: z.nullable(z.string()).optional(),
            permissions: z.string(),
            position: z.number().int(),
            color: z.number().int(),
            hoist: z.boolean(),
            managed: z.boolean(),
            mentionable: z.boolean(),
            icon: z.nullable(z.string()).optional(),
            unicode_emoji: z.nullable(z.string()).optional(),
            tags: z.nullable(GuildRoleTagsResponse$inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                unicode_emoji: "unicodeEmoji",
            });
        });

/** @internal */
export type GuildRoleResponse$Outbound = {
    id: string;
    name: string;
    description?: string | null | undefined;
    permissions: string;
    position: number;
    color: number;
    hoist: boolean;
    managed: boolean;
    mentionable: boolean;
    icon?: string | null | undefined;
    unicode_emoji?: string | null | undefined;
    tags?: GuildRoleTagsResponse$Outbound | null | undefined;
};

/** @internal */
export const GuildRoleResponse$outboundSchema: z.ZodType<
    GuildRoleResponse$Outbound,
    z.ZodTypeDef,
    GuildRoleResponse
> = z
    .object({
        id: z.string(),
        name: z.string(),
        description: z.nullable(z.string()).optional(),
        permissions: z.string(),
        position: z.number().int(),
        color: z.number().int(),
        hoist: z.boolean(),
        managed: z.boolean(),
        mentionable: z.boolean(),
        icon: z.nullable(z.string()).optional(),
        unicodeEmoji: z.nullable(z.string()).optional(),
        tags: z.nullable(GuildRoleTagsResponse$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            unicodeEmoji: "unicode_emoji",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GuildRoleResponse$ {
    /** @deprecated use `GuildRoleResponse$inboundSchema` instead. */
    export const inboundSchema = GuildRoleResponse$inboundSchema;
    /** @deprecated use `GuildRoleResponse$outboundSchema` instead. */
    export const outboundSchema = GuildRoleResponse$outboundSchema;
    /** @deprecated use `GuildRoleResponse$Outbound` instead. */
    export type Outbound = GuildRoleResponse$Outbound;
}
