import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssetArgs } from "./asset";
export type Asset = import("./asset").Asset;
export const Asset: typeof import("./asset").Asset = null as any;
utilities.lazyLoad(exports, ["Asset"], () => require("./asset"));

export { AssetEndpointProfileArgs } from "./assetEndpointProfile";
export type AssetEndpointProfile = import("./assetEndpointProfile").AssetEndpointProfile;
export const AssetEndpointProfile: typeof import("./assetEndpointProfile").AssetEndpointProfile = null as any;
utilities.lazyLoad(exports, ["AssetEndpointProfile"], () => require("./assetEndpointProfile"));

export { GetAssetArgs, GetAssetResult, GetAssetOutputArgs } from "./getAsset";
export const getAsset: typeof import("./getAsset").getAsset = null as any;
export const getAssetOutput: typeof import("./getAsset").getAssetOutput = null as any;
utilities.lazyLoad(exports, ["getAsset","getAssetOutput"], () => require("./getAsset"));

export { GetAssetEndpointProfileArgs, GetAssetEndpointProfileResult, GetAssetEndpointProfileOutputArgs } from "./getAssetEndpointProfile";
export const getAssetEndpointProfile: typeof import("./getAssetEndpointProfile").getAssetEndpointProfile = null as any;
export const getAssetEndpointProfileOutput: typeof import("./getAssetEndpointProfile").getAssetEndpointProfileOutput = null as any;
utilities.lazyLoad(exports, ["getAssetEndpointProfile","getAssetEndpointProfileOutput"], () => require("./getAssetEndpointProfile"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20231101preview from "./v20231101preview";

export {
    v20231101preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:deviceregistry:Asset":
                return new Asset(name, <any>undefined, { urn })
            case "azure-native:deviceregistry:AssetEndpointProfile":
                return new AssetEndpointProfile(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "deviceregistry", _module)