import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FunctionArgs } from "./function";
export type Function = import("./function").Function;
export const Function: typeof import("./function").Function = null as any;
utilities.lazyLoad(exports, ["Function"], () => require("./function"));

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

export { GetStreamingJobArgs, GetStreamingJobResult, GetStreamingJobOutputArgs } from "./getStreamingJob";
export const getStreamingJob: typeof import("./getStreamingJob").getStreamingJob = null as any;
export const getStreamingJobOutput: typeof import("./getStreamingJob").getStreamingJobOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingJob","getStreamingJobOutput"], () => require("./getStreamingJob"));

export { InputArgs } from "./input";
export type Input = import("./input").Input;
export const Input: typeof import("./input").Input = null as any;
utilities.lazyLoad(exports, ["Input"], () => require("./input"));

export { OutputArgs } from "./output";
export type Output = import("./output").Output;
export const Output: typeof import("./output").Output = null as any;
utilities.lazyLoad(exports, ["Output"], () => require("./output"));

export { StreamingJobArgs } from "./streamingJob";
export type StreamingJob = import("./streamingJob").StreamingJob;
export const StreamingJob: typeof import("./streamingJob").StreamingJob = null as any;
utilities.lazyLoad(exports, ["StreamingJob"], () => require("./streamingJob"));


// Export enums:
export * from "../types/enums/v20211001preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:streamanalytics/v20211001preview:Function":
                return new Function(name, <any>undefined, { urn })
            case "azure-native:streamanalytics/v20211001preview:Input":
                return new Input(name, <any>undefined, { urn })
            case "azure-native:streamanalytics/v20211001preview:Output":
                return new Output(name, <any>undefined, { urn })
            case "azure-native:streamanalytics/v20211001preview:StreamingJob":
                return new StreamingJob(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "streamanalytics/v20211001preview", _module)
