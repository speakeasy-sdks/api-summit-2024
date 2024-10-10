/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ChannelPermissionOverwriteRequest,
  ChannelPermissionOverwriteRequest$inboundSchema,
  ChannelPermissionOverwriteRequest$Outbound,
  ChannelPermissionOverwriteRequest$outboundSchema,
} from "./channelpermissionoverwriterequest.js";
import {
  UpdateDefaultReactionEmojiRequest,
  UpdateDefaultReactionEmojiRequest$inboundSchema,
  UpdateDefaultReactionEmojiRequest$Outbound,
  UpdateDefaultReactionEmojiRequest$outboundSchema,
} from "./updatedefaultreactionemojirequest.js";
import {
  UpdateThreadTagRequest,
  UpdateThreadTagRequest$inboundSchema,
  UpdateThreadTagRequest$Outbound,
  UpdateThreadTagRequest$outboundSchema,
} from "./updatethreadtagrequest.js";

export type UpdateGuildChannelRequestPartial = {
  type?: 1 | undefined;
  name?: string | undefined;
  position?: number | null | undefined;
  topic?: string | null | undefined;
  bitrate?: number | null | undefined;
  userLimit?: number | null | undefined;
  nsfw?: boolean | null | undefined;
  rateLimitPerUser?: number | null | undefined;
  parentId?: string | null | undefined;
  permissionOverwrites?:
    | Array<ChannelPermissionOverwriteRequest>
    | null
    | undefined;
  rtcRegion?: string | null | undefined;
  videoQualityMode?: 1 | null | undefined;
  defaultAutoArchiveDuration?: 60 | null | undefined;
  defaultReactionEmoji?: UpdateDefaultReactionEmojiRequest | null | undefined;
  defaultThreadRateLimitPerUser?: number | null | undefined;
  defaultSortOrder?: 0 | null | undefined;
  defaultForumLayout?: 0 | null | undefined;
  flags?: number | null | undefined;
  availableTags?: Array<UpdateThreadTagRequest> | null | undefined;
};

/** @internal */
export const UpdateGuildChannelRequestPartial$inboundSchema: z.ZodType<
  UpdateGuildChannelRequestPartial,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal(1).optional(),
  name: z.string().optional(),
  position: z.nullable(z.number().int()).optional(),
  topic: z.nullable(z.string()).optional(),
  bitrate: z.nullable(z.number().int()).optional(),
  user_limit: z.nullable(z.number().int()).optional(),
  nsfw: z.nullable(z.boolean()).optional(),
  rate_limit_per_user: z.nullable(z.number().int()).optional(),
  parent_id: z.nullable(z.string()).optional(),
  permission_overwrites: z.nullable(
    z.array(ChannelPermissionOverwriteRequest$inboundSchema),
  ).optional(),
  rtc_region: z.nullable(z.string()).optional(),
  video_quality_mode: z.nullable(z.literal(1)).optional(),
  default_auto_archive_duration: z.nullable(z.literal(60)).optional(),
  default_reaction_emoji: z.nullable(
    UpdateDefaultReactionEmojiRequest$inboundSchema,
  ).optional(),
  default_thread_rate_limit_per_user: z.nullable(z.number().int()).optional(),
  default_sort_order: z.nullable(z.literal(0)).optional(),
  default_forum_layout: z.nullable(z.literal(0)).optional(),
  flags: z.nullable(z.number().int()).optional(),
  available_tags: z.nullable(z.array(UpdateThreadTagRequest$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "user_limit": "userLimit",
    "rate_limit_per_user": "rateLimitPerUser",
    "parent_id": "parentId",
    "permission_overwrites": "permissionOverwrites",
    "rtc_region": "rtcRegion",
    "video_quality_mode": "videoQualityMode",
    "default_auto_archive_duration": "defaultAutoArchiveDuration",
    "default_reaction_emoji": "defaultReactionEmoji",
    "default_thread_rate_limit_per_user": "defaultThreadRateLimitPerUser",
    "default_sort_order": "defaultSortOrder",
    "default_forum_layout": "defaultForumLayout",
    "available_tags": "availableTags",
  });
});

/** @internal */
export type UpdateGuildChannelRequestPartial$Outbound = {
  type: 1;
  name?: string | undefined;
  position?: number | null | undefined;
  topic?: string | null | undefined;
  bitrate?: number | null | undefined;
  user_limit?: number | null | undefined;
  nsfw?: boolean | null | undefined;
  rate_limit_per_user?: number | null | undefined;
  parent_id?: string | null | undefined;
  permission_overwrites?:
    | Array<ChannelPermissionOverwriteRequest$Outbound>
    | null
    | undefined;
  rtc_region?: string | null | undefined;
  video_quality_mode: 1 | null;
  default_auto_archive_duration: 60 | null;
  default_reaction_emoji?:
    | UpdateDefaultReactionEmojiRequest$Outbound
    | null
    | undefined;
  default_thread_rate_limit_per_user?: number | null | undefined;
  default_sort_order: 0 | null;
  default_forum_layout: 0 | null;
  flags?: number | null | undefined;
  available_tags?: Array<UpdateThreadTagRequest$Outbound> | null | undefined;
};

/** @internal */
export const UpdateGuildChannelRequestPartial$outboundSchema: z.ZodType<
  UpdateGuildChannelRequestPartial$Outbound,
  z.ZodTypeDef,
  UpdateGuildChannelRequestPartial
> = z.object({
  type: z.literal(1).default(1 as const),
  name: z.string().optional(),
  position: z.nullable(z.number().int()).optional(),
  topic: z.nullable(z.string()).optional(),
  bitrate: z.nullable(z.number().int()).optional(),
  userLimit: z.nullable(z.number().int()).optional(),
  nsfw: z.nullable(z.boolean()).optional(),
  rateLimitPerUser: z.nullable(z.number().int()).optional(),
  parentId: z.nullable(z.string()).optional(),
  permissionOverwrites: z.nullable(
    z.array(ChannelPermissionOverwriteRequest$outboundSchema),
  ).optional(),
  rtcRegion: z.nullable(z.string()).optional(),
  videoQualityMode: z.nullable(z.literal(1).default(1 as const)),
  defaultAutoArchiveDuration: z.nullable(z.literal(60).default(60 as const)),
  defaultReactionEmoji: z.nullable(
    UpdateDefaultReactionEmojiRequest$outboundSchema,
  ).optional(),
  defaultThreadRateLimitPerUser: z.nullable(z.number().int()).optional(),
  defaultSortOrder: z.nullable(z.literal(0).default(0 as const)),
  defaultForumLayout: z.nullable(z.literal(0).default(0 as const)),
  flags: z.nullable(z.number().int()).optional(),
  availableTags: z.nullable(z.array(UpdateThreadTagRequest$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    userLimit: "user_limit",
    rateLimitPerUser: "rate_limit_per_user",
    parentId: "parent_id",
    permissionOverwrites: "permission_overwrites",
    rtcRegion: "rtc_region",
    videoQualityMode: "video_quality_mode",
    defaultAutoArchiveDuration: "default_auto_archive_duration",
    defaultReactionEmoji: "default_reaction_emoji",
    defaultThreadRateLimitPerUser: "default_thread_rate_limit_per_user",
    defaultSortOrder: "default_sort_order",
    defaultForumLayout: "default_forum_layout",
    availableTags: "available_tags",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateGuildChannelRequestPartial$ {
  /** @deprecated use `UpdateGuildChannelRequestPartial$inboundSchema` instead. */
  export const inboundSchema = UpdateGuildChannelRequestPartial$inboundSchema;
  /** @deprecated use `UpdateGuildChannelRequestPartial$outboundSchema` instead. */
  export const outboundSchema = UpdateGuildChannelRequestPartial$outboundSchema;
  /** @deprecated use `UpdateGuildChannelRequestPartial$Outbound` instead. */
  export type Outbound = UpdateGuildChannelRequestPartial$Outbound;
}
