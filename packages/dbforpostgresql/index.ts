import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdministratorArgs } from "./administrator";
export type Administrator = import("./administrator").Administrator;
export const Administrator: typeof import("./administrator").Administrator = null as any;
utilities.lazyLoad(exports, ["Administrator"], () => require("./administrator"));

export { BackupArgs } from "./backup";
export type Backup = import("./backup").Backup;
export const Backup: typeof import("./backup").Backup = null as any;
utilities.lazyLoad(exports, ["Backup"], () => require("./backup"));

export { ConfigurationArgs } from "./configuration";
export type Configuration = import("./configuration").Configuration;
export const Configuration: typeof import("./configuration").Configuration = null as any;
utilities.lazyLoad(exports, ["Configuration"], () => require("./configuration"));

export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetAdministratorArgs, GetAdministratorResult, GetAdministratorOutputArgs } from "./getAdministrator";
export const getAdministrator: typeof import("./getAdministrator").getAdministrator = null as any;
export const getAdministratorOutput: typeof import("./getAdministrator").getAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getAdministrator","getAdministratorOutput"], () => require("./getAdministrator"));

export { GetBackupArgs, GetBackupResult, GetBackupOutputArgs } from "./getBackup";
export const getBackup: typeof import("./getBackup").getBackup = null as any;
export const getBackupOutput: typeof import("./getBackup").getBackupOutput = null as any;
utilities.lazyLoad(exports, ["getBackup","getBackupOutput"], () => require("./getBackup"));

export { GetConfigurationArgs, GetConfigurationResult, GetConfigurationOutputArgs } from "./getConfiguration";
export const getConfiguration: typeof import("./getConfiguration").getConfiguration = null as any;
export const getConfigurationOutput: typeof import("./getConfiguration").getConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getConfiguration","getConfigurationOutput"], () => require("./getConfiguration"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetGetPrivateDnsZoneSuffixExecuteArgs, GetGetPrivateDnsZoneSuffixExecuteResult } from "./getGetPrivateDnsZoneSuffixExecute";
export const getGetPrivateDnsZoneSuffixExecute: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecute = null as any;
export const getGetPrivateDnsZoneSuffixExecuteOutput: typeof import("./getGetPrivateDnsZoneSuffixExecute").getGetPrivateDnsZoneSuffixExecuteOutput = null as any;
utilities.lazyLoad(exports, ["getGetPrivateDnsZoneSuffixExecute","getGetPrivateDnsZoneSuffixExecuteOutput"], () => require("./getGetPrivateDnsZoneSuffixExecute"));

export { GetMigrationArgs, GetMigrationResult, GetMigrationOutputArgs } from "./getMigration";
export const getMigration: typeof import("./getMigration").getMigration = null as any;
export const getMigrationOutput: typeof import("./getMigration").getMigrationOutput = null as any;
utilities.lazyLoad(exports, ["getMigration","getMigrationOutput"], () => require("./getMigration"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerGroupClusterArgs, GetServerGroupClusterResult, GetServerGroupClusterOutputArgs } from "./getServerGroupCluster";
export const getServerGroupCluster: typeof import("./getServerGroupCluster").getServerGroupCluster = null as any;
export const getServerGroupClusterOutput: typeof import("./getServerGroupCluster").getServerGroupClusterOutput = null as any;
utilities.lazyLoad(exports, ["getServerGroupCluster","getServerGroupClusterOutput"], () => require("./getServerGroupCluster"));

export { GetServerGroupFirewallRuleArgs, GetServerGroupFirewallRuleResult, GetServerGroupFirewallRuleOutputArgs } from "./getServerGroupFirewallRule";
export const getServerGroupFirewallRule: typeof import("./getServerGroupFirewallRule").getServerGroupFirewallRule = null as any;
export const getServerGroupFirewallRuleOutput: typeof import("./getServerGroupFirewallRule").getServerGroupFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getServerGroupFirewallRule","getServerGroupFirewallRuleOutput"], () => require("./getServerGroupFirewallRule"));

export { GetServerGroupPrivateEndpointConnectionArgs, GetServerGroupPrivateEndpointConnectionResult, GetServerGroupPrivateEndpointConnectionOutputArgs } from "./getServerGroupPrivateEndpointConnection";
export const getServerGroupPrivateEndpointConnection: typeof import("./getServerGroupPrivateEndpointConnection").getServerGroupPrivateEndpointConnection = null as any;
export const getServerGroupPrivateEndpointConnectionOutput: typeof import("./getServerGroupPrivateEndpointConnection").getServerGroupPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getServerGroupPrivateEndpointConnection","getServerGroupPrivateEndpointConnectionOutput"], () => require("./getServerGroupPrivateEndpointConnection"));

export { GetServerGroupRoleArgs, GetServerGroupRoleResult, GetServerGroupRoleOutputArgs } from "./getServerGroupRole";
export const getServerGroupRole: typeof import("./getServerGroupRole").getServerGroupRole = null as any;
export const getServerGroupRoleOutput: typeof import("./getServerGroupRole").getServerGroupRoleOutput = null as any;
utilities.lazyLoad(exports, ["getServerGroupRole","getServerGroupRoleOutput"], () => require("./getServerGroupRole"));

export { GetSingleServerArgs, GetSingleServerResult, GetSingleServerOutputArgs } from "./getSingleServer";
export const getSingleServer: typeof import("./getSingleServer").getSingleServer = null as any;
export const getSingleServerOutput: typeof import("./getSingleServer").getSingleServerOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServer","getSingleServerOutput"], () => require("./getSingleServer"));

export { GetSingleServerConfigurationArgs, GetSingleServerConfigurationResult, GetSingleServerConfigurationOutputArgs } from "./getSingleServerConfiguration";
export const getSingleServerConfiguration: typeof import("./getSingleServerConfiguration").getSingleServerConfiguration = null as any;
export const getSingleServerConfigurationOutput: typeof import("./getSingleServerConfiguration").getSingleServerConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerConfiguration","getSingleServerConfigurationOutput"], () => require("./getSingleServerConfiguration"));

export { GetSingleServerDatabaseArgs, GetSingleServerDatabaseResult, GetSingleServerDatabaseOutputArgs } from "./getSingleServerDatabase";
export const getSingleServerDatabase: typeof import("./getSingleServerDatabase").getSingleServerDatabase = null as any;
export const getSingleServerDatabaseOutput: typeof import("./getSingleServerDatabase").getSingleServerDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerDatabase","getSingleServerDatabaseOutput"], () => require("./getSingleServerDatabase"));

export { GetSingleServerFirewallRuleArgs, GetSingleServerFirewallRuleResult, GetSingleServerFirewallRuleOutputArgs } from "./getSingleServerFirewallRule";
export const getSingleServerFirewallRule: typeof import("./getSingleServerFirewallRule").getSingleServerFirewallRule = null as any;
export const getSingleServerFirewallRuleOutput: typeof import("./getSingleServerFirewallRule").getSingleServerFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerFirewallRule","getSingleServerFirewallRuleOutput"], () => require("./getSingleServerFirewallRule"));

export { GetSingleServerServerAdministratorArgs, GetSingleServerServerAdministratorResult, GetSingleServerServerAdministratorOutputArgs } from "./getSingleServerServerAdministrator";
export const getSingleServerServerAdministrator: typeof import("./getSingleServerServerAdministrator").getSingleServerServerAdministrator = null as any;
export const getSingleServerServerAdministratorOutput: typeof import("./getSingleServerServerAdministrator").getSingleServerServerAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerServerAdministrator","getSingleServerServerAdministratorOutput"], () => require("./getSingleServerServerAdministrator"));

export { GetSingleServerServerSecurityAlertPolicyArgs, GetSingleServerServerSecurityAlertPolicyResult, GetSingleServerServerSecurityAlertPolicyOutputArgs } from "./getSingleServerServerSecurityAlertPolicy";
export const getSingleServerServerSecurityAlertPolicy: typeof import("./getSingleServerServerSecurityAlertPolicy").getSingleServerServerSecurityAlertPolicy = null as any;
export const getSingleServerServerSecurityAlertPolicyOutput: typeof import("./getSingleServerServerSecurityAlertPolicy").getSingleServerServerSecurityAlertPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerServerSecurityAlertPolicy","getSingleServerServerSecurityAlertPolicyOutput"], () => require("./getSingleServerServerSecurityAlertPolicy"));

export { GetSingleServerVirtualNetworkRuleArgs, GetSingleServerVirtualNetworkRuleResult, GetSingleServerVirtualNetworkRuleOutputArgs } from "./getSingleServerVirtualNetworkRule";
export const getSingleServerVirtualNetworkRule: typeof import("./getSingleServerVirtualNetworkRule").getSingleServerVirtualNetworkRule = null as any;
export const getSingleServerVirtualNetworkRuleOutput: typeof import("./getSingleServerVirtualNetworkRule").getSingleServerVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerVirtualNetworkRule","getSingleServerVirtualNetworkRuleOutput"], () => require("./getSingleServerVirtualNetworkRule"));

export { GetVirtualEndpointArgs, GetVirtualEndpointResult, GetVirtualEndpointOutputArgs } from "./getVirtualEndpoint";
export const getVirtualEndpoint: typeof import("./getVirtualEndpoint").getVirtualEndpoint = null as any;
export const getVirtualEndpointOutput: typeof import("./getVirtualEndpoint").getVirtualEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualEndpoint","getVirtualEndpointOutput"], () => require("./getVirtualEndpoint"));

export { MigrationArgs } from "./migration";
export type Migration = import("./migration").Migration;
export const Migration: typeof import("./migration").Migration = null as any;
utilities.lazyLoad(exports, ["Migration"], () => require("./migration"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerGroupClusterArgs } from "./serverGroupCluster";
export type ServerGroupCluster = import("./serverGroupCluster").ServerGroupCluster;
export const ServerGroupCluster: typeof import("./serverGroupCluster").ServerGroupCluster = null as any;
utilities.lazyLoad(exports, ["ServerGroupCluster"], () => require("./serverGroupCluster"));

export { ServerGroupFirewallRuleArgs } from "./serverGroupFirewallRule";
export type ServerGroupFirewallRule = import("./serverGroupFirewallRule").ServerGroupFirewallRule;
export const ServerGroupFirewallRule: typeof import("./serverGroupFirewallRule").ServerGroupFirewallRule = null as any;
utilities.lazyLoad(exports, ["ServerGroupFirewallRule"], () => require("./serverGroupFirewallRule"));

export { ServerGroupPrivateEndpointConnectionArgs } from "./serverGroupPrivateEndpointConnection";
export type ServerGroupPrivateEndpointConnection = import("./serverGroupPrivateEndpointConnection").ServerGroupPrivateEndpointConnection;
export const ServerGroupPrivateEndpointConnection: typeof import("./serverGroupPrivateEndpointConnection").ServerGroupPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["ServerGroupPrivateEndpointConnection"], () => require("./serverGroupPrivateEndpointConnection"));

export { ServerGroupRoleArgs } from "./serverGroupRole";
export type ServerGroupRole = import("./serverGroupRole").ServerGroupRole;
export const ServerGroupRole: typeof import("./serverGroupRole").ServerGroupRole = null as any;
utilities.lazyLoad(exports, ["ServerGroupRole"], () => require("./serverGroupRole"));

export { SingleServerArgs } from "./singleServer";
export type SingleServer = import("./singleServer").SingleServer;
export const SingleServer: typeof import("./singleServer").SingleServer = null as any;
utilities.lazyLoad(exports, ["SingleServer"], () => require("./singleServer"));

export { SingleServerConfigurationArgs } from "./singleServerConfiguration";
export type SingleServerConfiguration = import("./singleServerConfiguration").SingleServerConfiguration;
export const SingleServerConfiguration: typeof import("./singleServerConfiguration").SingleServerConfiguration = null as any;
utilities.lazyLoad(exports, ["SingleServerConfiguration"], () => require("./singleServerConfiguration"));

export { SingleServerDatabaseArgs } from "./singleServerDatabase";
export type SingleServerDatabase = import("./singleServerDatabase").SingleServerDatabase;
export const SingleServerDatabase: typeof import("./singleServerDatabase").SingleServerDatabase = null as any;
utilities.lazyLoad(exports, ["SingleServerDatabase"], () => require("./singleServerDatabase"));

export { SingleServerFirewallRuleArgs } from "./singleServerFirewallRule";
export type SingleServerFirewallRule = import("./singleServerFirewallRule").SingleServerFirewallRule;
export const SingleServerFirewallRule: typeof import("./singleServerFirewallRule").SingleServerFirewallRule = null as any;
utilities.lazyLoad(exports, ["SingleServerFirewallRule"], () => require("./singleServerFirewallRule"));

export { SingleServerServerAdministratorArgs } from "./singleServerServerAdministrator";
export type SingleServerServerAdministrator = import("./singleServerServerAdministrator").SingleServerServerAdministrator;
export const SingleServerServerAdministrator: typeof import("./singleServerServerAdministrator").SingleServerServerAdministrator = null as any;
utilities.lazyLoad(exports, ["SingleServerServerAdministrator"], () => require("./singleServerServerAdministrator"));

export { SingleServerServerSecurityAlertPolicyArgs } from "./singleServerServerSecurityAlertPolicy";
export type SingleServerServerSecurityAlertPolicy = import("./singleServerServerSecurityAlertPolicy").SingleServerServerSecurityAlertPolicy;
export const SingleServerServerSecurityAlertPolicy: typeof import("./singleServerServerSecurityAlertPolicy").SingleServerServerSecurityAlertPolicy = null as any;
utilities.lazyLoad(exports, ["SingleServerServerSecurityAlertPolicy"], () => require("./singleServerServerSecurityAlertPolicy"));

export { SingleServerVirtualNetworkRuleArgs } from "./singleServerVirtualNetworkRule";
export type SingleServerVirtualNetworkRule = import("./singleServerVirtualNetworkRule").SingleServerVirtualNetworkRule;
export const SingleServerVirtualNetworkRule: typeof import("./singleServerVirtualNetworkRule").SingleServerVirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["SingleServerVirtualNetworkRule"], () => require("./singleServerVirtualNetworkRule"));

export { VirtualEndpointArgs } from "./virtualEndpoint";
export type VirtualEndpoint = import("./virtualEndpoint").VirtualEndpoint;
export const VirtualEndpoint: typeof import("./virtualEndpoint").VirtualEndpoint = null as any;
utilities.lazyLoad(exports, ["VirtualEndpoint"], () => require("./virtualEndpoint"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql:Administrator":
                return new Administrator(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Backup":
                return new Backup(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Migration":
                return new Migration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:ServerGroupCluster":
                return new ServerGroupCluster(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:ServerGroupFirewallRule":
                return new ServerGroupFirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:ServerGroupPrivateEndpointConnection":
                return new ServerGroupPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:ServerGroupRole":
                return new ServerGroupRole(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServer":
                return new SingleServer(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerConfiguration":
                return new SingleServerConfiguration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerDatabase":
                return new SingleServerDatabase(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerFirewallRule":
                return new SingleServerFirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerServerAdministrator":
                return new SingleServerServerAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerServerSecurityAlertPolicy":
                return new SingleServerServerSecurityAlertPolicy(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:SingleServerVirtualNetworkRule":
                return new SingleServerVirtualNetworkRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:VirtualEndpoint":
                return new VirtualEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql", _module)