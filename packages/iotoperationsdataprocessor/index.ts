import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatasetArgs } from "./dataset";
export type Dataset = import("./dataset").Dataset;
export const Dataset: typeof import("./dataset").Dataset = null as any;
utilities.lazyLoad(exports, ["Dataset"], () => require("./dataset"));

export { GetDatasetArgs, GetDatasetResult, GetDatasetOutputArgs } from "./getDataset";
export const getDataset: typeof import("./getDataset").getDataset = null as any;
export const getDatasetOutput: typeof import("./getDataset").getDatasetOutput = null as any;
utilities.lazyLoad(exports, ["getDataset","getDatasetOutput"], () => require("./getDataset"));

export { GetInstanceArgs, GetInstanceResult, GetInstanceOutputArgs } from "./getInstance";
export const getInstance: typeof import("./getInstance").getInstance = null as any;
export const getInstanceOutput: typeof import("./getInstance").getInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getInstance","getInstanceOutput"], () => require("./getInstance"));

export { GetPipelineArgs, GetPipelineResult, GetPipelineOutputArgs } from "./getPipeline";
export const getPipeline: typeof import("./getPipeline").getPipeline = null as any;
export const getPipelineOutput: typeof import("./getPipeline").getPipelineOutput = null as any;
utilities.lazyLoad(exports, ["getPipeline","getPipelineOutput"], () => require("./getPipeline"));

export { InstanceArgs } from "./instance";
export type Instance = import("./instance").Instance;
export const Instance: typeof import("./instance").Instance = null as any;
utilities.lazyLoad(exports, ["Instance"], () => require("./instance"));

export { PipelineArgs } from "./pipeline";
export type Pipeline = import("./pipeline").Pipeline;
export const Pipeline: typeof import("./pipeline").Pipeline = null as any;
utilities.lazyLoad(exports, ["Pipeline"], () => require("./pipeline"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:iotoperationsdataprocessor:Dataset":
                return new Dataset(name, <any>undefined, { urn })
            case "azure-native:iotoperationsdataprocessor:Instance":
                return new Instance(name, <any>undefined, { urn })
            case "azure-native:iotoperationsdataprocessor:Pipeline":
                return new Pipeline(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "iotoperationsdataprocessor", _module)