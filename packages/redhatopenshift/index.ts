import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMachinePoolArgs, GetMachinePoolResult, GetMachinePoolOutputArgs } from "./getMachinePool";
export const getMachinePool: typeof import("./getMachinePool").getMachinePool = null as any;
export const getMachinePoolOutput: typeof import("./getMachinePool").getMachinePoolOutput = null as any;
utilities.lazyLoad(exports, ["getMachinePool","getMachinePoolOutput"], () => require("./getMachinePool"));

export { GetOpenShiftClusterArgs, GetOpenShiftClusterResult, GetOpenShiftClusterOutputArgs } from "./getOpenShiftCluster";
export const getOpenShiftCluster: typeof import("./getOpenShiftCluster").getOpenShiftCluster = null as any;
export const getOpenShiftClusterOutput: typeof import("./getOpenShiftCluster").getOpenShiftClusterOutput = null as any;
utilities.lazyLoad(exports, ["getOpenShiftCluster","getOpenShiftClusterOutput"], () => require("./getOpenShiftCluster"));

export { GetSecretArgs, GetSecretResult, GetSecretOutputArgs } from "./getSecret";
export const getSecret: typeof import("./getSecret").getSecret = null as any;
export const getSecretOutput: typeof import("./getSecret").getSecretOutput = null as any;
utilities.lazyLoad(exports, ["getSecret","getSecretOutput"], () => require("./getSecret"));

export { GetSyncIdentityProviderArgs, GetSyncIdentityProviderResult, GetSyncIdentityProviderOutputArgs } from "./getSyncIdentityProvider";
export const getSyncIdentityProvider: typeof import("./getSyncIdentityProvider").getSyncIdentityProvider = null as any;
export const getSyncIdentityProviderOutput: typeof import("./getSyncIdentityProvider").getSyncIdentityProviderOutput = null as any;
utilities.lazyLoad(exports, ["getSyncIdentityProvider","getSyncIdentityProviderOutput"], () => require("./getSyncIdentityProvider"));

export { GetSyncSetArgs, GetSyncSetResult, GetSyncSetOutputArgs } from "./getSyncSet";
export const getSyncSet: typeof import("./getSyncSet").getSyncSet = null as any;
export const getSyncSetOutput: typeof import("./getSyncSet").getSyncSetOutput = null as any;
utilities.lazyLoad(exports, ["getSyncSet","getSyncSetOutput"], () => require("./getSyncSet"));

export { ListOpenShiftClusterAdminCredentialsArgs, ListOpenShiftClusterAdminCredentialsResult, ListOpenShiftClusterAdminCredentialsOutputArgs } from "./listOpenShiftClusterAdminCredentials";
export const listOpenShiftClusterAdminCredentials: typeof import("./listOpenShiftClusterAdminCredentials").listOpenShiftClusterAdminCredentials = null as any;
export const listOpenShiftClusterAdminCredentialsOutput: typeof import("./listOpenShiftClusterAdminCredentials").listOpenShiftClusterAdminCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listOpenShiftClusterAdminCredentials","listOpenShiftClusterAdminCredentialsOutput"], () => require("./listOpenShiftClusterAdminCredentials"));

export { ListOpenShiftClusterCredentialsArgs, ListOpenShiftClusterCredentialsResult, ListOpenShiftClusterCredentialsOutputArgs } from "./listOpenShiftClusterCredentials";
export const listOpenShiftClusterCredentials: typeof import("./listOpenShiftClusterCredentials").listOpenShiftClusterCredentials = null as any;
export const listOpenShiftClusterCredentialsOutput: typeof import("./listOpenShiftClusterCredentials").listOpenShiftClusterCredentialsOutput = null as any;
utilities.lazyLoad(exports, ["listOpenShiftClusterCredentials","listOpenShiftClusterCredentialsOutput"], () => require("./listOpenShiftClusterCredentials"));

export { MachinePoolArgs } from "./machinePool";
export type MachinePool = import("./machinePool").MachinePool;
export const MachinePool: typeof import("./machinePool").MachinePool = null as any;
utilities.lazyLoad(exports, ["MachinePool"], () => require("./machinePool"));

export { OpenShiftClusterArgs } from "./openShiftCluster";
export type OpenShiftCluster = import("./openShiftCluster").OpenShiftCluster;
export const OpenShiftCluster: typeof import("./openShiftCluster").OpenShiftCluster = null as any;
utilities.lazyLoad(exports, ["OpenShiftCluster"], () => require("./openShiftCluster"));

export { SecretArgs } from "./secret";
export type Secret = import("./secret").Secret;
export const Secret: typeof import("./secret").Secret = null as any;
utilities.lazyLoad(exports, ["Secret"], () => require("./secret"));

export { SyncIdentityProviderArgs } from "./syncIdentityProvider";
export type SyncIdentityProvider = import("./syncIdentityProvider").SyncIdentityProvider;
export const SyncIdentityProvider: typeof import("./syncIdentityProvider").SyncIdentityProvider = null as any;
utilities.lazyLoad(exports, ["SyncIdentityProvider"], () => require("./syncIdentityProvider"));

export { SyncSetArgs } from "./syncSet";
export type SyncSet = import("./syncSet").SyncSet;
export const SyncSet: typeof import("./syncSet").SyncSet = null as any;
utilities.lazyLoad(exports, ["SyncSet"], () => require("./syncSet"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:redhatopenshift:MachinePool":
                return new MachinePool(name, <any>undefined, { urn })
            case "azure-native:redhatopenshift:OpenShiftCluster":
                return new OpenShiftCluster(name, <any>undefined, { urn })
            case "azure-native:redhatopenshift:Secret":
                return new Secret(name, <any>undefined, { urn })
            case "azure-native:redhatopenshift:SyncIdentityProvider":
                return new SyncIdentityProvider(name, <any>undefined, { urn })
            case "azure-native:redhatopenshift:SyncSet":
                return new SyncSet(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "redhatopenshift", _module)