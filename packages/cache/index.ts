import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessPolicyArgs } from "./accessPolicy";
export type AccessPolicy = import("./accessPolicy").AccessPolicy;
export const AccessPolicy: typeof import("./accessPolicy").AccessPolicy = null as any;
utilities.lazyLoad(exports, ["AccessPolicy"], () => require("./accessPolicy"));

export { AccessPolicyAssignmentArgs } from "./accessPolicyAssignment";
export type AccessPolicyAssignment = import("./accessPolicyAssignment").AccessPolicyAssignment;
export const AccessPolicyAssignment: typeof import("./accessPolicyAssignment").AccessPolicyAssignment = null as any;
utilities.lazyLoad(exports, ["AccessPolicyAssignment"], () => require("./accessPolicyAssignment"));

export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { EnterprisePrivateEndpointConnectionArgs } from "./enterprisePrivateEndpointConnection";
export type EnterprisePrivateEndpointConnection = import("./enterprisePrivateEndpointConnection").EnterprisePrivateEndpointConnection;
export const EnterprisePrivateEndpointConnection: typeof import("./enterprisePrivateEndpointConnection").EnterprisePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["EnterprisePrivateEndpointConnection"], () => require("./enterprisePrivateEndpointConnection"));

export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetAccessPolicyArgs, GetAccessPolicyResult, GetAccessPolicyOutputArgs } from "./getAccessPolicy";
export const getAccessPolicy: typeof import("./getAccessPolicy").getAccessPolicy = null as any;
export const getAccessPolicyOutput: typeof import("./getAccessPolicy").getAccessPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicy","getAccessPolicyOutput"], () => require("./getAccessPolicy"));

export { GetAccessPolicyAssignmentArgs, GetAccessPolicyAssignmentResult, GetAccessPolicyAssignmentOutputArgs } from "./getAccessPolicyAssignment";
export const getAccessPolicyAssignment: typeof import("./getAccessPolicyAssignment").getAccessPolicyAssignment = null as any;
export const getAccessPolicyAssignmentOutput: typeof import("./getAccessPolicyAssignment").getAccessPolicyAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicyAssignment","getAccessPolicyAssignmentOutput"], () => require("./getAccessPolicyAssignment"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetEnterprisePrivateEndpointConnectionArgs, GetEnterprisePrivateEndpointConnectionResult, GetEnterprisePrivateEndpointConnectionOutputArgs } from "./getEnterprisePrivateEndpointConnection";
export const getEnterprisePrivateEndpointConnection: typeof import("./getEnterprisePrivateEndpointConnection").getEnterprisePrivateEndpointConnection = null as any;
export const getEnterprisePrivateEndpointConnectionOutput: typeof import("./getEnterprisePrivateEndpointConnection").getEnterprisePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEnterprisePrivateEndpointConnection","getEnterprisePrivateEndpointConnectionOutput"], () => require("./getEnterprisePrivateEndpointConnection"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetLinkedServerArgs, GetLinkedServerResult, GetLinkedServerOutputArgs } from "./getLinkedServer";
export const getLinkedServer: typeof import("./getLinkedServer").getLinkedServer = null as any;
export const getLinkedServerOutput: typeof import("./getLinkedServer").getLinkedServerOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedServer","getLinkedServerOutput"], () => require("./getLinkedServer"));

export { GetPatchScheduleArgs, GetPatchScheduleResult, GetPatchScheduleOutputArgs } from "./getPatchSchedule";
export const getPatchSchedule: typeof import("./getPatchSchedule").getPatchSchedule = null as any;
export const getPatchScheduleOutput: typeof import("./getPatchSchedule").getPatchScheduleOutput = null as any;
utilities.lazyLoad(exports, ["getPatchSchedule","getPatchScheduleOutput"], () => require("./getPatchSchedule"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRedisArgs, GetRedisResult, GetRedisOutputArgs } from "./getRedis";
export const getRedis: typeof import("./getRedis").getRedis = null as any;
export const getRedisOutput: typeof import("./getRedis").getRedisOutput = null as any;
utilities.lazyLoad(exports, ["getRedis","getRedisOutput"], () => require("./getRedis"));

export { GetRedisEnterpriseArgs, GetRedisEnterpriseResult, GetRedisEnterpriseOutputArgs } from "./getRedisEnterprise";
export const getRedisEnterprise: typeof import("./getRedisEnterprise").getRedisEnterprise = null as any;
export const getRedisEnterpriseOutput: typeof import("./getRedisEnterprise").getRedisEnterpriseOutput = null as any;
utilities.lazyLoad(exports, ["getRedisEnterprise","getRedisEnterpriseOutput"], () => require("./getRedisEnterprise"));

export { LinkedServerArgs } from "./linkedServer";
export type LinkedServer = import("./linkedServer").LinkedServer;
export const LinkedServer: typeof import("./linkedServer").LinkedServer = null as any;
utilities.lazyLoad(exports, ["LinkedServer"], () => require("./linkedServer"));

export { ListDatabaseKeysArgs, ListDatabaseKeysResult, ListDatabaseKeysOutputArgs } from "./listDatabaseKeys";
export const listDatabaseKeys: typeof import("./listDatabaseKeys").listDatabaseKeys = null as any;
export const listDatabaseKeysOutput: typeof import("./listDatabaseKeys").listDatabaseKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseKeys","listDatabaseKeysOutput"], () => require("./listDatabaseKeys"));

export { ListRedisKeysArgs, ListRedisKeysResult, ListRedisKeysOutputArgs } from "./listRedisKeys";
export const listRedisKeys: typeof import("./listRedisKeys").listRedisKeys = null as any;
export const listRedisKeysOutput: typeof import("./listRedisKeys").listRedisKeysOutput = null as any;
utilities.lazyLoad(exports, ["listRedisKeys","listRedisKeysOutput"], () => require("./listRedisKeys"));

export { PatchScheduleArgs } from "./patchSchedule";
export type PatchSchedule = import("./patchSchedule").PatchSchedule;
export const PatchSchedule: typeof import("./patchSchedule").PatchSchedule = null as any;
utilities.lazyLoad(exports, ["PatchSchedule"], () => require("./patchSchedule"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { RedisArgs } from "./redis";
export type Redis = import("./redis").Redis;
export const Redis: typeof import("./redis").Redis = null as any;
utilities.lazyLoad(exports, ["Redis"], () => require("./redis"));

export { RedisEnterpriseArgs } from "./redisEnterprise";
export type RedisEnterprise = import("./redisEnterprise").RedisEnterprise;
export const RedisEnterprise: typeof import("./redisEnterprise").RedisEnterprise = null as any;
utilities.lazyLoad(exports, ["RedisEnterprise"], () => require("./redisEnterprise"));


// Export enums:
export * from "./types/enums";


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cache:AccessPolicy":
                return new AccessPolicy(name, <any>undefined, { urn })
            case "azure-native:cache:AccessPolicyAssignment":
                return new AccessPolicyAssignment(name, <any>undefined, { urn })
            case "azure-native:cache:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:cache:EnterprisePrivateEndpointConnection":
                return new EnterprisePrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:cache:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:cache:LinkedServer":
                return new LinkedServer(name, <any>undefined, { urn })
            case "azure-native:cache:PatchSchedule":
                return new PatchSchedule(name, <any>undefined, { urn })
            case "azure-native:cache:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:cache:Redis":
                return new Redis(name, <any>undefined, { urn })
            case "azure-native:cache:RedisEnterprise":
                return new RedisEnterprise(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cache", _module)
