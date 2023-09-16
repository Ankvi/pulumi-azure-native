import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { DefaultCniNetworkArgs } from "./defaultCniNetwork";
export type DefaultCniNetwork = import("./defaultCniNetwork").DefaultCniNetwork;
export const DefaultCniNetwork: typeof import("./defaultCniNetwork").DefaultCniNetwork = null as any;
utilities.lazyLoad(exports, ["DefaultCniNetwork"], () => require("./defaultCniNetwork"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetDefaultCniNetworkArgs, GetDefaultCniNetworkResult, GetDefaultCniNetworkOutputArgs } from "./getDefaultCniNetwork";
export const getDefaultCniNetwork: typeof import("./getDefaultCniNetwork").getDefaultCniNetwork = null as any;
export const getDefaultCniNetworkOutput: typeof import("./getDefaultCniNetwork").getDefaultCniNetworkOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultCniNetwork","getDefaultCniNetworkOutput"], () => require("./getDefaultCniNetwork"));

export { GetHybridAksClusterArgs, GetHybridAksClusterResult, GetHybridAksClusterOutputArgs } from "./getHybridAksCluster";
export const getHybridAksCluster: typeof import("./getHybridAksCluster").getHybridAksCluster = null as any;
export const getHybridAksClusterOutput: typeof import("./getHybridAksCluster").getHybridAksClusterOutput = null as any;
utilities.lazyLoad(exports, ["getHybridAksCluster","getHybridAksClusterOutput"], () => require("./getHybridAksCluster"));

export { HybridAksClusterArgs } from "./hybridAksCluster";
export type HybridAksCluster = import("./hybridAksCluster").HybridAksCluster;
export const HybridAksCluster: typeof import("./hybridAksCluster").HybridAksCluster = null as any;
utilities.lazyLoad(exports, ["HybridAksCluster"], () => require("./hybridAksCluster"));


// Export enums:
export * from "../types/enums/v20221212preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:networkcloud/v20221212preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:networkcloud/v20221212preview:DefaultCniNetwork":
                return new DefaultCniNetwork(name, <any>undefined, { urn })
            case "azure-native:networkcloud/v20221212preview:HybridAksCluster":
                return new HybridAksCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "networkcloud/v20221212preview", _module)
