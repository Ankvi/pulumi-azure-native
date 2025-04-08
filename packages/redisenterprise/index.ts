import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccessPolicyAssignmentArgs } from "./accessPolicyAssignment";
export type AccessPolicyAssignment = import("./accessPolicyAssignment").AccessPolicyAssignment;
export const AccessPolicyAssignment: typeof import("./accessPolicyAssignment").AccessPolicyAssignment = null as any;
utilities.lazyLoad(exports, ["AccessPolicyAssignment"], () => require("./accessPolicyAssignment"));

export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { GetAccessPolicyAssignmentArgs, GetAccessPolicyAssignmentResult, GetAccessPolicyAssignmentOutputArgs } from "./getAccessPolicyAssignment";
export const getAccessPolicyAssignment: typeof import("./getAccessPolicyAssignment").getAccessPolicyAssignment = null as any;
export const getAccessPolicyAssignmentOutput: typeof import("./getAccessPolicyAssignment").getAccessPolicyAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getAccessPolicyAssignment","getAccessPolicyAssignmentOutput"], () => require("./getAccessPolicyAssignment"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRedisEnterpriseArgs, GetRedisEnterpriseResult, GetRedisEnterpriseOutputArgs } from "./getRedisEnterprise";
export const getRedisEnterprise: typeof import("./getRedisEnterprise").getRedisEnterprise = null as any;
export const getRedisEnterpriseOutput: typeof import("./getRedisEnterprise").getRedisEnterpriseOutput = null as any;
utilities.lazyLoad(exports, ["getRedisEnterprise","getRedisEnterpriseOutput"], () => require("./getRedisEnterprise"));

export { ListDatabaseKeysArgs, ListDatabaseKeysResult, ListDatabaseKeysOutputArgs } from "./listDatabaseKeys";
export const listDatabaseKeys: typeof import("./listDatabaseKeys").listDatabaseKeys = null as any;
export const listDatabaseKeysOutput: typeof import("./listDatabaseKeys").listDatabaseKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseKeys","listDatabaseKeysOutput"], () => require("./listDatabaseKeys"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

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
            case "azure-native:redisenterprise:AccessPolicyAssignment":
                return new AccessPolicyAssignment(name, <any>undefined, { urn })
            case "azure-native:redisenterprise:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:redisenterprise:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:redisenterprise:RedisEnterprise":
                return new RedisEnterprise(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "redisenterprise", _module)