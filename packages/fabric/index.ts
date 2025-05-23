import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FabricCapacityArgs } from "./fabricCapacity";
export type FabricCapacity = import("./fabricCapacity").FabricCapacity;
export const FabricCapacity: typeof import("./fabricCapacity").FabricCapacity = null as any;
utilities.lazyLoad(exports, ["FabricCapacity"], () => require("./fabricCapacity"));

export { GetFabricCapacityArgs, GetFabricCapacityResult, GetFabricCapacityOutputArgs } from "./getFabricCapacity";
export const getFabricCapacity: typeof import("./getFabricCapacity").getFabricCapacity = null as any;
export const getFabricCapacityOutput: typeof import("./getFabricCapacity").getFabricCapacityOutput = null as any;
utilities.lazyLoad(exports, ["getFabricCapacity","getFabricCapacityOutput"], () => require("./getFabricCapacity"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:fabric:FabricCapacity":
                return new FabricCapacity(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "fabric", _module)