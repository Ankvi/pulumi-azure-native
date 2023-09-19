import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRegistryArgs, GetRegistryResult, GetRegistryOutputArgs } from "./getRegistry";
export const getRegistry: typeof import("./getRegistry").getRegistry = null as any;
export const getRegistryOutput: typeof import("./getRegistry").getRegistryOutput = null as any;
utilities.lazyLoad(exports, ["getRegistry","getRegistryOutput"], () => require("./getRegistry"));

export { ListRegistryCredentialsArgs, ListRegistryCredentialsResult, ListRegistryCredentialsOutputArgs } from "./listRegistryCredentials";
export const listRegistryCredentials: typeof import("./listRegistryCredentials").listRegistryCredentials = null as any;
export const listRegistryCredentialsOutput: typeof import("./listRegistryCredentials").listRegistryCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listRegistryCredentials","listRegistryCredentialsOutput"], () => require("./listRegistryCredentials"));

export { RegistryArgs } from "./registry";
export type Registry = import("./registry").Registry;
export const Registry: typeof import("./registry").Registry = null as any;
utilities.lazyLoad(exports, ["Registry"], () => require("./registry"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerregistry/v20190501:Registry":
                return new Registry(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerregistry/v20190501", _module)
