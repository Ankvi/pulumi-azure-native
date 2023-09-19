import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLiveEventArgs, GetLiveEventResult, GetLiveEventOutputArgs } from "./getLiveEvent";
export const getLiveEvent: typeof import("./getLiveEvent").getLiveEvent = null as any;
export const getLiveEventOutput: typeof import("./getLiveEvent").getLiveEventOutput = null as any;
utilities.lazyLoad(exports, ["getLiveEvent","getLiveEventOutput"], () => require("./getLiveEvent"));

export { GetLiveEventStatusArgs, GetLiveEventStatusResult, GetLiveEventStatusOutputArgs } from "./getLiveEventStatus";
export const getLiveEventStatus: typeof import("./getLiveEventStatus").getLiveEventStatus = null as any;
export const getLiveEventStatusOutput: typeof import("./getLiveEventStatus").getLiveEventStatusOutput = null as any;
utilities.lazyLoad(exports, ["getLiveEventStatus","getLiveEventStatusOutput"], () => require("./getLiveEventStatus"));

export { GetLiveEventStreamEventsArgs, GetLiveEventStreamEventsResult, GetLiveEventStreamEventsOutputArgs } from "./getLiveEventStreamEvents";
export const getLiveEventStreamEvents: typeof import("./getLiveEventStreamEvents").getLiveEventStreamEvents = null as any;
export const getLiveEventStreamEventsOutput: typeof import("./getLiveEventStreamEvents").getLiveEventStreamEventsOutput = null as any;
utilities.lazyLoad(exports, ["getLiveEventStreamEvents","getLiveEventStreamEventsOutput"], () => require("./getLiveEventStreamEvents"));

export { GetLiveEventTrackIngestHeartbeatsArgs, GetLiveEventTrackIngestHeartbeatsResult, GetLiveEventTrackIngestHeartbeatsOutputArgs } from "./getLiveEventTrackIngestHeartbeats";
export const getLiveEventTrackIngestHeartbeats: typeof import("./getLiveEventTrackIngestHeartbeats").getLiveEventTrackIngestHeartbeats = null as any;
export const getLiveEventTrackIngestHeartbeatsOutput: typeof import("./getLiveEventTrackIngestHeartbeats").getLiveEventTrackIngestHeartbeatsOutput = null as any;
utilities.lazyLoad(exports, ["getLiveEventTrackIngestHeartbeats","getLiveEventTrackIngestHeartbeatsOutput"], () => require("./getLiveEventTrackIngestHeartbeats"));

export { GetLiveOutputArgs, GetLiveOutputResult, GetLiveOutputOutputArgs } from "./getLiveOutput";
export const getLiveOutput: typeof import("./getLiveOutput").getLiveOutput = null as any;
export const getLiveOutputOutput: typeof import("./getLiveOutput").getLiveOutputOutput = null as any;
utilities.lazyLoad(exports, ["getLiveOutput","getLiveOutputOutput"], () => require("./getLiveOutput"));

export { GetStreamingEndpointArgs, GetStreamingEndpointResult, GetStreamingEndpointOutputArgs } from "./getStreamingEndpoint";
export const getStreamingEndpoint: typeof import("./getStreamingEndpoint").getStreamingEndpoint = null as any;
export const getStreamingEndpointOutput: typeof import("./getStreamingEndpoint").getStreamingEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingEndpoint","getStreamingEndpointOutput"], () => require("./getStreamingEndpoint"));

export { LiveEventArgs } from "./liveEvent";
export type LiveEvent = import("./liveEvent").LiveEvent;
export const LiveEvent: typeof import("./liveEvent").LiveEvent = null as any;
utilities.lazyLoad(exports, ["LiveEvent"], () => require("./liveEvent"));

export { LiveOutputArgs } from "./liveOutput";
export type LiveOutput = import("./liveOutput").LiveOutput;
export const LiveOutput: typeof import("./liveOutput").LiveOutput = null as any;
utilities.lazyLoad(exports, ["LiveOutput"], () => require("./liveOutput"));

export { StreamingEndpointArgs } from "./streamingEndpoint";
export type StreamingEndpoint = import("./streamingEndpoint").StreamingEndpoint;
export const StreamingEndpoint: typeof import("./streamingEndpoint").StreamingEndpoint = null as any;
utilities.lazyLoad(exports, ["StreamingEndpoint"], () => require("./streamingEndpoint"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20221101:LiveEvent":
                return new LiveEvent(name, <any>undefined, { urn })
            case "azure-native:media/v20221101:LiveOutput":
                return new LiveOutput(name, <any>undefined, { urn })
            case "azure-native:media/v20221101:StreamingEndpoint":
                return new StreamingEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20221101", _module)
