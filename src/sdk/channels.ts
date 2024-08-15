/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { channelsDelete } from "../funcs/channelsDelete.js";
import { channelsGet } from "../funcs/channelsGet.js";
import { channelsUpdate } from "../funcs/channelsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Channels extends ClientSDK {
    async get(
        request: operations.GetChannelRequest,
        options?: RequestOptions
    ): Promise<operations.GetChannelResponseBody> {
        return unwrapAsync(channelsGet(this, request, options));
    }

    async delete(
        request: operations.DeleteChannelRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteChannelResponseBody> {
        return unwrapAsync(channelsDelete(this, request, options));
    }

    async update(
        request: operations.UpdateChannelRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateChannelResponseBody> {
        return unwrapAsync(channelsUpdate(this, request, options));
    }
}
