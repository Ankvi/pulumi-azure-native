import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdministratorArgs } from "./administrator";
export type Administrator = import("./administrator").Administrator;
export const Administrator: typeof import("./administrator").Administrator = null as any;
utilities.lazyLoad(exports, ["Administrator"], () => require("./administrator"));

export { ClusterArgs } from "./cluster";
export type Cluster = import("./cluster").Cluster;
export const Cluster: typeof import("./cluster").Cluster = null as any;
utilities.lazyLoad(exports, ["Cluster"], () => require("./cluster"));

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

export { GetClusterArgs, GetClusterResult, GetClusterOutputArgs } from "./getCluster";
export const getCluster: typeof import("./getCluster").getCluster = null as any;
export const getClusterOutput: typeof import("./getCluster").getClusterOutput = null as any;
utilities.lazyLoad(exports, ["getCluster","getClusterOutput"], () => require("./getCluster"));

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

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRoleArgs, GetRoleResult, GetRoleOutputArgs } from "./getRole";
export const getRole: typeof import("./getRole").getRole = null as any;
export const getRoleOutput: typeof import("./getRole").getRoleOutput = null as any;
utilities.lazyLoad(exports, ["getRole","getRoleOutput"], () => require("./getRole"));

export { GetServerArgs, GetServerResult, GetServerOutputArgs } from "./getServer";
export const getServer: typeof import("./getServer").getServer = null as any;
export const getServerOutput: typeof import("./getServer").getServerOutput = null as any;
utilities.lazyLoad(exports, ["getServer","getServerOutput"], () => require("./getServer"));

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

export { RoleArgs } from "./role";
export type Role = import("./role").Role;
export const Role: typeof import("./role").Role = null as any;
utilities.lazyLoad(exports, ["Role"], () => require("./role"));

export { ServerArgs } from "./server";
export type Server = import("./server").Server;
export const Server: typeof import("./server").Server = null as any;
utilities.lazyLoad(exports, ["Server"], () => require("./server"));

export { VirtualEndpointArgs } from "./virtualEndpoint";
export type VirtualEndpoint = import("./virtualEndpoint").VirtualEndpoint;
export const VirtualEndpoint: typeof import("./virtualEndpoint").VirtualEndpoint = null as any;
utilities.lazyLoad(exports, ["VirtualEndpoint"], () => require("./virtualEndpoint"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20171201 from "./v20171201";
import * as v20171201preview from "./v20171201preview";
import * as v20180601privatepreview from "./v20180601privatepreview";
import * as v20200214preview from "./v20200214preview";
import * as v20200214privatepreview from "./v20200214privatepreview";
import * as v20201005privatepreview from "./v20201005privatepreview";
import * as v20210410privatepreview from "./v20210410privatepreview";
import * as v20210615privatepreview from "./v20210615privatepreview";
import * as v20220308preview from "./v20220308preview";
import * as v20220308privatepreview from "./v20220308privatepreview";
import * as v20220501preview from "./v20220501preview";
import * as v20221108 from "./v20221108";
import * as v20221201 from "./v20221201";
import * as v20230301preview from "./v20230301preview";
import * as v20230302preview from "./v20230302preview";
import * as v20230601preview from "./v20230601preview";
import * as v20231201preview from "./v20231201preview";

export {
    v20171201,
    v20171201preview,
    v20180601privatepreview,
    v20200214preview,
    v20200214privatepreview,
    v20201005privatepreview,
    v20210410privatepreview,
    v20210615privatepreview,
    v20220308preview,
    v20220308privatepreview,
    v20220501preview,
    v20221108,
    v20221201,
    v20230301preview,
    v20230302preview,
    v20230601preview,
    v20231201preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:dbforpostgresql:Administrator":
                return new Administrator(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Cluster":
                return new Cluster(name, <any>undefined, { urn })
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
            case "azure-native:dbforpostgresql:Role":
                return new Role(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:Server":
                return new Server(name, <any>undefined, { urn })
            case "azure-native:dbforpostgresql:VirtualEndpoint":
                return new VirtualEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "dbforpostgresql", _module)