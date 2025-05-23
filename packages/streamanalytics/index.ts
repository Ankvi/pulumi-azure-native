import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { FunctionArgs } from "./function";
export type Function = import("./function").Function;
export const Function: typeof import("./function").Function = null as any;
utilities.lazyLoad(exports, ["Function"], () => require("./function"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetFunctionArgs, GetFunctionResult, GetFunctionOutputArgs } from "./getFunction";
export const getFunction: typeof import("./getFunction").getFunction = null as any;
export const getFunctionOutput: typeof import("./getFunction").getFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getFunction","getFunctionOutput"], () => require("./getFunction"));

export { GetInputArgs, GetInputResult, GetInputOutputArgs } from "./getInput";
export const getInput: typeof import("./getInput").getInput = null as any;
export const getInputOutput: typeof import("./getInput").getInputOutput = null as any;
utilities.lazyLoad(exports, ["getInput","getInputOutput"], () => require("./getInput"));

export { GetOutputArgs, GetOutputResult, GetOutputOutputArgs } from "./getOutput";
export const getOutput: typeof import("./getOutput").getOutput = null as any;
export const getOutputOutput: typeof import("./getOutput").getOutputOutput = null as any;
utilities.lazyLoad(exports, ["getOutput","getOutputOutput"], () => require("./getOutput"));

export { GetPrivateEndpointArgs, GetPrivateEndpointResult, GetPrivateEndpointOutputArgs } from "./getPrivateEndpoint";
export const getPrivateEndpoint: typeof import("./getPrivateEndpoint").getPrivateEndpoint = null as any;
export const getPrivateEndpointOutput: typeof import("./getPrivateEndpoint").getPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpoint","getPrivateEndpointOutput"], () => require("./getPrivateEndpoint"));

export { GetStreamingJobArgs, GetStreamingJobResult, GetStreamingJobOutputArgs } from "./getStreamingJob";
export const getStreamingJob: typeof import("./getStreamingJob").getStreamingJob = null as any;
export const getStreamingJobOutput: typeof import("./getStreamingJob").getStreamingJobOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingJob","getStreamingJobOutput"], () => require("./getStreamingJob"));

export { InputArgs } from "./input";
export type Input = import("./input").Input;
export const Input: typeof import("./input").Input = null as any;
utilities.lazyLoad(exports, ["Input"], () => require("./input"));

export { ListClusterStreamingJobsArgs, ListClusterStreamingJobsResult, ListClusterStreamingJobsOutputArgs } from "./listClusterStreamingJobs";
export const listClusterStreamingJobs: typeof import("./listClusterStreamingJobs").listClusterStreamingJobs = null as any;
export const listClusterStreamingJobsOutput: typeof import("./listClusterStreamingJobs").listClusterStreamingJobsOutput = null as any;
utilities.lazyLoad(exports, ["listClusterStreamingJobs","listClusterStreamingJobsOutput"], () => require("./listClusterStreamingJobs"));

export { OutputArgs } from "./output";
export type Output = import("./output").Output;
export const Output: typeof import("./output").Output = null as any;
utilities.lazyLoad(exports, ["Output"], () => require("./output"));

export { PrivateEndpointArgs } from "./privateEndpoint";
export type PrivateEndpoint = import("./privateEndpoint").PrivateEndpoint;
export const PrivateEndpoint: typeof import("./privateEndpoint").PrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["PrivateEndpoint"], () => require("./privateEndpoint"));

export { StreamingJobArgs } from "./streamingJob";
export type StreamingJob = import("./streamingJob").StreamingJob;
export const StreamingJob: typeof import("./streamingJob").StreamingJob = null as any;
utilities.lazyLoad(exports, ["StreamingJob"], () => require("./streamingJob"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:streamanalytics:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:streamanalytics:Function":
                return new Function(name, <any>undefined, { urn })
            case "azure-native:streamanalytics:Input":
                return new Input(name, <any>undefined, { urn })
            case "azure-native:streamanalytics:Output":
                return new Output(name, <any>undefined, { urn })
            case "azure-native:streamanalytics:PrivateEndpoint":
                return new PrivateEndpoint(name, <any>undefined, { urn })
            case "azure-native:streamanalytics:StreamingJob":
                return new StreamingJob(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "streamanalytics", _module)