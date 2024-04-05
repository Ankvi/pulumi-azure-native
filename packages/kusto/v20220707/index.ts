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

export { ListClusterFollowerDatabasesArgs, ListClusterFollowerDatabasesResult, ListClusterFollowerDatabasesOutputArgs } from "./listClusterFollowerDatabases";
export const listClusterFollowerDatabases: typeof import("./listClusterFollowerDatabases").listClusterFollowerDatabases = null as any;
export const listClusterFollowerDatabasesOutput: typeof import("./listClusterFollowerDatabases").listClusterFollowerDatabasesOutput = null as any;
utilities.lazyLoad(exports, ["listClusterFollowerDatabases","listClusterFollowerDatabasesOutput"], () => require("./listClusterFollowerDatabases"));

export { ListClusterLanguageExtensionsArgs, ListClusterLanguageExtensionsResult, ListClusterLanguageExtensionsOutputArgs } from "./listClusterLanguageExtensions";
export const listClusterLanguageExtensions: typeof import("./listClusterLanguageExtensions").listClusterLanguageExtensions = null as any;
export const listClusterLanguageExtensionsOutput: typeof import("./listClusterLanguageExtensions").listClusterLanguageExtensionsOutput = null as any;
utilities.lazyLoad(exports, ["listClusterLanguageExtensions","listClusterLanguageExtensionsOutput"], () => require("./listClusterLanguageExtensions"));

export { ListDatabasePrincipalsArgs, ListDatabasePrincipalsResult, ListDatabasePrincipalsOutputArgs } from "./listDatabasePrincipals";
export const listDatabasePrincipals: typeof import("./listDatabasePrincipals").listDatabasePrincipals = null as any;
export const listDatabasePrincipalsOutput: typeof import("./listDatabasePrincipals").listDatabasePrincipalsOutput = null as any;
utilities.lazyLoad(exports, ["listDatabasePrincipals","listDatabasePrincipalsOutput"], () => require("./listDatabasePrincipals"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20220707:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20220707", _module)