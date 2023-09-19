import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AvailabilitySetArgs } from "./availabilitySet";
export type AvailabilitySet = import("./availabilitySet").AvailabilitySet;
export const AvailabilitySet: typeof import("./availabilitySet").AvailabilitySet = null as any;
utilities.lazyLoad(exports, ["AvailabilitySet"], () => require("./availabilitySet"));

export { CloudArgs } from "./cloud";
export type Cloud = import("./cloud").Cloud;
export const Cloud: typeof import("./cloud").Cloud = null as any;
utilities.lazyLoad(exports, ["Cloud"], () => require("./cloud"));

export { GetAvailabilitySetArgs, GetAvailabilitySetResult, GetAvailabilitySetOutputArgs } from "./getAvailabilitySet";
export const getAvailabilitySet: typeof import("./getAvailabilitySet").getAvailabilitySet = null as any;
export const getAvailabilitySetOutput: typeof import("./getAvailabilitySet").getAvailabilitySetOutput = null as any;
utilities.lazyLoad(exports, ["getAvailabilitySet","getAvailabilitySetOutput"], () => require("./getAvailabilitySet"));

export { GetCloudArgs, GetCloudResult, GetCloudOutputArgs } from "./getCloud";
export const getCloud: typeof import("./getCloud").getCloud = null as any;
export const getCloudOutput: typeof import("./getCloud").getCloudOutput = null as any;
utilities.lazyLoad(exports, ["getCloud","getCloudOutput"], () => require("./getCloud"));

export { GetGuestAgentArgs, GetGuestAgentResult, GetGuestAgentOutputArgs } from "./getGuestAgent";
export const getGuestAgent: typeof import("./getGuestAgent").getGuestAgent = null as any;
export const getGuestAgentOutput: typeof import("./getGuestAgent").getGuestAgentOutput = null as any;
utilities.lazyLoad(exports, ["getGuestAgent","getGuestAgentOutput"], () => require("./getGuestAgent"));

export { GetHybridIdentityMetadataArgs, GetHybridIdentityMetadataResult, GetHybridIdentityMetadataOutputArgs } from "./getHybridIdentityMetadata";
export const getHybridIdentityMetadata: typeof import("./getHybridIdentityMetadata").getHybridIdentityMetadata = null as any;
export const getHybridIdentityMetadataOutput: typeof import("./getHybridIdentityMetadata").getHybridIdentityMetadataOutput = null as any;
utilities.lazyLoad(exports, ["getHybridIdentityMetadata","getHybridIdentityMetadataOutput"], () => require("./getHybridIdentityMetadata"));

export { GetInventoryItemArgs, GetInventoryItemResult, GetInventoryItemOutputArgs } from "./getInventoryItem";
export const getInventoryItem: typeof import("./getInventoryItem").getInventoryItem = null as any;
export const getInventoryItemOutput: typeof import("./getInventoryItem").getInventoryItemOutput = null as any;
utilities.lazyLoad(exports, ["getInventoryItem","getInventoryItemOutput"], () => require("./getInventoryItem"));

export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

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

export { GetVmmServerArgs, GetVmmServerResult, GetVmmServerOutputArgs } from "./getVmmServer";
export const getVmmServer: typeof import("./getVmmServer").getVmmServer = null as any;
export const getVmmServerOutput: typeof import("./getVmmServer").getVmmServerOutput = null as any;
utilities.lazyLoad(exports, ["getVmmServer","getVmmServerOutput"], () => require("./getVmmServer"));

export { GuestAgentArgs } from "./guestAgent";
export type GuestAgent = import("./guestAgent").GuestAgent;
export const GuestAgent: typeof import("./guestAgent").GuestAgent = null as any;
utilities.lazyLoad(exports, ["GuestAgent"], () => require("./guestAgent"));

export { HybridIdentityMetadataArgs } from "./hybridIdentityMetadata";
export type HybridIdentityMetadata = import("./hybridIdentityMetadata").HybridIdentityMetadata;
export const HybridIdentityMetadata: typeof import("./hybridIdentityMetadata").HybridIdentityMetadata = null as any;
utilities.lazyLoad(exports, ["HybridIdentityMetadata"], () => require("./hybridIdentityMetadata"));

export { InventoryItemArgs } from "./inventoryItem";
export type InventoryItem = import("./inventoryItem").InventoryItem;
export const InventoryItem: typeof import("./inventoryItem").InventoryItem = null as any;
utilities.lazyLoad(exports, ["InventoryItem"], () => require("./inventoryItem"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));

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

export { VmmServerArgs } from "./vmmServer";
export type VmmServer = import("./vmmServer").VmmServer;
export const VmmServer: typeof import("./vmmServer").VmmServer = null as any;
utilities.lazyLoad(exports, ["VmmServer"], () => require("./vmmServer"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:scvmm/v20230401preview:AvailabilitySet":
                return new AvailabilitySet(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:Cloud":
                return new Cloud(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:GuestAgent":
                return new GuestAgent(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:HybridIdentityMetadata":
                return new HybridIdentityMetadata(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:InventoryItem":
                return new InventoryItem(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VMInstanceGuestAgent":
                return new VMInstanceGuestAgent(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VirtualMachineInstance":
                return new VirtualMachineInstance(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VirtualMachineTemplate":
                return new VirtualMachineTemplate(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VirtualNetwork":
                return new VirtualNetwork(name, <any>undefined, { urn })
            case "azure-native:scvmm/v20230401preview:VmmServer":
                return new VmmServer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "scvmm/v20230401preview", _module)
