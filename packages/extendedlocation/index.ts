import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomLocationArgs } from "./customLocation";
export type CustomLocation = import("./customLocation").CustomLocation;
export const CustomLocation: typeof import("./customLocation").CustomLocation = null as any;
utilities.lazyLoad(exports, ["CustomLocation"], () => require("./customLocation"));

export { GetCustomLocationArgs, GetCustomLocationResult, GetCustomLocationOutputArgs } from "./getCustomLocation";
export const getCustomLocation: typeof import("./getCustomLocation").getCustomLocation = null as any;
export const getCustomLocationOutput: typeof import("./getCustomLocation").getCustomLocationOutput = null as any;
utilities.lazyLoad(exports, ["getCustomLocation","getCustomLocationOutput"], () => require("./getCustomLocation"));

export { GetResourceSyncRuleArgs, GetResourceSyncRuleResult, GetResourceSyncRuleOutputArgs } from "./getResourceSyncRule";
export const getResourceSyncRule: typeof import("./getResourceSyncRule").getResourceSyncRule = null as any;
export const getResourceSyncRuleOutput: typeof import("./getResourceSyncRule").getResourceSyncRuleOutput = null as any;
utilities.lazyLoad(exports, ["getResourceSyncRule","getResourceSyncRuleOutput"], () => require("./getResourceSyncRule"));

export { ResourceSyncRuleArgs } from "./resourceSyncRule";
export type ResourceSyncRule = import("./resourceSyncRule").ResourceSyncRule;
export const ResourceSyncRule: typeof import("./resourceSyncRule").ResourceSyncRule = null as any;
utilities.lazyLoad(exports, ["ResourceSyncRule"], () => require("./resourceSyncRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:extendedlocation:CustomLocation":
                return new CustomLocation(name, <any>undefined, { urn })
            case "azure-native:extendedlocation:ResourceSyncRule":
                return new ResourceSyncRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "extendedlocation", _module)