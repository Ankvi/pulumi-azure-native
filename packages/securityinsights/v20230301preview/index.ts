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

export { GetIncidentArgs, GetIncidentResult, GetIncidentOutputArgs } from "./getIncident";
export const getIncident: typeof import("./getIncident").getIncident = null as any;
export const getIncidentOutput: typeof import("./getIncident").getIncidentOutput = null as any;
utilities.lazyLoad(exports, ["getIncident","getIncidentOutput"], () => require("./getIncident"));

export { IncidentArgs } from "./incident";
export type Incident = import("./incident").Incident;
export const Incident: typeof import("./incident").Incident = null as any;
utilities.lazyLoad(exports, ["Incident"], () => require("./incident"));

export { ListSourceControlRepositoriesArgs, ListSourceControlRepositoriesResult, ListSourceControlRepositoriesOutputArgs } from "./listSourceControlRepositories";
export const listSourceControlRepositories: typeof import("./listSourceControlRepositories").listSourceControlRepositories = null as any;
export const listSourceControlRepositoriesOutput: typeof import("./listSourceControlRepositories").listSourceControlRepositoriesOutput = null as any;
utilities.lazyLoad(exports, ["listSourceControlRepositories","listSourceControlRepositoriesOutput"], () => require("./listSourceControlRepositories"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:securityinsights/v20230301preview:Incident":
                return new Incident(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "securityinsights/v20230301preview", _module)
