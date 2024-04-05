import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetStreamingJobArgs, GetStreamingJobResult, GetStreamingJobOutputArgs } from "./getStreamingJob";
export const getStreamingJob: typeof import("./getStreamingJob").getStreamingJob = null as any;
export const getStreamingJobOutput: typeof import("./getStreamingJob").getStreamingJobOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingJob","getStreamingJobOutput"], () => require("./getStreamingJob"));

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
            case "azure-native:streamanalytics/v20170401preview:StreamingJob":
                return new StreamingJob(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "streamanalytics/v20170401preview", _module)