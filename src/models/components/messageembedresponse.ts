/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  MessageEmbedAuthorResponse,
  MessageEmbedAuthorResponse$inboundSchema,
  MessageEmbedAuthorResponse$Outbound,
  MessageEmbedAuthorResponse$outboundSchema,
} from "./messageembedauthorresponse.js";
import {
  MessageEmbedFieldResponse,
  MessageEmbedFieldResponse$inboundSchema,
  MessageEmbedFieldResponse$Outbound,
  MessageEmbedFieldResponse$outboundSchema,
} from "./messageembedfieldresponse.js";
import {
  MessageEmbedFooterResponse,
  MessageEmbedFooterResponse$inboundSchema,
  MessageEmbedFooterResponse$Outbound,
  MessageEmbedFooterResponse$outboundSchema,
} from "./messageembedfooterresponse.js";
import {
  MessageEmbedImageResponse,
  MessageEmbedImageResponse$inboundSchema,
  MessageEmbedImageResponse$Outbound,
  MessageEmbedImageResponse$outboundSchema,
} from "./messageembedimageresponse.js";
import {
  MessageEmbedProviderResponse,
  MessageEmbedProviderResponse$inboundSchema,
  MessageEmbedProviderResponse$Outbound,
  MessageEmbedProviderResponse$outboundSchema,
} from "./messageembedproviderresponse.js";
import {
  MessageEmbedVideoResponse,
  MessageEmbedVideoResponse$inboundSchema,
  MessageEmbedVideoResponse$Outbound,
  MessageEmbedVideoResponse$outboundSchema,
} from "./messageembedvideoresponse.js";

export type MessageEmbedResponse = {
  type: string;
  url?: string | null | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  color?: number | null | undefined;
  timestamp?: Date | null | undefined;
  fields?: Array<MessageEmbedFieldResponse> | null | undefined;
  author?: MessageEmbedAuthorResponse | null | undefined;
  provider?: MessageEmbedProviderResponse | null | undefined;
  image?: MessageEmbedImageResponse | null | undefined;
  thumbnail?: MessageEmbedImageResponse | null | undefined;
  video?: MessageEmbedVideoResponse | null | undefined;
  footer?: MessageEmbedFooterResponse | null | undefined;
};

/** @internal */
export const MessageEmbedResponse$inboundSchema: z.ZodType<
  MessageEmbedResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  url: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  color: z.nullable(z.number().int()).optional(),
  timestamp: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  fields: z.nullable(z.array(MessageEmbedFieldResponse$inboundSchema))
    .optional(),
  author: z.nullable(MessageEmbedAuthorResponse$inboundSchema).optional(),
  provider: z.nullable(MessageEmbedProviderResponse$inboundSchema).optional(),
  image: z.nullable(MessageEmbedImageResponse$inboundSchema).optional(),
  thumbnail: z.nullable(MessageEmbedImageResponse$inboundSchema).optional(),
  video: z.nullable(MessageEmbedVideoResponse$inboundSchema).optional(),
  footer: z.nullable(MessageEmbedFooterResponse$inboundSchema).optional(),
});

/** @internal */
export type MessageEmbedResponse$Outbound = {
  type: string;
  url?: string | null | undefined;
  title?: string | null | undefined;
  description?: string | null | undefined;
  color?: number | null | undefined;
  timestamp?: string | null | undefined;
  fields?: Array<MessageEmbedFieldResponse$Outbound> | null | undefined;
  author?: MessageEmbedAuthorResponse$Outbound | null | undefined;
  provider?: MessageEmbedProviderResponse$Outbound | null | undefined;
  image?: MessageEmbedImageResponse$Outbound | null | undefined;
  thumbnail?: MessageEmbedImageResponse$Outbound | null | undefined;
  video?: MessageEmbedVideoResponse$Outbound | null | undefined;
  footer?: MessageEmbedFooterResponse$Outbound | null | undefined;
};

/** @internal */
export const MessageEmbedResponse$outboundSchema: z.ZodType<
  MessageEmbedResponse$Outbound,
  z.ZodTypeDef,
  MessageEmbedResponse
> = z.object({
  type: z.string(),
  url: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  color: z.nullable(z.number().int()).optional(),
  timestamp: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  fields: z.nullable(z.array(MessageEmbedFieldResponse$outboundSchema))
    .optional(),
  author: z.nullable(MessageEmbedAuthorResponse$outboundSchema).optional(),
  provider: z.nullable(MessageEmbedProviderResponse$outboundSchema).optional(),
  image: z.nullable(MessageEmbedImageResponse$outboundSchema).optional(),
  thumbnail: z.nullable(MessageEmbedImageResponse$outboundSchema).optional(),
  video: z.nullable(MessageEmbedVideoResponse$outboundSchema).optional(),
  footer: z.nullable(MessageEmbedFooterResponse$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageEmbedResponse$ {
  /** @deprecated use `MessageEmbedResponse$inboundSchema` instead. */
  export const inboundSchema = MessageEmbedResponse$inboundSchema;
  /** @deprecated use `MessageEmbedResponse$outboundSchema` instead. */
  export const outboundSchema = MessageEmbedResponse$outboundSchema;
  /** @deprecated use `MessageEmbedResponse$Outbound` instead. */
  export type Outbound = MessageEmbedResponse$Outbound;
}
