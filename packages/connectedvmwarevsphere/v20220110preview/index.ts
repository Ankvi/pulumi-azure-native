import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMachineExtensionArgs, GetMachineExtensionResult, GetMachineExtensionOutputArgs } from "./getMachineExtension";
export const getMachineExtension: typeof import("./getMachineExtension").getMachineExtension = null as any;
export const getMachineExtensionOutput: typeof import("./getMachineExtension").getMachineExtensionOutput = null as any;
utilities.lazyLoad(exports, ["getMachineExtension","getMachineExtensionOutput"], () => require("./getMachineExtension"));

export { MachineExtensionArgs } from "./machineExtension";
export type MachineExtension = import("./machineExtension").MachineExtension;
export const MachineExtension: typeof import("./machineExtension").MachineExtension = null as any;
utilities.lazyLoad(exports, ["MachineExtension"], () => require("./machineExtension"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:connectedvmwarevsphere/v20220110preview:MachineExtension":
                return new MachineExtension(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "connectedvmwarevsphere/v20220110preview", _module)