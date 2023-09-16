import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetJobArgs, GetJobResult, GetJobOutputArgs } from "./getJob";
export const getJob: typeof import("./getJob").getJob = null as any;
export const getJobOutput: typeof import("./getJob").getJobOutput = null as any;
utilities.lazyLoad(exports, ["getJob","getJobOutput"], () => require("./getJob"));

export { GetTransformArgs, GetTransformResult, GetTransformOutputArgs } from "./getTransform";
export const getTransform: typeof import("./getTransform").getTransform = null as any;
export const getTransformOutput: typeof import("./getTransform").getTransformOutput = null as any;
utilities.lazyLoad(exports, ["getTransform","getTransformOutput"], () => require("./getTransform"));

export { JobArgs } from "./job";
export type Job = import("./job").Job;
export const Job: typeof import("./job").Job = null as any;
utilities.lazyLoad(exports, ["Job"], () => require("./job"));

export { TransformArgs } from "./transform";
export type Transform = import("./transform").Transform;
export const Transform: typeof import("./transform").Transform = null as any;
utilities.lazyLoad(exports, ["Transform"], () => require("./transform"));


// Export enums:
export * from "../types/enums/v20220701";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20220701:Job":
                return new Job(name, <any>undefined, { urn })
            case "azure-native:media/v20220701:Transform":
                return new Transform(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20220701", _module)
