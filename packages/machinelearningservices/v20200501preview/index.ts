import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMachineLearningDatasetArgs, GetMachineLearningDatasetResult, GetMachineLearningDatasetOutputArgs } from "./getMachineLearningDataset";
export const getMachineLearningDataset: typeof import("./getMachineLearningDataset").getMachineLearningDataset = null as any;
export const getMachineLearningDatasetOutput: typeof import("./getMachineLearningDataset").getMachineLearningDatasetOutput = null as any;
utilities.lazyLoad(exports, ["getMachineLearningDataset","getMachineLearningDatasetOutput"], () => require("./getMachineLearningDataset"));

export { GetMachineLearningDatastoreArgs, GetMachineLearningDatastoreResult, GetMachineLearningDatastoreOutputArgs } from "./getMachineLearningDatastore";
export const getMachineLearningDatastore: typeof import("./getMachineLearningDatastore").getMachineLearningDatastore = null as any;
export const getMachineLearningDatastoreOutput: typeof import("./getMachineLearningDatastore").getMachineLearningDatastoreOutput = null as any;
utilities.lazyLoad(exports, ["getMachineLearningDatastore","getMachineLearningDatastoreOutput"], () => require("./getMachineLearningDatastore"));

export { MachineLearningDatasetArgs } from "./machineLearningDataset";
export type MachineLearningDataset = import("./machineLearningDataset").MachineLearningDataset;
export const MachineLearningDataset: typeof import("./machineLearningDataset").MachineLearningDataset = null as any;
utilities.lazyLoad(exports, ["MachineLearningDataset"], () => require("./machineLearningDataset"));

export { MachineLearningDatastoreArgs } from "./machineLearningDatastore";
export type MachineLearningDatastore = import("./machineLearningDatastore").MachineLearningDatastore;
export const MachineLearningDatastore: typeof import("./machineLearningDatastore").MachineLearningDatastore = null as any;
utilities.lazyLoad(exports, ["MachineLearningDatastore"], () => require("./machineLearningDatastore"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningservices/v20200501preview:MachineLearningDataset":
                return new MachineLearningDataset(name, <any>undefined, { urn })
            case "azure-native:machinelearningservices/v20200501preview:MachineLearningDatastore":
                return new MachineLearningDatastore(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningservices/v20200501preview", _module)