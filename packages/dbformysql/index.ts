import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureADAdministratorArgs } from "./azureADAdministrator";
export type AzureADAdministrator = import("./azureADAdministrator").AzureADAdministrator;
export const AzureADAdministrator: typeof import("./azureADAdministrator").AzureADAdministrator = null as any;
utilities.lazyLoad(exports, ["AzureADAdministrator"], () => require("./azureADAdministrator"));

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

export { GetAzureADAdministratorArgs, GetAzureADAdministratorResult, GetAzureADAdministratorOutputArgs } from "./getAzureADAdministrator";
export const getAzureADAdministrator: typeof import("./getAzureADAdministrator").getAzureADAdministrator = null as any;
export const getAzureADAdministratorOutput: typeof import("./getAzureADAdministrator").getAzureADAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getAzureADAdministrator","getAzureADAdministratorOutput"], () => require("./getAzureADAdministrator"));

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

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

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

export { GetSingleServerVirtualNetworkRuleArgs, GetSingleServerVirtualNetworkRuleResult, GetSingleServerVirtualNetworkRuleOutputArgs } from "./getSingleServerVirtualNetworkRule";
export const getSingleServerVirtualNetworkRule: typeof import("./getSingleServerVirtualNetworkRule").getSingleServerVirtualNetworkRule = null as any;
export const getSingleServerVirtualNetworkRuleOutput: typeof import("./getSingleServerVirtualNetworkRule").getSingleServerVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSingleServerVirtualNetworkRule","getSingleServerVirtualNetworkRuleOutput"], () => require("./getSingleServerVirtualNetworkRule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

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

export { SingleServerVirtualNetworkRuleArgs } from "./singleServerVirtualNetworkRule";
export type SingleServerVirtualNetworkRule = import("./singleServerVirtualNetworkRule").SingleServerVirtualNetworkRule;
export const SingleServerVirtualNetworkRule: typeof import("./singleServerVirtualNetworkRule").SingleServerVirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["SingleServerVirtualNetworkRule"], () => require("./singleServerVirtualNetworkRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformysql:AzureADAdministrator":
                return new AzureADAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbformysql:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-native:dbformysql:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:dbformysql:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbformysql:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:dbformysql:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServer":
                return new SingleServer(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServerConfiguration":
                return new SingleServerConfiguration(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServerDatabase":
                return new SingleServerDatabase(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServerFirewallRule":
                return new SingleServerFirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServerServerAdministrator":
                return new SingleServerServerAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbformysql:SingleServerVirtualNetworkRule":
                return new SingleServerVirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql", _module)