import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSharedPrivateLinkResourceArgs, GetSharedPrivateLinkResourceResult, GetSharedPrivateLinkResourceOutputArgs } from "./getSharedPrivateLinkResource";
export const getSharedPrivateLinkResource: typeof import("./getSharedPrivateLinkResource").getSharedPrivateLinkResource = null as any;
export const getSharedPrivateLinkResourceOutput: typeof import("./getSharedPrivateLinkResource").getSharedPrivateLinkResourceOutput = null as any;
utilities.lazyLoad(exports, ["getSharedPrivateLinkResource","getSharedPrivateLinkResourceOutput"], () => require("./getSharedPrivateLinkResource"));

export { GetTargetArgs, GetTargetResult, GetTargetOutputArgs } from "./getTarget";
export const getTarget: typeof import("./getTarget").getTarget = null as any;
export const getTargetOutput: typeof import("./getTarget").getTargetOutput = null as any;
utilities.lazyLoad(exports, ["getTarget","getTargetOutput"], () => require("./getTarget"));

export { GetWatcherArgs, GetWatcherResult, GetWatcherOutputArgs } from "./getWatcher";
export const getWatcher: typeof import("./getWatcher").getWatcher = null as any;
export const getWatcherOutput: typeof import("./getWatcher").getWatcherOutput = null as any;
utilities.lazyLoad(exports, ["getWatcher","getWatcherOutput"], () => require("./getWatcher"));

export { SharedPrivateLinkResourceArgs } from "./sharedPrivateLinkResource";
export type SharedPrivateLinkResource = import("./sharedPrivateLinkResource").SharedPrivateLinkResource;
export const SharedPrivateLinkResource: typeof import("./sharedPrivateLinkResource").SharedPrivateLinkResource = null as any;
utilities.lazyLoad(exports, ["SharedPrivateLinkResource"], () => require("./sharedPrivateLinkResource"));

export { TargetArgs } from "./target";
export type Target = import("./target").Target;
export const Target: typeof import("./target").Target = null as any;
utilities.lazyLoad(exports, ["Target"], () => require("./target"));

export { WatcherArgs } from "./watcher";
export type Watcher = import("./watcher").Watcher;
export const Watcher: typeof import("./watcher").Watcher = null as any;
utilities.lazyLoad(exports, ["Watcher"], () => require("./watcher"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20230901preview from "./v20230901preview";

export {
    v20230901preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:databasewatcher:SharedPrivateLinkResource":
                return new SharedPrivateLinkResource(name, <any>undefined, { urn })
            case "azure-native:databasewatcher:Target":
                return new Target(name, <any>undefined, { urn })
            case "azure-native:databasewatcher:Watcher":
                return new Watcher(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "databasewatcher", _module)