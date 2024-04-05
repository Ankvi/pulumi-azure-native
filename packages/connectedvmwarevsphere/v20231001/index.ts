import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DatastoreArgs } from "./datastore";
export type Datastore = import("./datastore").Datastore;
export const Datastore: typeof import("./datastore").Datastore = null as any;
utilities.lazyLoad(exports, ["Datastore"], () => require("./datastore"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDatastoreArgs, GetDatastoreResult, GetDatastoreOutputArgs } from "./getDatastore";
export const getDatastore: typeof import("./getDatastore").getDatastore = null as any;
export const getDatastoreOutput: typeof import("./getDatastore").getDatastoreOutput = null as any;
utilities.lazyLoad(exports, ["getDatastore","getDatastoreOutput"], () => require("./getDatastore"));

export { GetHostArgs, GetHostResult, GetHostOutputArgs } from "./getHost";
export const getHost: typeof import("./getHost").getHost = null as any;
export const getHostOutput: typeof import("./getHost").getHostOutput = null as any;
utilities.lazyLoad(exports, ["getHost","getHostOutput"], () => require("./getHost"));

export { GetInventoryItemArgs, GetInventoryItemResult, GetInventoryItemOutputArgs } from "./getInventoryItem";
export const getInventoryItem: typeof import("./getInventoryItem").getInventoryItem = null as any;
export const getInventoryItemOutput: typeof import("./getInventoryItem").getInventoryItemOutput = null as any;
utilities.lazyLoad(exports, ["getInventoryItem","getInventoryItemOutput"], () => require("./getInventoryItem"));

export { GetResourcePoolArgs, GetResourcePoolResult, GetResourcePoolOutputArgs } from "./getResourcePool";
export const getResourcePool: typeof import("./getResourcePool").getResourcePool = null as any;
export const getResourcePoolOutput: typeof import("./getResourcePool").getResourcePoolOutput = null as any;
utilities.lazyLoad(exports, ["getResourcePool","getResourcePoolOutput"], () => require("./getResourcePool"));

export { GetVCenterArgs, GetVCenterResult, GetVCenterOutputArgs } from "./getVCenter";
export const getVCenter: typeof import("./getVCenter").getVCenter = null as any;
export const getVCenterOutput: typeof import("./getVCenter").getVCenterOutput = null as any;
utilities.lazyLoad(exports, ["getVCenter","getVCenterOutput"], () => require("./getVCenter"));

export { GetVMInstanceGuestAgentArgs, GetVMInstanceGuestAgentResult, GetVMInstanceGuestAgentOutputArgs } from "./getVMInstanceGuestAgent";
export const getVMInstanceGuestAgent: typeof import("./getVMInstanceGuestAgent").getVMInstanceGuestAgent = null as any;
export const getVMInstanceGuestAgentOutput: typeof import("./getVMInstanceGuestAgent").getVMInstanceGuestAgentOutput = null as any;
utilities.lazyLoad(exports, ["getVMInstanceGuestAgent","getVMInstanceGuestAgentOutput"], () => require("./getVMInstanceGuestAgent"));

export { GetVirtualMachineInstanceArgs, GetVirtualMachineInstanceResult, GetVirtualMachineInstanceOutputArgs } from "./getVirtualMachineInstance";
export const getVirtualMachineInstance: typeof import("./getVirtualMachineInstance").getVirtualMachineInstance = null as any;
export const getVirtualMachineInstanceOutput: typeof import("./getVirtualMachineInstance").getVirtualMachineInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineInstance","getVirtualMachineInstanceOutput"], () => require("./getVirtualMachineInstance"));

export { GetVirtualMachineTemplateArgs, GetVirtualMachineTemplateResult, GetVirtualMachineTemplateOutputArgs } from "./getVirtualMachineTemplate";
export const getVirtualMachineTemplate: typeof import("./getVirtualMachineTemplate").getVirtualMachineTemplate = null as any;
export const getVirtualMachineTemplateOutput: typeof import("./getVirtualMachineTemplate").getVirtualMachineTemplateOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachineTemplate","getVirtualMachineTemplateOutput"], () => require("./getVirtualMachineTemplate"));

export { GetVirtualNetworkArgs, GetVirtualNetworkResult, GetVirtualNetworkOutputArgs } from "./getVirtualNetwork";
export const getVirtualNetwork: typeof import("./getVirtualNetwork").getVirtualNetwork = null as any;
export const getVirtualNetworkOutput: typeof import("./getVirtualNetwork").getVirtualNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetwork","getVirtualNetworkOutput"], () => require("./getVirtualNetwork"));

export { HostArgs } from "./host";
export type Host = import("./host").Host;
export const Host: typeof import("./host").Host = null as any;
utilities.lazyLoad(exports, ["Host"], () => require("./host"));

export { InventoryItemArgs } from "./inventoryItem";
export type InventoryItem = import("./inventoryItem").InventoryItem;
export const InventoryItem: typeof import("./inventoryItem").InventoryItem = null as any;
utilities.lazyLoad(exports, ["InventoryItem"], () => require("./inventoryItem"));

export { ResourcePoolArgs } from "./resourcePool";
export type ResourcePool = import("./resourcePool").ResourcePool;
export const ResourcePool: typeof import("./resourcePool").ResourcePool = null as any;
utilities.lazyLoad(exports, ["ResourcePool"], () => require("./resourcePool"));

export { VCenterArgs } from "./vcenter";
export type VCenter = import("./vcenter").VCenter;
export const VCenter: typeof import("./vcenter").VCenter = null as any;
utilities.lazyLoad(exports, ["VCenter"], () => require("./vcenter"));

export { VirtualMachineInstanceArgs } from "./virtualMachineInstance";
export type VirtualMachineInstance = import("./virtualMachineInstance").VirtualMachineInstance;
export const VirtualMachineInstance: typeof import("./virtualMachineInstance").VirtualMachineInstance = null as any;
utilities.lazyLoad(exports, ["VirtualMachineInstance"], () => require("./virtualMachineInstance"));

export { VirtualMachineTemplateArgs } from "./virtualMachineTemplate";
export type VirtualMachineTemplate = import("./virtualMachineTemplate").VirtualMachineTemplate;
export const VirtualMachineTemplate: typeof import("./virtualMachineTemplate").VirtualMachineTemplate = null as any;
utilities.lazyLoad(exports, ["VirtualMachineTemplate"], () => require("./virtualMachineTemplate"));

export { VirtualNetworkArgs } from "./virtualNetwork";
export type VirtualNetwork = import("./virtualNetwork").VirtualNetwork;
export const VirtualNetwork: typeof import("./virtualNetwork").VirtualNetwork = null as any;
utilities.lazyLoad(exports, ["VirtualNetwork"], () => require("./virtualNetwork"));

export { VMInstanceGuestAgentArgs } from "./vminstanceGuestAgent";
export type VMInstanceGuestAgent = import("./vminstanceGuestAgent").VMInstanceGuestAgent;
export const VMInstanceGuestAgent: typeof import("./vminstanceGuestAgent").VMInstanceGuestAgent = null as any;
utilities.lazyLoad(exports, ["VMInstanceGuestAgent"], () => require("./vminstanceGuestAgent"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:connectedvmwarevsphere/v20231001:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:Datastore":
                return new Datastore(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:Host":
                return new Host(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:InventoryItem":
                return new InventoryItem(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:ResourcePool":
                return new ResourcePool(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:VCenter":
                return new VCenter(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:VMInstanceGuestAgent":
                return new VMInstanceGuestAgent(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:VirtualMachineInstance":
                return new VirtualMachineInstance(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:VirtualMachineTemplate":
                return new VirtualMachineTemplate(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere/v20231001:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "connectedvmwarevsphere/v20231001", _module)