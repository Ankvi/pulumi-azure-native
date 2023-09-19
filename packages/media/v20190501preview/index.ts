import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetLiveEventArgs, GetLiveEventResult, GetLiveEventOutputArgs } from "./getLiveEvent";
export const getLiveEvent: typeof import("./getLiveEvent").getLiveEvent = null as any;
export const getLiveEventOutput: typeof import("./getLiveEvent").getLiveEventOutput = null as any;
utilities.lazyLoad(exports, ["getLiveEvent","getLiveEventOutput"], () => require("./getLiveEvent"));

export { LiveEventArgs } from "./liveEvent";
export type LiveEvent = import("./liveEvent").LiveEvent;
export const LiveEvent: typeof import("./liveEvent").LiveEvent = null as any;
utilities.lazyLoad(exports, ["LiveEvent"], () => require("./liveEvent"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20190501preview:LiveEvent":
                return new LiveEvent(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20190501preview", _module)
