import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureLargeInstanceArgs } from "./azureLargeInstance";
export type AzureLargeInstance = import("./azureLargeInstance").AzureLargeInstance;
export const AzureLargeInstance: typeof import("./azureLargeInstance").AzureLargeInstance = null as any;
utilities.lazyLoad(exports, ["AzureLargeInstance"], () => require("./azureLargeInstance"));

export { AzureLargeStorageInstanceArgs } from "./azureLargeStorageInstance";
export type AzureLargeStorageInstance = import("./azureLargeStorageInstance").AzureLargeStorageInstance;
export const AzureLargeStorageInstance: typeof import("./azureLargeStorageInstance").AzureLargeStorageInstance = null as any;
utilities.lazyLoad(exports, ["AzureLargeStorageInstance"], () => require("./azureLargeStorageInstance"));

export { GetAzureLargeInstanceArgs, GetAzureLargeInstanceResult, GetAzureLargeInstanceOutputArgs } from "./getAzureLargeInstance";
export const getAzureLargeInstance: typeof import("./getAzureLargeInstance").getAzureLargeInstance = null as any;
export const getAzureLargeInstanceOutput: typeof import("./getAzureLargeInstance").getAzureLargeInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureLargeInstance","getAzureLargeInstanceOutput"], () => require("./getAzureLargeInstance"));

export { GetAzureLargeStorageInstanceArgs, GetAzureLargeStorageInstanceResult, GetAzureLargeStorageInstanceOutputArgs } from "./getAzureLargeStorageInstance";
export const getAzureLargeStorageInstance: typeof import("./getAzureLargeStorageInstance").getAzureLargeStorageInstance = null as any;
export const getAzureLargeStorageInstanceOutput: typeof import("./getAzureLargeStorageInstance").getAzureLargeStorageInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getAzureLargeStorageInstance","getAzureLargeStorageInstanceOutput"], () => require("./getAzureLargeStorageInstance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurelargeinstance:AzureLargeInstance":
                return new AzureLargeInstance(name, <any>undefined, { urn })
            case "azure-native:azurelargeinstance:AzureLargeStorageInstance":
                return new AzureLargeStorageInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurelargeinstance", _module)