import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { BackupArgs } from "./backup";
export type Backup = import("./backup").Backup;
export const Backup: typeof import("./backup").Backup = null as any;
utilities.lazyLoad(exports, ["Backup"], () => require("./backup"));

export { BackupPolicyArgs } from "./backupPolicy";
export type BackupPolicy = import("./backupPolicy").BackupPolicy;
export const BackupPolicy: typeof import("./backupPolicy").BackupPolicy = null as any;
utilities.lazyLoad(exports, ["BackupPolicy"], () => require("./backupPolicy"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetBackupArgs, GetBackupResult, GetBackupOutputArgs } from "./getBackup";
export const getBackup: typeof import("./getBackup").getBackup = null as any;
export const getBackupOutput: typeof import("./getBackup").getBackupOutput = null as any;
utilities.lazyLoad(exports, ["getBackup","getBackupOutput"], () => require("./getBackup"));

export { GetBackupPolicyArgs, GetBackupPolicyResult, GetBackupPolicyOutputArgs } from "./getBackupPolicy";
export const getBackupPolicy: typeof import("./getBackupPolicy").getBackupPolicy = null as any;
export const getBackupPolicyOutput: typeof import("./getBackupPolicy").getBackupPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBackupPolicy","getBackupPolicyOutput"], () => require("./getBackupPolicy"));

export { GetPoolArgs, GetPoolResult, GetPoolOutputArgs } from "./getPool";
export const getPool: typeof import("./getPool").getPool = null as any;
export const getPoolOutput: typeof import("./getPool").getPoolOutput = null as any;
utilities.lazyLoad(exports, ["getPool","getPoolOutput"], () => require("./getPool"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { GetSnapshotPolicyArgs, GetSnapshotPolicyResult, GetSnapshotPolicyOutputArgs } from "./getSnapshotPolicy";
export const getSnapshotPolicy: typeof import("./getSnapshotPolicy").getSnapshotPolicy = null as any;
export const getSnapshotPolicyOutput: typeof import("./getSnapshotPolicy").getSnapshotPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshotPolicy","getSnapshotPolicyOutput"], () => require("./getSnapshotPolicy"));

export { GetSubvolumeArgs, GetSubvolumeResult, GetSubvolumeOutputArgs } from "./getSubvolume";
export const getSubvolume: typeof import("./getSubvolume").getSubvolume = null as any;
export const getSubvolumeOutput: typeof import("./getSubvolume").getSubvolumeOutput = null as any;
utilities.lazyLoad(exports, ["getSubvolume","getSubvolumeOutput"], () => require("./getSubvolume"));

export { GetSubvolumeMetadataArgs, GetSubvolumeMetadataResult, GetSubvolumeMetadataOutputArgs } from "./getSubvolumeMetadata";
export const getSubvolumeMetadata: typeof import("./getSubvolumeMetadata").getSubvolumeMetadata = null as any;
export const getSubvolumeMetadataOutput: typeof import("./getSubvolumeMetadata").getSubvolumeMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getSubvolumeMetadata","getSubvolumeMetadataOutput"], () => require("./getSubvolumeMetadata"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { GetVolumeGroupArgs, GetVolumeGroupResult, GetVolumeGroupOutputArgs } from "./getVolumeGroup";
export const getVolumeGroup: typeof import("./getVolumeGroup").getVolumeGroup = null as any;
export const getVolumeGroupOutput: typeof import("./getVolumeGroup").getVolumeGroupOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeGroup","getVolumeGroupOutput"], () => require("./getVolumeGroup"));

export { GetVolumeGroupIdForLdapUserArgs, GetVolumeGroupIdForLdapUserResult, GetVolumeGroupIdForLdapUserOutputArgs } from "./getVolumeGroupIdForLdapUser";
export const getVolumeGroupIdForLdapUser: typeof import("./getVolumeGroupIdForLdapUser").getVolumeGroupIdForLdapUser = null as any;
export const getVolumeGroupIdForLdapUserOutput: typeof import("./getVolumeGroupIdForLdapUser").getVolumeGroupIdForLdapUserOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeGroupIdForLdapUser","getVolumeGroupIdForLdapUserOutput"], () => require("./getVolumeGroupIdForLdapUser"));

export { GetVolumeQuotaRuleArgs, GetVolumeQuotaRuleResult, GetVolumeQuotaRuleOutputArgs } from "./getVolumeQuotaRule";
export const getVolumeQuotaRule: typeof import("./getVolumeQuotaRule").getVolumeQuotaRule = null as any;
export const getVolumeQuotaRuleOutput: typeof import("./getVolumeQuotaRule").getVolumeQuotaRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeQuotaRule","getVolumeQuotaRuleOutput"], () => require("./getVolumeQuotaRule"));

export { ListVolumeReplicationsArgs, ListVolumeReplicationsResult, ListVolumeReplicationsOutputArgs } from "./listVolumeReplications";
export const listVolumeReplications: typeof import("./listVolumeReplications").listVolumeReplications = null as any;
export const listVolumeReplicationsOutput: typeof import("./listVolumeReplications").listVolumeReplicationsOutput = null as any;
utilities.lazyLoad(exports, ["listVolumeReplications","listVolumeReplicationsOutput"], () => require("./listVolumeReplications"));

export { PoolArgs } from "./pool";
export type Pool = import("./pool").Pool;
export const Pool: typeof import("./pool").Pool = null as any;
utilities.lazyLoad(exports, ["Pool"], () => require("./pool"));

export { SnapshotArgs } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { SnapshotPolicyArgs } from "./snapshotPolicy";
export type SnapshotPolicy = import("./snapshotPolicy").SnapshotPolicy;
export const SnapshotPolicy: typeof import("./snapshotPolicy").SnapshotPolicy = null as any;
utilities.lazyLoad(exports, ["SnapshotPolicy"], () => require("./snapshotPolicy"));

export { SubvolumeArgs } from "./subvolume";
export type Subvolume = import("./subvolume").Subvolume;
export const Subvolume: typeof import("./subvolume").Subvolume = null as any;
utilities.lazyLoad(exports, ["Subvolume"], () => require("./subvolume"));

export { VolumeArgs } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));

export { VolumeGroupArgs } from "./volumeGroup";
export type VolumeGroup = import("./volumeGroup").VolumeGroup;
export const VolumeGroup: typeof import("./volumeGroup").VolumeGroup = null as any;
utilities.lazyLoad(exports, ["VolumeGroup"], () => require("./volumeGroup"));

export { VolumeQuotaRuleArgs } from "./volumeQuotaRule";
export type VolumeQuotaRule = import("./volumeQuotaRule").VolumeQuotaRule;
export const VolumeQuotaRule: typeof import("./volumeQuotaRule").VolumeQuotaRule = null as any;
utilities.lazyLoad(exports, ["VolumeQuotaRule"], () => require("./volumeQuotaRule"));


// Export enums:
export * from "../types/enums/v20221101";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:netapp/v20221101:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:Backup":
                return new Backup(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:BackupPolicy":
                return new BackupPolicy(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:Pool":
                return new Pool(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:SnapshotPolicy":
                return new SnapshotPolicy(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:Subvolume":
                return new Subvolume(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:Volume":
                return new Volume(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:VolumeGroup":
                return new VolumeGroup(name, <any>undefined, { urn })
            case "azure-native:netapp/v20221101:VolumeQuotaRule":
                return new VolumeQuotaRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "netapp/v20221101", _module)
