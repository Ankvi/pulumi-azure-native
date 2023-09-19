import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRedisEnterpriseArgs, GetRedisEnterpriseResult, GetRedisEnterpriseOutputArgs } from "./getRedisEnterprise";
export const getRedisEnterprise: typeof import("./getRedisEnterprise").getRedisEnterprise = null as any;
export const getRedisEnterpriseOutput: typeof import("./getRedisEnterprise").getRedisEnterpriseOutput = null as any;
utilities.lazyLoad(exports, ["getRedisEnterprise","getRedisEnterpriseOutput"], () => require("./getRedisEnterprise"));

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
            case "azure-native:cache/v20201001preview:RedisEnterprise":
                return new RedisEnterprise(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cache/v20201001preview", _module)
