import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetVideoArgs, GetVideoResult, GetVideoOutputArgs } from "./getVideo";
export const getVideo: typeof import("./getVideo").getVideo = null as any;
export const getVideoOutput: typeof import("./getVideo").getVideoOutput = null as any;
utilities.lazyLoad(exports, ["getVideo","getVideoOutput"], () => require("./getVideo"));

export { GetVideoAnalyzerArgs, GetVideoAnalyzerResult, GetVideoAnalyzerOutputArgs } from "./getVideoAnalyzer";
export const getVideoAnalyzer: typeof import("./getVideoAnalyzer").getVideoAnalyzer = null as any;
export const getVideoAnalyzerOutput: typeof import("./getVideoAnalyzer").getVideoAnalyzerOutput = null as any;
utilities.lazyLoad(exports, ["getVideoAnalyzer","getVideoAnalyzerOutput"], () => require("./getVideoAnalyzer"));

export { ListVideoStreamingTokenArgs, ListVideoStreamingTokenResult, ListVideoStreamingTokenOutputArgs } from "./listVideoStreamingToken";
export const listVideoStreamingToken: typeof import("./listVideoStreamingToken").listVideoStreamingToken = null as any;
export const listVideoStreamingTokenOutput: typeof import("./listVideoStreamingToken").listVideoStreamingTokenOutput = null as any;
utilities.lazyLoad(exports, ["listVideoStreamingToken","listVideoStreamingTokenOutput"], () => require("./listVideoStreamingToken"));

export { VideoArgs } from "./video";
export type Video = import("./video").Video;
export const Video: typeof import("./video").Video = null as any;
utilities.lazyLoad(exports, ["Video"], () => require("./video"));

export { VideoAnalyzerArgs } from "./videoAnalyzer";
export type VideoAnalyzer = import("./videoAnalyzer").VideoAnalyzer;
export const VideoAnalyzer: typeof import("./videoAnalyzer").VideoAnalyzer = null as any;
utilities.lazyLoad(exports, ["VideoAnalyzer"], () => require("./videoAnalyzer"));


// Export enums:
export * from "../types/enums/v20210501preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:videoanalyzer/v20210501preview:Video":
                return new Video(name, <any>undefined, { urn })
            case "azure-native:videoanalyzer/v20210501preview:VideoAnalyzer":
                return new VideoAnalyzer(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "videoanalyzer/v20210501preview", _module)
