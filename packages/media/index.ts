import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountFilterArgs } from "./accountFilter";
export type AccountFilter = import("./accountFilter").AccountFilter;
export const AccountFilter: typeof import("./accountFilter").AccountFilter = null as any;
utilities.lazyLoad(exports, ["AccountFilter"], () => require("./accountFilter"));

export { AssetArgs } from "./asset";
export type Asset = import("./asset").Asset;
export const Asset: typeof import("./asset").Asset = null as any;
utilities.lazyLoad(exports, ["Asset"], () => require("./asset"));

export { AssetFilterArgs } from "./assetFilter";
export type AssetFilter = import("./assetFilter").AssetFilter;
export const AssetFilter: typeof import("./assetFilter").AssetFilter = null as any;
utilities.lazyLoad(exports, ["AssetFilter"], () => require("./assetFilter"));

export { ContentKeyPolicyArgs } from "./contentKeyPolicy";
export type ContentKeyPolicy = import("./contentKeyPolicy").ContentKeyPolicy;
export const ContentKeyPolicy: typeof import("./contentKeyPolicy").ContentKeyPolicy = null as any;
utilities.lazyLoad(exports, ["ContentKeyPolicy"], () => require("./contentKeyPolicy"));

export { GetAccountFilterArgs, GetAccountFilterResult, GetAccountFilterOutputArgs } from "./getAccountFilter";
export const getAccountFilter: typeof import("./getAccountFilter").getAccountFilter = null as any;
export const getAccountFilterOutput: typeof import("./getAccountFilter").getAccountFilterOutput = null as any;
utilities.lazyLoad(exports, ["getAccountFilter","getAccountFilterOutput"], () => require("./getAccountFilter"));

export { GetAssetArgs, GetAssetResult, GetAssetOutputArgs } from "./getAsset";
export const getAsset: typeof import("./getAsset").getAsset = null as any;
export const getAssetOutput: typeof import("./getAsset").getAssetOutput = null as any;
utilities.lazyLoad(exports, ["getAsset","getAssetOutput"], () => require("./getAsset"));

export { GetAssetEncryptionKeyArgs, GetAssetEncryptionKeyResult, GetAssetEncryptionKeyOutputArgs } from "./getAssetEncryptionKey";
export const getAssetEncryptionKey: typeof import("./getAssetEncryptionKey").getAssetEncryptionKey = null as any;
export const getAssetEncryptionKeyOutput: typeof import("./getAssetEncryptionKey").getAssetEncryptionKeyOutput = null as any;
utilities.lazyLoad(exports, ["getAssetEncryptionKey","getAssetEncryptionKeyOutput"], () => require("./getAssetEncryptionKey"));

export { GetAssetFilterArgs, GetAssetFilterResult, GetAssetFilterOutputArgs } from "./getAssetFilter";
export const getAssetFilter: typeof import("./getAssetFilter").getAssetFilter = null as any;
export const getAssetFilterOutput: typeof import("./getAssetFilter").getAssetFilterOutput = null as any;
utilities.lazyLoad(exports, ["getAssetFilter","getAssetFilterOutput"], () => require("./getAssetFilter"));

export { GetContentKeyPolicyArgs, GetContentKeyPolicyResult, GetContentKeyPolicyOutputArgs } from "./getContentKeyPolicy";
export const getContentKeyPolicy: typeof import("./getContentKeyPolicy").getContentKeyPolicy = null as any;
export const getContentKeyPolicyOutput: typeof import("./getContentKeyPolicy").getContentKeyPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getContentKeyPolicy","getContentKeyPolicyOutput"], () => require("./getContentKeyPolicy"));

export { GetContentKeyPolicyPropertiesWithSecretsArgs, GetContentKeyPolicyPropertiesWithSecretsResult, GetContentKeyPolicyPropertiesWithSecretsOutputArgs } from "./getContentKeyPolicyPropertiesWithSecrets";
export const getContentKeyPolicyPropertiesWithSecrets: typeof import("./getContentKeyPolicyPropertiesWithSecrets").getContentKeyPolicyPropertiesWithSecrets = null as any;
export const getContentKeyPolicyPropertiesWithSecretsOutput: typeof import("./getContentKeyPolicyPropertiesWithSecrets").getContentKeyPolicyPropertiesWithSecretsOutput = null as any;
utilities.lazyLoad(exports, ["getContentKeyPolicyPropertiesWithSecrets","getContentKeyPolicyPropertiesWithSecretsOutput"], () => require("./getContentKeyPolicyPropertiesWithSecrets"));

export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

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

export { GetMediaServiceArgs, GetMediaServiceResult, GetMediaServiceOutputArgs } from "./getMediaService";
export const getMediaService: typeof import("./getMediaService").getMediaService = null as any;
export const getMediaServiceOutput: typeof import("./getMediaService").getMediaServiceOutput = null as any;
utilities.lazyLoad(exports, ["getMediaService","getMediaServiceOutput"], () => require("./getMediaService"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetStreamingEndpointArgs, GetStreamingEndpointResult, GetStreamingEndpointOutputArgs } from "./getStreamingEndpoint";
export const getStreamingEndpoint: typeof import("./getStreamingEndpoint").getStreamingEndpoint = null as any;
export const getStreamingEndpointOutput: typeof import("./getStreamingEndpoint").getStreamingEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingEndpoint","getStreamingEndpointOutput"], () => require("./getStreamingEndpoint"));

export { GetStreamingLocatorArgs, GetStreamingLocatorResult, GetStreamingLocatorOutputArgs } from "./getStreamingLocator";
export const getStreamingLocator: typeof import("./getStreamingLocator").getStreamingLocator = null as any;
export const getStreamingLocatorOutput: typeof import("./getStreamingLocator").getStreamingLocatorOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingLocator","getStreamingLocatorOutput"], () => require("./getStreamingLocator"));

export { GetStreamingPolicyArgs, GetStreamingPolicyResult, GetStreamingPolicyOutputArgs } from "./getStreamingPolicy";
export const getStreamingPolicy: typeof import("./getStreamingPolicy").getStreamingPolicy = null as any;
export const getStreamingPolicyOutput: typeof import("./getStreamingPolicy").getStreamingPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingPolicy","getStreamingPolicyOutput"], () => require("./getStreamingPolicy"));

export { GetTrackArgs, GetTrackResult, GetTrackOutputArgs } from "./getTrack";
export const getTrack: typeof import("./getTrack").getTrack = null as any;
export const getTrackOutput: typeof import("./getTrack").getTrackOutput = null as any;
utilities.lazyLoad(exports, ["getTrack","getTrackOutput"], () => require("./getTrack"));

export { GetTransformArgs, GetTransformResult, GetTransformOutputArgs } from "./getTransform";
export const getTransform: typeof import("./getTransform").getTransform = null as any;
export const getTransformOutput: typeof import("./getTransform").getTransformOutput = null as any;
utilities.lazyLoad(exports, ["getTransform","getTransformOutput"], () => require("./getTransform"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { ListAssetContainerSasArgs, ListAssetContainerSasResult, ListAssetContainerSasOutputArgs } from "./listAssetContainerSas";
export const listAssetContainerSas: typeof import("./listAssetContainerSas").listAssetContainerSas = null as any;
export const listAssetContainerSasOutput: typeof import("./listAssetContainerSas").listAssetContainerSasOutput = null as any;
utilities.lazyLoad(exports, ["listAssetContainerSas","listAssetContainerSasOutput"], () => require("./listAssetContainerSas"));

export { ListAssetStreamingLocatorsArgs, ListAssetStreamingLocatorsResult, ListAssetStreamingLocatorsOutputArgs } from "./listAssetStreamingLocators";
export const listAssetStreamingLocators: typeof import("./listAssetStreamingLocators").listAssetStreamingLocators = null as any;
export const listAssetStreamingLocatorsOutput: typeof import("./listAssetStreamingLocators").listAssetStreamingLocatorsOutput = null as any;
utilities.lazyLoad(exports, ["listAssetStreamingLocators","listAssetStreamingLocatorsOutput"], () => require("./listAssetStreamingLocators"));

export { ListMediaServiceEdgePoliciesArgs, ListMediaServiceEdgePoliciesResult, ListMediaServiceEdgePoliciesOutputArgs } from "./listMediaServiceEdgePolicies";
export const listMediaServiceEdgePolicies: typeof import("./listMediaServiceEdgePolicies").listMediaServiceEdgePolicies = null as any;
export const listMediaServiceEdgePoliciesOutput: typeof import("./listMediaServiceEdgePolicies").listMediaServiceEdgePoliciesOutput = null as any;
utilities.lazyLoad(exports, ["listMediaServiceEdgePolicies","listMediaServiceEdgePoliciesOutput"], () => require("./listMediaServiceEdgePolicies"));

export { ListMediaServiceKeysArgs, ListMediaServiceKeysResult, ListMediaServiceKeysOutputArgs } from "./listMediaServiceKeys";
export const listMediaServiceKeys: typeof import("./listMediaServiceKeys").listMediaServiceKeys = null as any;
export const listMediaServiceKeysOutput: typeof import("./listMediaServiceKeys").listMediaServiceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listMediaServiceKeys","listMediaServiceKeysOutput"], () => require("./listMediaServiceKeys"));

export { ListStreamingLocatorContentKeysArgs, ListStreamingLocatorContentKeysResult, ListStreamingLocatorContentKeysOutputArgs } from "./listStreamingLocatorContentKeys";
export const listStreamingLocatorContentKeys: typeof import("./listStreamingLocatorContentKeys").listStreamingLocatorContentKeys = null as any;
export const listStreamingLocatorContentKeysOutput: typeof import("./listStreamingLocatorContentKeys").listStreamingLocatorContentKeysOutput = null as any;
utilities.lazyLoad(exports, ["listStreamingLocatorContentKeys","listStreamingLocatorContentKeysOutput"], () => require("./listStreamingLocatorContentKeys"));

export { ListStreamingLocatorPathsArgs, ListStreamingLocatorPathsResult, ListStreamingLocatorPathsOutputArgs } from "./listStreamingLocatorPaths";
export const listStreamingLocatorPaths: typeof import("./listStreamingLocatorPaths").listStreamingLocatorPaths = null as any;
export const listStreamingLocatorPathsOutput: typeof import("./listStreamingLocatorPaths").listStreamingLocatorPathsOutput = null as any;
utilities.lazyLoad(exports, ["listStreamingLocatorPaths","listStreamingLocatorPathsOutput"], () => require("./listStreamingLocatorPaths"));

export { LiveEventArgs } from "./liveEvent";
export type LiveEvent = import("./liveEvent").LiveEvent;
export const LiveEvent: typeof import("./liveEvent").LiveEvent = null as any;
utilities.lazyLoad(exports, ["LiveEvent"], () => require("./liveEvent"));

export { LiveOutputArgs } from "./liveOutput";
export type LiveOutput = import("./liveOutput").LiveOutput;
export const LiveOutput: typeof import("./liveOutput").LiveOutput = null as any;
utilities.lazyLoad(exports, ["LiveOutput"], () => require("./liveOutput"));

export { MediaServiceArgs } from "./mediaService";
export type MediaService = import("./mediaService").MediaService;
export const MediaService: typeof import("./mediaService").MediaService = null as any;
utilities.lazyLoad(exports, ["MediaService"], () => require("./mediaService"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { StreamingEndpointArgs } from "./streamingEndpoint";
export type StreamingEndpoint = import("./streamingEndpoint").StreamingEndpoint;
export const StreamingEndpoint: typeof import("./streamingEndpoint").StreamingEndpoint = null as any;
utilities.lazyLoad(exports, ["StreamingEndpoint"], () => require("./streamingEndpoint"));

export { StreamingLocatorArgs } from "./streamingLocator";
export type StreamingLocator = import("./streamingLocator").StreamingLocator;
export const StreamingLocator: typeof import("./streamingLocator").StreamingLocator = null as any;
utilities.lazyLoad(exports, ["StreamingLocator"], () => require("./streamingLocator"));

export { StreamingPolicyArgs } from "./streamingPolicy";
export type StreamingPolicy = import("./streamingPolicy").StreamingPolicy;
export const StreamingPolicy: typeof import("./streamingPolicy").StreamingPolicy = null as any;
utilities.lazyLoad(exports, ["StreamingPolicy"], () => require("./streamingPolicy"));

export { TrackArgs } from "./track";
export type Track = import("./track").Track;
export const Track: typeof import("./track").Track = null as any;
utilities.lazyLoad(exports, ["Track"], () => require("./track"));

export { TransformArgs } from "./transform";
export type Transform = import("./transform").Transform;
export const Transform: typeof import("./transform").Transform = null as any;
utilities.lazyLoad(exports, ["Transform"], () => require("./transform"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media:AccountFilter":
                return new AccountFilter(name, <any>undefined, { urn })
            case "azure-native:media:Asset":
                return new Asset(name, <any>undefined, { urn })
            case "azure-native:media:AssetFilter":
                return new AssetFilter(name, <any>undefined, { urn })
            case "azure-native:media:ContentKeyPolicy":
                return new ContentKeyPolicy(name, <any>undefined, { urn })
            case "azure-native:media:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:media:LiveEvent":
                return new LiveEvent(name, <any>undefined, { urn })
            case "azure-native:media:LiveOutput":
                return new LiveOutput(name, <any>undefined, { urn })
            case "azure-native:media:MediaService":
                return new MediaService(name, <any>undefined, { urn })
            case "azure-native:media:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:media:StreamingEndpoint":
                return new StreamingEndpoint(name, <any>undefined, { urn })
            case "azure-native:media:StreamingLocator":
                return new StreamingLocator(name, <any>undefined, { urn })
            case "azure-native:media:StreamingPolicy":
                return new StreamingPolicy(name, <any>undefined, { urn })
            case "azure-native:media:Track":
                return new Track(name, <any>undefined, { urn })
            case "azure-native:media:Transform":
                return new Transform(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media", _module)