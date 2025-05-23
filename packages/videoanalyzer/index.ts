import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessPolicyArgs } from "./accessPolicy";
export type AccessPolicy = import("./accessPolicy").AccessPolicy;
export const AccessPolicy: typeof import("./accessPolicy").AccessPolicy = null as any;
utilities.lazyLoad(exports, ["AccessPolicy"], () => require("./accessPolicy"));

export { EdgeModuleArgs } from "./edgeModule";
export type EdgeModule = import("./edgeModule").EdgeModule;
export const EdgeModule: typeof import("./edgeModule").EdgeModule = null as any;
utilities.lazyLoad(exports, ["EdgeModule"], () => require("./edgeModule"));

export { GetAccessPolicyArgs, GetAccessPolicyResult, GetAccessPolicyOutputArgs } from "./getAccessPolicy";
export const getAccessPolicy: typeof import("./getAccessPolicy").getAccessPolicy = null as any;
export const getAccessPolicyOutput: typeof import("./getAccessPolicy").getAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicy","getAccessPolicyOutput"], () => require("./getAccessPolicy"));

export { GetEdgeModuleArgs, GetEdgeModuleResult, GetEdgeModuleOutputArgs } from "./getEdgeModule";
export const getEdgeModule: typeof import("./getEdgeModule").getEdgeModule = null as any;
export const getEdgeModuleOutput: typeof import("./getEdgeModule").getEdgeModuleOutput = null as any;
utilities.lazyLoad(exports, ["getEdgeModule","getEdgeModuleOutput"], () => require("./getEdgeModule"));

export { GetLivePipelineArgs, GetLivePipelineResult, GetLivePipelineOutputArgs } from "./getLivePipeline";
export const getLivePipeline: typeof import("./getLivePipeline").getLivePipeline = null as any;
export const getLivePipelineOutput: typeof import("./getLivePipeline").getLivePipelineOutput = null as any;
utilities.lazyLoad(exports, ["getLivePipeline","getLivePipelineOutput"], () => require("./getLivePipeline"));

export { GetPipelineJobArgs, GetPipelineJobResult, GetPipelineJobOutputArgs } from "./getPipelineJob";
export const getPipelineJob: typeof import("./getPipelineJob").getPipelineJob = null as any;
export const getPipelineJobOutput: typeof import("./getPipelineJob").getPipelineJobOutput = null as any;
utilities.lazyLoad(exports, ["getPipelineJob","getPipelineJobOutput"], () => require("./getPipelineJob"));

export { GetPipelineTopologyArgs, GetPipelineTopologyResult, GetPipelineTopologyOutputArgs } from "./getPipelineTopology";
export const getPipelineTopology: typeof import("./getPipelineTopology").getPipelineTopology = null as any;
export const getPipelineTopologyOutput: typeof import("./getPipelineTopology").getPipelineTopologyOutput = null as any;
utilities.lazyLoad(exports, ["getPipelineTopology","getPipelineTopologyOutput"], () => require("./getPipelineTopology"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetVideoArgs, GetVideoResult, GetVideoOutputArgs } from "./getVideo";
export const getVideo: typeof import("./getVideo").getVideo = null as any;
export const getVideoOutput: typeof import("./getVideo").getVideoOutput = null as any;
utilities.lazyLoad(exports, ["getVideo","getVideoOutput"], () => require("./getVideo"));

export { GetVideoAnalyzerArgs, GetVideoAnalyzerResult, GetVideoAnalyzerOutputArgs } from "./getVideoAnalyzer";
export const getVideoAnalyzer: typeof import("./getVideoAnalyzer").getVideoAnalyzer = null as any;
export const getVideoAnalyzerOutput: typeof import("./getVideoAnalyzer").getVideoAnalyzerOutput = null as any;
utilities.lazyLoad(exports, ["getVideoAnalyzer","getVideoAnalyzerOutput"], () => require("./getVideoAnalyzer"));

export { ListEdgeModuleProvisioningTokenArgs, ListEdgeModuleProvisioningTokenResult, ListEdgeModuleProvisioningTokenOutputArgs } from "./listEdgeModuleProvisioningToken";
export const listEdgeModuleProvisioningToken: typeof import("./listEdgeModuleProvisioningToken").listEdgeModuleProvisioningToken = null as any;
export const listEdgeModuleProvisioningTokenOutput: typeof import("./listEdgeModuleProvisioningToken").listEdgeModuleProvisioningTokenOutput = null as any;
utilities.lazyLoad(exports, ["listEdgeModuleProvisioningToken","listEdgeModuleProvisioningTokenOutput"], () => require("./listEdgeModuleProvisioningToken"));

export { ListVideoContentTokenArgs, ListVideoContentTokenResult, ListVideoContentTokenOutputArgs } from "./listVideoContentToken";
export const listVideoContentToken: typeof import("./listVideoContentToken").listVideoContentToken = null as any;
export const listVideoContentTokenOutput: typeof import("./listVideoContentToken").listVideoContentTokenOutput = null as any;
utilities.lazyLoad(exports, ["listVideoContentToken","listVideoContentTokenOutput"], () => require("./listVideoContentToken"));

export { LivePipelineArgs } from "./livePipeline";
export type LivePipeline = import("./livePipeline").LivePipeline;
export const LivePipeline: typeof import("./livePipeline").LivePipeline = null as any;
utilities.lazyLoad(exports, ["LivePipeline"], () => require("./livePipeline"));

export { PipelineJobArgs } from "./pipelineJob";
export type PipelineJob = import("./pipelineJob").PipelineJob;
export const PipelineJob: typeof import("./pipelineJob").PipelineJob = null as any;
utilities.lazyLoad(exports, ["PipelineJob"], () => require("./pipelineJob"));

export { PipelineTopologyArgs } from "./pipelineTopology";
export type PipelineTopology = import("./pipelineTopology").PipelineTopology;
export const PipelineTopology: typeof import("./pipelineTopology").PipelineTopology = null as any;
utilities.lazyLoad(exports, ["PipelineTopology"], () => require("./pipelineTopology"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { VideoArgs } from "./video";
export type Video = import("./video").Video;
export const Video: typeof import("./video").Video = null as any;
utilities.lazyLoad(exports, ["Video"], () => require("./video"));

export { VideoAnalyzerArgs } from "./videoAnalyzer";
export type VideoAnalyzer = import("./videoAnalyzer").VideoAnalyzer;
export const VideoAnalyzer: typeof import("./videoAnalyzer").VideoAnalyzer = null as any;
utilities.lazyLoad(exports, ["VideoAnalyzer"], () => require("./videoAnalyzer"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:videoanalyzer:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:EdgeModule":
                return new EdgeModule(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:LivePipeline":
                return new LivePipeline(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:PipelineJob":
                return new PipelineJob(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:PipelineTopology":
                return new PipelineTopology(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:Video":
                return new Video(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer:VideoAnalyzer":
                return new VideoAnalyzer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "videoanalyzer", _module)