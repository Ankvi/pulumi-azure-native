import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AnalyticsConnectorArgs } from "./analyticsConnector";
export type AnalyticsConnector = import("./analyticsConnector").AnalyticsConnector;
export const AnalyticsConnector: typeof import("./analyticsConnector").AnalyticsConnector = null as any;
utilities.lazyLoad(exports, ["AnalyticsConnector"], () => require("./analyticsConnector"));

export { GetAnalyticsConnectorArgs, GetAnalyticsConnectorResult, GetAnalyticsConnectorOutputArgs } from "./getAnalyticsConnector";
export const getAnalyticsConnector: typeof import("./getAnalyticsConnector").getAnalyticsConnector = null as any;
export const getAnalyticsConnectorOutput: typeof import("./getAnalyticsConnector").getAnalyticsConnectorOutput = null as any;
utilities.lazyLoad(exports, ["getAnalyticsConnector","getAnalyticsConnectorOutput"], () => require("./getAnalyticsConnector"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:healthcareapis/v20221001preview:AnalyticsConnector":
                return new AnalyticsConnector(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "healthcareapis/v20221001preview", _module)
