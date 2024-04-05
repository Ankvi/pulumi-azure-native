import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CassandraClusterArgs } from "./cassandraCluster";
export type CassandraCluster = import("./cassandraCluster").CassandraCluster;
export const CassandraCluster: typeof import("./cassandraCluster").CassandraCluster = null as any;
utilities.lazyLoad(exports, ["CassandraCluster"], () => require("./cassandraCluster"));

export { CassandraDataCenterArgs } from "./cassandraDataCenter";
export type CassandraDataCenter = import("./cassandraDataCenter").CassandraDataCenter;
export const CassandraDataCenter: typeof import("./cassandraDataCenter").CassandraDataCenter = null as any;
utilities.lazyLoad(exports, ["CassandraDataCenter"], () => require("./cassandraDataCenter"));

export { CassandraResourceCassandraKeyspaceArgs } from "./cassandraResourceCassandraKeyspace";
export type CassandraResourceCassandraKeyspace = import("./cassandraResourceCassandraKeyspace").CassandraResourceCassandraKeyspace;
export const CassandraResourceCassandraKeyspace: typeof import("./cassandraResourceCassandraKeyspace").CassandraResourceCassandraKeyspace = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraKeyspace"], () => require("./cassandraResourceCassandraKeyspace"));

export { CassandraResourceCassandraTableArgs } from "./cassandraResourceCassandraTable";
export type CassandraResourceCassandraTable = import("./cassandraResourceCassandraTable").CassandraResourceCassandraTable;
export const CassandraResourceCassandraTable: typeof import("./cassandraResourceCassandraTable").CassandraResourceCassandraTable = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraTable"], () => require("./cassandraResourceCassandraTable"));

export { DatabaseAccountArgs } from "./databaseAccount";
export type DatabaseAccount = import("./databaseAccount").DatabaseAccount;
export const DatabaseAccount: typeof import("./databaseAccount").DatabaseAccount = null as any;
utilities.lazyLoad(exports, ["DatabaseAccount"], () => require("./databaseAccount"));

export { GetCassandraClusterArgs, GetCassandraClusterResult, GetCassandraClusterOutputArgs } from "./getCassandraCluster";
export const getCassandraCluster: typeof import("./getCassandraCluster").getCassandraCluster = null as any;
export const getCassandraClusterOutput: typeof import("./getCassandraCluster").getCassandraClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraCluster","getCassandraClusterOutput"], () => require("./getCassandraCluster"));

export { GetCassandraDataCenterArgs, GetCassandraDataCenterResult, GetCassandraDataCenterOutputArgs } from "./getCassandraDataCenter";
export const getCassandraDataCenter: typeof import("./getCassandraDataCenter").getCassandraDataCenter = null as any;
export const getCassandraDataCenterOutput: typeof import("./getCassandraDataCenter").getCassandraDataCenterOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraDataCenter","getCassandraDataCenterOutput"], () => require("./getCassandraDataCenter"));

export { GetCassandraResourceCassandraKeyspaceArgs, GetCassandraResourceCassandraKeyspaceResult, GetCassandraResourceCassandraKeyspaceOutputArgs } from "./getCassandraResourceCassandraKeyspace";
export const getCassandraResourceCassandraKeyspace: typeof import("./getCassandraResourceCassandraKeyspace").getCassandraResourceCassandraKeyspace = null as any;
export const getCassandraResourceCassandraKeyspaceOutput: typeof import("./getCassandraResourceCassandraKeyspace").getCassandraResourceCassandraKeyspaceOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraKeyspace","getCassandraResourceCassandraKeyspaceOutput"], () => require("./getCassandraResourceCassandraKeyspace"));

export { GetCassandraResourceCassandraTableArgs, GetCassandraResourceCassandraTableResult, GetCassandraResourceCassandraTableOutputArgs } from "./getCassandraResourceCassandraTable";
export const getCassandraResourceCassandraTable: typeof import("./getCassandraResourceCassandraTable").getCassandraResourceCassandraTable = null as any;
export const getCassandraResourceCassandraTableOutput: typeof import("./getCassandraResourceCassandraTable").getCassandraResourceCassandraTableOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraTable","getCassandraResourceCassandraTableOutput"], () => require("./getCassandraResourceCassandraTable"));

export { GetDatabaseAccountArgs, GetDatabaseAccountResult, GetDatabaseAccountOutputArgs } from "./getDatabaseAccount";
export const getDatabaseAccount: typeof import("./getDatabaseAccount").getDatabaseAccount = null as any;
export const getDatabaseAccountOutput: typeof import("./getDatabaseAccount").getDatabaseAccountOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccount","getDatabaseAccountOutput"], () => require("./getDatabaseAccount"));

export { GetGremlinResourceGremlinDatabaseArgs, GetGremlinResourceGremlinDatabaseResult, GetGremlinResourceGremlinDatabaseOutputArgs } from "./getGremlinResourceGremlinDatabase";
export const getGremlinResourceGremlinDatabase: typeof import("./getGremlinResourceGremlinDatabase").getGremlinResourceGremlinDatabase = null as any;
export const getGremlinResourceGremlinDatabaseOutput: typeof import("./getGremlinResourceGremlinDatabase").getGremlinResourceGremlinDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinDatabase","getGremlinResourceGremlinDatabaseOutput"], () => require("./getGremlinResourceGremlinDatabase"));

export { GetGremlinResourceGremlinGraphArgs, GetGremlinResourceGremlinGraphResult, GetGremlinResourceGremlinGraphOutputArgs } from "./getGremlinResourceGremlinGraph";
export const getGremlinResourceGremlinGraph: typeof import("./getGremlinResourceGremlinGraph").getGremlinResourceGremlinGraph = null as any;
export const getGremlinResourceGremlinGraphOutput: typeof import("./getGremlinResourceGremlinGraph").getGremlinResourceGremlinGraphOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinGraph","getGremlinResourceGremlinGraphOutput"], () => require("./getGremlinResourceGremlinGraph"));

export { GetMongoDBResourceMongoDBCollectionArgs, GetMongoDBResourceMongoDBCollectionResult, GetMongoDBResourceMongoDBCollectionOutputArgs } from "./getMongoDBResourceMongoDBCollection";
export const getMongoDBResourceMongoDBCollection: typeof import("./getMongoDBResourceMongoDBCollection").getMongoDBResourceMongoDBCollection = null as any;
export const getMongoDBResourceMongoDBCollectionOutput: typeof import("./getMongoDBResourceMongoDBCollection").getMongoDBResourceMongoDBCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoDBCollection","getMongoDBResourceMongoDBCollectionOutput"], () => require("./getMongoDBResourceMongoDBCollection"));

export { GetMongoDBResourceMongoDBDatabaseArgs, GetMongoDBResourceMongoDBDatabaseResult, GetMongoDBResourceMongoDBDatabaseOutputArgs } from "./getMongoDBResourceMongoDBDatabase";
export const getMongoDBResourceMongoDBDatabase: typeof import("./getMongoDBResourceMongoDBDatabase").getMongoDBResourceMongoDBDatabase = null as any;
export const getMongoDBResourceMongoDBDatabaseOutput: typeof import("./getMongoDBResourceMongoDBDatabase").getMongoDBResourceMongoDBDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoDBDatabase","getMongoDBResourceMongoDBDatabaseOutput"], () => require("./getMongoDBResourceMongoDBDatabase"));

export { GetMongoDBResourceMongoRoleDefinitionArgs, GetMongoDBResourceMongoRoleDefinitionResult, GetMongoDBResourceMongoRoleDefinitionOutputArgs } from "./getMongoDBResourceMongoRoleDefinition";
export const getMongoDBResourceMongoRoleDefinition: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinition = null as any;
export const getMongoDBResourceMongoRoleDefinitionOutput: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoRoleDefinition","getMongoDBResourceMongoRoleDefinitionOutput"], () => require("./getMongoDBResourceMongoRoleDefinition"));

export { GetMongoDBResourceMongoUserDefinitionArgs, GetMongoDBResourceMongoUserDefinitionResult, GetMongoDBResourceMongoUserDefinitionOutputArgs } from "./getMongoDBResourceMongoUserDefinition";
export const getMongoDBResourceMongoUserDefinition: typeof import("./getMongoDBResourceMongoUserDefinition").getMongoDBResourceMongoUserDefinition = null as any;
export const getMongoDBResourceMongoUserDefinitionOutput: typeof import("./getMongoDBResourceMongoUserDefinition").getMongoDBResourceMongoUserDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoUserDefinition","getMongoDBResourceMongoUserDefinitionOutput"], () => require("./getMongoDBResourceMongoUserDefinition"));

export { GetNotebookWorkspaceArgs, GetNotebookWorkspaceResult, GetNotebookWorkspaceOutputArgs } from "./getNotebookWorkspace";
export const getNotebookWorkspace: typeof import("./getNotebookWorkspace").getNotebookWorkspace = null as any;
export const getNotebookWorkspaceOutput: typeof import("./getNotebookWorkspace").getNotebookWorkspaceOutput = null as any;
utilities.lazyLoad(exports, ["getNotebookWorkspace","getNotebookWorkspaceOutput"], () => require("./getNotebookWorkspace"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServiceArgs, GetServiceResult, GetServiceOutputArgs } from "./getService";
export const getService: typeof import("./getService").getService = null as any;
export const getServiceOutput: typeof import("./getService").getServiceOutput = null as any;
utilities.lazyLoad(exports, ["getService","getServiceOutput"], () => require("./getService"));

export { GetSqlResourceSqlContainerArgs, GetSqlResourceSqlContainerResult, GetSqlResourceSqlContainerOutputArgs } from "./getSqlResourceSqlContainer";
export const getSqlResourceSqlContainer: typeof import("./getSqlResourceSqlContainer").getSqlResourceSqlContainer = null as any;
export const getSqlResourceSqlContainerOutput: typeof import("./getSqlResourceSqlContainer").getSqlResourceSqlContainerOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlContainer","getSqlResourceSqlContainerOutput"], () => require("./getSqlResourceSqlContainer"));

export { GetSqlResourceSqlDatabaseArgs, GetSqlResourceSqlDatabaseResult, GetSqlResourceSqlDatabaseOutputArgs } from "./getSqlResourceSqlDatabase";
export const getSqlResourceSqlDatabase: typeof import("./getSqlResourceSqlDatabase").getSqlResourceSqlDatabase = null as any;
export const getSqlResourceSqlDatabaseOutput: typeof import("./getSqlResourceSqlDatabase").getSqlResourceSqlDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlDatabase","getSqlResourceSqlDatabaseOutput"], () => require("./getSqlResourceSqlDatabase"));

export { GetSqlResourceSqlRoleAssignmentArgs, GetSqlResourceSqlRoleAssignmentResult, GetSqlResourceSqlRoleAssignmentOutputArgs } from "./getSqlResourceSqlRoleAssignment";
export const getSqlResourceSqlRoleAssignment: typeof import("./getSqlResourceSqlRoleAssignment").getSqlResourceSqlRoleAssignment = null as any;
export const getSqlResourceSqlRoleAssignmentOutput: typeof import("./getSqlResourceSqlRoleAssignment").getSqlResourceSqlRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlRoleAssignment","getSqlResourceSqlRoleAssignmentOutput"], () => require("./getSqlResourceSqlRoleAssignment"));

export { GetSqlResourceSqlRoleDefinitionArgs, GetSqlResourceSqlRoleDefinitionResult, GetSqlResourceSqlRoleDefinitionOutputArgs } from "./getSqlResourceSqlRoleDefinition";
export const getSqlResourceSqlRoleDefinition: typeof import("./getSqlResourceSqlRoleDefinition").getSqlResourceSqlRoleDefinition = null as any;
export const getSqlResourceSqlRoleDefinitionOutput: typeof import("./getSqlResourceSqlRoleDefinition").getSqlResourceSqlRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlRoleDefinition","getSqlResourceSqlRoleDefinitionOutput"], () => require("./getSqlResourceSqlRoleDefinition"));

export { GetSqlResourceSqlStoredProcedureArgs, GetSqlResourceSqlStoredProcedureResult, GetSqlResourceSqlStoredProcedureOutputArgs } from "./getSqlResourceSqlStoredProcedure";
export const getSqlResourceSqlStoredProcedure: typeof import("./getSqlResourceSqlStoredProcedure").getSqlResourceSqlStoredProcedure = null as any;
export const getSqlResourceSqlStoredProcedureOutput: typeof import("./getSqlResourceSqlStoredProcedure").getSqlResourceSqlStoredProcedureOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlStoredProcedure","getSqlResourceSqlStoredProcedureOutput"], () => require("./getSqlResourceSqlStoredProcedure"));

export { GetSqlResourceSqlTriggerArgs, GetSqlResourceSqlTriggerResult, GetSqlResourceSqlTriggerOutputArgs } from "./getSqlResourceSqlTrigger";
export const getSqlResourceSqlTrigger: typeof import("./getSqlResourceSqlTrigger").getSqlResourceSqlTrigger = null as any;
export const getSqlResourceSqlTriggerOutput: typeof import("./getSqlResourceSqlTrigger").getSqlResourceSqlTriggerOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlTrigger","getSqlResourceSqlTriggerOutput"], () => require("./getSqlResourceSqlTrigger"));

export { GetSqlResourceSqlUserDefinedFunctionArgs, GetSqlResourceSqlUserDefinedFunctionResult, GetSqlResourceSqlUserDefinedFunctionOutputArgs } from "./getSqlResourceSqlUserDefinedFunction";
export const getSqlResourceSqlUserDefinedFunction: typeof import("./getSqlResourceSqlUserDefinedFunction").getSqlResourceSqlUserDefinedFunction = null as any;
export const getSqlResourceSqlUserDefinedFunctionOutput: typeof import("./getSqlResourceSqlUserDefinedFunction").getSqlResourceSqlUserDefinedFunctionOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlUserDefinedFunction","getSqlResourceSqlUserDefinedFunctionOutput"], () => require("./getSqlResourceSqlUserDefinedFunction"));

export { GetTableResourceTableArgs, GetTableResourceTableResult, GetTableResourceTableOutputArgs } from "./getTableResourceTable";
export const getTableResourceTable: typeof import("./getTableResourceTable").getTableResourceTable = null as any;
export const getTableResourceTableOutput: typeof import("./getTableResourceTable").getTableResourceTableOutput = null as any;
utilities.lazyLoad(exports, ["getTableResourceTable","getTableResourceTableOutput"], () => require("./getTableResourceTable"));

export { GremlinResourceGremlinDatabaseArgs } from "./gremlinResourceGremlinDatabase";
export type GremlinResourceGremlinDatabase = import("./gremlinResourceGremlinDatabase").GremlinResourceGremlinDatabase;
export const GremlinResourceGremlinDatabase: typeof import("./gremlinResourceGremlinDatabase").GremlinResourceGremlinDatabase = null as any;
utilities.lazyLoad(exports, ["GremlinResourceGremlinDatabase"], () => require("./gremlinResourceGremlinDatabase"));

export { GremlinResourceGremlinGraphArgs } from "./gremlinResourceGremlinGraph";
export type GremlinResourceGremlinGraph = import("./gremlinResourceGremlinGraph").GremlinResourceGremlinGraph;
export const GremlinResourceGremlinGraph: typeof import("./gremlinResourceGremlinGraph").GremlinResourceGremlinGraph = null as any;
utilities.lazyLoad(exports, ["GremlinResourceGremlinGraph"], () => require("./gremlinResourceGremlinGraph"));

export { ListDatabaseAccountConnectionStringsArgs, ListDatabaseAccountConnectionStringsResult, ListDatabaseAccountConnectionStringsOutputArgs } from "./listDatabaseAccountConnectionStrings";
export const listDatabaseAccountConnectionStrings: typeof import("./listDatabaseAccountConnectionStrings").listDatabaseAccountConnectionStrings = null as any;
export const listDatabaseAccountConnectionStringsOutput: typeof import("./listDatabaseAccountConnectionStrings").listDatabaseAccountConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseAccountConnectionStrings","listDatabaseAccountConnectionStringsOutput"], () => require("./listDatabaseAccountConnectionStrings"));

export { ListDatabaseAccountKeysArgs, ListDatabaseAccountKeysResult, ListDatabaseAccountKeysOutputArgs } from "./listDatabaseAccountKeys";
export const listDatabaseAccountKeys: typeof import("./listDatabaseAccountKeys").listDatabaseAccountKeys = null as any;
export const listDatabaseAccountKeysOutput: typeof import("./listDatabaseAccountKeys").listDatabaseAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseAccountKeys","listDatabaseAccountKeysOutput"], () => require("./listDatabaseAccountKeys"));

export { ListNotebookWorkspaceConnectionInfoArgs, ListNotebookWorkspaceConnectionInfoResult, ListNotebookWorkspaceConnectionInfoOutputArgs } from "./listNotebookWorkspaceConnectionInfo";
export const listNotebookWorkspaceConnectionInfo: typeof import("./listNotebookWorkspaceConnectionInfo").listNotebookWorkspaceConnectionInfo = null as any;
export const listNotebookWorkspaceConnectionInfoOutput: typeof import("./listNotebookWorkspaceConnectionInfo").listNotebookWorkspaceConnectionInfoOutput = null as any;
utilities.lazyLoad(exports, ["listNotebookWorkspaceConnectionInfo","listNotebookWorkspaceConnectionInfoOutput"], () => require("./listNotebookWorkspaceConnectionInfo"));

export { MongoDBResourceMongoDBCollectionArgs } from "./mongoDBResourceMongoDBCollection";
export type MongoDBResourceMongoDBCollection = import("./mongoDBResourceMongoDBCollection").MongoDBResourceMongoDBCollection;
export const MongoDBResourceMongoDBCollection: typeof import("./mongoDBResourceMongoDBCollection").MongoDBResourceMongoDBCollection = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoDBCollection"], () => require("./mongoDBResourceMongoDBCollection"));

export { MongoDBResourceMongoDBDatabaseArgs } from "./mongoDBResourceMongoDBDatabase";
export type MongoDBResourceMongoDBDatabase = import("./mongoDBResourceMongoDBDatabase").MongoDBResourceMongoDBDatabase;
export const MongoDBResourceMongoDBDatabase: typeof import("./mongoDBResourceMongoDBDatabase").MongoDBResourceMongoDBDatabase = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoDBDatabase"], () => require("./mongoDBResourceMongoDBDatabase"));

export { MongoDBResourceMongoRoleDefinitionArgs } from "./mongoDBResourceMongoRoleDefinition";
export type MongoDBResourceMongoRoleDefinition = import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition;
export const MongoDBResourceMongoRoleDefinition: typeof import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoRoleDefinition"], () => require("./mongoDBResourceMongoRoleDefinition"));

export { MongoDBResourceMongoUserDefinitionArgs } from "./mongoDBResourceMongoUserDefinition";
export type MongoDBResourceMongoUserDefinition = import("./mongoDBResourceMongoUserDefinition").MongoDBResourceMongoUserDefinition;
export const MongoDBResourceMongoUserDefinition: typeof import("./mongoDBResourceMongoUserDefinition").MongoDBResourceMongoUserDefinition = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoUserDefinition"], () => require("./mongoDBResourceMongoUserDefinition"));

export { NotebookWorkspaceArgs } from "./notebookWorkspace";
export type NotebookWorkspace = import("./notebookWorkspace").NotebookWorkspace;
export const NotebookWorkspace: typeof import("./notebookWorkspace").NotebookWorkspace = null as any;
utilities.lazyLoad(exports, ["NotebookWorkspace"], () => require("./notebookWorkspace"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServiceArgs } from "./service";
export type Service = import("./service").Service;
export const Service: typeof import("./service").Service = null as any;
utilities.lazyLoad(exports, ["Service"], () => require("./service"));

export { SqlResourceSqlContainerArgs } from "./sqlResourceSqlContainer";
export type SqlResourceSqlContainer = import("./sqlResourceSqlContainer").SqlResourceSqlContainer;
export const SqlResourceSqlContainer: typeof import("./sqlResourceSqlContainer").SqlResourceSqlContainer = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlContainer"], () => require("./sqlResourceSqlContainer"));

export { SqlResourceSqlDatabaseArgs } from "./sqlResourceSqlDatabase";
export type SqlResourceSqlDatabase = import("./sqlResourceSqlDatabase").SqlResourceSqlDatabase;
export const SqlResourceSqlDatabase: typeof import("./sqlResourceSqlDatabase").SqlResourceSqlDatabase = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlDatabase"], () => require("./sqlResourceSqlDatabase"));

export { SqlResourceSqlRoleAssignmentArgs } from "./sqlResourceSqlRoleAssignment";
export type SqlResourceSqlRoleAssignment = import("./sqlResourceSqlRoleAssignment").SqlResourceSqlRoleAssignment;
export const SqlResourceSqlRoleAssignment: typeof import("./sqlResourceSqlRoleAssignment").SqlResourceSqlRoleAssignment = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlRoleAssignment"], () => require("./sqlResourceSqlRoleAssignment"));

export { SqlResourceSqlRoleDefinitionArgs } from "./sqlResourceSqlRoleDefinition";
export type SqlResourceSqlRoleDefinition = import("./sqlResourceSqlRoleDefinition").SqlResourceSqlRoleDefinition;
export const SqlResourceSqlRoleDefinition: typeof import("./sqlResourceSqlRoleDefinition").SqlResourceSqlRoleDefinition = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlRoleDefinition"], () => require("./sqlResourceSqlRoleDefinition"));

export { SqlResourceSqlStoredProcedureArgs } from "./sqlResourceSqlStoredProcedure";
export type SqlResourceSqlStoredProcedure = import("./sqlResourceSqlStoredProcedure").SqlResourceSqlStoredProcedure;
export const SqlResourceSqlStoredProcedure: typeof import("./sqlResourceSqlStoredProcedure").SqlResourceSqlStoredProcedure = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlStoredProcedure"], () => require("./sqlResourceSqlStoredProcedure"));

export { SqlResourceSqlTriggerArgs } from "./sqlResourceSqlTrigger";
export type SqlResourceSqlTrigger = import("./sqlResourceSqlTrigger").SqlResourceSqlTrigger;
export const SqlResourceSqlTrigger: typeof import("./sqlResourceSqlTrigger").SqlResourceSqlTrigger = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlTrigger"], () => require("./sqlResourceSqlTrigger"));

export { SqlResourceSqlUserDefinedFunctionArgs } from "./sqlResourceSqlUserDefinedFunction";
export type SqlResourceSqlUserDefinedFunction = import("./sqlResourceSqlUserDefinedFunction").SqlResourceSqlUserDefinedFunction;
export const SqlResourceSqlUserDefinedFunction: typeof import("./sqlResourceSqlUserDefinedFunction").SqlResourceSqlUserDefinedFunction = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlUserDefinedFunction"], () => require("./sqlResourceSqlUserDefinedFunction"));

export { TableResourceTableArgs } from "./tableResourceTable";
export type TableResourceTable = import("./tableResourceTable").TableResourceTable;
export const TableResourceTable: typeof import("./tableResourceTable").TableResourceTable = null as any;
utilities.lazyLoad(exports, ["TableResourceTable"], () => require("./tableResourceTable"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:documentdb/v20231115:CassandraCluster":
                return new CassandraCluster(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:CassandraDataCenter":
                return new CassandraDataCenter(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:CassandraResourceCassandraKeyspace":
                return new CassandraResourceCassandraKeyspace(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:CassandraResourceCassandraTable":
                return new CassandraResourceCassandraTable(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:DatabaseAccount":
                return new DatabaseAccount(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:GremlinResourceGremlinDatabase":
                return new GremlinResourceGremlinDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:GremlinResourceGremlinGraph":
                return new GremlinResourceGremlinGraph(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:MongoDBResourceMongoDBCollection":
                return new MongoDBResourceMongoDBCollection(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:MongoDBResourceMongoDBDatabase":
                return new MongoDBResourceMongoDBDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:MongoDBResourceMongoRoleDefinition":
                return new MongoDBResourceMongoRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:MongoDBResourceMongoUserDefinition":
                return new MongoDBResourceMongoUserDefinition(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:NotebookWorkspace":
                return new NotebookWorkspace(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlContainer":
                return new SqlResourceSqlContainer(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlDatabase":
                return new SqlResourceSqlDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlRoleAssignment":
                return new SqlResourceSqlRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlRoleDefinition":
                return new SqlResourceSqlRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlStoredProcedure":
                return new SqlResourceSqlStoredProcedure(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlTrigger":
                return new SqlResourceSqlTrigger(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:SqlResourceSqlUserDefinedFunction":
                return new SqlResourceSqlUserDefinedFunction(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20231115:TableResourceTable":
                return new TableResourceTable(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "documentdb/v20231115", _module)