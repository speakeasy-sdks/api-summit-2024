/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type DefaultReactionEmojiResponse = {
  emojiId?: string | null | undefined;
  emojiName?: string | null | undefined;
};

/** @internal */
export const DefaultReactionEmojiResponse$inboundSchema: z.ZodType<
  DefaultReactionEmojiResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  emoji_id: z.nullable(z.string()).optional(),
  emoji_name: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "emoji_id": "emojiId",
    "emoji_name": "emojiName",
  });
});

/** @internal */
export type DefaultReactionEmojiResponse$Outbound = {
  emoji_id?: string | null | undefined;
  emoji_name?: string | null | undefined;
};

/** @internal */
export const DefaultReactionEmojiResponse$outboundSchema: z.ZodType<
  DefaultReactionEmojiResponse$Outbound,
  z.ZodTypeDef,
  DefaultReactionEmojiResponse
> = z.object({
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
export namespace DefaultReactionEmojiResponse$ {
  /** @deprecated use `DefaultReactionEmojiResponse$inboundSchema` instead. */
  export const inboundSchema = DefaultReactionEmojiResponse$inboundSchema;
  /** @deprecated use `DefaultReactionEmojiResponse$outboundSchema` instead. */
  export const outboundSchema = DefaultReactionEmojiResponse$outboundSchema;
  /** @deprecated use `DefaultReactionEmojiResponse$Outbound` instead. */
  export type Outbound = DefaultReactionEmojiResponse$Outbound;
}
