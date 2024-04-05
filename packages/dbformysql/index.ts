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

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20171201 from "./v20171201";
import * as v20180601privatepreview from "./v20180601privatepreview";
import * as v20200701preview from "./v20200701preview";
import * as v20200701privatepreview from "./v20200701privatepreview";
import * as v20210501 from "./v20210501";
import * as v20210501preview from "./v20210501preview";
import * as v20211201preview from "./v20211201preview";
import * as v20220101 from "./v20220101";
import * as v20220930preview from "./v20220930preview";
import * as v20230601preview from "./v20230601preview";
import * as v20230630 from "./v20230630";
import * as v20231001preview from "./v20231001preview";
import * as v20231201preview from "./v20231201preview";
import * as v20231230 from "./v20231230";

export {
    v20171201,
    v20180601privatepreview,
    v20200701preview,
    v20200701privatepreview,
    v20210501,
    v20210501preview,
    v20211201preview,
    v20220101,
    v20220930preview,
    v20230601preview,
    v20230630,
    v20231001preview,
    v20231201preview,
    v20231230,
};

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
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql", _module)