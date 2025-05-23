import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetJobCollectionArgs, GetJobCollectionResult, GetJobCollectionOutputArgs } from "./getJobCollection";
export const getJobCollection: typeof import("./getJobCollection").getJobCollection = null as any;
export const getJobCollectionOutput: typeof import("./getJobCollection").getJobCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getJobCollection","getJobCollectionOutput"], () => require("./getJobCollection"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { JobCollectionArgs } from "./jobCollection";
export type JobCollection = import("./jobCollection").JobCollection;
export const JobCollection: typeof import("./jobCollection").JobCollection = null as any;
utilities.lazyLoad(exports, ["JobCollection"], () => require("./jobCollection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:scheduler:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:scheduler:JobCollection":
                return new JobCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "scheduler", _module)