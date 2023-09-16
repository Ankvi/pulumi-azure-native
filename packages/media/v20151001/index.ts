import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMediaServiceArgs, GetMediaServiceResult, GetMediaServiceOutputArgs } from "./getMediaService";
export const getMediaService: typeof import("./getMediaService").getMediaService = null as any;
export const getMediaServiceOutput: typeof import("./getMediaService").getMediaServiceOutput = null as any;
utilities.lazyLoad(exports, ["getMediaService","getMediaServiceOutput"], () => require("./getMediaService"));

export { ListMediaServiceKeysArgs, ListMediaServiceKeysResult, ListMediaServiceKeysOutputArgs } from "./listMediaServiceKeys";
export const listMediaServiceKeys: typeof import("./listMediaServiceKeys").listMediaServiceKeys = null as any;
export const listMediaServiceKeysOutput: typeof import("./listMediaServiceKeys").listMediaServiceKeysOutput = null as any;
utilities.lazyLoad(exports, ["listMediaServiceKeys","listMediaServiceKeysOutput"], () => require("./listMediaServiceKeys"));

export { MediaServiceArgs } from "./mediaService";
export type MediaService = import("./mediaService").MediaService;
export const MediaService: typeof import("./mediaService").MediaService = null as any;
utilities.lazyLoad(exports, ["MediaService"], () => require("./mediaService"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:media/v20151001:MediaService":
                return new MediaService(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "media/v20151001", _module)
