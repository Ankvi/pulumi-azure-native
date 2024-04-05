import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetStreamingLocatorArgs, GetStreamingLocatorResult, GetStreamingLocatorOutputArgs } from "./getStreamingLocator";
export const getStreamingLocator: typeof import("./getStreamingLocator").getStreamingLocator = null as any;
export const getStreamingLocatorOutput: typeof import("./getStreamingLocator").getStreamingLocatorOutput = null as any;
utilities.lazyLoad(exports, ["getStreamingLocator","getStreamingLocatorOutput"], () => require("./getStreamingLocator"));

export { StreamingLocatorArgs } from "./streamingLocator";
export type StreamingLocator = import("./streamingLocator").StreamingLocator;
export const StreamingLocator: typeof import("./streamingLocator").StreamingLocator = null as any;
utilities.lazyLoad(exports, ["StreamingLocator"], () => require("./streamingLocator"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20180330preview:StreamingLocator":
                return new StreamingLocator(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20180330preview", _module)