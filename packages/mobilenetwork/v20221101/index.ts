import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AttachedDataNetworkArgs } from "./attachedDataNetwork";
export type AttachedDataNetwork = import("./attachedDataNetwork").AttachedDataNetwork;
export const AttachedDataNetwork: typeof import("./attachedDataNetwork").AttachedDataNetwork = null as any;
utilities.lazyLoad(exports, ["AttachedDataNetwork"], () => require("./attachedDataNetwork"));

export { DataNetworkArgs } from "./dataNetwork";
export type DataNetwork = import("./dataNetwork").DataNetwork;
export const DataNetwork: typeof import("./dataNetwork").DataNetwork = null as any;
utilities.lazyLoad(exports, ["DataNetwork"], () => require("./dataNetwork"));

export { GetAttachedDataNetworkArgs, GetAttachedDataNetworkResult, GetAttachedDataNetworkOutputArgs } from "./getAttachedDataNetwork";
export const getAttachedDataNetwork: typeof import("./getAttachedDataNetwork").getAttachedDataNetwork = null as any;
export const getAttachedDataNetworkOutput: typeof import("./getAttachedDataNetwork").getAttachedDataNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getAttachedDataNetwork","getAttachedDataNetworkOutput"], () => require("./getAttachedDataNetwork"));

export { GetDataNetworkArgs, GetDataNetworkResult, GetDataNetworkOutputArgs } from "./getDataNetwork";
export const getDataNetwork: typeof import("./getDataNetwork").getDataNetwork = null as any;
export const getDataNetworkOutput: typeof import("./getDataNetwork").getDataNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getDataNetwork","getDataNetworkOutput"], () => require("./getDataNetwork"));

export { GetMobileNetworkArgs, GetMobileNetworkResult, GetMobileNetworkOutputArgs } from "./getMobileNetwork";
export const getMobileNetwork: typeof import("./getMobileNetwork").getMobileNetwork = null as any;
export const getMobileNetworkOutput: typeof import("./getMobileNetwork").getMobileNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getMobileNetwork","getMobileNetworkOutput"], () => require("./getMobileNetwork"));

export { GetPacketCoreControlPlaneArgs, GetPacketCoreControlPlaneResult, GetPacketCoreControlPlaneOutputArgs } from "./getPacketCoreControlPlane";
export const getPacketCoreControlPlane: typeof import("./getPacketCoreControlPlane").getPacketCoreControlPlane = null as any;
export const getPacketCoreControlPlaneOutput: typeof import("./getPacketCoreControlPlane").getPacketCoreControlPlaneOutput = null as any;
utilities.lazyLoad(exports, ["getPacketCoreControlPlane","getPacketCoreControlPlaneOutput"], () => require("./getPacketCoreControlPlane"));

export { GetPacketCoreDataPlaneArgs, GetPacketCoreDataPlaneResult, GetPacketCoreDataPlaneOutputArgs } from "./getPacketCoreDataPlane";
export const getPacketCoreDataPlane: typeof import("./getPacketCoreDataPlane").getPacketCoreDataPlane = null as any;
export const getPacketCoreDataPlaneOutput: typeof import("./getPacketCoreDataPlane").getPacketCoreDataPlaneOutput = null as any;
utilities.lazyLoad(exports, ["getPacketCoreDataPlane","getPacketCoreDataPlaneOutput"], () => require("./getPacketCoreDataPlane"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetSimArgs, GetSimResult, GetSimOutputArgs } from "./getSim";
export const getSim: typeof import("./getSim").getSim = null as any;
export const getSimOutput: typeof import("./getSim").getSimOutput = null as any;
utilities.lazyLoad(exports, ["getSim","getSimOutput"], () => require("./getSim"));

export { GetSimGroupArgs, GetSimGroupResult, GetSimGroupOutputArgs } from "./getSimGroup";
export const getSimGroup: typeof import("./getSimGroup").getSimGroup = null as any;
export const getSimGroupOutput: typeof import("./getSimGroup").getSimGroupOutput = null as any;
utilities.lazyLoad(exports, ["getSimGroup","getSimGroupOutput"], () => require("./getSimGroup"));

export { GetSimPolicyArgs, GetSimPolicyResult, GetSimPolicyOutputArgs } from "./getSimPolicy";
export const getSimPolicy: typeof import("./getSimPolicy").getSimPolicy = null as any;
export const getSimPolicyOutput: typeof import("./getSimPolicy").getSimPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getSimPolicy","getSimPolicyOutput"], () => require("./getSimPolicy"));

export { GetSiteArgs, GetSiteResult, GetSiteOutputArgs } from "./getSite";
export const getSite: typeof import("./getSite").getSite = null as any;
export const getSiteOutput: typeof import("./getSite").getSiteOutput = null as any;
utilities.lazyLoad(exports, ["getSite","getSiteOutput"], () => require("./getSite"));

export { GetSliceArgs, GetSliceResult, GetSliceOutputArgs } from "./getSlice";
export const getSlice: typeof import("./getSlice").getSlice = null as any;
export const getSliceOutput: typeof import("./getSlice").getSliceOutput = null as any;
utilities.lazyLoad(exports, ["getSlice","getSliceOutput"], () => require("./getSlice"));

export { MobileNetworkArgs } from "./mobileNetwork";
export type MobileNetwork = import("./mobileNetwork").MobileNetwork;
export const MobileNetwork: typeof import("./mobileNetwork").MobileNetwork = null as any;
utilities.lazyLoad(exports, ["MobileNetwork"], () => require("./mobileNetwork"));

export { PacketCoreControlPlaneArgs } from "./packetCoreControlPlane";
export type PacketCoreControlPlane = import("./packetCoreControlPlane").PacketCoreControlPlane;
export const PacketCoreControlPlane: typeof import("./packetCoreControlPlane").PacketCoreControlPlane = null as any;
utilities.lazyLoad(exports, ["PacketCoreControlPlane"], () => require("./packetCoreControlPlane"));

export { PacketCoreDataPlaneArgs } from "./packetCoreDataPlane";
export type PacketCoreDataPlane = import("./packetCoreDataPlane").PacketCoreDataPlane;
export const PacketCoreDataPlane: typeof import("./packetCoreDataPlane").PacketCoreDataPlane = null as any;
utilities.lazyLoad(exports, ["PacketCoreDataPlane"], () => require("./packetCoreDataPlane"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { SimArgs } from "./sim";
export type Sim = import("./sim").Sim;
export const Sim: typeof import("./sim").Sim = null as any;
utilities.lazyLoad(exports, ["Sim"], () => require("./sim"));

export { SimGroupArgs } from "./simGroup";
export type SimGroup = import("./simGroup").SimGroup;
export const SimGroup: typeof import("./simGroup").SimGroup = null as any;
utilities.lazyLoad(exports, ["SimGroup"], () => require("./simGroup"));

export { SimPolicyArgs } from "./simPolicy";
export type SimPolicy = import("./simPolicy").SimPolicy;
export const SimPolicy: typeof import("./simPolicy").SimPolicy = null as any;
utilities.lazyLoad(exports, ["SimPolicy"], () => require("./simPolicy"));

export { SiteArgs } from "./site";
export type Site = import("./site").Site;
export const Site: typeof import("./site").Site = null as any;
utilities.lazyLoad(exports, ["Site"], () => require("./site"));

export { SliceArgs } from "./slice";
export type Slice = import("./slice").Slice;
export const Slice: typeof import("./slice").Slice = null as any;
utilities.lazyLoad(exports, ["Slice"], () => require("./slice"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mobilenetwork/v20221101:AttachedDataNetwork":
                return new AttachedDataNetwork(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:DataNetwork":
                return new DataNetwork(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:MobileNetwork":
                return new MobileNetwork(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:PacketCoreControlPlane":
                return new PacketCoreControlPlane(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:PacketCoreDataPlane":
                return new PacketCoreDataPlane(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:Sim":
                return new Sim(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:SimGroup":
                return new SimGroup(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:SimPolicy":
                return new SimPolicy(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:Site":
                return new Site(name, <any>undefined, { urn })
            case "azure-native:mobilenetwork/v20221101:Slice":
                return new Slice(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mobilenetwork/v20221101", _module)
