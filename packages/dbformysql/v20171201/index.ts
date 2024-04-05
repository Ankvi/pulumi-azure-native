import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
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

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { GetServerAdministratorArgs, GetServerAdministratorResult, GetServerAdministratorOutputArgs } from "./getServerAdministrator";
export const getServerAdministrator: typeof import("./getServerAdministrator").getServerAdministrator = null as any;
export const getServerAdministratorOutput: typeof import("./getServerAdministrator").getServerAdministratorOutput = null as any;
utilities.lazyLoad(exports, ["getServerAdministrator","getServerAdministratorOutput"], () => require("./getServerAdministrator"));

export { GetVirtualNetworkRuleArgs, GetVirtualNetworkRuleResult, GetVirtualNetworkRuleOutputArgs } from "./getVirtualNetworkRule";
export const getVirtualNetworkRule: typeof import("./getVirtualNetworkRule").getVirtualNetworkRule = null as any;
export const getVirtualNetworkRuleOutput: typeof import("./getVirtualNetworkRule").getVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRule","getVirtualNetworkRuleOutput"], () => require("./getVirtualNetworkRule"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { ServerAdministratorArgs } from "./serverAdministrator";
export type ServerAdministrator = import("./serverAdministrator").ServerAdministrator;
export const ServerAdministrator: typeof import("./serverAdministrator").ServerAdministrator = null as any;
utilities.lazyLoad(exports, ["ServerAdministrator"], () => require("./serverAdministrator"));

export { VirtualNetworkRuleArgs } from "./virtualNetworkRule";
export type VirtualNetworkRule = import("./virtualNetworkRule").VirtualNetworkRule;
export const VirtualNetworkRule: typeof import("./virtualNetworkRule").VirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRule"], () => require("./virtualNetworkRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbformysql/v20171201:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20171201:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20171201:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20171201:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20171201:ServerAdministrator":
                return new ServerAdministrator(name, <any>undefined, { urn })
            case "azure-native:dbformysql/v20171201:VirtualNetworkRule":
                return new VirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbformysql/v20171201", _module)