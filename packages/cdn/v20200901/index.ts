import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AFDEndpointArgs } from "./afdendpoint";
export type AFDEndpoint = import("./afdendpoint").AFDEndpoint;
export const AFDEndpoint: typeof import("./afdendpoint").AFDEndpoint = null as any;
utilities.lazyLoad(exports, ["AFDEndpoint"], () => require("./afdendpoint"));

export { AFDOriginGroupArgs } from "./afdoriginGroup";
export type AFDOriginGroup = import("./afdoriginGroup").AFDOriginGroup;
export const AFDOriginGroup: typeof import("./afdoriginGroup").AFDOriginGroup = null as any;
utilities.lazyLoad(exports, ["AFDOriginGroup"], () => require("./afdoriginGroup"));

export { GetAFDEndpointArgs, GetAFDEndpointResult, GetAFDEndpointOutputArgs } from "./getAFDEndpoint";
export const getAFDEndpoint: typeof import("./getAFDEndpoint").getAFDEndpoint = null as any;
export const getAFDEndpointOutput: typeof import("./getAFDEndpoint").getAFDEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getAFDEndpoint","getAFDEndpointOutput"], () => require("./getAFDEndpoint"));

export { GetAFDOriginGroupArgs, GetAFDOriginGroupResult, GetAFDOriginGroupOutputArgs } from "./getAFDOriginGroup";
export const getAFDOriginGroup: typeof import("./getAFDOriginGroup").getAFDOriginGroup = null as any;
export const getAFDOriginGroupOutput: typeof import("./getAFDOriginGroup").getAFDOriginGroupOutput = null as any;
utilities.lazyLoad(exports, ["getAFDOriginGroup","getAFDOriginGroupOutput"], () => require("./getAFDOriginGroup"));

export { GetProfileArgs, GetProfileResult, GetProfileOutputArgs } from "./getProfile";
export const getProfile: typeof import("./getProfile").getProfile = null as any;
export const getProfileOutput: typeof import("./getProfile").getProfileOutput = null as any;
utilities.lazyLoad(exports, ["getProfile","getProfileOutput"], () => require("./getProfile"));

export { GetProfileSupportedOptimizationTypesArgs, GetProfileSupportedOptimizationTypesResult, GetProfileSupportedOptimizationTypesOutputArgs } from "./getProfileSupportedOptimizationTypes";
export const getProfileSupportedOptimizationTypes: typeof import("./getProfileSupportedOptimizationTypes").getProfileSupportedOptimizationTypes = null as any;
export const getProfileSupportedOptimizationTypesOutput: typeof import("./getProfileSupportedOptimizationTypes").getProfileSupportedOptimizationTypesOutput = null as any;
utilities.lazyLoad(exports, ["getProfileSupportedOptimizationTypes","getProfileSupportedOptimizationTypesOutput"], () => require("./getProfileSupportedOptimizationTypes"));

export { GetRouteArgs, GetRouteResult, GetRouteOutputArgs } from "./getRoute";
export const getRoute: typeof import("./getRoute").getRoute = null as any;
export const getRouteOutput: typeof import("./getRoute").getRouteOutput = null as any;
utilities.lazyLoad(exports, ["getRoute","getRouteOutput"], () => require("./getRoute"));

export { ProfileArgs } from "./profile";
export type Profile = import("./profile").Profile;
export const Profile: typeof import("./profile").Profile = null as any;
utilities.lazyLoad(exports, ["Profile"], () => require("./profile"));

export { RouteArgs } from "./route";
export type Route = import("./route").Route;
export const Route: typeof import("./route").Route = null as any;
utilities.lazyLoad(exports, ["Route"], () => require("./route"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:cdn/v20200901:AFDEndpoint":
                return new AFDEndpoint(name, <any>undefined, { urn })
            case "azure-native:cdn/v20200901:AFDOriginGroup":
                return new AFDOriginGroup(name, <any>undefined, { urn })
            case "azure-native:cdn/v20200901:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-native:cdn/v20200901:Route":
                return new Route(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "cdn/v20200901", _module)