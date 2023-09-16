import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { BandwidthScheduleArgs } from "./bandwidthSchedule";
export type BandwidthSchedule = import("./bandwidthSchedule").BandwidthSchedule;
export const BandwidthSchedule: typeof import("./bandwidthSchedule").BandwidthSchedule = null as any;
utilities.lazyLoad(exports, ["BandwidthSchedule"], () => require("./bandwidthSchedule"));

export { ContainerArgs } from "./container";
export type Container = import("./container").Container;
export const Container: typeof import("./container").Container = null as any;
utilities.lazyLoad(exports, ["Container"], () => require("./container"));

export { DeviceArgs } from "./device";
export type Device = import("./device").Device;
export const Device: typeof import("./device").Device = null as any;
utilities.lazyLoad(exports, ["Device"], () => require("./device"));

export { GetBandwidthScheduleArgs, GetBandwidthScheduleResult, GetBandwidthScheduleOutputArgs } from "./getBandwidthSchedule";
export const getBandwidthSchedule: typeof import("./getBandwidthSchedule").getBandwidthSchedule = null as any;
export const getBandwidthScheduleOutput: typeof import("./getBandwidthSchedule").getBandwidthScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getBandwidthSchedule","getBandwidthScheduleOutput"], () => require("./getBandwidthSchedule"));

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

export { GetIoTAddonArgs, GetIoTAddonResult, GetIoTAddonOutputArgs } from "./getIoTAddon";
export const getIoTAddon: typeof import("./getIoTAddon").getIoTAddon = null as any;
export const getIoTAddonOutput: typeof import("./getIoTAddon").getIoTAddonOutput = null as any;
utilities.lazyLoad(exports, ["getIoTAddon","getIoTAddonOutput"], () => require("./getIoTAddon"));

export { GetMonitoringConfigArgs, GetMonitoringConfigResult, GetMonitoringConfigOutputArgs } from "./getMonitoringConfig";
export const getMonitoringConfig: typeof import("./getMonitoringConfig").getMonitoringConfig = null as any;
export const getMonitoringConfigOutput: typeof import("./getMonitoringConfig").getMonitoringConfigOutput = null as any;
utilities.lazyLoad(exports, ["getMonitoringConfig","getMonitoringConfigOutput"], () => require("./getMonitoringConfig"));

export { GetOrderArgs, GetOrderResult, GetOrderOutputArgs } from "./getOrder";
export const getOrder: typeof import("./getOrder").getOrder = null as any;
export const getOrderOutput: typeof import("./getOrder").getOrderOutput = null as any;
utilities.lazyLoad(exports, ["getOrder","getOrderOutput"], () => require("./getOrder"));

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

export { ListOrderDCAccessCodeArgs, ListOrderDCAccessCodeResult, ListOrderDCAccessCodeOutputArgs } from "./listOrderDCAccessCode";
export const listOrderDCAccessCode: typeof import("./listOrderDCAccessCode").listOrderDCAccessCode = null as any;
export const listOrderDCAccessCodeOutput: typeof import("./listOrderDCAccessCode").listOrderDCAccessCodeOutput = null as any;
utilities.lazyLoad(exports, ["listOrderDCAccessCode","listOrderDCAccessCodeOutput"], () => require("./listOrderDCAccessCode"));

export { MonitoringConfigArgs } from "./monitoringConfig";
export type MonitoringConfig = import("./monitoringConfig").MonitoringConfig;
export const MonitoringConfig: typeof import("./monitoringConfig").MonitoringConfig = null as any;
utilities.lazyLoad(exports, ["MonitoringConfig"], () => require("./monitoringConfig"));

export { OrderArgs } from "./order";
export type Order = import("./order").Order;
export const Order: typeof import("./order").Order = null as any;
utilities.lazyLoad(exports, ["Order"], () => require("./order"));

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
export * from "../types/enums/v20220301";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databoxedge/v20220301:BandwidthSchedule":
                return new BandwidthSchedule(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:Container":
                return new Container(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:Device":
                return new Device(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:IoTAddon":
                return new IoTAddon(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:MonitoringConfig":
                return new MonitoringConfig(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:Order":
                return new Order(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:Share":
                return new Share(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:StorageAccount":
                return new StorageAccount(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:StorageAccountCredential":
                return new StorageAccountCredential(name, <any>undefined, { urn })
            case "azure-native:databoxedge/v20220301:User":
                return new User(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databoxedge/v20220301", _module)
