import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRedisArgs, GetRedisResult, GetRedisOutputArgs } from "./getRedis";
export const getRedis: typeof import("./getRedis").getRedis = null as any;
export const getRedisOutput: typeof import("./getRedis").getRedisOutput = null as any;
utilities.lazyLoad(exports, ["getRedis","getRedisOutput"], () => require("./getRedis"));

export { ListRedisKeysArgs, ListRedisKeysResult, ListRedisKeysOutputArgs } from "./listRedisKeys";
export const listRedisKeys: typeof import("./listRedisKeys").listRedisKeys = null as any;
export const listRedisKeysOutput: typeof import("./listRedisKeys").listRedisKeysOutput = null as any;
utilities.lazyLoad(exports, ["listRedisKeys","listRedisKeysOutput"], () => require("./listRedisKeys"));

export { RedisArgs } from "./redis";
export type Redis = import("./redis").Redis;
export const Redis: typeof import("./redis").Redis = null as any;
utilities.lazyLoad(exports, ["Redis"], () => require("./redis"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cache/v20200601:Redis":
                return new Redis(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cache/v20200601", _module)