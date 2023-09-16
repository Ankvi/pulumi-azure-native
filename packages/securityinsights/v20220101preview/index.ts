import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { EntityAnalyticsArgs } from "./entityAnalytics";
export type EntityAnalytics = import("./entityAnalytics").EntityAnalytics;
export const EntityAnalytics: typeof import("./entityAnalytics").EntityAnalytics = null as any;
utilities.lazyLoad(exports, ["EntityAnalytics"], () => require("./entityAnalytics"));

export { GetEntitiesGetTimelineArgs, GetEntitiesGetTimelineResult, GetEntitiesGetTimelineOutputArgs } from "./getEntitiesGetTimeline";
export const getEntitiesGetTimeline: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimeline = null as any;
export const getEntitiesGetTimelineOutput: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimelineOutput = null as any;
utilities.lazyLoad(exports, ["getEntitiesGetTimeline","getEntitiesGetTimelineOutput"], () => require("./getEntitiesGetTimeline"));

export { GetEntityAnalyticsArgs, GetEntityAnalyticsResult, GetEntityAnalyticsOutputArgs } from "./getEntityAnalytics";
export const getEntityAnalytics: typeof import("./getEntityAnalytics").getEntityAnalytics = null as any;
export const getEntityAnalyticsOutput: typeof import("./getEntityAnalytics").getEntityAnalyticsOutput = null as any;
utilities.lazyLoad(exports, ["getEntityAnalytics","getEntityAnalyticsOutput"], () => require("./getEntityAnalytics"));

export { GetEntityInsightsArgs, GetEntityInsightsResult, GetEntityInsightsOutputArgs } from "./getEntityInsights";
export const getEntityInsights: typeof import("./getEntityInsights").getEntityInsights = null as any;
export const getEntityInsightsOutput: typeof import("./getEntityInsights").getEntityInsightsOutput = null as any;
utilities.lazyLoad(exports, ["getEntityInsights","getEntityInsightsOutput"], () => require("./getEntityInsights"));

export { GetWatchlistArgs, GetWatchlistResult, GetWatchlistOutputArgs } from "./getWatchlist";
export const getWatchlist: typeof import("./getWatchlist").getWatchlist = null as any;
export const getWatchlistOutput: typeof import("./getWatchlist").getWatchlistOutput = null as any;
utilities.lazyLoad(exports, ["getWatchlist","getWatchlistOutput"], () => require("./getWatchlist"));

export { ListSourceControlRepositoriesArgs, ListSourceControlRepositoriesResult, ListSourceControlRepositoriesOutputArgs } from "./listSourceControlRepositories";
export const listSourceControlRepositories: typeof import("./listSourceControlRepositories").listSourceControlRepositories = null as any;
export const listSourceControlRepositoriesOutput: typeof import("./listSourceControlRepositories").listSourceControlRepositoriesOutput = null as any;
utilities.lazyLoad(exports, ["listSourceControlRepositories","listSourceControlRepositoriesOutput"], () => require("./listSourceControlRepositories"));

export { WatchlistArgs } from "./watchlist";
export type Watchlist = import("./watchlist").Watchlist;
export const Watchlist: typeof import("./watchlist").Watchlist = null as any;
utilities.lazyLoad(exports, ["Watchlist"], () => require("./watchlist"));


// Export enums:
export * from "../types/enums/v20220101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securityinsights/v20220101preview:EntityAnalytics":
                return new EntityAnalytics(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20220101preview:Watchlist":
                return new Watchlist(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securityinsights/v20220101preview", _module)
