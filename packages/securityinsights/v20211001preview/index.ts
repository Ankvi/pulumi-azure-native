import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FusionAlertRuleArgs } from "./fusionAlertRule";
export type FusionAlertRule = import("./fusionAlertRule").FusionAlertRule;
export const FusionAlertRule: typeof import("./fusionAlertRule").FusionAlertRule = null as any;
utilities.lazyLoad(exports, ["FusionAlertRule"], () => require("./fusionAlertRule"));

export { GetEntitiesGetTimelineArgs, GetEntitiesGetTimelineResult, GetEntitiesGetTimelineOutputArgs } from "./getEntitiesGetTimeline";
export const getEntitiesGetTimeline: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimeline = null as any;
export const getEntitiesGetTimelineOutput: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimelineOutput = null as any;
utilities.lazyLoad(exports, ["getEntitiesGetTimeline","getEntitiesGetTimelineOutput"], () => require("./getEntitiesGetTimeline"));

export { GetEntityInsightsArgs, GetEntityInsightsResult, GetEntityInsightsOutputArgs } from "./getEntityInsights";
export const getEntityInsights: typeof import("./getEntityInsights").getEntityInsights = null as any;
export const getEntityInsightsOutput: typeof import("./getEntityInsights").getEntityInsightsOutput = null as any;
utilities.lazyLoad(exports, ["getEntityInsights","getEntityInsightsOutput"], () => require("./getEntityInsights"));

export { GetFusionAlertRuleArgs, GetFusionAlertRuleResult, GetFusionAlertRuleOutputArgs } from "./getFusionAlertRule";
export const getFusionAlertRule: typeof import("./getFusionAlertRule").getFusionAlertRule = null as any;
export const getFusionAlertRuleOutput: typeof import("./getFusionAlertRule").getFusionAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFusionAlertRule","getFusionAlertRuleOutput"], () => require("./getFusionAlertRule"));

export { GetNrtAlertRuleArgs, GetNrtAlertRuleResult, GetNrtAlertRuleOutputArgs } from "./getNrtAlertRule";
export const getNrtAlertRule: typeof import("./getNrtAlertRule").getNrtAlertRule = null as any;
export const getNrtAlertRuleOutput: typeof import("./getNrtAlertRule").getNrtAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getNrtAlertRule","getNrtAlertRuleOutput"], () => require("./getNrtAlertRule"));

export { GetWatchlistArgs, GetWatchlistResult, GetWatchlistOutputArgs } from "./getWatchlist";
export const getWatchlist: typeof import("./getWatchlist").getWatchlist = null as any;
export const getWatchlistOutput: typeof import("./getWatchlist").getWatchlistOutput = null as any;
utilities.lazyLoad(exports, ["getWatchlist","getWatchlistOutput"], () => require("./getWatchlist"));

export { ListSourceControlRepositoriesArgs, ListSourceControlRepositoriesResult, ListSourceControlRepositoriesOutputArgs } from "./listSourceControlRepositories";
export const listSourceControlRepositories: typeof import("./listSourceControlRepositories").listSourceControlRepositories = null as any;
export const listSourceControlRepositoriesOutput: typeof import("./listSourceControlRepositories").listSourceControlRepositoriesOutput = null as any;
utilities.lazyLoad(exports, ["listSourceControlRepositories","listSourceControlRepositoriesOutput"], () => require("./listSourceControlRepositories"));

export { NrtAlertRuleArgs } from "./nrtAlertRule";
export type NrtAlertRule = import("./nrtAlertRule").NrtAlertRule;
export const NrtAlertRule: typeof import("./nrtAlertRule").NrtAlertRule = null as any;
utilities.lazyLoad(exports, ["NrtAlertRule"], () => require("./nrtAlertRule"));

export { WatchlistArgs } from "./watchlist";
export type Watchlist = import("./watchlist").Watchlist;
export const Watchlist: typeof import("./watchlist").Watchlist = null as any;
utilities.lazyLoad(exports, ["Watchlist"], () => require("./watchlist"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securityinsights/v20211001preview:FusionAlertRule":
                return new FusionAlertRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20211001preview:NrtAlertRule":
                return new NrtAlertRule(name, <any>undefined, { urn })
            case "azure-native:securityinsights/v20211001preview:Watchlist":
                return new Watchlist(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securityinsights/v20211001preview", _module)
