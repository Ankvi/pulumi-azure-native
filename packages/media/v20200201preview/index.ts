import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMediaGraphArgs, GetMediaGraphResult, GetMediaGraphOutputArgs } from "./getMediaGraph";
export const getMediaGraph: typeof import("./getMediaGraph").getMediaGraph = null as any;
export const getMediaGraphOutput: typeof import("./getMediaGraph").getMediaGraphOutput = null as any;
utilities.lazyLoad(exports, ["getMediaGraph","getMediaGraphOutput"], () => require("./getMediaGraph"));

export { MediaGraphArgs } from "./mediaGraph";
export type MediaGraph = import("./mediaGraph").MediaGraph;
export const MediaGraph: typeof import("./mediaGraph").MediaGraph = null as any;
utilities.lazyLoad(exports, ["MediaGraph"], () => require("./mediaGraph"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20200201preview:MediaGraph":
                return new MediaGraph(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20200201preview", _module)