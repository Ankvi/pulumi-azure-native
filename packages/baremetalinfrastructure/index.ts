import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureBareMetalStorageInstanceArgs } from "./azureBareMetalStorageInstance";
export type AzureBareMetalStorageInstance = import("./azureBareMetalStorageInstance").AzureBareMetalStorageInstance;
export const AzureBareMetalStorageInstance: typeof import("./azureBareMetalStorageInstance").AzureBareMetalStorageInstance = null as any;
utilities.lazyLoad(exports, ["AzureBareMetalStorageInstance"], () => require("./azureBareMetalStorageInstance"));

export { GetAzureBareMetalStorageInstanceArgs, GetAzureBareMetalStorageInstanceResult, GetAzureBareMetalStorageInstanceOutputArgs } from "./getAzureBareMetalStorageInstance";
export const getAzureBareMetalStorageInstance: typeof import("./getAzureBareMetalStorageInstance").getAzureBareMetalStorageInstance = null as any;
export const getAzureBareMetalStorageInstanceOutput: typeof import("./getAzureBareMetalStorageInstance").getAzureBareMetalStorageInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureBareMetalStorageInstance","getAzureBareMetalStorageInstanceOutput"], () => require("./getAzureBareMetalStorageInstance"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20230406 from "./v20230406";

export {
    v20230406,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:baremetalinfrastructure:AzureBareMetalStorageInstance":
                return new AzureBareMetalStorageInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "baremetalinfrastructure", _module)
