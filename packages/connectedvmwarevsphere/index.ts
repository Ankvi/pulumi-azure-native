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

export { GetGuestAgentArgs, GetGuestAgentResult, GetGuestAgentOutputArgs } from "./getGuestAgent";
export const getGuestAgent: typeof import("./getGuestAgent").getGuestAgent = null as any;
export const getGuestAgentOutput: typeof import("./getGuestAgent").getGuestAgentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestAgent","getGuestAgentOutput"], () => require("./getGuestAgent"));

export { GetHostArgs, GetHostResult, GetHostOutputArgs } from "./getHost";
export const getHost: typeof import("./getHost").getHost = null as any;
export const getHostOutput: typeof import("./getHost").getHostOutput = null as any;
utilities.lazyLoad(exports, ["getHost","getHostOutput"], () => require("./getHost"));

export { GetHybridIdentityMetadatumArgs, GetHybridIdentityMetadatumResult, GetHybridIdentityMetadatumOutputArgs } from "./getHybridIdentityMetadatum";
export const getHybridIdentityMetadatum: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatum = null as any;
export const getHybridIdentityMetadatumOutput: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatumOutput = null as any;
utilities.lazyLoad(exports, ["getHybridIdentityMetadatum","getHybridIdentityMetadatumOutput"], () => require("./getHybridIdentityMetadatum"));

export { GetInventoryItemArgs, GetInventoryItemResult, GetInventoryItemOutputArgs } from "./getInventoryItem";
export const getInventoryItem: typeof import("./getInventoryItem").getInventoryItem = null as any;
export const getInventoryItemOutput: typeof import("./getInventoryItem").getInventoryItemOutput = null as any;
utilities.lazyLoad(exports, ["getInventoryItem","getInventoryItemOutput"], () => require("./getInventoryItem"));

export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

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

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

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

export { GuestAgentArgs } from "./guestAgent";
export type GuestAgent = import("./guestAgent").GuestAgent;
export const GuestAgent: typeof import("./guestAgent").GuestAgent = null as any;
utilities.lazyLoad(exports, ["GuestAgent"], () => require("./guestAgent"));

export { HostArgs } from "./host";
export type Host = import("./host").Host;
export const Host: typeof import("./host").Host = null as any;
utilities.lazyLoad(exports, ["Host"], () => require("./host"));

export { HybridIdentityMetadatumArgs } from "./hybridIdentityMetadatum";
export type HybridIdentityMetadatum = import("./hybridIdentityMetadatum").HybridIdentityMetadatum;
export const HybridIdentityMetadatum: typeof import("./hybridIdentityMetadatum").HybridIdentityMetadatum = null as any;
utilities.lazyLoad(exports, ["HybridIdentityMetadatum"], () => require("./hybridIdentityMetadatum"));

export { InventoryItemArgs } from "./inventoryItem";
export type InventoryItem = import("./inventoryItem").InventoryItem;
export const InventoryItem: typeof import("./inventoryItem").InventoryItem = null as any;
utilities.lazyLoad(exports, ["InventoryItem"], () => require("./inventoryItem"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));

export { ResourcePoolArgs } from "./resourcePool";
export type ResourcePool = import("./resourcePool").ResourcePool;
export const ResourcePool: typeof import("./resourcePool").ResourcePool = null as any;
utilities.lazyLoad(exports, ["ResourcePool"], () => require("./resourcePool"));

export { VCenterArgs } from "./vcenter";
export type VCenter = import("./vcenter").VCenter;
export const VCenter: typeof import("./vcenter").VCenter = null as any;
utilities.lazyLoad(exports, ["VCenter"], () => require("./vcenter"));

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));

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
            case "azure-native:connectedvmwarevsphere:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:Datastore":
                return new Datastore(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:GuestAgent":
                return new GuestAgent(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:Host":
                return new Host(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:HybridIdentityMetadatum":
                return new HybridIdentityMetadatum(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:InventoryItem":
                return new InventoryItem(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:ResourcePool":
                return new ResourcePool(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VCenter":
                return new VCenter(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VMInstanceGuestAgent":
                return new VMInstanceGuestAgent(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VirtualMachineInstance":
                return new VirtualMachineInstance(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VirtualMachineTemplate":
                return new VirtualMachineTemplate(name, <any>undefined, { urn })
            case "azure-native:connectedvmwarevsphere:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "connectedvmwarevsphere", _module)