import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMachineArgs, GetMachineResult, GetMachineOutputArgs } from "./getMachine";
export const getMachine: typeof import("./getMachine").getMachine = null as any;
export const getMachineOutput: typeof import("./getMachine").getMachineOutput = null as any;
utilities.lazyLoad(exports, ["getMachine","getMachineOutput"], () => require("./getMachine"));

export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

export { MachineArgs } from "./machine";
export type Machine = import("./machine").Machine;
export const Machine: typeof import("./machine").Machine = null as any;
utilities.lazyLoad(exports, ["Machine"], () => require("./machine"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));


// Export enums:
export * from "../types/enums/v20220510preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridcompute/v20220510preview:Machine":
                return new Machine(name, <any>undefined, { urn })
            case "azure-native:hybridcompute/v20220510preview:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcompute/v20220510preview", _module)
