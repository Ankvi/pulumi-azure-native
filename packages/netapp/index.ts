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

export { BackupVaultArgs } from "./backupVault";
export type BackupVault = import("./backupVault").BackupVault;
export const BackupVault: typeof import("./backupVault").BackupVault = null as any;
utilities.lazyLoad(exports, ["BackupVault"], () => require("./backupVault"));

export { CapacityPoolArgs } from "./capacityPool";
export type CapacityPool = import("./capacityPool").CapacityPool;
export const CapacityPool: typeof import("./capacityPool").CapacityPool = null as any;
utilities.lazyLoad(exports, ["CapacityPool"], () => require("./capacityPool"));

export { CapacityPoolBackupArgs } from "./capacityPoolBackup";
export type CapacityPoolBackup = import("./capacityPoolBackup").CapacityPoolBackup;
export const CapacityPoolBackup: typeof import("./capacityPoolBackup").CapacityPoolBackup = null as any;
utilities.lazyLoad(exports, ["CapacityPoolBackup"], () => require("./capacityPoolBackup"));

export { CapacityPoolSnapshotArgs } from "./capacityPoolSnapshot";
export type CapacityPoolSnapshot = import("./capacityPoolSnapshot").CapacityPoolSnapshot;
export const CapacityPoolSnapshot: typeof import("./capacityPoolSnapshot").CapacityPoolSnapshot = null as any;
utilities.lazyLoad(exports, ["CapacityPoolSnapshot"], () => require("./capacityPoolSnapshot"));

export { CapacityPoolSubvolumeArgs } from "./capacityPoolSubvolume";
export type CapacityPoolSubvolume = import("./capacityPoolSubvolume").CapacityPoolSubvolume;
export const CapacityPoolSubvolume: typeof import("./capacityPoolSubvolume").CapacityPoolSubvolume = null as any;
utilities.lazyLoad(exports, ["CapacityPoolSubvolume"], () => require("./capacityPoolSubvolume"));

export { CapacityPoolVolumeArgs } from "./capacityPoolVolume";
export type CapacityPoolVolume = import("./capacityPoolVolume").CapacityPoolVolume;
export const CapacityPoolVolume: typeof import("./capacityPoolVolume").CapacityPoolVolume = null as any;
utilities.lazyLoad(exports, ["CapacityPoolVolume"], () => require("./capacityPoolVolume"));

export { CapacityPoolVolumeQuotaRuleArgs } from "./capacityPoolVolumeQuotaRule";
export type CapacityPoolVolumeQuotaRule = import("./capacityPoolVolumeQuotaRule").CapacityPoolVolumeQuotaRule;
export const CapacityPoolVolumeQuotaRule: typeof import("./capacityPoolVolumeQuotaRule").CapacityPoolVolumeQuotaRule = null as any;
utilities.lazyLoad(exports, ["CapacityPoolVolumeQuotaRule"], () => require("./capacityPoolVolumeQuotaRule"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetAccountChangeKeyVaultInformationArgs, GetAccountChangeKeyVaultInformationResult, GetAccountChangeKeyVaultInformationOutputArgs } from "./getAccountChangeKeyVaultInformation";
export const getAccountChangeKeyVaultInformation: typeof import("./getAccountChangeKeyVaultInformation").getAccountChangeKeyVaultInformation = null as any;
export const getAccountChangeKeyVaultInformationOutput: typeof import("./getAccountChangeKeyVaultInformation").getAccountChangeKeyVaultInformationOutput = null as any;
utilities.lazyLoad(exports, ["getAccountChangeKeyVaultInformation","getAccountChangeKeyVaultInformationOutput"], () => require("./getAccountChangeKeyVaultInformation"));

export { GetAccountKeyVaultStatusArgs, GetAccountKeyVaultStatusResult, GetAccountKeyVaultStatusOutputArgs } from "./getAccountKeyVaultStatus";
export const getAccountKeyVaultStatus: typeof import("./getAccountKeyVaultStatus").getAccountKeyVaultStatus = null as any;
export const getAccountKeyVaultStatusOutput: typeof import("./getAccountKeyVaultStatus").getAccountKeyVaultStatusOutput = null as any;
utilities.lazyLoad(exports, ["getAccountKeyVaultStatus","getAccountKeyVaultStatusOutput"], () => require("./getAccountKeyVaultStatus"));

export { GetBackupArgs, GetBackupResult, GetBackupOutputArgs } from "./getBackup";
export const getBackup: typeof import("./getBackup").getBackup = null as any;
export const getBackupOutput: typeof import("./getBackup").getBackupOutput = null as any;
utilities.lazyLoad(exports, ["getBackup","getBackupOutput"], () => require("./getBackup"));

export { GetBackupPolicyArgs, GetBackupPolicyResult, GetBackupPolicyOutputArgs } from "./getBackupPolicy";
export const getBackupPolicy: typeof import("./getBackupPolicy").getBackupPolicy = null as any;
export const getBackupPolicyOutput: typeof import("./getBackupPolicy").getBackupPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBackupPolicy","getBackupPolicyOutput"], () => require("./getBackupPolicy"));

export { GetBackupVaultArgs, GetBackupVaultResult, GetBackupVaultOutputArgs } from "./getBackupVault";
export const getBackupVault: typeof import("./getBackupVault").getBackupVault = null as any;
export const getBackupVaultOutput: typeof import("./getBackupVault").getBackupVaultOutput = null as any;
utilities.lazyLoad(exports, ["getBackupVault","getBackupVaultOutput"], () => require("./getBackupVault"));

export { GetCapacityPoolArgs, GetCapacityPoolResult, GetCapacityPoolOutputArgs } from "./getCapacityPool";
export const getCapacityPool: typeof import("./getCapacityPool").getCapacityPool = null as any;
export const getCapacityPoolOutput: typeof import("./getCapacityPool").getCapacityPoolOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPool","getCapacityPoolOutput"], () => require("./getCapacityPool"));

export { GetCapacityPoolBackupArgs, GetCapacityPoolBackupResult, GetCapacityPoolBackupOutputArgs } from "./getCapacityPoolBackup";
export const getCapacityPoolBackup: typeof import("./getCapacityPoolBackup").getCapacityPoolBackup = null as any;
export const getCapacityPoolBackupOutput: typeof import("./getCapacityPoolBackup").getCapacityPoolBackupOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolBackup","getCapacityPoolBackupOutput"], () => require("./getCapacityPoolBackup"));

export { GetCapacityPoolSnapshotArgs, GetCapacityPoolSnapshotResult, GetCapacityPoolSnapshotOutputArgs } from "./getCapacityPoolSnapshot";
export const getCapacityPoolSnapshot: typeof import("./getCapacityPoolSnapshot").getCapacityPoolSnapshot = null as any;
export const getCapacityPoolSnapshotOutput: typeof import("./getCapacityPoolSnapshot").getCapacityPoolSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolSnapshot","getCapacityPoolSnapshotOutput"], () => require("./getCapacityPoolSnapshot"));

export { GetCapacityPoolSubvolumeArgs, GetCapacityPoolSubvolumeResult, GetCapacityPoolSubvolumeOutputArgs } from "./getCapacityPoolSubvolume";
export const getCapacityPoolSubvolume: typeof import("./getCapacityPoolSubvolume").getCapacityPoolSubvolume = null as any;
export const getCapacityPoolSubvolumeOutput: typeof import("./getCapacityPoolSubvolume").getCapacityPoolSubvolumeOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolSubvolume","getCapacityPoolSubvolumeOutput"], () => require("./getCapacityPoolSubvolume"));

export { GetCapacityPoolSubvolumeMetadataArgs, GetCapacityPoolSubvolumeMetadataResult, GetCapacityPoolSubvolumeMetadataOutputArgs } from "./getCapacityPoolSubvolumeMetadata";
export const getCapacityPoolSubvolumeMetadata: typeof import("./getCapacityPoolSubvolumeMetadata").getCapacityPoolSubvolumeMetadata = null as any;
export const getCapacityPoolSubvolumeMetadataOutput: typeof import("./getCapacityPoolSubvolumeMetadata").getCapacityPoolSubvolumeMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolSubvolumeMetadata","getCapacityPoolSubvolumeMetadataOutput"], () => require("./getCapacityPoolSubvolumeMetadata"));

export { GetCapacityPoolVolumeArgs, GetCapacityPoolVolumeResult, GetCapacityPoolVolumeOutputArgs } from "./getCapacityPoolVolume";
export const getCapacityPoolVolume: typeof import("./getCapacityPoolVolume").getCapacityPoolVolume = null as any;
export const getCapacityPoolVolumeOutput: typeof import("./getCapacityPoolVolume").getCapacityPoolVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolVolume","getCapacityPoolVolumeOutput"], () => require("./getCapacityPoolVolume"));

export { GetCapacityPoolVolumeGroupIdForLdapUserArgs, GetCapacityPoolVolumeGroupIdForLdapUserResult, GetCapacityPoolVolumeGroupIdForLdapUserOutputArgs } from "./getCapacityPoolVolumeGroupIdForLdapUser";
export const getCapacityPoolVolumeGroupIdForLdapUser: typeof import("./getCapacityPoolVolumeGroupIdForLdapUser").getCapacityPoolVolumeGroupIdForLdapUser = null as any;
export const getCapacityPoolVolumeGroupIdForLdapUserOutput: typeof import("./getCapacityPoolVolumeGroupIdForLdapUser").getCapacityPoolVolumeGroupIdForLdapUserOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolVolumeGroupIdForLdapUser","getCapacityPoolVolumeGroupIdForLdapUserOutput"], () => require("./getCapacityPoolVolumeGroupIdForLdapUser"));

export { GetCapacityPoolVolumeQuotaRuleArgs, GetCapacityPoolVolumeQuotaRuleResult, GetCapacityPoolVolumeQuotaRuleOutputArgs } from "./getCapacityPoolVolumeQuotaRule";
export const getCapacityPoolVolumeQuotaRule: typeof import("./getCapacityPoolVolumeQuotaRule").getCapacityPoolVolumeQuotaRule = null as any;
export const getCapacityPoolVolumeQuotaRuleOutput: typeof import("./getCapacityPoolVolumeQuotaRule").getCapacityPoolVolumeQuotaRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCapacityPoolVolumeQuotaRule","getCapacityPoolVolumeQuotaRuleOutput"], () => require("./getCapacityPoolVolumeQuotaRule"));

export { GetSnapshotPolicyArgs, GetSnapshotPolicyResult, GetSnapshotPolicyOutputArgs } from "./getSnapshotPolicy";
export const getSnapshotPolicy: typeof import("./getSnapshotPolicy").getSnapshotPolicy = null as any;
export const getSnapshotPolicyOutput: typeof import("./getSnapshotPolicy").getSnapshotPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshotPolicy","getSnapshotPolicyOutput"], () => require("./getSnapshotPolicy"));

export { GetVolumeGroupArgs, GetVolumeGroupResult, GetVolumeGroupOutputArgs } from "./getVolumeGroup";
export const getVolumeGroup: typeof import("./getVolumeGroup").getVolumeGroup = null as any;
export const getVolumeGroupOutput: typeof import("./getVolumeGroup").getVolumeGroupOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeGroup","getVolumeGroupOutput"], () => require("./getVolumeGroup"));

export { ListCapacityPoolVolumeQuotaReportArgs, ListCapacityPoolVolumeQuotaReportResult, ListCapacityPoolVolumeQuotaReportOutputArgs } from "./listCapacityPoolVolumeQuotaReport";
export const listCapacityPoolVolumeQuotaReport: typeof import("./listCapacityPoolVolumeQuotaReport").listCapacityPoolVolumeQuotaReport = null as any;
export const listCapacityPoolVolumeQuotaReportOutput: typeof import("./listCapacityPoolVolumeQuotaReport").listCapacityPoolVolumeQuotaReportOutput = null as any;
utilities.lazyLoad(exports, ["listCapacityPoolVolumeQuotaReport","listCapacityPoolVolumeQuotaReportOutput"], () => require("./listCapacityPoolVolumeQuotaReport"));

export { ListCapacityPoolVolumeReplicationsArgs, ListCapacityPoolVolumeReplicationsResult, ListCapacityPoolVolumeReplicationsOutputArgs } from "./listCapacityPoolVolumeReplications";
export const listCapacityPoolVolumeReplications: typeof import("./listCapacityPoolVolumeReplications").listCapacityPoolVolumeReplications = null as any;
export const listCapacityPoolVolumeReplicationsOutput: typeof import("./listCapacityPoolVolumeReplications").listCapacityPoolVolumeReplicationsOutput = null as any;
utilities.lazyLoad(exports, ["listCapacityPoolVolumeReplications","listCapacityPoolVolumeReplicationsOutput"], () => require("./listCapacityPoolVolumeReplications"));

export { SnapshotPolicyArgs } from "./snapshotPolicy";
export type SnapshotPolicy = import("./snapshotPolicy").SnapshotPolicy;
export const SnapshotPolicy: typeof import("./snapshotPolicy").SnapshotPolicy = null as any;
utilities.lazyLoad(exports, ["SnapshotPolicy"], () => require("./snapshotPolicy"));

export { VolumeGroupArgs } from "./volumeGroup";
export type VolumeGroup = import("./volumeGroup").VolumeGroup;
export const VolumeGroup: typeof import("./volumeGroup").VolumeGroup = null as any;
utilities.lazyLoad(exports, ["VolumeGroup"], () => require("./volumeGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:netapp:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:netapp:Backup":
                return new Backup(name, <any>undefined, { urn })
            case "azure-native:netapp:BackupPolicy":
                return new BackupPolicy(name, <any>undefined, { urn })
            case "azure-native:netapp:BackupVault":
                return new BackupVault(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPool":
                return new CapacityPool(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPoolBackup":
                return new CapacityPoolBackup(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPoolSnapshot":
                return new CapacityPoolSnapshot(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPoolSubvolume":
                return new CapacityPoolSubvolume(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPoolVolume":
                return new CapacityPoolVolume(name, <any>undefined, { urn })
            case "azure-native:netapp:CapacityPoolVolumeQuotaRule":
                return new CapacityPoolVolumeQuotaRule(name, <any>undefined, { urn })
            case "azure-native:netapp:SnapshotPolicy":
                return new SnapshotPolicy(name, <any>undefined, { urn })
            case "azure-native:netapp:VolumeGroup":
                return new VolumeGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "netapp", _module)