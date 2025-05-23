import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DataManagerArgs } from "./dataManager";
export type DataManager = import("./dataManager").DataManager;
export const DataManager: typeof import("./dataManager").DataManager = null as any;
utilities.lazyLoad(exports, ["DataManager"], () => require("./dataManager"));

export { DataStoreArgs } from "./dataStore";
export type DataStore = import("./dataStore").DataStore;
export const DataStore: typeof import("./dataStore").DataStore = null as any;
utilities.lazyLoad(exports, ["DataStore"], () => require("./dataStore"));

export { GetDataManagerArgs, GetDataManagerResult, GetDataManagerOutputArgs } from "./getDataManager";
export const getDataManager: typeof import("./getDataManager").getDataManager = null as any;
export const getDataManagerOutput: typeof import("./getDataManager").getDataManagerOutput = null as any;
utilities.lazyLoad(exports, ["getDataManager","getDataManagerOutput"], () => require("./getDataManager"));

export { GetDataStoreArgs, GetDataStoreResult, GetDataStoreOutputArgs } from "./getDataStore";
export const getDataStore: typeof import("./getDataStore").getDataStore = null as any;
export const getDataStoreOutput: typeof import("./getDataStore").getDataStoreOutput = null as any;
utilities.lazyLoad(exports, ["getDataStore","getDataStoreOutput"], () => require("./getDataStore"));

export { GetJobDefinitionArgs, GetJobDefinitionResult, GetJobDefinitionOutputArgs } from "./getJobDefinition";
export const getJobDefinition: typeof import("./getJobDefinition").getJobDefinition = null as any;
export const getJobDefinitionOutput: typeof import("./getJobDefinition").getJobDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getJobDefinition","getJobDefinitionOutput"], () => require("./getJobDefinition"));

export { JobDefinitionArgs } from "./jobDefinition";
export type JobDefinition = import("./jobDefinition").JobDefinition;
export const JobDefinition: typeof import("./jobDefinition").JobDefinition = null as any;
utilities.lazyLoad(exports, ["JobDefinition"], () => require("./jobDefinition"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybriddata:DataManager":
                return new DataManager(name, <any>undefined, { urn })
            case "azure-native:hybriddata:DataStore":
                return new DataStore(name, <any>undefined, { urn })
            case "azure-native:hybriddata:JobDefinition":
                return new JobDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybriddata", _module)