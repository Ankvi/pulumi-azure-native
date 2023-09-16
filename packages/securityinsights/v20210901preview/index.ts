import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetEntitiesGetTimelineArgs, GetEntitiesGetTimelineResult, GetEntitiesGetTimelineOutputArgs } from "./getEntitiesGetTimeline";
export const getEntitiesGetTimeline: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimeline = null as any;
export const getEntitiesGetTimelineOutput: typeof import("./getEntitiesGetTimeline").getEntitiesGetTimelineOutput = null as any;
utilities.lazyLoad(exports, ["getEntitiesGetTimeline","getEntitiesGetTimelineOutput"], () => require("./getEntitiesGetTimeline"));

export { GetEntityInsightsArgs, GetEntityInsightsResult, GetEntityInsightsOutputArgs } from "./getEntityInsights";
export const getEntityInsights: typeof import("./getEntityInsights").getEntityInsights = null as any;
export const getEntityInsightsOutput: typeof import("./getEntityInsights").getEntityInsightsOutput = null as any;
utilities.lazyLoad(exports, ["getEntityInsights","getEntityInsightsOutput"], () => require("./getEntityInsights"));

export { GetThreatIntelligenceIndicatorArgs, GetThreatIntelligenceIndicatorResult, GetThreatIntelligenceIndicatorOutputArgs } from "./getThreatIntelligenceIndicator";
export const getThreatIntelligenceIndicator: typeof import("./getThreatIntelligenceIndicator").getThreatIntelligenceIndicator = null as any;
export const getThreatIntelligenceIndicatorOutput: typeof import("./getThreatIntelligenceIndicator").getThreatIntelligenceIndicatorOutput = null as any;
utilities.lazyLoad(exports, ["getThreatIntelligenceIndicator","getThreatIntelligenceIndicatorOutput"], () => require("./getThreatIntelligenceIndicator"));

export { ListSourceControlRepositoriesArgs, ListSourceControlRepositoriesResult, ListSourceControlRepositoriesOutputArgs } from "./listSourceControlRepositories";
export const listSourceControlRepositories: typeof import("./listSourceControlRepositories").listSourceControlRepositories = null as any;
export const listSourceControlRepositoriesOutput: typeof import("./listSourceControlRepositories").listSourceControlRepositoriesOutput = null as any;
utilities.lazyLoad(exports, ["listSourceControlRepositories","listSourceControlRepositoriesOutput"], () => require("./listSourceControlRepositories"));

export { ThreatIntelligenceIndicatorArgs } from "./threatIntelligenceIndicator";
export type ThreatIntelligenceIndicator = import("./threatIntelligenceIndicator").ThreatIntelligenceIndicator;
export const ThreatIntelligenceIndicator: typeof import("./threatIntelligenceIndicator").ThreatIntelligenceIndicator = null as any;
utilities.lazyLoad(exports, ["ThreatIntelligenceIndicator"], () => require("./threatIntelligenceIndicator"));


// Export enums:
export * from "../types/enums/v20210901preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securityinsights/v20210901preview:ThreatIntelligenceIndicator":
                return new ThreatIntelligenceIndicator(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securityinsights/v20210901preview", _module)
