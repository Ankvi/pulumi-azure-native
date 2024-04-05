import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GalleryImageArgs } from "./galleryImage";
export type GalleryImage = import("./galleryImage").GalleryImage;
export const GalleryImage: typeof import("./galleryImage").GalleryImage = null as any;
utilities.lazyLoad(exports, ["GalleryImage"], () => require("./galleryImage"));

export { GetGalleryImageArgs, GetGalleryImageResult, GetGalleryImageOutputArgs } from "./getGalleryImage";
export const getGalleryImage: typeof import("./getGalleryImage").getGalleryImage = null as any;
export const getGalleryImageOutput: typeof import("./getGalleryImage").getGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImage","getGalleryImageOutput"], () => require("./getGalleryImage"));

export { GetGuestAgentArgs, GetGuestAgentResult, GetGuestAgentOutputArgs } from "./getGuestAgent";
export const getGuestAgent: typeof import("./getGuestAgent").getGuestAgent = null as any;
export const getGuestAgentOutput: typeof import("./getGuestAgent").getGuestAgentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestAgent","getGuestAgentOutput"], () => require("./getGuestAgent"));

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

export { GetVirtualHardDiskArgs, GetVirtualHardDiskResult, GetVirtualHardDiskOutputArgs } from "./getVirtualHardDisk";
export const getVirtualHardDisk: typeof import("./getVirtualHardDisk").getVirtualHardDisk = null as any;
export const getVirtualHardDiskOutput: typeof import("./getVirtualHardDisk").getVirtualHardDiskOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHardDisk","getVirtualHardDiskOutput"], () => require("./getVirtualHardDisk"));

export { GetVirtualMachineInstanceArgs, GetVirtualMachineInstanceResult, GetVirtualMachineInstanceOutputArgs } from "./getVirtualMachineInstance";
export const getVirtualMachineInstance: typeof import("./getVirtualMachineInstance").getVirtualMachineInstance = null as any;
export const getVirtualMachineInstanceOutput: typeof import("./getVirtualMachineInstance").getVirtualMachineInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineInstance","getVirtualMachineInstanceOutput"], () => require("./getVirtualMachineInstance"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { GuestAgentArgs } from "./guestAgent";
export type GuestAgent = import("./guestAgent").GuestAgent;
export const GuestAgent: typeof import("./guestAgent").GuestAgent = null as any;
utilities.lazyLoad(exports, ["GuestAgent"], () => require("./guestAgent"));

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

export { VirtualHardDiskArgs } from "./virtualHardDisk";
export type VirtualHardDisk = import("./virtualHardDisk").VirtualHardDisk;
export const VirtualHardDisk: typeof import("./virtualHardDisk").VirtualHardDisk = null as any;
utilities.lazyLoad(exports, ["VirtualHardDisk"], () => require("./virtualHardDisk"));

export { VirtualMachineInstanceArgs } from "./virtualMachineInstance";
export type VirtualMachineInstance = import("./virtualMachineInstance").VirtualMachineInstance;
export const VirtualMachineInstance: typeof import("./virtualMachineInstance").VirtualMachineInstance = null as any;
utilities.lazyLoad(exports, ["VirtualMachineInstance"], () => require("./virtualMachineInstance"));

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
            case "azure-native:azurestackhci/v20230701preview:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:GuestAgent":
                return new GuestAgent(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:MarketplaceGalleryImage":
                return new MarketplaceGalleryImage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:NetworkInterface":
                return new NetworkInterface(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:StorageContainer":
                return new StorageContainer(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:VirtualHardDisk":
                return new VirtualHardDisk(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:VirtualMachineInstance":
                return new VirtualMachineInstance(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20230701preview:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestackhci/v20230701preview", _module)