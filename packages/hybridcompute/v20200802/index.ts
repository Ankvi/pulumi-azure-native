import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMachineArgs, GetMachineResult, GetMachineOutputArgs } from "./getMachine";
export const getMachine: typeof import("./getMachine").getMachine = null as any;
export const getMachineOutput: typeof import("./getMachine").getMachineOutput = null as any;
utilities.lazyLoad(exports, ["getMachine","getMachineOutput"], () => require("./getMachine"));

export { MachineArgs } from "./machine";
export type Machine = import("./machine").Machine;
export const Machine: typeof import("./machine").Machine = null as any;
utilities.lazyLoad(exports, ["Machine"], () => require("./machine"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridcompute/v20200802:Machine":
                return new Machine(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcompute/v20200802", _module)
