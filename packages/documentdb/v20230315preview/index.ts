import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CassandraResourceCassandraKeyspaceArgs } from "./cassandraResourceCassandraKeyspace";
export type CassandraResourceCassandraKeyspace = import("./cassandraResourceCassandraKeyspace").CassandraResourceCassandraKeyspace;
export const CassandraResourceCassandraKeyspace: typeof import("./cassandraResourceCassandraKeyspace").CassandraResourceCassandraKeyspace = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraKeyspace"], () => require("./cassandraResourceCassandraKeyspace"));

export { CassandraResourceCassandraTableArgs } from "./cassandraResourceCassandraTable";
export type CassandraResourceCassandraTable = import("./cassandraResourceCassandraTable").CassandraResourceCassandraTable;
export const CassandraResourceCassandraTable: typeof import("./cassandraResourceCassandraTable").CassandraResourceCassandraTable = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraTable"], () => require("./cassandraResourceCassandraTable"));

export { CassandraResourceCassandraViewArgs } from "./cassandraResourceCassandraView";
export type CassandraResourceCassandraView = import("./cassandraResourceCassandraView").CassandraResourceCassandraView;
export const CassandraResourceCassandraView: typeof import("./cassandraResourceCassandraView").CassandraResourceCassandraView = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraView"], () => require("./cassandraResourceCassandraView"));

export { DatabaseAccountArgs } from "./databaseAccount";
export type DatabaseAccount = import("./databaseAccount").DatabaseAccount;
export const DatabaseAccount: typeof import("./databaseAccount").DatabaseAccount = null as any;
utilities.lazyLoad(exports, ["DatabaseAccount"], () => require("./databaseAccount"));

export { GetCassandraResourceCassandraKeyspaceArgs, GetCassandraResourceCassandraKeyspaceResult, GetCassandraResourceCassandraKeyspaceOutputArgs } from "./getCassandraResourceCassandraKeyspace";
export const getCassandraResourceCassandraKeyspace: typeof import("./getCassandraResourceCassandraKeyspace").getCassandraResourceCassandraKeyspace = null as any;
export const getCassandraResourceCassandraKeyspaceOutput: typeof import("./getCassandraResourceCassandraKeyspace").getCassandraResourceCassandraKeyspaceOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraKeyspace","getCassandraResourceCassandraKeyspaceOutput"], () => require("./getCassandraResourceCassandraKeyspace"));

export { GetCassandraResourceCassandraTableArgs, GetCassandraResourceCassandraTableResult, GetCassandraResourceCassandraTableOutputArgs } from "./getCassandraResourceCassandraTable";
export const getCassandraResourceCassandraTable: typeof import("./getCassandraResourceCassandraTable").getCassandraResourceCassandraTable = null as any;
export const getCassandraResourceCassandraTableOutput: typeof import("./getCassandraResourceCassandraTable").getCassandraResourceCassandraTableOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraTable","getCassandraResourceCassandraTableOutput"], () => require("./getCassandraResourceCassandraTable"));

export { GetCassandraResourceCassandraViewArgs, GetCassandraResourceCassandraViewResult, GetCassandraResourceCassandraViewOutputArgs } from "./getCassandraResourceCassandraView";
export const getCassandraResourceCassandraView: typeof import("./getCassandraResourceCassandraView").getCassandraResourceCassandraView = null as any;
export const getCassandraResourceCassandraViewOutput: typeof import("./getCassandraResourceCassandraView").getCassandraResourceCassandraViewOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraView","getCassandraResourceCassandraViewOutput"], () => require("./getCassandraResourceCassandraView"));

export { GetDatabaseAccountArgs, GetDatabaseAccountResult, GetDatabaseAccountOutputArgs } from "./getDatabaseAccount";
export const getDatabaseAccount: typeof import("./getDatabaseAccount").getDatabaseAccount = null as any;
export const getDatabaseAccountOutput: typeof import("./getDatabaseAccount").getDatabaseAccountOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccount","getDatabaseAccountOutput"], () => require("./getDatabaseAccount"));

export { GetGraphResourceGraphArgs, GetGraphResourceGraphResult, GetGraphResourceGraphOutputArgs } from "./getGraphResourceGraph";
export const getGraphResourceGraph: typeof import("./getGraphResourceGraph").getGraphResourceGraph = null as any;
export const getGraphResourceGraphOutput: typeof import("./getGraphResourceGraph").getGraphResourceGraphOutput = null as any;
utilities.lazyLoad(exports, ["getGraphResourceGraph","getGraphResourceGraphOutput"], () => require("./getGraphResourceGraph"));

export { GetGremlinResourceGremlinDatabaseArgs, GetGremlinResourceGremlinDatabaseResult, GetGremlinResourceGremlinDatabaseOutputArgs } from "./getGremlinResourceGremlinDatabase";
export const getGremlinResourceGremlinDatabase: typeof import("./getGremlinResourceGremlinDatabase").getGremlinResourceGremlinDatabase = null as any;
export const getGremlinResourceGremlinDatabaseOutput: typeof import("./getGremlinResourceGremlinDatabase").getGremlinResourceGremlinDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinDatabase","getGremlinResourceGremlinDatabaseOutput"], () => require("./getGremlinResourceGremlinDatabase"));

export { GetGremlinResourceGremlinGraphArgs, GetGremlinResourceGremlinGraphResult, GetGremlinResourceGremlinGraphOutputArgs } from "./getGremlinResourceGremlinGraph";
export const getGremlinResourceGremlinGraph: typeof import("./getGremlinResourceGremlinGraph").getGremlinResourceGremlinGraph = null as any;
export const getGremlinResourceGremlinGraphOutput: typeof import("./getGremlinResourceGremlinGraph").getGremlinResourceGremlinGraphOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinGraph","getGremlinResourceGremlinGraphOutput"], () => require("./getGremlinResourceGremlinGraph"));

export { GetMongoClusterArgs, GetMongoClusterResult, GetMongoClusterOutputArgs } from "./getMongoCluster";
export const getMongoCluster: typeof import("./getMongoCluster").getMongoCluster = null as any;
export const getMongoClusterOutput: typeof import("./getMongoCluster").getMongoClusterOutput = null as any;
utilities.lazyLoad(exports, ["getMongoCluster","getMongoClusterOutput"], () => require("./getMongoCluster"));

export { GetMongoClusterFirewallRuleArgs, GetMongoClusterFirewallRuleResult, GetMongoClusterFirewallRuleOutputArgs } from "./getMongoClusterFirewallRule";
export const getMongoClusterFirewallRule: typeof import("./getMongoClusterFirewallRule").getMongoClusterFirewallRule = null as any;
export const getMongoClusterFirewallRuleOutput: typeof import("./getMongoClusterFirewallRule").getMongoClusterFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getMongoClusterFirewallRule","getMongoClusterFirewallRuleOutput"], () => require("./getMongoClusterFirewallRule"));

export { GetMongoDBResourceMongoDBCollectionArgs, GetMongoDBResourceMongoDBCollectionResult, GetMongoDBResourceMongoDBCollectionOutputArgs } from "./getMongoDBResourceMongoDBCollection";
export const getMongoDBResourceMongoDBCollection: typeof import("./getMongoDBResourceMongoDBCollection").getMongoDBResourceMongoDBCollection = null as any;
export const getMongoDBResourceMongoDBCollectionOutput: typeof import("./getMongoDBResourceMongoDBCollection").getMongoDBResourceMongoDBCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoDBCollection","getMongoDBResourceMongoDBCollectionOutput"], () => require("./getMongoDBResourceMongoDBCollection"));

export { GetMongoDBResourceMongoDBDatabaseArgs, GetMongoDBResourceMongoDBDatabaseResult, GetMongoDBResourceMongoDBDatabaseOutputArgs } from "./getMongoDBResourceMongoDBDatabase";
export const getMongoDBResourceMongoDBDatabase: typeof import("./getMongoDBResourceMongoDBDatabase").getMongoDBResourceMongoDBDatabase = null as any;
export const getMongoDBResourceMongoDBDatabaseOutput: typeof import("./getMongoDBResourceMongoDBDatabase").getMongoDBResourceMongoDBDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoDBDatabase","getMongoDBResourceMongoDBDatabaseOutput"], () => require("./getMongoDBResourceMongoDBDatabase"));

export { GetSqlResourceSqlContainerArgs, GetSqlResourceSqlContainerResult, GetSqlResourceSqlContainerOutputArgs } from "./getSqlResourceSqlContainer";
export const getSqlResourceSqlContainer: typeof import("./getSqlResourceSqlContainer").getSqlResourceSqlContainer = null as any;
export const getSqlResourceSqlContainerOutput: typeof import("./getSqlResourceSqlContainer").getSqlResourceSqlContainerOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlContainer","getSqlResourceSqlContainerOutput"], () => require("./getSqlResourceSqlContainer"));

export { GetSqlResourceSqlDatabaseArgs, GetSqlResourceSqlDatabaseResult, GetSqlResourceSqlDatabaseOutputArgs } from "./getSqlResourceSqlDatabase";
export const getSqlResourceSqlDatabase: typeof import("./getSqlResourceSqlDatabase").getSqlResourceSqlDatabase = null as any;
export const getSqlResourceSqlDatabaseOutput: typeof import("./getSqlResourceSqlDatabase").getSqlResourceSqlDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getSqlResourceSqlDatabase","getSqlResourceSqlDatabaseOutput"], () => require("./getSqlResourceSqlDatabase"));

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

export { GraphResourceGraphArgs } from "./graphResourceGraph";
export type GraphResourceGraph = import("./graphResourceGraph").GraphResourceGraph;
export const GraphResourceGraph: typeof import("./graphResourceGraph").GraphResourceGraph = null as any;
utilities.lazyLoad(exports, ["GraphResourceGraph"], () => require("./graphResourceGraph"));

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

export { ListMongoClusterConnectionStringsArgs, ListMongoClusterConnectionStringsResult, ListMongoClusterConnectionStringsOutputArgs } from "./listMongoClusterConnectionStrings";
export const listMongoClusterConnectionStrings: typeof import("./listMongoClusterConnectionStrings").listMongoClusterConnectionStrings = null as any;
export const listMongoClusterConnectionStringsOutput: typeof import("./listMongoClusterConnectionStrings").listMongoClusterConnectionStringsOutput = null as any;
utilities.lazyLoad(exports, ["listMongoClusterConnectionStrings","listMongoClusterConnectionStringsOutput"], () => require("./listMongoClusterConnectionStrings"));

export { MongoClusterArgs } from "./mongoCluster";
export type MongoCluster = import("./mongoCluster").MongoCluster;
export const MongoCluster: typeof import("./mongoCluster").MongoCluster = null as any;
utilities.lazyLoad(exports, ["MongoCluster"], () => require("./mongoCluster"));

export { MongoClusterFirewallRuleArgs } from "./mongoClusterFirewallRule";
export type MongoClusterFirewallRule = import("./mongoClusterFirewallRule").MongoClusterFirewallRule;
export const MongoClusterFirewallRule: typeof import("./mongoClusterFirewallRule").MongoClusterFirewallRule = null as any;
utilities.lazyLoad(exports, ["MongoClusterFirewallRule"], () => require("./mongoClusterFirewallRule"));

export { MongoDBResourceMongoDBCollectionArgs } from "./mongoDBResourceMongoDBCollection";
export type MongoDBResourceMongoDBCollection = import("./mongoDBResourceMongoDBCollection").MongoDBResourceMongoDBCollection;
export const MongoDBResourceMongoDBCollection: typeof import("./mongoDBResourceMongoDBCollection").MongoDBResourceMongoDBCollection = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoDBCollection"], () => require("./mongoDBResourceMongoDBCollection"));

export { MongoDBResourceMongoDBDatabaseArgs } from "./mongoDBResourceMongoDBDatabase";
export type MongoDBResourceMongoDBDatabase = import("./mongoDBResourceMongoDBDatabase").MongoDBResourceMongoDBDatabase;
export const MongoDBResourceMongoDBDatabase: typeof import("./mongoDBResourceMongoDBDatabase").MongoDBResourceMongoDBDatabase = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoDBDatabase"], () => require("./mongoDBResourceMongoDBDatabase"));

export { SqlResourceSqlContainerArgs } from "./sqlResourceSqlContainer";
export type SqlResourceSqlContainer = import("./sqlResourceSqlContainer").SqlResourceSqlContainer;
export const SqlResourceSqlContainer: typeof import("./sqlResourceSqlContainer").SqlResourceSqlContainer = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlContainer"], () => require("./sqlResourceSqlContainer"));

export { SqlResourceSqlDatabaseArgs } from "./sqlResourceSqlDatabase";
export type SqlResourceSqlDatabase = import("./sqlResourceSqlDatabase").SqlResourceSqlDatabase;
export const SqlResourceSqlDatabase: typeof import("./sqlResourceSqlDatabase").SqlResourceSqlDatabase = null as any;
utilities.lazyLoad(exports, ["SqlResourceSqlDatabase"], () => require("./sqlResourceSqlDatabase"));

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
export * from "../types/enums/v20230315preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:documentdb/v20230315preview:CassandraResourceCassandraKeyspace":
                return new CassandraResourceCassandraKeyspace(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:CassandraResourceCassandraTable":
                return new CassandraResourceCassandraTable(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:CassandraResourceCassandraView":
                return new CassandraResourceCassandraView(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:DatabaseAccount":
                return new DatabaseAccount(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:GraphResourceGraph":
                return new GraphResourceGraph(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:GremlinResourceGremlinDatabase":
                return new GremlinResourceGremlinDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:GremlinResourceGremlinGraph":
                return new GremlinResourceGremlinGraph(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:MongoCluster":
                return new MongoCluster(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:MongoClusterFirewallRule":
                return new MongoClusterFirewallRule(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:MongoDBResourceMongoDBCollection":
                return new MongoDBResourceMongoDBCollection(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:MongoDBResourceMongoDBDatabase":
                return new MongoDBResourceMongoDBDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:SqlResourceSqlContainer":
                return new SqlResourceSqlContainer(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:SqlResourceSqlDatabase":
                return new SqlResourceSqlDatabase(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:SqlResourceSqlStoredProcedure":
                return new SqlResourceSqlStoredProcedure(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:SqlResourceSqlTrigger":
                return new SqlResourceSqlTrigger(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:SqlResourceSqlUserDefinedFunction":
                return new SqlResourceSqlUserDefinedFunction(name, <any>undefined, { urn })
            case "azure-native:documentdb/v20230315preview:TableResourceTable":
                return new TableResourceTable(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "documentdb/v20230315preview", _module)
