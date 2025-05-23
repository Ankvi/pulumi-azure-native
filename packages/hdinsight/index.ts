import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApplicationArgs } from "./application";
export type Application = import("./application").Application;
export const Application: typeof import("./application").Application = null as any;
utilities.lazyLoad(exports, ["Application"], () => require("./application"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ClusterPoolArgs } from "./clusterPool";
export type ClusterPool = import("./clusterPool").ClusterPool;
export const ClusterPool: typeof import("./clusterPool").ClusterPool = null as any;
utilities.lazyLoad(exports, ["ClusterPool"], () => require("./clusterPool"));

export { ClusterPoolClusterArgs } from "./clusterPoolCluster";
export type ClusterPoolCluster = import("./clusterPoolCluster").ClusterPoolCluster;
export const ClusterPoolCluster: typeof import("./clusterPoolCluster").ClusterPoolCluster = null as any;
utilities.lazyLoad(exports, ["ClusterPoolCluster"], () => require("./clusterPoolCluster"));

export { GetApplicationArgs, GetApplicationResult, GetApplicationOutputArgs } from "./getApplication";
export const getApplication: typeof import("./getApplication").getApplication = null as any;
export const getApplicationOutput: typeof import("./getApplication").getApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getApplication","getApplicationOutput"], () => require("./getApplication"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetClusterGatewaySettingsArgs, GetClusterGatewaySettingsResult, GetClusterGatewaySettingsOutputArgs } from "./getClusterGatewaySettings";
export const getClusterGatewaySettings: typeof import("./getClusterGatewaySettings").getClusterGatewaySettings = null as any;
export const getClusterGatewaySettingsOutput: typeof import("./getClusterGatewaySettings").getClusterGatewaySettingsOutput = null as any;
utilities.lazyLoad(exports, ["getClusterGatewaySettings","getClusterGatewaySettingsOutput"], () => require("./getClusterGatewaySettings"));

export { GetClusterPoolArgs, GetClusterPoolResult, GetClusterPoolOutputArgs } from "./getClusterPool";
export const getClusterPool: typeof import("./getClusterPool").getClusterPool = null as any;
export const getClusterPoolOutput: typeof import("./getClusterPool").getClusterPoolOutput = null as any;
utilities.lazyLoad(exports, ["getClusterPool","getClusterPoolOutput"], () => require("./getClusterPool"));

export { GetClusterPoolClusterArgs, GetClusterPoolClusterResult, GetClusterPoolClusterOutputArgs } from "./getClusterPoolCluster";
export const getClusterPoolCluster: typeof import("./getClusterPoolCluster").getClusterPoolCluster = null as any;
export const getClusterPoolClusterOutput: typeof import("./getClusterPoolCluster").getClusterPoolClusterOutput = null as any;
utilities.lazyLoad(exports, ["getClusterPoolCluster","getClusterPoolClusterOutput"], () => require("./getClusterPoolCluster"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hdinsight:Application":
                return new Application(name, <any>undefined, { urn })
            case "azure-native:hdinsight:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:hdinsight:ClusterPool":
                return new ClusterPool(name, <any>undefined, { urn })
            case "azure-native:hdinsight:ClusterPoolCluster":
                return new ClusterPoolCluster(name, <any>undefined, { urn })
            case "azure-native:hdinsight:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hdinsight", _module)