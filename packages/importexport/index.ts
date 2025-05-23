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

export { ListBitLockerKeyArgs, ListBitLockerKeyResult, ListBitLockerKeyOutputArgs } from "./listBitLockerKey";
export const listBitLockerKey: typeof import("./listBitLockerKey").listBitLockerKey = null as any;
export const listBitLockerKeyOutput: typeof import("./listBitLockerKey").listBitLockerKeyOutput = null as any;
utilities.lazyLoad(exports, ["listBitLockerKey","listBitLockerKeyOutput"], () => require("./listBitLockerKey"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:importexport:Job":
                return new Job(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "importexport", _module)