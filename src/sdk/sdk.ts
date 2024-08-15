/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { ChannelInvites } from "./channelinvites.js";
import { Channels } from "./channels.js";
import { Messages } from "./messages.js";
import { Threads } from "./threads.js";

export class Discord extends ClientSDK {
    private _messages?: Messages;
    get messages(): Messages {
        return (this._messages ??= new Messages(this.options$));
    }

    private _channelInvites?: ChannelInvites;
    get channelInvites(): ChannelInvites {
        return (this._channelInvites ??= new ChannelInvites(this.options$));
    }

    private _threads?: Threads;
    get threads(): Threads {
        return (this._threads ??= new Threads(this.options$));
    }

    private _channels?: Channels;
    get channels(): Channels {
        return (this._channels ??= new Channels(this.options$));
    }
}
