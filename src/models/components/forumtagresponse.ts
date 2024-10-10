/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ForumTagResponse = {
  id: string;
  name: string;
  moderated: boolean;
  emojiId?: string | null | undefined;
  emojiName?: string | null | undefined;
};

/** @internal */
export const ForumTagResponse$inboundSchema: z.ZodType<
  ForumTagResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  moderated: z.boolean(),
  emoji_id: z.nullable(z.string()).optional(),
  emoji_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "emoji_id": "emojiId",
    "emoji_name": "emojiName",
  });
});

/** @internal */
export type ForumTagResponse$Outbound = {
  id: string;
  name: string;
  moderated: boolean;
  emoji_id?: string | null | undefined;
  emoji_name?: string | null | undefined;
};

/** @internal */
export const ForumTagResponse$outboundSchema: z.ZodType<
  ForumTagResponse$Outbound,
  z.ZodTypeDef,
  ForumTagResponse
> = z.object({
  id: z.string(),
  name: z.string(),
  moderated: z.boolean(),
  emojiId: z.nullable(z.string()).optional(),
  emojiName: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    emojiId: "emoji_id",
    emojiName: "emoji_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForumTagResponse$ {
  /** @deprecated use `ForumTagResponse$inboundSchema` instead. */
  export const inboundSchema = ForumTagResponse$inboundSchema;
  /** @deprecated use `ForumTagResponse$outboundSchema` instead. */
  export const outboundSchema = ForumTagResponse$outboundSchema;
  /** @deprecated use `ForumTagResponse$Outbound` instead. */
  export type Outbound = ForumTagResponse$Outbound;
}
