import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DomainArgs } from "./domain";
export type Domain = import("./domain").Domain;
export const Domain: typeof import("./domain").Domain = null as any;
utilities.lazyLoad(exports, ["Domain"], () => require("./domain"));

export { GetDomainArgs, GetDomainResult, GetDomainOutputArgs } from "./getDomain";
export const getDomain: typeof import("./getDomain").getDomain = null as any;
export const getDomainOutput: typeof import("./getDomain").getDomainOutput = null as any;
utilities.lazyLoad(exports, ["getDomain","getDomainOutput"], () => require("./getDomain"));

export { GetTopicArgs, GetTopicResult, GetTopicOutputArgs } from "./getTopic";
export const getTopic: typeof import("./getTopic").getTopic = null as any;
export const getTopicOutput: typeof import("./getTopic").getTopicOutput = null as any;
utilities.lazyLoad(exports, ["getTopic","getTopicOutput"], () => require("./getTopic"));

export { ListDomainSharedAccessKeysArgs, ListDomainSharedAccessKeysResult, ListDomainSharedAccessKeysOutputArgs } from "./listDomainSharedAccessKeys";
export const listDomainSharedAccessKeys: typeof import("./listDomainSharedAccessKeys").listDomainSharedAccessKeys = null as any;
export const listDomainSharedAccessKeysOutput: typeof import("./listDomainSharedAccessKeys").listDomainSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listDomainSharedAccessKeys","listDomainSharedAccessKeysOutput"], () => require("./listDomainSharedAccessKeys"));

export { ListTopicSharedAccessKeysArgs, ListTopicSharedAccessKeysResult, ListTopicSharedAccessKeysOutputArgs } from "./listTopicSharedAccessKeys";
export const listTopicSharedAccessKeys: typeof import("./listTopicSharedAccessKeys").listTopicSharedAccessKeys = null as any;
export const listTopicSharedAccessKeysOutput: typeof import("./listTopicSharedAccessKeys").listTopicSharedAccessKeysOutput = null as any;
utilities.lazyLoad(exports, ["listTopicSharedAccessKeys","listTopicSharedAccessKeysOutput"], () => require("./listTopicSharedAccessKeys"));

export { TopicArgs } from "./topic";
export type Topic = import("./topic").Topic;
export const Topic: typeof import("./topic").Topic = null as any;
utilities.lazyLoad(exports, ["Topic"], () => require("./topic"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:eventgrid/v20200401preview:Domain":
                return new Domain(name, <any>undefined, { urn })
            case "azure-native:eventgrid/v20200401preview:Topic":
                return new Topic(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "eventgrid/v20200401preview", _module)