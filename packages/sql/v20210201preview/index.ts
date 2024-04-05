import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagedInstanceArgs, GetManagedInstanceResult, GetManagedInstanceOutputArgs } from "./getManagedInstance";
export const getManagedInstance: typeof import("./getManagedInstance").getManagedInstance = null as any;
export const getManagedInstanceOutput: typeof import("./getManagedInstance").getManagedInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getManagedInstance","getManagedInstanceOutput"], () => require("./getManagedInstance"));

export { ManagedInstanceArgs } from "./managedInstance";
export type ManagedInstance = import("./managedInstance").ManagedInstance;
export const ManagedInstance: typeof import("./managedInstance").ManagedInstance = null as any;
utilities.lazyLoad(exports, ["ManagedInstance"], () => require("./managedInstance"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:sql/v20210201preview:ManagedInstance":
                return new ManagedInstance(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "sql/v20210201preview", _module)