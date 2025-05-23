import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureBareMetalInstanceArgs } from "./azureBareMetalInstance";
export type AzureBareMetalInstance = import("./azureBareMetalInstance").AzureBareMetalInstance;
export const AzureBareMetalInstance: typeof import("./azureBareMetalInstance").AzureBareMetalInstance = null as any;
utilities.lazyLoad(exports, ["AzureBareMetalInstance"], () => require("./azureBareMetalInstance"));

export { AzureBareMetalStorageInstanceArgs } from "./azureBareMetalStorageInstance";
export type AzureBareMetalStorageInstance = import("./azureBareMetalStorageInstance").AzureBareMetalStorageInstance;
export const AzureBareMetalStorageInstance: typeof import("./azureBareMetalStorageInstance").AzureBareMetalStorageInstance = null as any;
utilities.lazyLoad(exports, ["AzureBareMetalStorageInstance"], () => require("./azureBareMetalStorageInstance"));

export { GetAzureBareMetalInstanceArgs, GetAzureBareMetalInstanceResult, GetAzureBareMetalInstanceOutputArgs } from "./getAzureBareMetalInstance";
export const getAzureBareMetalInstance: typeof import("./getAzureBareMetalInstance").getAzureBareMetalInstance = null as any;
export const getAzureBareMetalInstanceOutput: typeof import("./getAzureBareMetalInstance").getAzureBareMetalInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureBareMetalInstance","getAzureBareMetalInstanceOutput"], () => require("./getAzureBareMetalInstance"));

export { GetAzureBareMetalStorageInstanceArgs, GetAzureBareMetalStorageInstanceResult, GetAzureBareMetalStorageInstanceOutputArgs } from "./getAzureBareMetalStorageInstance";
export const getAzureBareMetalStorageInstance: typeof import("./getAzureBareMetalStorageInstance").getAzureBareMetalStorageInstance = null as any;
export const getAzureBareMetalStorageInstanceOutput: typeof import("./getAzureBareMetalStorageInstance").getAzureBareMetalStorageInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureBareMetalStorageInstance","getAzureBareMetalStorageInstanceOutput"], () => require("./getAzureBareMetalStorageInstance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:baremetalinfrastructure:AzureBareMetalInstance":
                return new AzureBareMetalInstance(name, <any>undefined, { urn })
            case "azure-native:baremetalinfrastructure:AzureBareMetalStorageInstance":
                return new AzureBareMetalStorageInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "baremetalinfrastructure", _module)