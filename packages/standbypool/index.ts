import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetStandbyContainerGroupPoolArgs, GetStandbyContainerGroupPoolResult, GetStandbyContainerGroupPoolOutputArgs } from "./getStandbyContainerGroupPool";
export const getStandbyContainerGroupPool: typeof import("./getStandbyContainerGroupPool").getStandbyContainerGroupPool = null as any;
export const getStandbyContainerGroupPoolOutput: typeof import("./getStandbyContainerGroupPool").getStandbyContainerGroupPoolOutput = null as any;
utilities.lazyLoad(exports, ["getStandbyContainerGroupPool","getStandbyContainerGroupPoolOutput"], () => require("./getStandbyContainerGroupPool"));

export { GetStandbyVirtualMachinePoolArgs, GetStandbyVirtualMachinePoolResult, GetStandbyVirtualMachinePoolOutputArgs } from "./getStandbyVirtualMachinePool";
export const getStandbyVirtualMachinePool: typeof import("./getStandbyVirtualMachinePool").getStandbyVirtualMachinePool = null as any;
export const getStandbyVirtualMachinePoolOutput: typeof import("./getStandbyVirtualMachinePool").getStandbyVirtualMachinePoolOutput = null as any;
utilities.lazyLoad(exports, ["getStandbyVirtualMachinePool","getStandbyVirtualMachinePoolOutput"], () => require("./getStandbyVirtualMachinePool"));

export { StandbyContainerGroupPoolArgs } from "./standbyContainerGroupPool";
export type StandbyContainerGroupPool = import("./standbyContainerGroupPool").StandbyContainerGroupPool;
export const StandbyContainerGroupPool: typeof import("./standbyContainerGroupPool").StandbyContainerGroupPool = null as any;
utilities.lazyLoad(exports, ["StandbyContainerGroupPool"], () => require("./standbyContainerGroupPool"));

export { StandbyVirtualMachinePoolArgs } from "./standbyVirtualMachinePool";
export type StandbyVirtualMachinePool = import("./standbyVirtualMachinePool").StandbyVirtualMachinePool;
export const StandbyVirtualMachinePool: typeof import("./standbyVirtualMachinePool").StandbyVirtualMachinePool = null as any;
utilities.lazyLoad(exports, ["StandbyVirtualMachinePool"], () => require("./standbyVirtualMachinePool"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20231201preview from "./v20231201preview";

export {
    v20231201preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:standbypool:StandbyContainerGroupPool":
                return new StandbyContainerGroupPool(name, <any>undefined, { urn })
            case "azure-native:standbypool:StandbyVirtualMachinePool":
                return new StandbyVirtualMachinePool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "standbypool", _module)