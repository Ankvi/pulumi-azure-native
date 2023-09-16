import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagedClusterArgs, GetManagedClusterResult, GetManagedClusterOutputArgs } from "./getManagedCluster";
export const getManagedCluster: typeof import("./getManagedCluster").getManagedCluster = null as any;
export const getManagedClusterOutput: typeof import("./getManagedCluster").getManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getManagedCluster","getManagedClusterOutput"], () => require("./getManagedCluster"));

export { GetmanagedAzResiliencyStatusArgs, GetmanagedAzResiliencyStatusResult, GetmanagedAzResiliencyStatusOutputArgs } from "./getmanagedAzResiliencyStatus";
export const getmanagedAzResiliencyStatus: typeof import("./getmanagedAzResiliencyStatus").getmanagedAzResiliencyStatus = null as any;
export const getmanagedAzResiliencyStatusOutput: typeof import("./getmanagedAzResiliencyStatus").getmanagedAzResiliencyStatusOutput = null as any;
utilities.lazyLoad(exports, ["getmanagedAzResiliencyStatus","getmanagedAzResiliencyStatusOutput"], () => require("./getmanagedAzResiliencyStatus"));

export { ManagedClusterArgs } from "./managedCluster";
export type ManagedCluster = import("./managedCluster").ManagedCluster;
export const ManagedCluster: typeof import("./managedCluster").ManagedCluster = null as any;
utilities.lazyLoad(exports, ["ManagedCluster"], () => require("./managedCluster"));


// Export enums:
export * from "../types/enums/v20221001preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicefabric/v20221001preview:ManagedCluster":
                return new ManagedCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicefabric/v20221001preview", _module)
