import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DedicatedCloudNodeArgs } from "./dedicatedCloudNode";
export type DedicatedCloudNode = import("./dedicatedCloudNode").DedicatedCloudNode;
export const DedicatedCloudNode: typeof import("./dedicatedCloudNode").DedicatedCloudNode = null as any;
utilities.lazyLoad(exports, ["DedicatedCloudNode"], () => require("./dedicatedCloudNode"));

export { DedicatedCloudServiceArgs } from "./dedicatedCloudService";
export type DedicatedCloudService = import("./dedicatedCloudService").DedicatedCloudService;
export const DedicatedCloudService: typeof import("./dedicatedCloudService").DedicatedCloudService = null as any;
utilities.lazyLoad(exports, ["DedicatedCloudService"], () => require("./dedicatedCloudService"));

export { GetDedicatedCloudNodeArgs, GetDedicatedCloudNodeResult, GetDedicatedCloudNodeOutputArgs } from "./getDedicatedCloudNode";
export const getDedicatedCloudNode: typeof import("./getDedicatedCloudNode").getDedicatedCloudNode = null as any;
export const getDedicatedCloudNodeOutput: typeof import("./getDedicatedCloudNode").getDedicatedCloudNodeOutput = null as any;
utilities.lazyLoad(exports, ["getDedicatedCloudNode","getDedicatedCloudNodeOutput"], () => require("./getDedicatedCloudNode"));

export { GetDedicatedCloudServiceArgs, GetDedicatedCloudServiceResult, GetDedicatedCloudServiceOutputArgs } from "./getDedicatedCloudService";
export const getDedicatedCloudService: typeof import("./getDedicatedCloudService").getDedicatedCloudService = null as any;
export const getDedicatedCloudServiceOutput: typeof import("./getDedicatedCloudService").getDedicatedCloudServiceOutput = null as any;
utilities.lazyLoad(exports, ["getDedicatedCloudService","getDedicatedCloudServiceOutput"], () => require("./getDedicatedCloudService"));

export { GetVirtualMachineArgs, GetVirtualMachineResult, GetVirtualMachineOutputArgs } from "./getVirtualMachine";
export const getVirtualMachine: typeof import("./getVirtualMachine").getVirtualMachine = null as any;
export const getVirtualMachineOutput: typeof import("./getVirtualMachine").getVirtualMachineOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualMachine","getVirtualMachineOutput"], () => require("./getVirtualMachine"));

export { VirtualMachineArgs } from "./virtualMachine";
export type VirtualMachine = import("./virtualMachine").VirtualMachine;
export const VirtualMachine: typeof import("./virtualMachine").VirtualMachine = null as any;
utilities.lazyLoad(exports, ["VirtualMachine"], () => require("./virtualMachine"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:vmwarecloudsimple:DedicatedCloudNode":
                return new DedicatedCloudNode(name, <any>undefined, { urn })
            case "azure-native:vmwarecloudsimple:DedicatedCloudService":
                return new DedicatedCloudService(name, <any>undefined, { urn })
            case "azure-native:vmwarecloudsimple:VirtualMachine":
                return new VirtualMachine(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "vmwarecloudsimple", _module)