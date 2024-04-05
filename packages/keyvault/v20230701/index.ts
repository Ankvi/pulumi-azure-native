import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetKeyArgs, GetKeyResult, GetKeyOutputArgs } from "./getKey";
export const getKey: typeof import("./getKey").getKey = null as any;
export const getKeyOutput: typeof import("./getKey").getKeyOutput = null as any;
utilities.lazyLoad(exports, ["getKey","getKeyOutput"], () => require("./getKey"));

export { GetMHSMPrivateEndpointConnectionArgs, GetMHSMPrivateEndpointConnectionResult, GetMHSMPrivateEndpointConnectionOutputArgs } from "./getMHSMPrivateEndpointConnection";
export const getMHSMPrivateEndpointConnection: typeof import("./getMHSMPrivateEndpointConnection").getMHSMPrivateEndpointConnection = null as any;
export const getMHSMPrivateEndpointConnectionOutput: typeof import("./getMHSMPrivateEndpointConnection").getMHSMPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getMHSMPrivateEndpointConnection","getMHSMPrivateEndpointConnectionOutput"], () => require("./getMHSMPrivateEndpointConnection"));

export { GetManagedHsmArgs, GetManagedHsmResult, GetManagedHsmOutputArgs } from "./getManagedHsm";
export const getManagedHsm: typeof import("./getManagedHsm").getManagedHsm = null as any;
export const getManagedHsmOutput: typeof import("./getManagedHsm").getManagedHsmOutput = null as any;
utilities.lazyLoad(exports, ["getManagedHsm","getManagedHsmOutput"], () => require("./getManagedHsm"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSecretArgs, GetSecretResult, GetSecretOutputArgs } from "./getSecret";
export const getSecret: typeof import("./getSecret").getSecret = null as any;
export const getSecretOutput: typeof import("./getSecret").getSecretOutput = null as any;
utilities.lazyLoad(exports, ["getSecret","getSecretOutput"], () => require("./getSecret"));

export { GetVaultArgs, GetVaultResult, GetVaultOutputArgs } from "./getVault";
export const getVault: typeof import("./getVault").getVault = null as any;
export const getVaultOutput: typeof import("./getVault").getVaultOutput = null as any;
utilities.lazyLoad(exports, ["getVault","getVaultOutput"], () => require("./getVault"));

export { KeyArgs } from "./key";
export type Key = import("./key").Key;
export const Key: typeof import("./key").Key = null as any;
utilities.lazyLoad(exports, ["Key"], () => require("./key"));

export { ManagedHsmArgs } from "./managedHsm";
export type ManagedHsm = import("./managedHsm").ManagedHsm;
export const ManagedHsm: typeof import("./managedHsm").ManagedHsm = null as any;
utilities.lazyLoad(exports, ["ManagedHsm"], () => require("./managedHsm"));

export { MHSMPrivateEndpointConnectionArgs } from "./mhsmprivateEndpointConnection";
export type MHSMPrivateEndpointConnection = import("./mhsmprivateEndpointConnection").MHSMPrivateEndpointConnection;
export const MHSMPrivateEndpointConnection: typeof import("./mhsmprivateEndpointConnection").MHSMPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["MHSMPrivateEndpointConnection"], () => require("./mhsmprivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SecretArgs } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));

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
            case "azure-native:keyvault/v20230701:Key":
                return new Key(name, <any>undefined, { urn })
            case "azure-native:keyvault/v20230701:MHSMPrivateEndpointConnection":
                return new MHSMPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:keyvault/v20230701:ManagedHsm":
                return new ManagedHsm(name, <any>undefined, { urn })
            case "azure-native:keyvault/v20230701:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:keyvault/v20230701:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "azure-native:keyvault/v20230701:Vault":
                return new Vault(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "keyvault/v20230701", _module)