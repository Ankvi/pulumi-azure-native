import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArcSettingArgs } from "./arcSetting";
export type ArcSetting = import("./arcSetting").ArcSetting;
export const ArcSetting: typeof import("./arcSetting").ArcSetting = null as any;
utilities.lazyLoad(exports, ["ArcSetting"], () => require("./arcSetting"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DeploymentSettingArgs } from "./deploymentSetting";
export type DeploymentSetting = import("./deploymentSetting").DeploymentSetting;
export const DeploymentSetting: typeof import("./deploymentSetting").DeploymentSetting = null as any;
utilities.lazyLoad(exports, ["DeploymentSetting"], () => require("./deploymentSetting"));

export { EdgeDeviceArgs } from "./edgeDevice";
export type EdgeDevice = import("./edgeDevice").EdgeDevice;
export const EdgeDevice: typeof import("./edgeDevice").EdgeDevice = null as any;
utilities.lazyLoad(exports, ["EdgeDevice"], () => require("./edgeDevice"));

export { ExtensionArgs } from "./extension";
export type Extension = import("./extension").Extension;
export const Extension: typeof import("./extension").Extension = null as any;
utilities.lazyLoad(exports, ["Extension"], () => require("./extension"));

export { GalleryImageArgs } from "./galleryImage";
export type GalleryImage = import("./galleryImage").GalleryImage;
export const GalleryImage: typeof import("./galleryImage").GalleryImage = null as any;
utilities.lazyLoad(exports, ["GalleryImage"], () => require("./galleryImage"));

export { GetArcSettingArgs, GetArcSettingResult, GetArcSettingOutputArgs } from "./getArcSetting";
export const getArcSetting: typeof import("./getArcSetting").getArcSetting = null as any;
export const getArcSettingOutput: typeof import("./getArcSetting").getArcSettingOutput = null as any;
utilities.lazyLoad(exports, ["getArcSetting","getArcSettingOutput"], () => require("./getArcSetting"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDeploymentSettingArgs, GetDeploymentSettingResult, GetDeploymentSettingOutputArgs } from "./getDeploymentSetting";
export const getDeploymentSetting: typeof import("./getDeploymentSetting").getDeploymentSetting = null as any;
export const getDeploymentSettingOutput: typeof import("./getDeploymentSetting").getDeploymentSettingOutput = null as any;
utilities.lazyLoad(exports, ["getDeploymentSetting","getDeploymentSettingOutput"], () => require("./getDeploymentSetting"));

export { GetEdgeDeviceArgs, GetEdgeDeviceResult, GetEdgeDeviceOutputArgs } from "./getEdgeDevice";
export const getEdgeDevice: typeof import("./getEdgeDevice").getEdgeDevice = null as any;
export const getEdgeDeviceOutput: typeof import("./getEdgeDevice").getEdgeDeviceOutput = null as any;
utilities.lazyLoad(exports, ["getEdgeDevice","getEdgeDeviceOutput"], () => require("./getEdgeDevice"));

export { GetExtensionArgs, GetExtensionResult, GetExtensionOutputArgs } from "./getExtension";
export const getExtension: typeof import("./getExtension").getExtension = null as any;
export const getExtensionOutput: typeof import("./getExtension").getExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getExtension","getExtensionOutput"], () => require("./getExtension"));

export { GetGalleryImageArgs, GetGalleryImageResult, GetGalleryImageOutputArgs } from "./getGalleryImage";
export const getGalleryImage: typeof import("./getGalleryImage").getGalleryImage = null as any;
export const getGalleryImageOutput: typeof import("./getGalleryImage").getGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImage","getGalleryImageOutput"], () => require("./getGalleryImage"));

export { GetGuestAgentArgs, GetGuestAgentResult, GetGuestAgentOutputArgs } from "./getGuestAgent";
export const getGuestAgent: typeof import("./getGuestAgent").getGuestAgent = null as any;
export const getGuestAgentOutput: typeof import("./getGuestAgent").getGuestAgentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestAgent","getGuestAgentOutput"], () => require("./getGuestAgent"));

export { GetLogicalNetworkArgs, GetLogicalNetworkResult, GetLogicalNetworkOutputArgs } from "./getLogicalNetwork";
export const getLogicalNetwork: typeof import("./getLogicalNetwork").getLogicalNetwork = null as any;
export const getLogicalNetworkOutput: typeof import("./getLogicalNetwork").getLogicalNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getLogicalNetwork","getLogicalNetworkOutput"], () => require("./getLogicalNetwork"));

export { GetMarketplaceGalleryImageArgs, GetMarketplaceGalleryImageResult, GetMarketplaceGalleryImageOutputArgs } from "./getMarketplaceGalleryImage";
export const getMarketplaceGalleryImage: typeof import("./getMarketplaceGalleryImage").getMarketplaceGalleryImage = null as any;
export const getMarketplaceGalleryImageOutput: typeof import("./getMarketplaceGalleryImage").getMarketplaceGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getMarketplaceGalleryImage","getMarketplaceGalleryImageOutput"], () => require("./getMarketplaceGalleryImage"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

export { GetSecuritySettingArgs, GetSecuritySettingResult, GetSecuritySettingOutputArgs } from "./getSecuritySetting";
export const getSecuritySetting: typeof import("./getSecuritySetting").getSecuritySetting = null as any;
export const getSecuritySettingOutput: typeof import("./getSecuritySetting").getSecuritySettingOutput = null as any;
utilities.lazyLoad(exports, ["getSecuritySetting","getSecuritySettingOutput"], () => require("./getSecuritySetting"));

export { GetStorageContainerArgs, GetStorageContainerResult, GetStorageContainerOutputArgs } from "./getStorageContainer";
export const getStorageContainer: typeof import("./getStorageContainer").getStorageContainer = null as any;
export const getStorageContainerOutput: typeof import("./getStorageContainer").getStorageContainerOutput = null as any;
utilities.lazyLoad(exports, ["getStorageContainer","getStorageContainerOutput"], () => require("./getStorageContainer"));

export { GetUpdateArgs, GetUpdateResult, GetUpdateOutputArgs } from "./getUpdate";
export const getUpdate: typeof import("./getUpdate").getUpdate = null as any;
export const getUpdateOutput: typeof import("./getUpdate").getUpdateOutput = null as any;
utilities.lazyLoad(exports, ["getUpdate","getUpdateOutput"], () => require("./getUpdate"));

export { GetUpdateRunArgs, GetUpdateRunResult, GetUpdateRunOutputArgs } from "./getUpdateRun";
export const getUpdateRun: typeof import("./getUpdateRun").getUpdateRun = null as any;
export const getUpdateRunOutput: typeof import("./getUpdateRun").getUpdateRunOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateRun","getUpdateRunOutput"], () => require("./getUpdateRun"));

export { GetUpdateSummaryArgs, GetUpdateSummaryResult, GetUpdateSummaryOutputArgs } from "./getUpdateSummary";
export const getUpdateSummary: typeof import("./getUpdateSummary").getUpdateSummary = null as any;
export const getUpdateSummaryOutput: typeof import("./getUpdateSummary").getUpdateSummaryOutput = null as any;
utilities.lazyLoad(exports, ["getUpdateSummary","getUpdateSummaryOutput"], () => require("./getUpdateSummary"));

export { GetVirtualHardDiskArgs, GetVirtualHardDiskResult, GetVirtualHardDiskOutputArgs } from "./getVirtualHardDisk";
export const getVirtualHardDisk: typeof import("./getVirtualHardDisk").getVirtualHardDisk = null as any;
export const getVirtualHardDiskOutput: typeof import("./getVirtualHardDisk").getVirtualHardDiskOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHardDisk","getVirtualHardDiskOutput"], () => require("./getVirtualHardDisk"));

export { GetVirtualMachineInstanceArgs, GetVirtualMachineInstanceResult, GetVirtualMachineInstanceOutputArgs } from "./getVirtualMachineInstance";
export const getVirtualMachineInstance: typeof import("./getVirtualMachineInstance").getVirtualMachineInstance = null as any;
export const getVirtualMachineInstanceOutput: typeof import("./getVirtualMachineInstance").getVirtualMachineInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineInstance","getVirtualMachineInstanceOutput"], () => require("./getVirtualMachineInstance"));

export { GuestAgentArgs } from "./guestAgent";
export type GuestAgent = import("./guestAgent").GuestAgent;
export const GuestAgent: typeof import("./guestAgent").GuestAgent = null as any;
utilities.lazyLoad(exports, ["GuestAgent"], () => require("./guestAgent"));

export { LogicalNetworkArgs } from "./logicalNetwork";
export type LogicalNetwork = import("./logicalNetwork").LogicalNetwork;
export const LogicalNetwork: typeof import("./logicalNetwork").LogicalNetwork = null as any;
utilities.lazyLoad(exports, ["LogicalNetwork"], () => require("./logicalNetwork"));

export { MarketplaceGalleryImageArgs } from "./marketplaceGalleryImage";
export type MarketplaceGalleryImage = import("./marketplaceGalleryImage").MarketplaceGalleryImage;
export const MarketplaceGalleryImage: typeof import("./marketplaceGalleryImage").MarketplaceGalleryImage = null as any;
utilities.lazyLoad(exports, ["MarketplaceGalleryImage"], () => require("./marketplaceGalleryImage"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

export { SecuritySettingArgs } from "./securitySetting";
export type SecuritySetting = import("./securitySetting").SecuritySetting;
export const SecuritySetting: typeof import("./securitySetting").SecuritySetting = null as any;
utilities.lazyLoad(exports, ["SecuritySetting"], () => require("./securitySetting"));

export { StorageContainerArgs } from "./storageContainer";
export type StorageContainer = import("./storageContainer").StorageContainer;
export const StorageContainer: typeof import("./storageContainer").StorageContainer = null as any;
utilities.lazyLoad(exports, ["StorageContainer"], () => require("./storageContainer"));

export { UpdateArgs } from "./update";
export type Update = import("./update").Update;
export const Update: typeof import("./update").Update = null as any;
utilities.lazyLoad(exports, ["Update"], () => require("./update"));

export { UpdateRunArgs } from "./updateRun";
export type UpdateRun = import("./updateRun").UpdateRun;
export const UpdateRun: typeof import("./updateRun").UpdateRun = null as any;
utilities.lazyLoad(exports, ["UpdateRun"], () => require("./updateRun"));

export { UpdateSummaryArgs } from "./updateSummary";
export type UpdateSummary = import("./updateSummary").UpdateSummary;
export const UpdateSummary: typeof import("./updateSummary").UpdateSummary = null as any;
utilities.lazyLoad(exports, ["UpdateSummary"], () => require("./updateSummary"));

export { VirtualHardDiskArgs } from "./virtualHardDisk";
export type VirtualHardDisk = import("./virtualHardDisk").VirtualHardDisk;
export const VirtualHardDisk: typeof import("./virtualHardDisk").VirtualHardDisk = null as any;
utilities.lazyLoad(exports, ["VirtualHardDisk"], () => require("./virtualHardDisk"));

export { VirtualMachineInstanceArgs } from "./virtualMachineInstance";
export type VirtualMachineInstance = import("./virtualMachineInstance").VirtualMachineInstance;
export const VirtualMachineInstance: typeof import("./virtualMachineInstance").VirtualMachineInstance = null as any;
utilities.lazyLoad(exports, ["VirtualMachineInstance"], () => require("./virtualMachineInstance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurestackhci/v20240101:ArcSetting":
                return new ArcSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:DeploymentSetting":
                return new DeploymentSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:EdgeDevice":
                return new EdgeDevice(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:GuestAgent":
                return new GuestAgent(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:LogicalNetwork":
                return new LogicalNetwork(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:MarketplaceGalleryImage":
                return new MarketplaceGalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:SecuritySetting":
                return new SecuritySetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:StorageContainer":
                return new StorageContainer(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:Update":
                return new Update(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:UpdateRun":
                return new UpdateRun(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:UpdateSummary":
                return new UpdateSummary(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:VirtualHardDisk":
                return new VirtualHardDisk(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20240101:VirtualMachineInstance":
                return new VirtualMachineInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestackhci/v20240101", _module)