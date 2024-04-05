import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetVaultArgs, GetVaultResult, GetVaultOutputArgs } from "./getVault";
export const getVault: typeof import("./getVault").getVault = null as any;
export const getVaultOutput: typeof import("./getVault").getVaultOutput = null as any;
utilities.lazyLoad(exports, ["getVault","getVaultOutput"], () => require("./getVault"));

export { VaultArgs } from "./vault";
export type Vault = import("./vault").Vault;
export const Vault: typeof import("./vault").Vault = null as any;
utilities.lazyLoad(exports, ["Vault"], () => require("./vault"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:recoveryservices/v20200202:Vault":
                return new Vault(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "recoveryservices/v20200202", _module)