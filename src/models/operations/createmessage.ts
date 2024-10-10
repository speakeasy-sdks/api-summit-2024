/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CreateMessageRequest = {
  channelId: string;
  messageCreateRequest: components.MessageCreateRequest;
};

/** @internal */
export const CreateMessageRequest$inboundSchema: z.ZodType<
  CreateMessageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  channel_id: z.string(),
  MessageCreateRequest: components.MessageCreateRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "channel_id": "channelId",
    "MessageCreateRequest": "messageCreateRequest",
  });
});

/** @internal */
export type CreateMessageRequest$Outbound = {
  channel_id: string;
  MessageCreateRequest: components.MessageCreateRequest$Outbound;
};

/** @internal */
export const CreateMessageRequest$outboundSchema: z.ZodType<
  CreateMessageRequest$Outbound,
  z.ZodTypeDef,
  CreateMessageRequest
> = z.object({
  channelId: z.string(),
  messageCreateRequest: components.MessageCreateRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    channelId: "channel_id",
    messageCreateRequest: "MessageCreateRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMessageRequest$ {
  /** @deprecated use `CreateMessageRequest$inboundSchema` instead. */
  export const inboundSchema = CreateMessageRequest$inboundSchema;
  /** @deprecated use `CreateMessageRequest$outboundSchema` instead. */
  export const outboundSchema = CreateMessageRequest$outboundSchema;
  /** @deprecated use `CreateMessageRequest$Outbound` instead. */
  export type Outbound = CreateMessageRequest$Outbound;
}
