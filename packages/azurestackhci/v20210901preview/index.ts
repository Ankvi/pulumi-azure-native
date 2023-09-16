import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ArcSettingArgs } from "./arcSetting";
export type ArcSetting = import("./arcSetting").ArcSetting;
export const ArcSetting: typeof import("./arcSetting").ArcSetting = null as any;
utilities.lazyLoad(exports, ["ArcSetting"], () => require("./arcSetting"));

export { GalleryimageRetrieveArgs } from "./galleryimageRetrieve";
export type GalleryimageRetrieve = import("./galleryimageRetrieve").GalleryimageRetrieve;
export const GalleryimageRetrieve: typeof import("./galleryimageRetrieve").GalleryimageRetrieve = null as any;
utilities.lazyLoad(exports, ["GalleryimageRetrieve"], () => require("./galleryimageRetrieve"));

export { GetArcSettingArgs, GetArcSettingResult, GetArcSettingOutputArgs } from "./getArcSetting";
export const getArcSetting: typeof import("./getArcSetting").getArcSetting = null as any;
export const getArcSettingOutput: typeof import("./getArcSetting").getArcSettingOutput = null as any;
utilities.lazyLoad(exports, ["getArcSetting","getArcSettingOutput"], () => require("./getArcSetting"));

export { GetGalleryimageRetrieveArgs, GetGalleryimageRetrieveResult, GetGalleryimageRetrieveOutputArgs } from "./getGalleryimageRetrieve";
export const getGalleryimageRetrieve: typeof import("./getGalleryimageRetrieve").getGalleryimageRetrieve = null as any;
export const getGalleryimageRetrieveOutput: typeof import("./getGalleryimageRetrieve").getGalleryimageRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryimageRetrieve","getGalleryimageRetrieveOutput"], () => require("./getGalleryimageRetrieve"));

export { GetMarketplacegalleryimageArgs, GetMarketplacegalleryimageResult, GetMarketplacegalleryimageOutputArgs } from "./getMarketplacegalleryimage";
export const getMarketplacegalleryimage: typeof import("./getMarketplacegalleryimage").getMarketplacegalleryimage = null as any;
export const getMarketplacegalleryimageOutput: typeof import("./getMarketplacegalleryimage").getMarketplacegalleryimageOutput = null as any;
utilities.lazyLoad(exports, ["getMarketplacegalleryimage","getMarketplacegalleryimageOutput"], () => require("./getMarketplacegalleryimage"));

export { GetNetworkinterfaceRetrieveArgs, GetNetworkinterfaceRetrieveResult, GetNetworkinterfaceRetrieveOutputArgs } from "./getNetworkinterfaceRetrieve";
export const getNetworkinterfaceRetrieve: typeof import("./getNetworkinterfaceRetrieve").getNetworkinterfaceRetrieve = null as any;
export const getNetworkinterfaceRetrieveOutput: typeof import("./getNetworkinterfaceRetrieve").getNetworkinterfaceRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkinterfaceRetrieve","getNetworkinterfaceRetrieveOutput"], () => require("./getNetworkinterfaceRetrieve"));

export { GetStoragecontainerRetrieveArgs, GetStoragecontainerRetrieveResult, GetStoragecontainerRetrieveOutputArgs } from "./getStoragecontainerRetrieve";
export const getStoragecontainerRetrieve: typeof import("./getStoragecontainerRetrieve").getStoragecontainerRetrieve = null as any;
export const getStoragecontainerRetrieveOutput: typeof import("./getStoragecontainerRetrieve").getStoragecontainerRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getStoragecontainerRetrieve","getStoragecontainerRetrieveOutput"], () => require("./getStoragecontainerRetrieve"));

export { GetVirtualharddiskRetrieveArgs, GetVirtualharddiskRetrieveResult, GetVirtualharddiskRetrieveOutputArgs } from "./getVirtualharddiskRetrieve";
export const getVirtualharddiskRetrieve: typeof import("./getVirtualharddiskRetrieve").getVirtualharddiskRetrieve = null as any;
export const getVirtualharddiskRetrieveOutput: typeof import("./getVirtualharddiskRetrieve").getVirtualharddiskRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualharddiskRetrieve","getVirtualharddiskRetrieveOutput"], () => require("./getVirtualharddiskRetrieve"));

export { GetVirtualmachineRetrieveArgs, GetVirtualmachineRetrieveResult, GetVirtualmachineRetrieveOutputArgs } from "./getVirtualmachineRetrieve";
export const getVirtualmachineRetrieve: typeof import("./getVirtualmachineRetrieve").getVirtualmachineRetrieve = null as any;
export const getVirtualmachineRetrieveOutput: typeof import("./getVirtualmachineRetrieve").getVirtualmachineRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualmachineRetrieve","getVirtualmachineRetrieveOutput"], () => require("./getVirtualmachineRetrieve"));

export { GetVirtualnetworkRetrieveArgs, GetVirtualnetworkRetrieveResult, GetVirtualnetworkRetrieveOutputArgs } from "./getVirtualnetworkRetrieve";
export const getVirtualnetworkRetrieve: typeof import("./getVirtualnetworkRetrieve").getVirtualnetworkRetrieve = null as any;
export const getVirtualnetworkRetrieveOutput: typeof import("./getVirtualnetworkRetrieve").getVirtualnetworkRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualnetworkRetrieve","getVirtualnetworkRetrieveOutput"], () => require("./getVirtualnetworkRetrieve"));

export { MarketplacegalleryimageArgs } from "./marketplacegalleryimage";
export type Marketplacegalleryimage = import("./marketplacegalleryimage").Marketplacegalleryimage;
export const Marketplacegalleryimage: typeof import("./marketplacegalleryimage").Marketplacegalleryimage = null as any;
utilities.lazyLoad(exports, ["Marketplacegalleryimage"], () => require("./marketplacegalleryimage"));

export { NetworkinterfaceRetrieveArgs } from "./networkinterfaceRetrieve";
export type NetworkinterfaceRetrieve = import("./networkinterfaceRetrieve").NetworkinterfaceRetrieve;
export const NetworkinterfaceRetrieve: typeof import("./networkinterfaceRetrieve").NetworkinterfaceRetrieve = null as any;
utilities.lazyLoad(exports, ["NetworkinterfaceRetrieve"], () => require("./networkinterfaceRetrieve"));

export { StoragecontainerRetrieveArgs } from "./storagecontainerRetrieve";
export type StoragecontainerRetrieve = import("./storagecontainerRetrieve").StoragecontainerRetrieve;
export const StoragecontainerRetrieve: typeof import("./storagecontainerRetrieve").StoragecontainerRetrieve = null as any;
utilities.lazyLoad(exports, ["StoragecontainerRetrieve"], () => require("./storagecontainerRetrieve"));

export { VirtualharddiskRetrieveArgs } from "./virtualharddiskRetrieve";
export type VirtualharddiskRetrieve = import("./virtualharddiskRetrieve").VirtualharddiskRetrieve;
export const VirtualharddiskRetrieve: typeof import("./virtualharddiskRetrieve").VirtualharddiskRetrieve = null as any;
utilities.lazyLoad(exports, ["VirtualharddiskRetrieve"], () => require("./virtualharddiskRetrieve"));

export { VirtualmachineRetrieveArgs } from "./virtualmachineRetrieve";
export type VirtualmachineRetrieve = import("./virtualmachineRetrieve").VirtualmachineRetrieve;
export const VirtualmachineRetrieve: typeof import("./virtualmachineRetrieve").VirtualmachineRetrieve = null as any;
utilities.lazyLoad(exports, ["VirtualmachineRetrieve"], () => require("./virtualmachineRetrieve"));

export { VirtualnetworkRetrieveArgs } from "./virtualnetworkRetrieve";
export type VirtualnetworkRetrieve = import("./virtualnetworkRetrieve").VirtualnetworkRetrieve;
export const VirtualnetworkRetrieve: typeof import("./virtualnetworkRetrieve").VirtualnetworkRetrieve = null as any;
utilities.lazyLoad(exports, ["VirtualnetworkRetrieve"], () => require("./virtualnetworkRetrieve"));


// Export enums:
export * from "../types/enums/v20210901preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurestackhci/v20210901preview:ArcSetting":
                return new ArcSetting(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:GalleryimageRetrieve":
                return new GalleryimageRetrieve(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:Marketplacegalleryimage":
                return new Marketplacegalleryimage(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:NetworkinterfaceRetrieve":
                return new NetworkinterfaceRetrieve(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:StoragecontainerRetrieve":
                return new StoragecontainerRetrieve(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:VirtualharddiskRetrieve":
                return new VirtualharddiskRetrieve(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:VirtualmachineRetrieve":
                return new VirtualmachineRetrieve(name, <any>undefined, { urn })
            case "azure-native:azurestackhci/v20210901preview:VirtualnetworkRetrieve":
                return new VirtualnetworkRetrieve(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestackhci/v20210901preview", _module)
