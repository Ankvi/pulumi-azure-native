import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdministratorArgs } from "./administrator";
export type Administrator = import("./administrator").Administrator;
export const Administrator: typeof import("./administrator").Administrator = null as any;
utilities.lazyLoad(exports, ["Administrator"], () => require("./administrator"));

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

export { GetMigrationArgs, GetMigrationResult, GetMigrationOutputArgs } from "./getMigration";
export const getMigration: typeof import("./getMigration").getMigration = null as any;
export const getMigrationOutput: typeof import("./getMigration").getMigrationOutput = null as any;
utilities.lazyLoad(exports, ["getMigration","getMigrationOutput"], () => require("./getMigration"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

export { MigrationArgs } from "./migration";
export type Migration = import("./migration").Migration;
export const Migration: typeof import("./migration").Migration = null as any;
utilities.lazyLoad(exports, ["Migration"], () => require("./migration"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql/v20230301preview:Administrator":
                return new Administrator(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20230301preview:Configuration":
                return new Configuration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20230301preview:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20230301preview:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20230301preview:Migration":
                return new Migration(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql/v20230301preview:Server":
                return new Server(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql/v20230301preview", _module)
