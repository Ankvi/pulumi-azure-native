import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetHyperVSiteArgs, GetHyperVSiteResult, GetHyperVSiteOutputArgs } from "./getHyperVSite";
export const getHyperVSite: typeof import("./getHyperVSite").getHyperVSite = null as any;
export const getHyperVSiteOutput: typeof import("./getHyperVSite").getHyperVSiteOutput = null as any;
utilities.lazyLoad(exports, ["getHyperVSite","getHyperVSiteOutput"], () => require("./getHyperVSite"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetSiteArgs, GetSiteResult, GetSiteOutputArgs } from "./getSite";
export const getSite: typeof import("./getSite").getSite = null as any;
export const getSiteOutput: typeof import("./getSite").getSiteOutput = null as any;
utilities.lazyLoad(exports, ["getSite","getSiteOutput"], () => require("./getSite"));

export { HyperVSiteArgs } from "./hyperVSite";
export type HyperVSite = import("./hyperVSite").HyperVSite;
export const HyperVSite: typeof import("./hyperVSite").HyperVSite = null as any;
utilities.lazyLoad(exports, ["HyperVSite"], () => require("./hyperVSite"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { SiteArgs } from "./site";
export type Site = import("./site").Site;
export const Site: typeof import("./site").Site = null as any;
utilities.lazyLoad(exports, ["Site"], () => require("./site"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:offazure/v20200707:HyperVSite":
                return new HyperVSite(name, <any>undefined, { urn })
            case "azure-native:offazure/v20200707:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:offazure/v20200707:Site":
                return new Site(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "offazure/v20200707", _module)
