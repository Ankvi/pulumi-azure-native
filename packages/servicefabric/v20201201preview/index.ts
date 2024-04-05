import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { ListListUpgradableVersionPostArgs, ListListUpgradableVersionPostResult, ListListUpgradableVersionPostOutputArgs } from "./listListUpgradableVersionPost";
export const listListUpgradableVersionPost: typeof import("./listListUpgradableVersionPost").listListUpgradableVersionPost = null as any;
export const listListUpgradableVersionPostOutput: typeof import("./listListUpgradableVersionPost").listListUpgradableVersionPostOutput = null as any;
utilities.lazyLoad(exports, ["listListUpgradableVersionPost","listListUpgradableVersionPostOutput"], () => require("./listListUpgradableVersionPost"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:servicefabric/v20201201preview:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "servicefabric/v20201201preview", _module)