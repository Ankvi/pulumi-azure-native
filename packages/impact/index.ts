import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConnectorArgs } from "./connector";
export type Connector = import("./connector").Connector;
export const Connector: typeof import("./connector").Connector = null as any;
utilities.lazyLoad(exports, ["Connector"], () => require("./connector"));

export { GetConnectorArgs, GetConnectorResult, GetConnectorOutputArgs } from "./getConnector";
export const getConnector: typeof import("./getConnector").getConnector = null as any;
export const getConnectorOutput: typeof import("./getConnector").getConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getConnector","getConnectorOutput"], () => require("./getConnector"));

export { GetInsightArgs, GetInsightResult, GetInsightOutputArgs } from "./getInsight";
export const getInsight: typeof import("./getInsight").getInsight = null as any;
export const getInsightOutput: typeof import("./getInsight").getInsightOutput = null as any;
utilities.lazyLoad(exports, ["getInsight","getInsightOutput"], () => require("./getInsight"));

export { GetWorkloadImpactArgs, GetWorkloadImpactResult, GetWorkloadImpactOutputArgs } from "./getWorkloadImpact";
export const getWorkloadImpact: typeof import("./getWorkloadImpact").getWorkloadImpact = null as any;
export const getWorkloadImpactOutput: typeof import("./getWorkloadImpact").getWorkloadImpactOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadImpact","getWorkloadImpactOutput"], () => require("./getWorkloadImpact"));

export { InsightArgs } from "./insight";
export type Insight = import("./insight").Insight;
export const Insight: typeof import("./insight").Insight = null as any;
utilities.lazyLoad(exports, ["Insight"], () => require("./insight"));

export { WorkloadImpactArgs } from "./workloadImpact";
export type WorkloadImpact = import("./workloadImpact").WorkloadImpact;
export const WorkloadImpact: typeof import("./workloadImpact").WorkloadImpact = null as any;
utilities.lazyLoad(exports, ["WorkloadImpact"], () => require("./workloadImpact"));


// Export enums:
export * from "./types/enums";



const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:impact:Connector":
                return new Connector(name, <any>undefined, { urn })
            case "azure-native:impact:Insight":
                return new Insight(name, <any>undefined, { urn })
            case "azure-native:impact:WorkloadImpact":
                return new WorkloadImpact(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "impact", _module)