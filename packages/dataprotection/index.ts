import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BackupInstanceArgs } from "./backupInstance";
export type BackupInstance = import("./backupInstance").BackupInstance;
export const BackupInstance: typeof import("./backupInstance").BackupInstance = null as any;
utilities.lazyLoad(exports, ["BackupInstance"], () => require("./backupInstance"));

export { BackupPolicyArgs } from "./backupPolicy";
export type BackupPolicy = import("./backupPolicy").BackupPolicy;
export const BackupPolicy: typeof import("./backupPolicy").BackupPolicy = null as any;
utilities.lazyLoad(exports, ["BackupPolicy"], () => require("./backupPolicy"));

export { BackupVaultArgs } from "./backupVault";
export type BackupVault = import("./backupVault").BackupVault;
export const BackupVault: typeof import("./backupVault").BackupVault = null as any;
utilities.lazyLoad(exports, ["BackupVault"], () => require("./backupVault"));

export { DppResourceGuardProxyArgs } from "./dppResourceGuardProxy";
export type DppResourceGuardProxy = import("./dppResourceGuardProxy").DppResourceGuardProxy;
export const DppResourceGuardProxy: typeof import("./dppResourceGuardProxy").DppResourceGuardProxy = null as any;
utilities.lazyLoad(exports, ["DppResourceGuardProxy"], () => require("./dppResourceGuardProxy"));

export { GetBackupInstanceArgs, GetBackupInstanceResult, GetBackupInstanceOutputArgs } from "./getBackupInstance";
export const getBackupInstance: typeof import("./getBackupInstance").getBackupInstance = null as any;
export const getBackupInstanceOutput: typeof import("./getBackupInstance").getBackupInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getBackupInstance","getBackupInstanceOutput"], () => require("./getBackupInstance"));

export { GetBackupPolicyArgs, GetBackupPolicyResult, GetBackupPolicyOutputArgs } from "./getBackupPolicy";
export const getBackupPolicy: typeof import("./getBackupPolicy").getBackupPolicy = null as any;
export const getBackupPolicyOutput: typeof import("./getBackupPolicy").getBackupPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBackupPolicy","getBackupPolicyOutput"], () => require("./getBackupPolicy"));

export { GetBackupVaultArgs, GetBackupVaultResult, GetBackupVaultOutputArgs } from "./getBackupVault";
export const getBackupVault: typeof import("./getBackupVault").getBackupVault = null as any;
export const getBackupVaultOutput: typeof import("./getBackupVault").getBackupVaultOutput = null as any;
utilities.lazyLoad(exports, ["getBackupVault","getBackupVaultOutput"], () => require("./getBackupVault"));

export { GetDppResourceGuardProxyArgs, GetDppResourceGuardProxyResult, GetDppResourceGuardProxyOutputArgs } from "./getDppResourceGuardProxy";
export const getDppResourceGuardProxy: typeof import("./getDppResourceGuardProxy").getDppResourceGuardProxy = null as any;
export const getDppResourceGuardProxyOutput: typeof import("./getDppResourceGuardProxy").getDppResourceGuardProxyOutput = null as any;
utilities.lazyLoad(exports, ["getDppResourceGuardProxy","getDppResourceGuardProxyOutput"], () => require("./getDppResourceGuardProxy"));

export { GetResourceGuardArgs, GetResourceGuardResult, GetResourceGuardOutputArgs } from "./getResourceGuard";
export const getResourceGuard: typeof import("./getResourceGuard").getResourceGuard = null as any;
export const getResourceGuardOutput: typeof import("./getResourceGuard").getResourceGuardOutput = null as any;
utilities.lazyLoad(exports, ["getResourceGuard","getResourceGuardOutput"], () => require("./getResourceGuard"));

export { ResourceGuardArgs } from "./resourceGuard";
export type ResourceGuard = import("./resourceGuard").ResourceGuard;
export const ResourceGuard: typeof import("./resourceGuard").ResourceGuard = null as any;
utilities.lazyLoad(exports, ["ResourceGuard"], () => require("./resourceGuard"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dataprotection:BackupInstance":
                return new BackupInstance(name, <any>undefined, { urn })
            case "azure-native:dataprotection:BackupPolicy":
                return new BackupPolicy(name, <any>undefined, { urn })
            case "azure-native:dataprotection:BackupVault":
                return new BackupVault(name, <any>undefined, { urn })
            case "azure-native:dataprotection:DppResourceGuardProxy":
                return new DppResourceGuardProxy(name, <any>undefined, { urn })
            case "azure-native:dataprotection:ResourceGuard":
                return new ResourceGuard(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dataprotection", _module)