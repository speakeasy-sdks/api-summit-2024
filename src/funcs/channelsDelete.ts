/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DiscordCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export async function channelsDelete(
    client$: DiscordCore,
    request: operations.DeleteChannelRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.DeleteChannelResponseBody,
        | errors.ErrorResponse
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.DeleteChannelRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        channel_id: encodeSimple$("channel_id", payload$.channel_id, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/channels/{channel_id}")(pathParams$);

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const botToken$ = await extractSecurity(client$.options$.botToken);
    const security$ = botToken$ == null ? {} : { botToken: botToken$ };
    const context = {
        operationID: "delete_channel",
        oAuth2Scopes: [],
        securitySource: client$.options$.botToken,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "DELETE",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        operations.DeleteChannelResponseBody,
        | errors.ErrorResponse
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.DeleteChannelResponseBody$inboundSchema),
        m$.jsonErr("4XX", errors.ErrorResponse$inboundSchema),
        m$.fail("5XX")
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
