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

export { CassandraResourceCassandraRoleAssignmentArgs } from "./cassandraResourceCassandraRoleAssignment";
export type CassandraResourceCassandraRoleAssignment = import("./cassandraResourceCassandraRoleAssignment").CassandraResourceCassandraRoleAssignment;
export const CassandraResourceCassandraRoleAssignment: typeof import("./cassandraResourceCassandraRoleAssignment").CassandraResourceCassandraRoleAssignment = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraRoleAssignment"], () => require("./cassandraResourceCassandraRoleAssignment"));

export { CassandraResourceCassandraRoleDefinitionArgs } from "./cassandraResourceCassandraRoleDefinition";
export type CassandraResourceCassandraRoleDefinition = import("./cassandraResourceCassandraRoleDefinition").CassandraResourceCassandraRoleDefinition;
export const CassandraResourceCassandraRoleDefinition: typeof import("./cassandraResourceCassandraRoleDefinition").CassandraResourceCassandraRoleDefinition = null as any;
utilities.lazyLoad(exports, ["CassandraResourceCassandraRoleDefinition"], () => require("./cassandraResourceCassandraRoleDefinition"));

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

export { DatabaseAccountCassandraKeyspaceArgs } from "./databaseAccountCassandraKeyspace";
export type DatabaseAccountCassandraKeyspace = import("./databaseAccountCassandraKeyspace").DatabaseAccountCassandraKeyspace;
export const DatabaseAccountCassandraKeyspace: typeof import("./databaseAccountCassandraKeyspace").DatabaseAccountCassandraKeyspace = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountCassandraKeyspace"], () => require("./databaseAccountCassandraKeyspace"));

export { DatabaseAccountCassandraTableArgs } from "./databaseAccountCassandraTable";
export type DatabaseAccountCassandraTable = import("./databaseAccountCassandraTable").DatabaseAccountCassandraTable;
export const DatabaseAccountCassandraTable: typeof import("./databaseAccountCassandraTable").DatabaseAccountCassandraTable = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountCassandraTable"], () => require("./databaseAccountCassandraTable"));

export { DatabaseAccountGremlinDatabaseArgs } from "./databaseAccountGremlinDatabase";
export type DatabaseAccountGremlinDatabase = import("./databaseAccountGremlinDatabase").DatabaseAccountGremlinDatabase;
export const DatabaseAccountGremlinDatabase: typeof import("./databaseAccountGremlinDatabase").DatabaseAccountGremlinDatabase = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountGremlinDatabase"], () => require("./databaseAccountGremlinDatabase"));

export { DatabaseAccountGremlinGraphArgs } from "./databaseAccountGremlinGraph";
export type DatabaseAccountGremlinGraph = import("./databaseAccountGremlinGraph").DatabaseAccountGremlinGraph;
export const DatabaseAccountGremlinGraph: typeof import("./databaseAccountGremlinGraph").DatabaseAccountGremlinGraph = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountGremlinGraph"], () => require("./databaseAccountGremlinGraph"));

export { DatabaseAccountMongoDBCollectionArgs } from "./databaseAccountMongoDBCollection";
export type DatabaseAccountMongoDBCollection = import("./databaseAccountMongoDBCollection").DatabaseAccountMongoDBCollection;
export const DatabaseAccountMongoDBCollection: typeof import("./databaseAccountMongoDBCollection").DatabaseAccountMongoDBCollection = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountMongoDBCollection"], () => require("./databaseAccountMongoDBCollection"));

export { DatabaseAccountMongoDBDatabaseArgs } from "./databaseAccountMongoDBDatabase";
export type DatabaseAccountMongoDBDatabase = import("./databaseAccountMongoDBDatabase").DatabaseAccountMongoDBDatabase;
export const DatabaseAccountMongoDBDatabase: typeof import("./databaseAccountMongoDBDatabase").DatabaseAccountMongoDBDatabase = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountMongoDBDatabase"], () => require("./databaseAccountMongoDBDatabase"));

export { DatabaseAccountSqlContainerArgs } from "./databaseAccountSqlContainer";
export type DatabaseAccountSqlContainer = import("./databaseAccountSqlContainer").DatabaseAccountSqlContainer;
export const DatabaseAccountSqlContainer: typeof import("./databaseAccountSqlContainer").DatabaseAccountSqlContainer = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountSqlContainer"], () => require("./databaseAccountSqlContainer"));

export { DatabaseAccountSqlDatabaseArgs } from "./databaseAccountSqlDatabase";
export type DatabaseAccountSqlDatabase = import("./databaseAccountSqlDatabase").DatabaseAccountSqlDatabase;
export const DatabaseAccountSqlDatabase: typeof import("./databaseAccountSqlDatabase").DatabaseAccountSqlDatabase = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountSqlDatabase"], () => require("./databaseAccountSqlDatabase"));

export { DatabaseAccountTableArgs } from "./databaseAccountTable";
export type DatabaseAccountTable = import("./databaseAccountTable").DatabaseAccountTable;
export const DatabaseAccountTable: typeof import("./databaseAccountTable").DatabaseAccountTable = null as any;
utilities.lazyLoad(exports, ["DatabaseAccountTable"], () => require("./databaseAccountTable"));

export { FleetArgs } from "./fleet";
export type Fleet = import("./fleet").Fleet;
export const Fleet: typeof import("./fleet").Fleet = null as any;
utilities.lazyLoad(exports, ["Fleet"], () => require("./fleet"));

export { FleetAnalyticArgs } from "./fleetAnalytic";
export type FleetAnalytic = import("./fleetAnalytic").FleetAnalytic;
export const FleetAnalytic: typeof import("./fleetAnalytic").FleetAnalytic = null as any;
utilities.lazyLoad(exports, ["FleetAnalytic"], () => require("./fleetAnalytic"));

export { FleetspaceArgs } from "./fleetspace";
export type Fleetspace = import("./fleetspace").Fleetspace;
export const Fleetspace: typeof import("./fleetspace").Fleetspace = null as any;
utilities.lazyLoad(exports, ["Fleetspace"], () => require("./fleetspace"));

export { FleetspaceAccountArgs } from "./fleetspaceAccount";
export type FleetspaceAccount = import("./fleetspaceAccount").FleetspaceAccount;
export const FleetspaceAccount: typeof import("./fleetspaceAccount").FleetspaceAccount = null as any;
utilities.lazyLoad(exports, ["FleetspaceAccount"], () => require("./fleetspaceAccount"));

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

export { GetCassandraResourceCassandraRoleAssignmentArgs, GetCassandraResourceCassandraRoleAssignmentResult, GetCassandraResourceCassandraRoleAssignmentOutputArgs } from "./getCassandraResourceCassandraRoleAssignment";
export const getCassandraResourceCassandraRoleAssignment: typeof import("./getCassandraResourceCassandraRoleAssignment").getCassandraResourceCassandraRoleAssignment = null as any;
export const getCassandraResourceCassandraRoleAssignmentOutput: typeof import("./getCassandraResourceCassandraRoleAssignment").getCassandraResourceCassandraRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraRoleAssignment","getCassandraResourceCassandraRoleAssignmentOutput"], () => require("./getCassandraResourceCassandraRoleAssignment"));

export { GetCassandraResourceCassandraRoleDefinitionArgs, GetCassandraResourceCassandraRoleDefinitionResult, GetCassandraResourceCassandraRoleDefinitionOutputArgs } from "./getCassandraResourceCassandraRoleDefinition";
export const getCassandraResourceCassandraRoleDefinition: typeof import("./getCassandraResourceCassandraRoleDefinition").getCassandraResourceCassandraRoleDefinition = null as any;
export const getCassandraResourceCassandraRoleDefinitionOutput: typeof import("./getCassandraResourceCassandraRoleDefinition").getCassandraResourceCassandraRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getCassandraResourceCassandraRoleDefinition","getCassandraResourceCassandraRoleDefinitionOutput"], () => require("./getCassandraResourceCassandraRoleDefinition"));

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

export { GetDatabaseAccountCassandraKeyspaceArgs, GetDatabaseAccountCassandraKeyspaceResult, GetDatabaseAccountCassandraKeyspaceOutputArgs } from "./getDatabaseAccountCassandraKeyspace";
export const getDatabaseAccountCassandraKeyspace: typeof import("./getDatabaseAccountCassandraKeyspace").getDatabaseAccountCassandraKeyspace = null as any;
export const getDatabaseAccountCassandraKeyspaceOutput: typeof import("./getDatabaseAccountCassandraKeyspace").getDatabaseAccountCassandraKeyspaceOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountCassandraKeyspace","getDatabaseAccountCassandraKeyspaceOutput"], () => require("./getDatabaseAccountCassandraKeyspace"));

export { GetDatabaseAccountCassandraTableArgs, GetDatabaseAccountCassandraTableResult, GetDatabaseAccountCassandraTableOutputArgs } from "./getDatabaseAccountCassandraTable";
export const getDatabaseAccountCassandraTable: typeof import("./getDatabaseAccountCassandraTable").getDatabaseAccountCassandraTable = null as any;
export const getDatabaseAccountCassandraTableOutput: typeof import("./getDatabaseAccountCassandraTable").getDatabaseAccountCassandraTableOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountCassandraTable","getDatabaseAccountCassandraTableOutput"], () => require("./getDatabaseAccountCassandraTable"));

export { GetDatabaseAccountGremlinDatabaseArgs, GetDatabaseAccountGremlinDatabaseResult, GetDatabaseAccountGremlinDatabaseOutputArgs } from "./getDatabaseAccountGremlinDatabase";
export const getDatabaseAccountGremlinDatabase: typeof import("./getDatabaseAccountGremlinDatabase").getDatabaseAccountGremlinDatabase = null as any;
export const getDatabaseAccountGremlinDatabaseOutput: typeof import("./getDatabaseAccountGremlinDatabase").getDatabaseAccountGremlinDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountGremlinDatabase","getDatabaseAccountGremlinDatabaseOutput"], () => require("./getDatabaseAccountGremlinDatabase"));

export { GetDatabaseAccountGremlinGraphArgs, GetDatabaseAccountGremlinGraphResult, GetDatabaseAccountGremlinGraphOutputArgs } from "./getDatabaseAccountGremlinGraph";
export const getDatabaseAccountGremlinGraph: typeof import("./getDatabaseAccountGremlinGraph").getDatabaseAccountGremlinGraph = null as any;
export const getDatabaseAccountGremlinGraphOutput: typeof import("./getDatabaseAccountGremlinGraph").getDatabaseAccountGremlinGraphOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountGremlinGraph","getDatabaseAccountGremlinGraphOutput"], () => require("./getDatabaseAccountGremlinGraph"));

export { GetDatabaseAccountMongoDBCollectionArgs, GetDatabaseAccountMongoDBCollectionResult, GetDatabaseAccountMongoDBCollectionOutputArgs } from "./getDatabaseAccountMongoDBCollection";
export const getDatabaseAccountMongoDBCollection: typeof import("./getDatabaseAccountMongoDBCollection").getDatabaseAccountMongoDBCollection = null as any;
export const getDatabaseAccountMongoDBCollectionOutput: typeof import("./getDatabaseAccountMongoDBCollection").getDatabaseAccountMongoDBCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountMongoDBCollection","getDatabaseAccountMongoDBCollectionOutput"], () => require("./getDatabaseAccountMongoDBCollection"));

export { GetDatabaseAccountMongoDBDatabaseArgs, GetDatabaseAccountMongoDBDatabaseResult, GetDatabaseAccountMongoDBDatabaseOutputArgs } from "./getDatabaseAccountMongoDBDatabase";
export const getDatabaseAccountMongoDBDatabase: typeof import("./getDatabaseAccountMongoDBDatabase").getDatabaseAccountMongoDBDatabase = null as any;
export const getDatabaseAccountMongoDBDatabaseOutput: typeof import("./getDatabaseAccountMongoDBDatabase").getDatabaseAccountMongoDBDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountMongoDBDatabase","getDatabaseAccountMongoDBDatabaseOutput"], () => require("./getDatabaseAccountMongoDBDatabase"));

export { GetDatabaseAccountSqlContainerArgs, GetDatabaseAccountSqlContainerResult, GetDatabaseAccountSqlContainerOutputArgs } from "./getDatabaseAccountSqlContainer";
export const getDatabaseAccountSqlContainer: typeof import("./getDatabaseAccountSqlContainer").getDatabaseAccountSqlContainer = null as any;
export const getDatabaseAccountSqlContainerOutput: typeof import("./getDatabaseAccountSqlContainer").getDatabaseAccountSqlContainerOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountSqlContainer","getDatabaseAccountSqlContainerOutput"], () => require("./getDatabaseAccountSqlContainer"));

export { GetDatabaseAccountSqlDatabaseArgs, GetDatabaseAccountSqlDatabaseResult, GetDatabaseAccountSqlDatabaseOutputArgs } from "./getDatabaseAccountSqlDatabase";
export const getDatabaseAccountSqlDatabase: typeof import("./getDatabaseAccountSqlDatabase").getDatabaseAccountSqlDatabase = null as any;
export const getDatabaseAccountSqlDatabaseOutput: typeof import("./getDatabaseAccountSqlDatabase").getDatabaseAccountSqlDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountSqlDatabase","getDatabaseAccountSqlDatabaseOutput"], () => require("./getDatabaseAccountSqlDatabase"));

export { GetDatabaseAccountTableArgs, GetDatabaseAccountTableResult, GetDatabaseAccountTableOutputArgs } from "./getDatabaseAccountTable";
export const getDatabaseAccountTable: typeof import("./getDatabaseAccountTable").getDatabaseAccountTable = null as any;
export const getDatabaseAccountTableOutput: typeof import("./getDatabaseAccountTable").getDatabaseAccountTableOutput = null as any;
utilities.lazyLoad(exports, ["getDatabaseAccountTable","getDatabaseAccountTableOutput"], () => require("./getDatabaseAccountTable"));

export { GetFleetArgs, GetFleetResult, GetFleetOutputArgs } from "./getFleet";
export const getFleet: typeof import("./getFleet").getFleet = null as any;
export const getFleetOutput: typeof import("./getFleet").getFleetOutput = null as any;
utilities.lazyLoad(exports, ["getFleet","getFleetOutput"], () => require("./getFleet"));

export { GetFleetAnalyticArgs, GetFleetAnalyticResult, GetFleetAnalyticOutputArgs } from "./getFleetAnalytic";
export const getFleetAnalytic: typeof import("./getFleetAnalytic").getFleetAnalytic = null as any;
export const getFleetAnalyticOutput: typeof import("./getFleetAnalytic").getFleetAnalyticOutput = null as any;
utilities.lazyLoad(exports, ["getFleetAnalytic","getFleetAnalyticOutput"], () => require("./getFleetAnalytic"));

export { GetFleetspaceArgs, GetFleetspaceResult, GetFleetspaceOutputArgs } from "./getFleetspace";
export const getFleetspace: typeof import("./getFleetspace").getFleetspace = null as any;
export const getFleetspaceOutput: typeof import("./getFleetspace").getFleetspaceOutput = null as any;
utilities.lazyLoad(exports, ["getFleetspace","getFleetspaceOutput"], () => require("./getFleetspace"));

export { GetFleetspaceAccountArgs, GetFleetspaceAccountResult, GetFleetspaceAccountOutputArgs } from "./getFleetspaceAccount";
export const getFleetspaceAccount: typeof import("./getFleetspaceAccount").getFleetspaceAccount = null as any;
export const getFleetspaceAccountOutput: typeof import("./getFleetspaceAccount").getFleetspaceAccountOutput = null as any;
utilities.lazyLoad(exports, ["getFleetspaceAccount","getFleetspaceAccountOutput"], () => require("./getFleetspaceAccount"));

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

export { GetGremlinResourceGremlinRoleAssignmentArgs, GetGremlinResourceGremlinRoleAssignmentResult, GetGremlinResourceGremlinRoleAssignmentOutputArgs } from "./getGremlinResourceGremlinRoleAssignment";
export const getGremlinResourceGremlinRoleAssignment: typeof import("./getGremlinResourceGremlinRoleAssignment").getGremlinResourceGremlinRoleAssignment = null as any;
export const getGremlinResourceGremlinRoleAssignmentOutput: typeof import("./getGremlinResourceGremlinRoleAssignment").getGremlinResourceGremlinRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinRoleAssignment","getGremlinResourceGremlinRoleAssignmentOutput"], () => require("./getGremlinResourceGremlinRoleAssignment"));

export { GetGremlinResourceGremlinRoleDefinitionArgs, GetGremlinResourceGremlinRoleDefinitionResult, GetGremlinResourceGremlinRoleDefinitionOutputArgs } from "./getGremlinResourceGremlinRoleDefinition";
export const getGremlinResourceGremlinRoleDefinition: typeof import("./getGremlinResourceGremlinRoleDefinition").getGremlinResourceGremlinRoleDefinition = null as any;
export const getGremlinResourceGremlinRoleDefinitionOutput: typeof import("./getGremlinResourceGremlinRoleDefinition").getGremlinResourceGremlinRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getGremlinResourceGremlinRoleDefinition","getGremlinResourceGremlinRoleDefinitionOutput"], () => require("./getGremlinResourceGremlinRoleDefinition"));

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

export { GetMongoDBResourceMongoRoleDefinitionArgs, GetMongoDBResourceMongoRoleDefinitionResult, GetMongoDBResourceMongoRoleDefinitionOutputArgs } from "./getMongoDBResourceMongoRoleDefinition";
export const getMongoDBResourceMongoRoleDefinition: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinition = null as any;
export const getMongoDBResourceMongoRoleDefinitionOutput: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoRoleDefinition","getMongoDBResourceMongoRoleDefinitionOutput"], () => require("./getMongoDBResourceMongoRoleDefinition"));

export { GetMongoDBResourceMongoUserDefinitionArgs, GetMongoDBResourceMongoUserDefinitionResult, GetMongoDBResourceMongoUserDefinitionOutputArgs } from "./getMongoDBResourceMongoUserDefinition";
export const getMongoDBResourceMongoUserDefinition: typeof import("./getMongoDBResourceMongoUserDefinition").getMongoDBResourceMongoUserDefinition = null as any;
export const getMongoDBResourceMongoUserDefinitionOutput: typeof import("./getMongoDBResourceMongoUserDefinition").getMongoDBResourceMongoUserDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoUserDefinition","getMongoDBResourceMongoUserDefinitionOutput"], () => require("./getMongoDBResourceMongoUserDefinition"));

export { GetMongoMIResourceMongoMIRoleAssignmentArgs, GetMongoMIResourceMongoMIRoleAssignmentResult, GetMongoMIResourceMongoMIRoleAssignmentOutputArgs } from "./getMongoMIResourceMongoMIRoleAssignment";
export const getMongoMIResourceMongoMIRoleAssignment: typeof import("./getMongoMIResourceMongoMIRoleAssignment").getMongoMIResourceMongoMIRoleAssignment = null as any;
export const getMongoMIResourceMongoMIRoleAssignmentOutput: typeof import("./getMongoMIResourceMongoMIRoleAssignment").getMongoMIResourceMongoMIRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getMongoMIResourceMongoMIRoleAssignment","getMongoMIResourceMongoMIRoleAssignmentOutput"], () => require("./getMongoMIResourceMongoMIRoleAssignment"));

export { GetMongoMIResourceMongoMIRoleDefinitionArgs, GetMongoMIResourceMongoMIRoleDefinitionResult, GetMongoMIResourceMongoMIRoleDefinitionOutputArgs } from "./getMongoMIResourceMongoMIRoleDefinition";
export const getMongoMIResourceMongoMIRoleDefinition: typeof import("./getMongoMIResourceMongoMIRoleDefinition").getMongoMIResourceMongoMIRoleDefinition = null as any;
export const getMongoMIResourceMongoMIRoleDefinitionOutput: typeof import("./getMongoMIResourceMongoMIRoleDefinition").getMongoMIResourceMongoMIRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoMIResourceMongoMIRoleDefinition","getMongoMIResourceMongoMIRoleDefinitionOutput"], () => require("./getMongoMIResourceMongoMIRoleDefinition"));

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

export { GetTableResourceTableRoleAssignmentArgs, GetTableResourceTableRoleAssignmentResult, GetTableResourceTableRoleAssignmentOutputArgs } from "./getTableResourceTableRoleAssignment";
export const getTableResourceTableRoleAssignment: typeof import("./getTableResourceTableRoleAssignment").getTableResourceTableRoleAssignment = null as any;
export const getTableResourceTableRoleAssignmentOutput: typeof import("./getTableResourceTableRoleAssignment").getTableResourceTableRoleAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getTableResourceTableRoleAssignment","getTableResourceTableRoleAssignmentOutput"], () => require("./getTableResourceTableRoleAssignment"));

export { GetTableResourceTableRoleDefinitionArgs, GetTableResourceTableRoleDefinitionResult, GetTableResourceTableRoleDefinitionOutputArgs } from "./getTableResourceTableRoleDefinition";
export const getTableResourceTableRoleDefinition: typeof import("./getTableResourceTableRoleDefinition").getTableResourceTableRoleDefinition = null as any;
export const getTableResourceTableRoleDefinitionOutput: typeof import("./getTableResourceTableRoleDefinition").getTableResourceTableRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getTableResourceTableRoleDefinition","getTableResourceTableRoleDefinitionOutput"], () => require("./getTableResourceTableRoleDefinition"));

export { GetThroughputPoolArgs, GetThroughputPoolResult, GetThroughputPoolOutputArgs } from "./getThroughputPool";
export const getThroughputPool: typeof import("./getThroughputPool").getThroughputPool = null as any;
export const getThroughputPoolOutput: typeof import("./getThroughputPool").getThroughputPoolOutput = null as any;
utilities.lazyLoad(exports, ["getThroughputPool","getThroughputPoolOutput"], () => require("./getThroughputPool"));

export { GetThroughputPoolAccountArgs, GetThroughputPoolAccountResult, GetThroughputPoolAccountOutputArgs } from "./getThroughputPoolAccount";
export const getThroughputPoolAccount: typeof import("./getThroughputPoolAccount").getThroughputPoolAccount = null as any;
export const getThroughputPoolAccountOutput: typeof import("./getThroughputPoolAccount").getThroughputPoolAccountOutput = null as any;
utilities.lazyLoad(exports, ["getThroughputPoolAccount","getThroughputPoolAccountOutput"], () => require("./getThroughputPoolAccount"));

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

export { GremlinResourceGremlinRoleAssignmentArgs } from "./gremlinResourceGremlinRoleAssignment";
export type GremlinResourceGremlinRoleAssignment = import("./gremlinResourceGremlinRoleAssignment").GremlinResourceGremlinRoleAssignment;
export const GremlinResourceGremlinRoleAssignment: typeof import("./gremlinResourceGremlinRoleAssignment").GremlinResourceGremlinRoleAssignment = null as any;
utilities.lazyLoad(exports, ["GremlinResourceGremlinRoleAssignment"], () => require("./gremlinResourceGremlinRoleAssignment"));

export { GremlinResourceGremlinRoleDefinitionArgs } from "./gremlinResourceGremlinRoleDefinition";
export type GremlinResourceGremlinRoleDefinition = import("./gremlinResourceGremlinRoleDefinition").GremlinResourceGremlinRoleDefinition;
export const GremlinResourceGremlinRoleDefinition: typeof import("./gremlinResourceGremlinRoleDefinition").GremlinResourceGremlinRoleDefinition = null as any;
utilities.lazyLoad(exports, ["GremlinResourceGremlinRoleDefinition"], () => require("./gremlinResourceGremlinRoleDefinition"));

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

export { ListNotebookWorkspaceConnectionInfoArgs, ListNotebookWorkspaceConnectionInfoResult, ListNotebookWorkspaceConnectionInfoOutputArgs } from "./listNotebookWorkspaceConnectionInfo";
export const listNotebookWorkspaceConnectionInfo: typeof import("./listNotebookWorkspaceConnectionInfo").listNotebookWorkspaceConnectionInfo = null as any;
export const listNotebookWorkspaceConnectionInfoOutput: typeof import("./listNotebookWorkspaceConnectionInfo").listNotebookWorkspaceConnectionInfoOutput = null as any;
utilities.lazyLoad(exports, ["listNotebookWorkspaceConnectionInfo","listNotebookWorkspaceConnectionInfoOutput"], () => require("./listNotebookWorkspaceConnectionInfo"));

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

export { MongoDBResourceMongoRoleDefinitionArgs } from "./mongoDBResourceMongoRoleDefinition";
export type MongoDBResourceMongoRoleDefinition = import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition;
export const MongoDBResourceMongoRoleDefinition: typeof import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoRoleDefinition"], () => require("./mongoDBResourceMongoRoleDefinition"));

export { MongoDBResourceMongoUserDefinitionArgs } from "./mongoDBResourceMongoUserDefinition";
export type MongoDBResourceMongoUserDefinition = import("./mongoDBResourceMongoUserDefinition").MongoDBResourceMongoUserDefinition;
export const MongoDBResourceMongoUserDefinition: typeof import("./mongoDBResourceMongoUserDefinition").MongoDBResourceMongoUserDefinition = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoUserDefinition"], () => require("./mongoDBResourceMongoUserDefinition"));

export { MongoMIResourceMongoMIRoleAssignmentArgs } from "./mongoMIResourceMongoMIRoleAssignment";
export type MongoMIResourceMongoMIRoleAssignment = import("./mongoMIResourceMongoMIRoleAssignment").MongoMIResourceMongoMIRoleAssignment;
export const MongoMIResourceMongoMIRoleAssignment: typeof import("./mongoMIResourceMongoMIRoleAssignment").MongoMIResourceMongoMIRoleAssignment = null as any;
utilities.lazyLoad(exports, ["MongoMIResourceMongoMIRoleAssignment"], () => require("./mongoMIResourceMongoMIRoleAssignment"));

export { MongoMIResourceMongoMIRoleDefinitionArgs } from "./mongoMIResourceMongoMIRoleDefinition";
export type MongoMIResourceMongoMIRoleDefinition = import("./mongoMIResourceMongoMIRoleDefinition").MongoMIResourceMongoMIRoleDefinition;
export const MongoMIResourceMongoMIRoleDefinition: typeof import("./mongoMIResourceMongoMIRoleDefinition").MongoMIResourceMongoMIRoleDefinition = null as any;
utilities.lazyLoad(exports, ["MongoMIResourceMongoMIRoleDefinition"], () => require("./mongoMIResourceMongoMIRoleDefinition"));

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

export { TableResourceTableRoleAssignmentArgs } from "./tableResourceTableRoleAssignment";
export type TableResourceTableRoleAssignment = import("./tableResourceTableRoleAssignment").TableResourceTableRoleAssignment;
export const TableResourceTableRoleAssignment: typeof import("./tableResourceTableRoleAssignment").TableResourceTableRoleAssignment = null as any;
utilities.lazyLoad(exports, ["TableResourceTableRoleAssignment"], () => require("./tableResourceTableRoleAssignment"));

export { TableResourceTableRoleDefinitionArgs } from "./tableResourceTableRoleDefinition";
export type TableResourceTableRoleDefinition = import("./tableResourceTableRoleDefinition").TableResourceTableRoleDefinition;
export const TableResourceTableRoleDefinition: typeof import("./tableResourceTableRoleDefinition").TableResourceTableRoleDefinition = null as any;
utilities.lazyLoad(exports, ["TableResourceTableRoleDefinition"], () => require("./tableResourceTableRoleDefinition"));

export { ThroughputPoolArgs } from "./throughputPool";
export type ThroughputPool = import("./throughputPool").ThroughputPool;
export const ThroughputPool: typeof import("./throughputPool").ThroughputPool = null as any;
utilities.lazyLoad(exports, ["ThroughputPool"], () => require("./throughputPool"));

export { ThroughputPoolAccountArgs } from "./throughputPoolAccount";
export type ThroughputPoolAccount = import("./throughputPoolAccount").ThroughputPoolAccount;
export const ThroughputPoolAccount: typeof import("./throughputPoolAccount").ThroughputPoolAccount = null as any;
utilities.lazyLoad(exports, ["ThroughputPoolAccount"], () => require("./throughputPoolAccount"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cosmosdb:CassandraCluster":
                return new CassandraCluster(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraDataCenter":
                return new CassandraDataCenter(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraResourceCassandraKeyspace":
                return new CassandraResourceCassandraKeyspace(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraResourceCassandraRoleAssignment":
                return new CassandraResourceCassandraRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraResourceCassandraRoleDefinition":
                return new CassandraResourceCassandraRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraResourceCassandraTable":
                return new CassandraResourceCassandraTable(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:CassandraResourceCassandraView":
                return new CassandraResourceCassandraView(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccount":
                return new DatabaseAccount(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountCassandraKeyspace":
                return new DatabaseAccountCassandraKeyspace(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountCassandraTable":
                return new DatabaseAccountCassandraTable(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountGremlinDatabase":
                return new DatabaseAccountGremlinDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountGremlinGraph":
                return new DatabaseAccountGremlinGraph(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountMongoDBCollection":
                return new DatabaseAccountMongoDBCollection(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountMongoDBDatabase":
                return new DatabaseAccountMongoDBDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountSqlContainer":
                return new DatabaseAccountSqlContainer(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountSqlDatabase":
                return new DatabaseAccountSqlDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:DatabaseAccountTable":
                return new DatabaseAccountTable(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:Fleet":
                return new Fleet(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:FleetAnalytic":
                return new FleetAnalytic(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:Fleetspace":
                return new Fleetspace(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:FleetspaceAccount":
                return new FleetspaceAccount(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:GraphResourceGraph":
                return new GraphResourceGraph(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:GremlinResourceGremlinDatabase":
                return new GremlinResourceGremlinDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:GremlinResourceGremlinGraph":
                return new GremlinResourceGremlinGraph(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:GremlinResourceGremlinRoleAssignment":
                return new GremlinResourceGremlinRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:GremlinResourceGremlinRoleDefinition":
                return new GremlinResourceGremlinRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoCluster":
                return new MongoCluster(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoClusterFirewallRule":
                return new MongoClusterFirewallRule(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoDBResourceMongoDBCollection":
                return new MongoDBResourceMongoDBCollection(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoDBResourceMongoDBDatabase":
                return new MongoDBResourceMongoDBDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoDBResourceMongoRoleDefinition":
                return new MongoDBResourceMongoRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoDBResourceMongoUserDefinition":
                return new MongoDBResourceMongoUserDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoMIResourceMongoMIRoleAssignment":
                return new MongoMIResourceMongoMIRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:MongoMIResourceMongoMIRoleDefinition":
                return new MongoMIResourceMongoMIRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:NotebookWorkspace":
                return new NotebookWorkspace(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:Service":
                return new Service(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlContainer":
                return new SqlResourceSqlContainer(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlDatabase":
                return new SqlResourceSqlDatabase(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlRoleAssignment":
                return new SqlResourceSqlRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlRoleDefinition":
                return new SqlResourceSqlRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlStoredProcedure":
                return new SqlResourceSqlStoredProcedure(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlTrigger":
                return new SqlResourceSqlTrigger(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:SqlResourceSqlUserDefinedFunction":
                return new SqlResourceSqlUserDefinedFunction(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:TableResourceTable":
                return new TableResourceTable(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:TableResourceTableRoleAssignment":
                return new TableResourceTableRoleAssignment(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:TableResourceTableRoleDefinition":
                return new TableResourceTableRoleDefinition(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:ThroughputPool":
                return new ThroughputPool(name, <any>undefined, { urn })
            case "azure-native:cosmosdb:ThroughputPoolAccount":
                return new ThroughputPoolAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cosmosdb", _module)