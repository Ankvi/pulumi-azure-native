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

export { GetHybridIdentityMetadatumArgs, GetHybridIdentityMetadatumResult, GetHybridIdentityMetadatumOutputArgs } from "./getHybridIdentityMetadatum";
export const getHybridIdentityMetadatum: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatum = null as any;
export const getHybridIdentityMetadatumOutput: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatumOutput = null as any;
utilities.lazyLoad(exports, ["getHybridIdentityMetadatum","getHybridIdentityMetadatumOutput"], () => require("./getHybridIdentityMetadatum"));

export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

export { GetMarketplaceGalleryImageArgs, GetMarketplaceGalleryImageResult, GetMarketplaceGalleryImageOutputArgs } from "./getMarketplaceGalleryImage";
export const getMarketplaceGalleryImage: typeof import("./getMarketplaceGalleryImage").getMarketplaceGalleryImage = null as any;
export const getMarketplaceGalleryImageOutput: typeof import("./getMarketplaceGalleryImage").getMarketplaceGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getMarketplaceGalleryImage","getMarketplaceGalleryImageOutput"], () => require("./getMarketplaceGalleryImage"));

export { GetNetworkInterfaceArgs, GetNetworkInterfaceResult, GetNetworkInterfaceOutputArgs } from "./getNetworkInterface";
export const getNetworkInterface: typeof import("./getNetworkInterface").getNetworkInterface = null as any;
export const getNetworkInterfaceOutput: typeof import("./getNetworkInterface").getNetworkInterfaceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkInterface","getNetworkInterfaceOutput"], () => require("./getNetworkInterface"));

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

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GuestAgentArgs } from "./guestAgent";
export type GuestAgent = import("./guestAgent").GuestAgent;
export const GuestAgent: typeof import("./guestAgent").GuestAgent = null as any;
utilities.lazyLoad(exports, ["GuestAgent"], () => require("./guestAgent"));

export { HybridIdentityMetadatumArgs } from "./hybridIdentityMetadatum";
export type HybridIdentityMetadatum = import("./hybridIdentityMetadatum").HybridIdentityMetadatum;
export const HybridIdentityMetadatum: typeof import("./hybridIdentityMetadatum").HybridIdentityMetadatum = null as any;
utilities.lazyLoad(exports, ["HybridIdentityMetadatum"], () => require("./hybridIdentityMetadatum"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));

export { MarketplaceGalleryImageArgs } from "./marketplaceGalleryImage";
export type MarketplaceGalleryImage = import("./marketplaceGalleryImage").MarketplaceGalleryImage;
export const MarketplaceGalleryImage: typeof import("./marketplaceGalleryImage").MarketplaceGalleryImage = null as any;
utilities.lazyLoad(exports, ["MarketplaceGalleryImage"], () => require("./marketplaceGalleryImage"));

export { NetworkInterfaceArgs } from "./networkInterface";
export type NetworkInterface = import("./networkInterface").NetworkInterface;
export const NetworkInterface: typeof import("./networkInterface").NetworkInterface = null as any;
utilities.lazyLoad(exports, ["NetworkInterface"], () => require("./networkInterface"));

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

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurestackhci/v20221215preview:ArcSetting":
                return new ArcSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:Extension":
                return new Extension(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:GuestAgent":
                return new GuestAgent(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:HybridIdentityMetadatum":
                return new HybridIdentityMetadatum(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:MarketplaceGalleryImage":
                return new MarketplaceGalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:StorageContainer":
                return new StorageContainer(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:Update":
                return new Update(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:UpdateRun":
                return new UpdateRun(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:UpdateSummary":
                return new UpdateSummary(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:VirtualHardDisk":
                return new VirtualHardDisk(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20221215preview:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestackhci/v20221215preview", _module)