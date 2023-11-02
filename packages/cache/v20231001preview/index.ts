import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DatabaseArgs } from "./database";
export type Database = import("./database").Database;
export const Database: typeof import("./database").Database = null as any;
utilities.lazyLoad(exports, ["Database"], () => require("./database"));

export { EnterprisePrivateEndpointConnectionArgs } from "./enterprisePrivateEndpointConnection";
export type EnterprisePrivateEndpointConnection = import("./enterprisePrivateEndpointConnection").EnterprisePrivateEndpointConnection;
export const EnterprisePrivateEndpointConnection: typeof import("./enterprisePrivateEndpointConnection").EnterprisePrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["EnterprisePrivateEndpointConnection"], () => require("./enterprisePrivateEndpointConnection"));

export { GetDatabaseArgs, GetDatabaseResult, GetDatabaseOutputArgs } from "./getDatabase";
export const getDatabase: typeof import("./getDatabase").getDatabase = null as any;
export const getDatabaseOutput: typeof import("./getDatabase").getDatabaseOutput = null as any;
utilities.lazyLoad(exports, ["getDatabase","getDatabaseOutput"], () => require("./getDatabase"));

export { GetEnterprisePrivateEndpointConnectionArgs, GetEnterprisePrivateEndpointConnectionResult, GetEnterprisePrivateEndpointConnectionOutputArgs } from "./getEnterprisePrivateEndpointConnection";
export const getEnterprisePrivateEndpointConnection: typeof import("./getEnterprisePrivateEndpointConnection").getEnterprisePrivateEndpointConnection = null as any;
export const getEnterprisePrivateEndpointConnectionOutput: typeof import("./getEnterprisePrivateEndpointConnection").getEnterprisePrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getEnterprisePrivateEndpointConnection","getEnterprisePrivateEndpointConnectionOutput"], () => require("./getEnterprisePrivateEndpointConnection"));

export { GetRedisEnterpriseArgs, GetRedisEnterpriseResult, GetRedisEnterpriseOutputArgs } from "./getRedisEnterprise";
export const getRedisEnterprise: typeof import("./getRedisEnterprise").getRedisEnterprise = null as any;
export const getRedisEnterpriseOutput: typeof import("./getRedisEnterprise").getRedisEnterpriseOutput = null as any;
utilities.lazyLoad(exports, ["getRedisEnterprise","getRedisEnterpriseOutput"], () => require("./getRedisEnterprise"));

export { ListDatabaseKeysArgs, ListDatabaseKeysResult, ListDatabaseKeysOutputArgs } from "./listDatabaseKeys";
export const listDatabaseKeys: typeof import("./listDatabaseKeys").listDatabaseKeys = null as any;
export const listDatabaseKeysOutput: typeof import("./listDatabaseKeys").listDatabaseKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDatabaseKeys","listDatabaseKeysOutput"], () => require("./listDatabaseKeys"));

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
            case "azure-native:cache/v20231001preview:Database":
                return new Database(name, <any>undefined, { urn })
            case "azure-native:cache/v20231001preview:EnterprisePrivateEndpointConnection":
                return new EnterprisePrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:cache/v20231001preview:RedisEnterprise":
                return new RedisEnterprise(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cache/v20231001preview", _module)