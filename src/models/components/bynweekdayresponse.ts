/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ByNWeekdayResponse = {
  n: number;
  day?: 0 | undefined;
};

/** @internal */
export const ByNWeekdayResponse$inboundSchema: z.ZodType<
  ByNWeekdayResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  n: z.number().int(),
  day: z.literal(0).optional(),
});

/** @internal */
export type ByNWeekdayResponse$Outbound = {
  n: number;
  day: 0;
};

/** @internal */
export const ByNWeekdayResponse$outboundSchema: z.ZodType<
  ByNWeekdayResponse$Outbound,
  z.ZodTypeDef,
  ByNWeekdayResponse
> = z.object({
  n: z.number().int(),
  day: z.literal(0).default(0 as const),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ByNWeekdayResponse$ {
  /** @deprecated use `ByNWeekdayResponse$inboundSchema` instead. */
  export const inboundSchema = ByNWeekdayResponse$inboundSchema;
  /** @deprecated use `ByNWeekdayResponse$outboundSchema` instead. */
  export const outboundSchema = ByNWeekdayResponse$outboundSchema;
  /** @deprecated use `ByNWeekdayResponse$Outbound` instead. */
  export type Outbound = ByNWeekdayResponse$Outbound;
}
