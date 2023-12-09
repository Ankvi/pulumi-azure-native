import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GalleryArgs } from "./gallery";
export type Gallery = import("./gallery").Gallery;
export const Gallery: typeof import("./gallery").Gallery = null as any;
utilities.lazyLoad(exports, ["Gallery"], () => require("./gallery"));

export { GalleryApplicationArgs } from "./galleryApplication";
export type GalleryApplication = import("./galleryApplication").GalleryApplication;
export const GalleryApplication: typeof import("./galleryApplication").GalleryApplication = null as any;
utilities.lazyLoad(exports, ["GalleryApplication"], () => require("./galleryApplication"));

export { GalleryApplicationVersionArgs } from "./galleryApplicationVersion";
export type GalleryApplicationVersion = import("./galleryApplicationVersion").GalleryApplicationVersion;
export const GalleryApplicationVersion: typeof import("./galleryApplicationVersion").GalleryApplicationVersion = null as any;
utilities.lazyLoad(exports, ["GalleryApplicationVersion"], () => require("./galleryApplicationVersion"));

export { GalleryImageArgs } from "./galleryImage";
export type GalleryImage = import("./galleryImage").GalleryImage;
export const GalleryImage: typeof import("./galleryImage").GalleryImage = null as any;
utilities.lazyLoad(exports, ["GalleryImage"], () => require("./galleryImage"));

export { GalleryImageVersionArgs } from "./galleryImageVersion";
export type GalleryImageVersion = import("./galleryImageVersion").GalleryImageVersion;
export const GalleryImageVersion: typeof import("./galleryImageVersion").GalleryImageVersion = null as any;
utilities.lazyLoad(exports, ["GalleryImageVersion"], () => require("./galleryImageVersion"));

export { GetGalleryArgs, GetGalleryResult, GetGalleryOutputArgs } from "./getGallery";
export const getGallery: typeof import("./getGallery").getGallery = null as any;
export const getGalleryOutput: typeof import("./getGallery").getGalleryOutput = null as any;
utilities.lazyLoad(exports, ["getGallery","getGalleryOutput"], () => require("./getGallery"));

export { GetGalleryApplicationArgs, GetGalleryApplicationResult, GetGalleryApplicationOutputArgs } from "./getGalleryApplication";
export const getGalleryApplication: typeof import("./getGalleryApplication").getGalleryApplication = null as any;
export const getGalleryApplicationOutput: typeof import("./getGalleryApplication").getGalleryApplicationOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryApplication","getGalleryApplicationOutput"], () => require("./getGalleryApplication"));

export { GetGalleryApplicationVersionArgs, GetGalleryApplicationVersionResult, GetGalleryApplicationVersionOutputArgs } from "./getGalleryApplicationVersion";
export const getGalleryApplicationVersion: typeof import("./getGalleryApplicationVersion").getGalleryApplicationVersion = null as any;
export const getGalleryApplicationVersionOutput: typeof import("./getGalleryApplicationVersion").getGalleryApplicationVersionOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryApplicationVersion","getGalleryApplicationVersionOutput"], () => require("./getGalleryApplicationVersion"));

export { GetGalleryImageArgs, GetGalleryImageResult, GetGalleryImageOutputArgs } from "./getGalleryImage";
export const getGalleryImage: typeof import("./getGalleryImage").getGalleryImage = null as any;
export const getGalleryImageOutput: typeof import("./getGalleryImage").getGalleryImageOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImage","getGalleryImageOutput"], () => require("./getGalleryImage"));

export { GetGalleryImageVersionArgs, GetGalleryImageVersionResult, GetGalleryImageVersionOutputArgs } from "./getGalleryImageVersion";
export const getGalleryImageVersion: typeof import("./getGalleryImageVersion").getGalleryImageVersion = null as any;
export const getGalleryImageVersionOutput: typeof import("./getGalleryImageVersion").getGalleryImageVersionOutput = null as any;
utilities.lazyLoad(exports, ["getGalleryImageVersion","getGalleryImageVersionOutput"], () => require("./getGalleryImageVersion"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute/v20220803:Gallery":
                return new Gallery(name, <any>undefined, { urn })
            case "azure-native:compute/v20220803:GalleryApplication":
                return new GalleryApplication(name, <any>undefined, { urn })
            case "azure-native:compute/v20220803:GalleryApplicationVersion":
                return new GalleryApplicationVersion(name, <any>undefined, { urn })
            case "azure-native:compute/v20220803:GalleryImage":
                return new GalleryImage(name, <any>undefined, { urn })
            case "azure-native:compute/v20220803:GalleryImageVersion":
                return new GalleryImageVersion(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute/v20220803", _module)
