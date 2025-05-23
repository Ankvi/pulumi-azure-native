import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArcAddonArgs } from "./arcAddon";
export type ArcAddon = import("./arcAddon").ArcAddon;
export const ArcAddon: typeof import("./arcAddon").ArcAddon = null as any;
utilities.lazyLoad(exports, ["ArcAddon"], () => require("./arcAddon"));

export { BandwidthScheduleArgs } from "./bandwidthSchedule";
export type BandwidthSchedule = import("./bandwidthSchedule").BandwidthSchedule;
export const BandwidthSchedule: typeof import("./bandwidthSchedule").BandwidthSchedule = null as any;
utilities.lazyLoad(exports, ["BandwidthSchedule"], () => require("./bandwidthSchedule"));

export { CloudEdgeManagementRoleArgs } from "./cloudEdgeManagementRole";
export type CloudEdgeManagementRole = import("./cloudEdgeManagementRole").CloudEdgeManagementRole;
export const CloudEdgeManagementRole: typeof import("./cloudEdgeManagementRole").CloudEdgeManagementRole = null as any;
utilities.lazyLoad(exports, ["CloudEdgeManagementRole"], () => require("./cloudEdgeManagementRole"));

export { ContainerArgs } from "./container";
export type Container = import("./container").Container;
export const Container: typeof import("./container").Container = null as any;
utilities.lazyLoad(exports, ["Container"], () => require("./container"));

export { DeviceArgs } from "./device";
export type Device = import("./device").Device;
export const Device: typeof import("./device").Device = null as any;
utilities.lazyLoad(exports, ["Device"], () => require("./device"));

export { FileEventTriggerArgs } from "./fileEventTrigger";
export type FileEventTrigger = import("./fileEventTrigger").FileEventTrigger;
export const FileEventTrigger: typeof import("./fileEventTrigger").FileEventTrigger = null as any;
utilities.lazyLoad(exports, ["FileEventTrigger"], () => require("./fileEventTrigger"));

export { GetArcAddonArgs, GetArcAddonResult, GetArcAddonOutputArgs } from "./getArcAddon";
export const getArcAddon: typeof import("./getArcAddon").getArcAddon = null as any;
export const getArcAddonOutput: typeof import("./getArcAddon").getArcAddonOutput = null as any;
utilities.lazyLoad(exports, ["getArcAddon","getArcAddonOutput"], () => require("./getArcAddon"));

export { GetBandwidthScheduleArgs, GetBandwidthScheduleResult, GetBandwidthScheduleOutputArgs } from "./getBandwidthSchedule";
export const getBandwidthSchedule: typeof import("./getBandwidthSchedule").getBandwidthSchedule = null as any;
export const getBandwidthScheduleOutput: typeof import("./getBandwidthSchedule").getBandwidthScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getBandwidthSchedule","getBandwidthScheduleOutput"], () => require("./getBandwidthSchedule"));

export { GetCloudEdgeManagementRoleArgs, GetCloudEdgeManagementRoleResult, GetCloudEdgeManagementRoleOutputArgs } from "./getCloudEdgeManagementRole";
export const getCloudEdgeManagementRole: typeof import("./getCloudEdgeManagementRole").getCloudEdgeManagementRole = null as any;
export const getCloudEdgeManagementRoleOutput: typeof import("./getCloudEdgeManagementRole").getCloudEdgeManagementRoleOutput = null as any;
utilities.lazyLoad(exports, ["getCloudEdgeManagementRole","getCloudEdgeManagementRoleOutput"], () => require("./getCloudEdgeManagementRole"));

export { GetContainerArgs, GetContainerResult, GetContainerOutputArgs } from "./getContainer";
export const getContainer: typeof import("./getContainer").getContainer = null as any;
export const getContainerOutput: typeof import("./getContainer").getContainerOutput = null as any;
utilities.lazyLoad(exports, ["getContainer","getContainerOutput"], () => require("./getContainer"));

export { GetDeviceArgs, GetDeviceResult, GetDeviceOutputArgs } from "./getDevice";
export const getDevice: typeof import("./getDevice").getDevice = null as any;
export const getDeviceOutput: typeof import("./getDevice").getDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getDevice","getDeviceOutput"], () => require("./getDevice"));

export { GetDeviceExtendedInformationArgs, GetDeviceExtendedInformationResult, GetDeviceExtendedInformationOutputArgs } from "./getDeviceExtendedInformation";
export const getDeviceExtendedInformation: typeof import("./getDeviceExtendedInformation").getDeviceExtendedInformation = null as any;
export const getDeviceExtendedInformationOutput: typeof import("./getDeviceExtendedInformation").getDeviceExtendedInformationOutput = null as any;
utilities.lazyLoad(exports, ["getDeviceExtendedInformation","getDeviceExtendedInformationOutput"], () => require("./getDeviceExtendedInformation"));

export { GetFileEventTriggerArgs, GetFileEventTriggerResult, GetFileEventTriggerOutputArgs } from "./getFileEventTrigger";
export const getFileEventTrigger: typeof import("./getFileEventTrigger").getFileEventTrigger = null as any;
export const getFileEventTriggerOutput: typeof import("./getFileEventTrigger").getFileEventTriggerOutput = null as any;
utilities.lazyLoad(exports, ["getFileEventTrigger","getFileEventTriggerOutput"], () => require("./getFileEventTrigger"));

export { GetIoTAddonArgs, GetIoTAddonResult, GetIoTAddonOutputArgs } from "./getIoTAddon";
export const getIoTAddon: typeof import("./getIoTAddon").getIoTAddon = null as any;
export const getIoTAddonOutput: typeof import("./getIoTAddon").getIoTAddonOutput = null as any;
utilities.lazyLoad(exports, ["getIoTAddon","getIoTAddonOutput"], () => require("./getIoTAddon"));

export { GetIoTRoleArgs, GetIoTRoleResult, GetIoTRoleOutputArgs } from "./getIoTRole";
export const getIoTRole: typeof import("./getIoTRole").getIoTRole = null as any;
export const getIoTRoleOutput: typeof import("./getIoTRole").getIoTRoleOutput = null as any;
utilities.lazyLoad(exports, ["getIoTRole","getIoTRoleOutput"], () => require("./getIoTRole"));

export { GetKubernetesRoleArgs, GetKubernetesRoleResult, GetKubernetesRoleOutputArgs } from "./getKubernetesRole";
export const getKubernetesRole: typeof import("./getKubernetesRole").getKubernetesRole = null as any;
export const getKubernetesRoleOutput: typeof import("./getKubernetesRole").getKubernetesRoleOutput = null as any;
utilities.lazyLoad(exports, ["getKubernetesRole","getKubernetesRoleOutput"], () => require("./getKubernetesRole"));

export { GetMECRoleArgs, GetMECRoleResult, GetMECRoleOutputArgs } from "./getMECRole";
export const getMECRole: typeof import("./getMECRole").getMECRole = null as any;
export const getMECRoleOutput: typeof import("./getMECRole").getMECRoleOutput = null as any;
utilities.lazyLoad(exports, ["getMECRole","getMECRoleOutput"], () => require("./getMECRole"));

export { GetMonitoringConfigArgs, GetMonitoringConfigResult, GetMonitoringConfigOutputArgs } from "./getMonitoringConfig";
export const getMonitoringConfig: typeof import("./getMonitoringConfig").getMonitoringConfig = null as any;
export const getMonitoringConfigOutput: typeof import("./getMonitoringConfig").getMonitoringConfigOutput = null as any;
utilities.lazyLoad(exports, ["getMonitoringConfig","getMonitoringConfigOutput"], () => require("./getMonitoringConfig"));

export { GetOrderArgs, GetOrderResult, GetOrderOutputArgs } from "./getOrder";
export const getOrder: typeof import("./getOrder").getOrder = null as any;
export const getOrderOutput: typeof import("./getOrder").getOrderOutput = null as any;
utilities.lazyLoad(exports, ["getOrder","getOrderOutput"], () => require("./getOrder"));

export { GetPeriodicTimerEventTriggerArgs, GetPeriodicTimerEventTriggerResult, GetPeriodicTimerEventTriggerOutputArgs } from "./getPeriodicTimerEventTrigger";
export const getPeriodicTimerEventTrigger: typeof import("./getPeriodicTimerEventTrigger").getPeriodicTimerEventTrigger = null as any;
export const getPeriodicTimerEventTriggerOutput: typeof import("./getPeriodicTimerEventTrigger").getPeriodicTimerEventTriggerOutput = null as any;
utilities.lazyLoad(exports, ["getPeriodicTimerEventTrigger","getPeriodicTimerEventTriggerOutput"], () => require("./getPeriodicTimerEventTrigger"));

export { GetShareArgs, GetShareResult, GetShareOutputArgs } from "./getShare";
export const getShare: typeof import("./getShare").getShare = null as any;
export const getShareOutput: typeof import("./getShare").getShareOutput = null as any;
utilities.lazyLoad(exports, ["getShare","getShareOutput"], () => require("./getShare"));

export { GetStorageAccountArgs, GetStorageAccountResult, GetStorageAccountOutputArgs } from "./getStorageAccount";
export const getStorageAccount: typeof import("./getStorageAccount").getStorageAccount = null as any;
export const getStorageAccountOutput: typeof import("./getStorageAccount").getStorageAccountOutput = null as any;
utilities.lazyLoad(exports, ["getStorageAccount","getStorageAccountOutput"], () => require("./getStorageAccount"));

export { GetStorageAccountCredentialArgs, GetStorageAccountCredentialResult, GetStorageAccountCredentialOutputArgs } from "./getStorageAccountCredential";
export const getStorageAccountCredential: typeof import("./getStorageAccountCredential").getStorageAccountCredential = null as any;
export const getStorageAccountCredentialOutput: typeof import("./getStorageAccountCredential").getStorageAccountCredentialOutput = null as any;
utilities.lazyLoad(exports, ["getStorageAccountCredential","getStorageAccountCredentialOutput"], () => require("./getStorageAccountCredential"));

export { GetUserArgs, GetUserResult, GetUserOutputArgs } from "./getUser";
export const getUser: typeof import("./getUser").getUser = null as any;
export const getUserOutput: typeof import("./getUser").getUserOutput = null as any;
utilities.lazyLoad(exports, ["getUser","getUserOutput"], () => require("./getUser"));

export { IoTAddonArgs } from "./ioTAddon";
export type IoTAddon = import("./ioTAddon").IoTAddon;
export const IoTAddon: typeof import("./ioTAddon").IoTAddon = null as any;
utilities.lazyLoad(exports, ["IoTAddon"], () => require("./ioTAddon"));

export { IoTRoleArgs } from "./ioTRole";
export type IoTRole = import("./ioTRole").IoTRole;
export const IoTRole: typeof import("./ioTRole").IoTRole = null as any;
utilities.lazyLoad(exports, ["IoTRole"], () => require("./ioTRole"));

export { KubernetesRoleArgs } from "./kubernetesRole";
export type KubernetesRole = import("./kubernetesRole").KubernetesRole;
export const KubernetesRole: typeof import("./kubernetesRole").KubernetesRole = null as any;
utilities.lazyLoad(exports, ["KubernetesRole"], () => require("./kubernetesRole"));

export { ListOrderDCAccessCodeArgs, ListOrderDCAccessCodeResult, ListOrderDCAccessCodeOutputArgs } from "./listOrderDCAccessCode";
export const listOrderDCAccessCode: typeof import("./listOrderDCAccessCode").listOrderDCAccessCode = null as any;
export const listOrderDCAccessCodeOutput: typeof import("./listOrderDCAccessCode").listOrderDCAccessCodeOutput = null as any;
utilities.lazyLoad(exports, ["listOrderDCAccessCode","listOrderDCAccessCodeOutput"], () => require("./listOrderDCAccessCode"));

export { MECRoleArgs } from "./mecrole";
export type MECRole = import("./mecrole").MECRole;
export const MECRole: typeof import("./mecrole").MECRole = null as any;
utilities.lazyLoad(exports, ["MECRole"], () => require("./mecrole"));

export { MonitoringConfigArgs } from "./monitoringConfig";
export type MonitoringConfig = import("./monitoringConfig").MonitoringConfig;
export const MonitoringConfig: typeof import("./monitoringConfig").MonitoringConfig = null as any;
utilities.lazyLoad(exports, ["MonitoringConfig"], () => require("./monitoringConfig"));

export { OrderArgs } from "./order";
export type Order = import("./order").Order;
export const Order: typeof import("./order").Order = null as any;
utilities.lazyLoad(exports, ["Order"], () => require("./order"));

export { PeriodicTimerEventTriggerArgs } from "./periodicTimerEventTrigger";
export type PeriodicTimerEventTrigger = import("./periodicTimerEventTrigger").PeriodicTimerEventTrigger;
export const PeriodicTimerEventTrigger: typeof import("./periodicTimerEventTrigger").PeriodicTimerEventTrigger = null as any;
utilities.lazyLoad(exports, ["PeriodicTimerEventTrigger"], () => require("./periodicTimerEventTrigger"));

export { ShareArgs } from "./share";
export type Share = import("./share").Share;
export const Share: typeof import("./share").Share = null as any;
utilities.lazyLoad(exports, ["Share"], () => require("./share"));

export { StorageAccountArgs } from "./storageAccount";
export type StorageAccount = import("./storageAccount").StorageAccount;
export const StorageAccount: typeof import("./storageAccount").StorageAccount = null as any;
utilities.lazyLoad(exports, ["StorageAccount"], () => require("./storageAccount"));

export { StorageAccountCredentialArgs } from "./storageAccountCredential";
export type StorageAccountCredential = import("./storageAccountCredential").StorageAccountCredential;
export const StorageAccountCredential: typeof import("./storageAccountCredential").StorageAccountCredential = null as any;
utilities.lazyLoad(exports, ["StorageAccountCredential"], () => require("./storageAccountCredential"));

export { UserArgs } from "./user";
export type User = import("./user").User;
export const User: typeof import("./user").User = null as any;
utilities.lazyLoad(exports, ["User"], () => require("./user"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databoxedge:ArcAddon":
                return new ArcAddon(name, <any>undefined, { urn })
            case "azure-native:databoxedge:BandwidthSchedule":
                return new BandwidthSchedule(name, <any>undefined, { urn })
            case "azure-native:databoxedge:CloudEdgeManagementRole":
                return new CloudEdgeManagementRole(name, <any>undefined, { urn })
            case "azure-native:databoxedge:Container":
                return new Container(name, <any>undefined, { urn })
            case "azure-native:databoxedge:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:databoxedge:FileEventTrigger":
                return new FileEventTrigger(name, <any>undefined, { urn })
            case "azure-native:databoxedge:IoTAddon":
                return new IoTAddon(name, <any>undefined, { urn })
            case "azure-native:databoxedge:IoTRole":
                return new IoTRole(name, <any>undefined, { urn })
            case "azure-native:databoxedge:KubernetesRole":
                return new KubernetesRole(name, <any>undefined, { urn })
            case "azure-native:databoxedge:MECRole":
                return new MECRole(name, <any>undefined, { urn })
            case "azure-native:databoxedge:MonitoringConfig":
                return new MonitoringConfig(name, <any>undefined, { urn })
            case "azure-native:databoxedge:Order":
                return new Order(name, <any>undefined, { urn })
            case "azure-native:databoxedge:PeriodicTimerEventTrigger":
                return new PeriodicTimerEventTrigger(name, <any>undefined, { urn })
            case "azure-native:databoxedge:Share":
                return new Share(name, <any>undefined, { urn })
            case "azure-native:databoxedge:StorageAccount":
                return new StorageAccount(name, <any>undefined, { urn })
            case "azure-native:databoxedge:StorageAccountCredential":
                return new StorageAccountCredential(name, <any>undefined, { urn })
            case "azure-native:databoxedge:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databoxedge", _module)