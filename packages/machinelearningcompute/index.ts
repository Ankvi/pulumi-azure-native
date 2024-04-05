import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetOperationalizationClusterArgs, GetOperationalizationClusterResult, GetOperationalizationClusterOutputArgs } from "./getOperationalizationCluster";
export const getOperationalizationCluster: typeof import("./getOperationalizationCluster").getOperationalizationCluster = null as any;
export const getOperationalizationClusterOutput: typeof import("./getOperationalizationCluster").getOperationalizationClusterOutput = null as any;
utilities.lazyLoad(exports, ["getOperationalizationCluster","getOperationalizationClusterOutput"], () => require("./getOperationalizationCluster"));

export { ListOperationalizationClusterKeysArgs, ListOperationalizationClusterKeysResult, ListOperationalizationClusterKeysOutputArgs } from "./listOperationalizationClusterKeys";
export const listOperationalizationClusterKeys: typeof import("./listOperationalizationClusterKeys").listOperationalizationClusterKeys = null as any;
export const listOperationalizationClusterKeysOutput: typeof import("./listOperationalizationClusterKeys").listOperationalizationClusterKeysOutput = null as any;
utilities.lazyLoad(exports, ["listOperationalizationClusterKeys","listOperationalizationClusterKeysOutput"], () => require("./listOperationalizationClusterKeys"));

export { OperationalizationClusterArgs } from "./operationalizationCluster";
export type OperationalizationCluster = import("./operationalizationCluster").OperationalizationCluster;
export const OperationalizationCluster: typeof import("./operationalizationCluster").OperationalizationCluster = null as any;
utilities.lazyLoad(exports, ["OperationalizationCluster"], () => require("./operationalizationCluster"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20170801preview from "./v20170801preview";

export {
    v20170801preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:machinelearningcompute:OperationalizationCluster":
                return new OperationalizationCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "machinelearningcompute", _module)