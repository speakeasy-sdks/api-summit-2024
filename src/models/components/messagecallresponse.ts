/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MessageCallResponse = {
  endedTimestamp?: Date | null | undefined;
  participants: Array<string>;
};

/** @internal */
export const MessageCallResponse$inboundSchema: z.ZodType<
  MessageCallResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ended_timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  participants: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "ended_timestamp": "endedTimestamp",
  });
});

/** @internal */
export type MessageCallResponse$Outbound = {
  ended_timestamp?: string | null | undefined;
  participants: Array<string>;
};

/** @internal */
export const MessageCallResponse$outboundSchema: z.ZodType<
  MessageCallResponse$Outbound,
  z.ZodTypeDef,
  MessageCallResponse
> = z.object({
  endedTimestamp: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  participants: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    endedTimestamp: "ended_timestamp",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageCallResponse$ {
  /** @deprecated use `MessageCallResponse$inboundSchema` instead. */
  export const inboundSchema = MessageCallResponse$inboundSchema;
  /** @deprecated use `MessageCallResponse$outboundSchema` instead. */
  export const outboundSchema = MessageCallResponse$outboundSchema;
  /** @deprecated use `MessageCallResponse$Outbound` instead. */
  export type Outbound = MessageCallResponse$Outbound;
}
