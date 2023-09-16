import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CassandraClusterArgs } from "./cassandraCluster";
export type CassandraCluster = import("./cassandraCluster").CassandraCluster;
export const CassandraCluster: typeof import("./cassandraCluster").CassandraCluster = null as any;
utilities.lazyLoad(exports, ["CassandraCluster"], () => require("./cassandraCluster"));

export { GetCassandraClusterArgs, GetCassandraClusterResult, GetCassandraClusterOutputArgs } from "./getCassandraCluster";
export const getCassandraCluster: typeof import("./getCassandraCluster").getCassandraCluster = null as any;
export const getCassandraClusterOutput: typeof import("./getCassandraCluster").getCassandraClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraCluster","getCassandraClusterOutput"], () => require("./getCassandraCluster"));


// Export enums:
export * from "../types/enums/v20210701preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:documentdb/v20210701preview:CassandraCluster":
                return new CassandraCluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "documentdb/v20210701preview", _module)
