import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessControlRecordArgs } from "./accessControlRecord";
export type AccessControlRecord = import("./accessControlRecord").AccessControlRecord;
export const AccessControlRecord: typeof import("./accessControlRecord").AccessControlRecord = null as any;
utilities.lazyLoad(exports, ["AccessControlRecord"], () => require("./accessControlRecord"));

export { BackupPolicyArgs } from "./backupPolicy";
export type BackupPolicy = import("./backupPolicy").BackupPolicy;
export const BackupPolicy: typeof import("./backupPolicy").BackupPolicy = null as any;
utilities.lazyLoad(exports, ["BackupPolicy"], () => require("./backupPolicy"));

export { BackupScheduleArgs } from "./backupSchedule";
export type BackupSchedule = import("./backupSchedule").BackupSchedule;
export const BackupSchedule: typeof import("./backupSchedule").BackupSchedule = null as any;
utilities.lazyLoad(exports, ["BackupSchedule"], () => require("./backupSchedule"));

export { BandwidthSettingArgs } from "./bandwidthSetting";
export type BandwidthSetting = import("./bandwidthSetting").BandwidthSetting;
export const BandwidthSetting: typeof import("./bandwidthSetting").BandwidthSetting = null as any;
utilities.lazyLoad(exports, ["BandwidthSetting"], () => require("./bandwidthSetting"));

export { GetAccessControlRecordArgs, GetAccessControlRecordResult, GetAccessControlRecordOutputArgs } from "./getAccessControlRecord";
export const getAccessControlRecord: typeof import("./getAccessControlRecord").getAccessControlRecord = null as any;
export const getAccessControlRecordOutput: typeof import("./getAccessControlRecord").getAccessControlRecordOutput = null as any;
utilities.lazyLoad(exports, ["getAccessControlRecord","getAccessControlRecordOutput"], () => require("./getAccessControlRecord"));

export { GetBackupPolicyArgs, GetBackupPolicyResult, GetBackupPolicyOutputArgs } from "./getBackupPolicy";
export const getBackupPolicy: typeof import("./getBackupPolicy").getBackupPolicy = null as any;
export const getBackupPolicyOutput: typeof import("./getBackupPolicy").getBackupPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getBackupPolicy","getBackupPolicyOutput"], () => require("./getBackupPolicy"));

export { GetBackupScheduleArgs, GetBackupScheduleResult, GetBackupScheduleOutputArgs } from "./getBackupSchedule";
export const getBackupSchedule: typeof import("./getBackupSchedule").getBackupSchedule = null as any;
export const getBackupScheduleOutput: typeof import("./getBackupSchedule").getBackupScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getBackupSchedule","getBackupScheduleOutput"], () => require("./getBackupSchedule"));

export { GetBandwidthSettingArgs, GetBandwidthSettingResult, GetBandwidthSettingOutputArgs } from "./getBandwidthSetting";
export const getBandwidthSetting: typeof import("./getBandwidthSetting").getBandwidthSetting = null as any;
export const getBandwidthSettingOutput: typeof import("./getBandwidthSetting").getBandwidthSettingOutput = null as any;
utilities.lazyLoad(exports, ["getBandwidthSetting","getBandwidthSettingOutput"], () => require("./getBandwidthSetting"));

export { GetManagerArgs, GetManagerResult, GetManagerOutputArgs } from "./getManager";
export const getManager: typeof import("./getManager").getManager = null as any;
export const getManagerOutput: typeof import("./getManager").getManagerOutput = null as any;
utilities.lazyLoad(exports, ["getManager","getManagerOutput"], () => require("./getManager"));

export { GetManagerDevicePublicEncryptionKeyArgs, GetManagerDevicePublicEncryptionKeyResult, GetManagerDevicePublicEncryptionKeyOutputArgs } from "./getManagerDevicePublicEncryptionKey";
export const getManagerDevicePublicEncryptionKey: typeof import("./getManagerDevicePublicEncryptionKey").getManagerDevicePublicEncryptionKey = null as any;
export const getManagerDevicePublicEncryptionKeyOutput: typeof import("./getManagerDevicePublicEncryptionKey").getManagerDevicePublicEncryptionKeyOutput = null as any;
utilities.lazyLoad(exports, ["getManagerDevicePublicEncryptionKey","getManagerDevicePublicEncryptionKeyOutput"], () => require("./getManagerDevicePublicEncryptionKey"));

export { GetManagerExtendedInfoArgs, GetManagerExtendedInfoResult, GetManagerExtendedInfoOutputArgs } from "./getManagerExtendedInfo";
export const getManagerExtendedInfo: typeof import("./getManagerExtendedInfo").getManagerExtendedInfo = null as any;
export const getManagerExtendedInfoOutput: typeof import("./getManagerExtendedInfo").getManagerExtendedInfoOutput = null as any;
utilities.lazyLoad(exports, ["getManagerExtendedInfo","getManagerExtendedInfoOutput"], () => require("./getManagerExtendedInfo"));

export { GetStorageAccountCredentialArgs, GetStorageAccountCredentialResult, GetStorageAccountCredentialOutputArgs } from "./getStorageAccountCredential";
export const getStorageAccountCredential: typeof import("./getStorageAccountCredential").getStorageAccountCredential = null as any;
export const getStorageAccountCredentialOutput: typeof import("./getStorageAccountCredential").getStorageAccountCredentialOutput = null as any;
utilities.lazyLoad(exports, ["getStorageAccountCredential","getStorageAccountCredentialOutput"], () => require("./getStorageAccountCredential"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { GetVolumeContainerArgs, GetVolumeContainerResult, GetVolumeContainerOutputArgs } from "./getVolumeContainer";
export const getVolumeContainer: typeof import("./getVolumeContainer").getVolumeContainer = null as any;
export const getVolumeContainerOutput: typeof import("./getVolumeContainer").getVolumeContainerOutput = null as any;
utilities.lazyLoad(exports, ["getVolumeContainer","getVolumeContainerOutput"], () => require("./getVolumeContainer"));

export { ListDeviceFailoverSetsArgs, ListDeviceFailoverSetsResult, ListDeviceFailoverSetsOutputArgs } from "./listDeviceFailoverSets";
export const listDeviceFailoverSets: typeof import("./listDeviceFailoverSets").listDeviceFailoverSets = null as any;
export const listDeviceFailoverSetsOutput: typeof import("./listDeviceFailoverSets").listDeviceFailoverSetsOutput = null as any;
utilities.lazyLoad(exports, ["listDeviceFailoverSets","listDeviceFailoverSetsOutput"], () => require("./listDeviceFailoverSets"));

export { ListDeviceFailoverTarsArgs, ListDeviceFailoverTarsResult, ListDeviceFailoverTarsOutputArgs } from "./listDeviceFailoverTars";
export const listDeviceFailoverTars: typeof import("./listDeviceFailoverTars").listDeviceFailoverTars = null as any;
export const listDeviceFailoverTarsOutput: typeof import("./listDeviceFailoverTars").listDeviceFailoverTarsOutput = null as any;
utilities.lazyLoad(exports, ["listDeviceFailoverTars","listDeviceFailoverTarsOutput"], () => require("./listDeviceFailoverTars"));

export { ListManagerActivationKeyArgs, ListManagerActivationKeyResult, ListManagerActivationKeyOutputArgs } from "./listManagerActivationKey";
export const listManagerActivationKey: typeof import("./listManagerActivationKey").listManagerActivationKey = null as any;
export const listManagerActivationKeyOutput: typeof import("./listManagerActivationKey").listManagerActivationKeyOutput = null as any;
utilities.lazyLoad(exports, ["listManagerActivationKey","listManagerActivationKeyOutput"], () => require("./listManagerActivationKey"));

export { ListManagerPublicEncryptionKeyArgs, ListManagerPublicEncryptionKeyResult, ListManagerPublicEncryptionKeyOutputArgs } from "./listManagerPublicEncryptionKey";
export const listManagerPublicEncryptionKey: typeof import("./listManagerPublicEncryptionKey").listManagerPublicEncryptionKey = null as any;
export const listManagerPublicEncryptionKeyOutput: typeof import("./listManagerPublicEncryptionKey").listManagerPublicEncryptionKeyOutput = null as any;
utilities.lazyLoad(exports, ["listManagerPublicEncryptionKey","listManagerPublicEncryptionKeyOutput"], () => require("./listManagerPublicEncryptionKey"));

export { ManagerArgs } from "./manager";
export type Manager = import("./manager").Manager;
export const Manager: typeof import("./manager").Manager = null as any;
utilities.lazyLoad(exports, ["Manager"], () => require("./manager"));

export { ManagerExtendedInfoArgs } from "./managerExtendedInfo";
export type ManagerExtendedInfo = import("./managerExtendedInfo").ManagerExtendedInfo;
export const ManagerExtendedInfo: typeof import("./managerExtendedInfo").ManagerExtendedInfo = null as any;
utilities.lazyLoad(exports, ["ManagerExtendedInfo"], () => require("./managerExtendedInfo"));

export { StorageAccountCredentialArgs } from "./storageAccountCredential";
export type StorageAccountCredential = import("./storageAccountCredential").StorageAccountCredential;
export const StorageAccountCredential: typeof import("./storageAccountCredential").StorageAccountCredential = null as any;
utilities.lazyLoad(exports, ["StorageAccountCredential"], () => require("./storageAccountCredential"));

export { VolumeArgs } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));

export { VolumeContainerArgs } from "./volumeContainer";
export type VolumeContainer = import("./volumeContainer").VolumeContainer;
export const VolumeContainer: typeof import("./volumeContainer").VolumeContainer = null as any;
utilities.lazyLoad(exports, ["VolumeContainer"], () => require("./volumeContainer"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storsimple/v20170601:AccessControlRecord":
                return new AccessControlRecord(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:BackupPolicy":
                return new BackupPolicy(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:BackupSchedule":
                return new BackupSchedule(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:BandwidthSetting":
                return new BandwidthSetting(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:Manager":
                return new Manager(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:ManagerExtendedInfo":
                return new ManagerExtendedInfo(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:StorageAccountCredential":
                return new StorageAccountCredential(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:Volume":
                return new Volume(name, <any>undefined, { urn })
            case "azure-native:storsimple/v20170601:VolumeContainer":
                return new VolumeContainer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storsimple/v20170601", _module)
