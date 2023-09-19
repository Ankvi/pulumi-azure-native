import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AttachedDatabaseConfigurationArgs } from "./attachedDatabaseConfiguration";
export type AttachedDatabaseConfiguration = import("./attachedDatabaseConfiguration").AttachedDatabaseConfiguration;
export const AttachedDatabaseConfiguration: typeof import("./attachedDatabaseConfiguration").AttachedDatabaseConfiguration = null as any;
utilities.lazyLoad(exports, ["AttachedDatabaseConfiguration"], () => require("./attachedDatabaseConfiguration"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

export { ClusterPrincipalAssignmentArgs } from "./clusterPrincipalAssignment";
export type ClusterPrincipalAssignment = import("./clusterPrincipalAssignment").ClusterPrincipalAssignment;
export const ClusterPrincipalAssignment: typeof import("./clusterPrincipalAssignment").ClusterPrincipalAssignment = null as any;
utilities.lazyLoad(exports, ["ClusterPrincipalAssignment"], () => require("./clusterPrincipalAssignment"));

export { CosmosDbDataConnectionArgs } from "./cosmosDbDataConnection";
export type CosmosDbDataConnection = import("./cosmosDbDataConnection").CosmosDbDataConnection;
export const CosmosDbDataConnection: typeof import("./cosmosDbDataConnection").CosmosDbDataConnection = null as any;
utilities.lazyLoad(exports, ["CosmosDbDataConnection"], () => require("./cosmosDbDataConnection"));

export { DatabasePrincipalAssignmentArgs } from "./databasePrincipalAssignment";
export type DatabasePrincipalAssignment = import("./databasePrincipalAssignment").DatabasePrincipalAssignment;
export const DatabasePrincipalAssignment: typeof import("./databasePrincipalAssignment").DatabasePrincipalAssignment = null as any;
utilities.lazyLoad(exports, ["DatabasePrincipalAssignment"], () => require("./databasePrincipalAssignment"));

export { EventGridDataConnectionArgs } from "./eventGridDataConnection";
export type EventGridDataConnection = import("./eventGridDataConnection").EventGridDataConnection;
export const EventGridDataConnection: typeof import("./eventGridDataConnection").EventGridDataConnection = null as any;
utilities.lazyLoad(exports, ["EventGridDataConnection"], () => require("./eventGridDataConnection"));

export { EventHubDataConnectionArgs } from "./eventHubDataConnection";
export type EventHubDataConnection = import("./eventHubDataConnection").EventHubDataConnection;
export const EventHubDataConnection: typeof import("./eventHubDataConnection").EventHubDataConnection = null as any;
utilities.lazyLoad(exports, ["EventHubDataConnection"], () => require("./eventHubDataConnection"));

export { GetAttachedDatabaseConfigurationArgs, GetAttachedDatabaseConfigurationResult, GetAttachedDatabaseConfigurationOutputArgs } from "./getAttachedDatabaseConfiguration";
export const getAttachedDatabaseConfiguration: typeof import("./getAttachedDatabaseConfiguration").getAttachedDatabaseConfiguration = null as any;
export const getAttachedDatabaseConfigurationOutput: typeof import("./getAttachedDatabaseConfiguration").getAttachedDatabaseConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getAttachedDatabaseConfiguration","getAttachedDatabaseConfigurationOutput"], () => require("./getAttachedDatabaseConfiguration"));

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

export { GetClusterPrincipalAssignmentArgs, GetClusterPrincipalAssignmentResult, GetClusterPrincipalAssignmentOutputArgs } from "./getClusterPrincipalAssignment";
export const getClusterPrincipalAssignment: typeof import("./getClusterPrincipalAssignment").getClusterPrincipalAssignment = null as any;
export const getClusterPrincipalAssignmentOutput: typeof import("./getClusterPrincipalAssignment").getClusterPrincipalAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getClusterPrincipalAssignment","getClusterPrincipalAssignmentOutput"], () => require("./getClusterPrincipalAssignment"));

export { GetCosmosDbDataConnectionArgs, GetCosmosDbDataConnectionResult, GetCosmosDbDataConnectionOutputArgs } from "./getCosmosDbDataConnection";
export const getCosmosDbDataConnection: typeof import("./getCosmosDbDataConnection").getCosmosDbDataConnection = null as any;
export const getCosmosDbDataConnectionOutput: typeof import("./getCosmosDbDataConnection").getCosmosDbDataConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getCosmosDbDataConnection","getCosmosDbDataConnectionOutput"], () => require("./getCosmosDbDataConnection"));

export { GetDatabasePrincipalAssignmentArgs, GetDatabasePrincipalAssignmentResult, GetDatabasePrincipalAssignmentOutputArgs } from "./getDatabasePrincipalAssignment";
export const getDatabasePrincipalAssignment: typeof import("./getDatabasePrincipalAssignment").getDatabasePrincipalAssignment = null as any;
export const getDatabasePrincipalAssignmentOutput: typeof import("./getDatabasePrincipalAssignment").getDatabasePrincipalAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getDatabasePrincipalAssignment","getDatabasePrincipalAssignmentOutput"], () => require("./getDatabasePrincipalAssignment"));

export { GetEventGridDataConnectionArgs, GetEventGridDataConnectionResult, GetEventGridDataConnectionOutputArgs } from "./getEventGridDataConnection";
export const getEventGridDataConnection: typeof import("./getEventGridDataConnection").getEventGridDataConnection = null as any;
export const getEventGridDataConnectionOutput: typeof import("./getEventGridDataConnection").getEventGridDataConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEventGridDataConnection","getEventGridDataConnectionOutput"], () => require("./getEventGridDataConnection"));

export { GetEventHubDataConnectionArgs, GetEventHubDataConnectionResult, GetEventHubDataConnectionOutputArgs } from "./getEventHubDataConnection";
export const getEventHubDataConnection: typeof import("./getEventHubDataConnection").getEventHubDataConnection = null as any;
export const getEventHubDataConnectionOutput: typeof import("./getEventHubDataConnection").getEventHubDataConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEventHubDataConnection","getEventHubDataConnectionOutput"], () => require("./getEventHubDataConnection"));

export { GetIotHubDataConnectionArgs, GetIotHubDataConnectionResult, GetIotHubDataConnectionOutputArgs } from "./getIotHubDataConnection";
export const getIotHubDataConnection: typeof import("./getIotHubDataConnection").getIotHubDataConnection = null as any;
export const getIotHubDataConnectionOutput: typeof import("./getIotHubDataConnection").getIotHubDataConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getIotHubDataConnection","getIotHubDataConnectionOutput"], () => require("./getIotHubDataConnection"));

export { GetManagedPrivateEndpointArgs, GetManagedPrivateEndpointResult, GetManagedPrivateEndpointOutputArgs } from "./getManagedPrivateEndpoint";
export const getManagedPrivateEndpoint: typeof import("./getManagedPrivateEndpoint").getManagedPrivateEndpoint = null as any;
export const getManagedPrivateEndpointOutput: typeof import("./getManagedPrivateEndpoint").getManagedPrivateEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getManagedPrivateEndpoint","getManagedPrivateEndpointOutput"], () => require("./getManagedPrivateEndpoint"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetReadOnlyFollowingDatabaseArgs, GetReadOnlyFollowingDatabaseResult, GetReadOnlyFollowingDatabaseOutputArgs } from "./getReadOnlyFollowingDatabase";
export const getReadOnlyFollowingDatabase: typeof import("./getReadOnlyFollowingDatabase").getReadOnlyFollowingDatabase = null as any;
export const getReadOnlyFollowingDatabaseOutput: typeof import("./getReadOnlyFollowingDatabase").getReadOnlyFollowingDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getReadOnlyFollowingDatabase","getReadOnlyFollowingDatabaseOutput"], () => require("./getReadOnlyFollowingDatabase"));

export { GetReadWriteDatabaseArgs, GetReadWriteDatabaseResult, GetReadWriteDatabaseOutputArgs } from "./getReadWriteDatabase";
export const getReadWriteDatabase: typeof import("./getReadWriteDatabase").getReadWriteDatabase = null as any;
export const getReadWriteDatabaseOutput: typeof import("./getReadWriteDatabase").getReadWriteDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getReadWriteDatabase","getReadWriteDatabaseOutput"], () => require("./getReadWriteDatabase"));

export { GetScriptArgs, GetScriptResult, GetScriptOutputArgs } from "./getScript";
export const getScript: typeof import("./getScript").getScript = null as any;
export const getScriptOutput: typeof import("./getScript").getScriptOutput = null as any;
utilities.lazyLoad(exports, ["getScript","getScriptOutput"], () => require("./getScript"));

export { IotHubDataConnectionArgs } from "./iotHubDataConnection";
export type IotHubDataConnection = import("./iotHubDataConnection").IotHubDataConnection;
export const IotHubDataConnection: typeof import("./iotHubDataConnection").IotHubDataConnection = null as any;
utilities.lazyLoad(exports, ["IotHubDataConnection"], () => require("./iotHubDataConnection"));

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

export { ManagedPrivateEndpointArgs } from "./managedPrivateEndpoint";
export type ManagedPrivateEndpoint = import("./managedPrivateEndpoint").ManagedPrivateEndpoint;
export const ManagedPrivateEndpoint: typeof import("./managedPrivateEndpoint").ManagedPrivateEndpoint = null as any;
utilities.lazyLoad(exports, ["ManagedPrivateEndpoint"], () => require("./managedPrivateEndpoint"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ReadOnlyFollowingDatabaseArgs } from "./readOnlyFollowingDatabase";
export type ReadOnlyFollowingDatabase = import("./readOnlyFollowingDatabase").ReadOnlyFollowingDatabase;
export const ReadOnlyFollowingDatabase: typeof import("./readOnlyFollowingDatabase").ReadOnlyFollowingDatabase = null as any;
utilities.lazyLoad(exports, ["ReadOnlyFollowingDatabase"], () => require("./readOnlyFollowingDatabase"));

export { ReadWriteDatabaseArgs } from "./readWriteDatabase";
export type ReadWriteDatabase = import("./readWriteDatabase").ReadWriteDatabase;
export const ReadWriteDatabase: typeof import("./readWriteDatabase").ReadWriteDatabase = null as any;
utilities.lazyLoad(exports, ["ReadWriteDatabase"], () => require("./readWriteDatabase"));

export { ScriptArgs } from "./script";
export type Script = import("./script").Script;
export const Script: typeof import("./script").Script = null as any;
utilities.lazyLoad(exports, ["Script"], () => require("./script"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:kusto/v20230502:AttachedDatabaseConfiguration":
                return new AttachedDatabaseConfiguration(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:Cluster":
                return new Cluster(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:ClusterPrincipalAssignment":
                return new ClusterPrincipalAssignment(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:CosmosDbDataConnection":
                return new CosmosDbDataConnection(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:DatabasePrincipalAssignment":
                return new DatabasePrincipalAssignment(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:EventGridDataConnection":
                return new EventGridDataConnection(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:EventHubDataConnection":
                return new EventHubDataConnection(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:IotHubDataConnection":
                return new IotHubDataConnection(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:ManagedPrivateEndpoint":
                return new ManagedPrivateEndpoint(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:ReadOnlyFollowingDatabase":
                return new ReadOnlyFollowingDatabase(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:ReadWriteDatabase":
                return new ReadWriteDatabase(name, <any>undefined, { urn })
            case "azure-native:kusto/v20230502:Script":
                return new Script(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "kusto/v20230502", _module)
