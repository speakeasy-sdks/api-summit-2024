/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  GuildChannelResponse,
  GuildChannelResponse$inboundSchema,
  GuildChannelResponse$Outbound,
  GuildChannelResponse$outboundSchema,
} from "./guildchannelresponse.js";
import {
  GuildMemberResponse,
  GuildMemberResponse$inboundSchema,
  GuildMemberResponse$Outbound,
  GuildMemberResponse$outboundSchema,
} from "./guildmemberresponse.js";
import {
  GuildRoleResponse,
  GuildRoleResponse$inboundSchema,
  GuildRoleResponse$Outbound,
  GuildRoleResponse$outboundSchema,
} from "./guildroleresponse.js";
import {
  PrivateChannelResponse,
  PrivateChannelResponse$inboundSchema,
  PrivateChannelResponse$Outbound,
  PrivateChannelResponse$outboundSchema,
} from "./privatechannelresponse.js";
import {
  PrivateGroupChannelResponse,
  PrivateGroupChannelResponse$inboundSchema,
  PrivateGroupChannelResponse$Outbound,
  PrivateGroupChannelResponse$outboundSchema,
} from "./privategroupchannelresponse.js";
import {
  ThreadResponse,
  ThreadResponse$inboundSchema,
  ThreadResponse$Outbound,
  ThreadResponse$outboundSchema,
} from "./threadresponse.js";
import {
  UserResponse,
  UserResponse$inboundSchema,
  UserResponse$Outbound,
  UserResponse$outboundSchema,
} from "./userresponse.js";

export type Channels =
  | PrivateChannelResponse
  | PrivateGroupChannelResponse
  | ThreadResponse
  | GuildChannelResponse;

export type ResolvedObjectsResponse = {
  users: { [k: string]: UserResponse };
  members: { [k: string]: GuildMemberResponse };
  channels: {
    [k: string]:
      | PrivateChannelResponse
      | PrivateGroupChannelResponse
      | ThreadResponse
      | GuildChannelResponse;
  };
  roles: { [k: string]: GuildRoleResponse };
};

/** @internal */
export const Channels$inboundSchema: z.ZodType<
  Channels,
  z.ZodTypeDef,
  unknown
> = z.union([
  PrivateChannelResponse$inboundSchema,
  PrivateGroupChannelResponse$inboundSchema,
  ThreadResponse$inboundSchema,
  GuildChannelResponse$inboundSchema,
]);

/** @internal */
export type Channels$Outbound =
  | PrivateChannelResponse$Outbound
  | PrivateGroupChannelResponse$Outbound
  | ThreadResponse$Outbound
  | GuildChannelResponse$Outbound;

/** @internal */
export const Channels$outboundSchema: z.ZodType<
  Channels$Outbound,
  z.ZodTypeDef,
  Channels
> = z.union([
  PrivateChannelResponse$outboundSchema,
  PrivateGroupChannelResponse$outboundSchema,
  ThreadResponse$outboundSchema,
  GuildChannelResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Channels$ {
  /** @deprecated use `Channels$inboundSchema` instead. */
  export const inboundSchema = Channels$inboundSchema;
  /** @deprecated use `Channels$outboundSchema` instead. */
  export const outboundSchema = Channels$outboundSchema;
  /** @deprecated use `Channels$Outbound` instead. */
  export type Outbound = Channels$Outbound;
}

/** @internal */
export const ResolvedObjectsResponse$inboundSchema: z.ZodType<
  ResolvedObjectsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  users: z.record(UserResponse$inboundSchema),
  members: z.record(GuildMemberResponse$inboundSchema),
  channels: z.record(
    z.union([
      PrivateChannelResponse$inboundSchema,
      PrivateGroupChannelResponse$inboundSchema,
      ThreadResponse$inboundSchema,
      GuildChannelResponse$inboundSchema,
    ]),
  ),
  roles: z.record(GuildRoleResponse$inboundSchema),
});

/** @internal */
export type ResolvedObjectsResponse$Outbound = {
  users: { [k: string]: UserResponse$Outbound };
  members: { [k: string]: GuildMemberResponse$Outbound };
  channels: {
    [k: string]:
      | PrivateChannelResponse$Outbound
      | PrivateGroupChannelResponse$Outbound
      | ThreadResponse$Outbound
      | GuildChannelResponse$Outbound;
  };
  roles: { [k: string]: GuildRoleResponse$Outbound };
};

/** @internal */
export const ResolvedObjectsResponse$outboundSchema: z.ZodType<
  ResolvedObjectsResponse$Outbound,
  z.ZodTypeDef,
  ResolvedObjectsResponse
> = z.object({
  users: z.record(UserResponse$outboundSchema),
  members: z.record(GuildMemberResponse$outboundSchema),
  channels: z.record(
    z.union([
      PrivateChannelResponse$outboundSchema,
      PrivateGroupChannelResponse$outboundSchema,
      ThreadResponse$outboundSchema,
      GuildChannelResponse$outboundSchema,
    ]),
  ),
  roles: z.record(GuildRoleResponse$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResolvedObjectsResponse$ {
  /** @deprecated use `ResolvedObjectsResponse$inboundSchema` instead. */
  export const inboundSchema = ResolvedObjectsResponse$inboundSchema;
  /** @deprecated use `ResolvedObjectsResponse$outboundSchema` instead. */
  export const outboundSchema = ResolvedObjectsResponse$outboundSchema;
  /** @deprecated use `ResolvedObjectsResponse$Outbound` instead. */
  export type Outbound = ResolvedObjectsResponse$Outbound;
}
