import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AliasArgs } from "./alias";
export type Alias = import("./alias").Alias;
export const Alias: typeof import("./alias").Alias = null as any;
utilities.lazyLoad(exports, ["Alias"], () => require("./alias"));

export { GetAliasArgs, GetAliasResult, GetAliasOutputArgs } from "./getAlias";
export const getAlias: typeof import("./getAlias").getAlias = null as any;
export const getAliasOutput: typeof import("./getAlias").getAliasOutput = null as any;
utilities.lazyLoad(exports, ["getAlias","getAliasOutput"], () => require("./getAlias"));

export { GetSubscriptionTarDirectoryArgs, GetSubscriptionTarDirectoryResult, GetSubscriptionTarDirectoryOutputArgs } from "./getSubscriptionTarDirectory";
export const getSubscriptionTarDirectory: typeof import("./getSubscriptionTarDirectory").getSubscriptionTarDirectory = null as any;
export const getSubscriptionTarDirectoryOutput: typeof import("./getSubscriptionTarDirectory").getSubscriptionTarDirectoryOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionTarDirectory","getSubscriptionTarDirectoryOutput"], () => require("./getSubscriptionTarDirectory"));

export { SubscriptionTarDirectoryArgs } from "./subscriptionTarDirectory";
export type SubscriptionTarDirectory = import("./subscriptionTarDirectory").SubscriptionTarDirectory;
export const SubscriptionTarDirectory: typeof import("./subscriptionTarDirectory").SubscriptionTarDirectory = null as any;
utilities.lazyLoad(exports, ["SubscriptionTarDirectory"], () => require("./subscriptionTarDirectory"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:subscription:Alias":
                return new Alias(name, <any>undefined, { urn })
            case "azure-native:subscription:SubscriptionTarDirectory":
                return new SubscriptionTarDirectory(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "subscription", _module)