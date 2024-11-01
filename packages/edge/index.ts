import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSiteArgs, GetSiteResult, GetSiteOutputArgs } from "./getSite";
export const getSite: typeof import("./getSite").getSite = null as any;
export const getSiteOutput: typeof import("./getSite").getSiteOutput = null as any;
utilities.lazyLoad(exports, ["getSite","getSiteOutput"], () => require("./getSite"));

export { GetSitesBySubscriptionArgs, GetSitesBySubscriptionResult, GetSitesBySubscriptionOutputArgs } from "./getSitesBySubscription";
export const getSitesBySubscription: typeof import("./getSitesBySubscription").getSitesBySubscription = null as any;
export const getSitesBySubscriptionOutput: typeof import("./getSitesBySubscription").getSitesBySubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getSitesBySubscription","getSitesBySubscriptionOutput"], () => require("./getSitesBySubscription"));

export { SiteArgs } from "./site";
export type Site = import("./site").Site;
export const Site: typeof import("./site").Site = null as any;
utilities.lazyLoad(exports, ["Site"], () => require("./site"));

export { SitesBySubscriptionArgs } from "./sitesBySubscription";
export type SitesBySubscription = import("./sitesBySubscription").SitesBySubscription;
export const SitesBySubscription: typeof import("./sitesBySubscription").SitesBySubscription = null as any;
utilities.lazyLoad(exports, ["SitesBySubscription"], () => require("./sitesBySubscription"));




const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:edge:Site":
                return new Site(name, <any>undefined, { urn })
            case "azure-native:edge:SitesBySubscription":
                return new SitesBySubscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "edge", _module)