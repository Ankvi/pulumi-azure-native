import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { ListJobCredentialsArgs, ListJobCredentialsResult, ListJobCredentialsOutputArgs } from "./listJobCredentials";
export const listJobCredentials: typeof import("./listJobCredentials").listJobCredentials = null as any;
export const listJobCredentialsOutput: typeof import("./listJobCredentials").listJobCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listJobCredentials","listJobCredentialsOutput"], () => require("./listJobCredentials"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databox:Job":
                return new Job(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databox", _module)