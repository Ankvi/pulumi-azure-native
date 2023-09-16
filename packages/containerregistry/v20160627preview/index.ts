import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRegistryArgs, GetRegistryResult, GetRegistryOutputArgs } from "./getRegistry";
export const getRegistry: typeof import("./getRegistry").getRegistry = null as any;
export const getRegistryOutput: typeof import("./getRegistry").getRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getRegistry","getRegistryOutput"], () => require("./getRegistry"));

export { GetRegistryCredentialsArgs, GetRegistryCredentialsResult, GetRegistryCredentialsOutputArgs } from "./getRegistryCredentials";
export const getRegistryCredentials: typeof import("./getRegistryCredentials").getRegistryCredentials = null as any;
export const getRegistryCredentialsOutput: typeof import("./getRegistryCredentials").getRegistryCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["getRegistryCredentials","getRegistryCredentialsOutput"], () => require("./getRegistryCredentials"));

export { RegistryArgs } from "./registry";
export type Registry = import("./registry").Registry;
export const Registry: typeof import("./registry").Registry = null as any;
utilities.lazyLoad(exports, ["Registry"], () => require("./registry"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20160627preview:Registry":
                return new Registry(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20160627preview", _module)
