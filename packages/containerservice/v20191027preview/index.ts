import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOpenShiftManagedClusterArgs, GetOpenShiftManagedClusterResult, GetOpenShiftManagedClusterOutputArgs } from "./getOpenShiftManagedCluster";
export const getOpenShiftManagedCluster: typeof import("./getOpenShiftManagedCluster").getOpenShiftManagedCluster = null as any;
export const getOpenShiftManagedClusterOutput: typeof import("./getOpenShiftManagedCluster").getOpenShiftManagedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getOpenShiftManagedCluster","getOpenShiftManagedClusterOutput"], () => require("./getOpenShiftManagedCluster"));

export { OpenShiftManagedClusterArgs } from "./openShiftManagedCluster";
export type OpenShiftManagedCluster = import("./openShiftManagedCluster").OpenShiftManagedCluster;
export const OpenShiftManagedCluster: typeof import("./openShiftManagedCluster").OpenShiftManagedCluster = null as any;
utilities.lazyLoad(exports, ["OpenShiftManagedCluster"], () => require("./openShiftManagedCluster"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerservice/v20191027preview:OpenShiftManagedCluster":
                return new OpenShiftManagedCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerservice/v20191027preview", _module)