import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ClusterPoolArgs } from "./clusterPool";
export type ClusterPool = import("./clusterPool").ClusterPool;
export const ClusterPool: typeof import("./clusterPool").ClusterPool = null as any;
utilities.lazyLoad(exports, ["ClusterPool"], () => require("./clusterPool"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetClusterPoolArgs, GetClusterPoolResult, GetClusterPoolOutputArgs } from "./getClusterPool";
export const getClusterPool: typeof import("./getClusterPool").getClusterPool = null as any;
export const getClusterPoolOutput: typeof import("./getClusterPool").getClusterPoolOutput = null as any;
utilities.lazyLoad(exports, ["getClusterPool","getClusterPoolOutput"], () => require("./getClusterPool"));


// Export enums:
export * from "../types/enums/v20230601preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hdinsight/v20230601preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:hdinsight/v20230601preview:ClusterPool":
                return new ClusterPool(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hdinsight/v20230601preview", _module)
