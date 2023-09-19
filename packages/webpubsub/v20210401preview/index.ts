import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetWebPubSubArgs, GetWebPubSubResult, GetWebPubSubOutputArgs } from "./getWebPubSub";
export const getWebPubSub: typeof import("./getWebPubSub").getWebPubSub = null as any;
export const getWebPubSubOutput: typeof import("./getWebPubSub").getWebPubSubOutput = null as any;
utilities.lazyLoad(exports, ["getWebPubSub","getWebPubSubOutput"], () => require("./getWebPubSub"));

export { ListWebPubSubKeysArgs, ListWebPubSubKeysResult, ListWebPubSubKeysOutputArgs } from "./listWebPubSubKeys";
export const listWebPubSubKeys: typeof import("./listWebPubSubKeys").listWebPubSubKeys = null as any;
export const listWebPubSubKeysOutput: typeof import("./listWebPubSubKeys").listWebPubSubKeysOutput = null as any;
utilities.lazyLoad(exports, ["listWebPubSubKeys","listWebPubSubKeysOutput"], () => require("./listWebPubSubKeys"));

export { WebPubSubArgs } from "./webPubSub";
export type WebPubSub = import("./webPubSub").WebPubSub;
export const WebPubSub: typeof import("./webPubSub").WebPubSub = null as any;
utilities.lazyLoad(exports, ["WebPubSub"], () => require("./webPubSub"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:webpubsub/v20210401preview:WebPubSub":
                return new WebPubSub(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "webpubsub/v20210401preview", _module)
