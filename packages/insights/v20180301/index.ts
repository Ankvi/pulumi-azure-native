import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMetricAlertArgs, GetMetricAlertResult, GetMetricAlertOutputArgs } from "./getMetricAlert";
export const getMetricAlert: typeof import("./getMetricAlert").getMetricAlert = null as any;
export const getMetricAlertOutput: typeof import("./getMetricAlert").getMetricAlertOutput = null as any;
utilities.lazyLoad(exports, ["getMetricAlert","getMetricAlertOutput"], () => require("./getMetricAlert"));

export { MetricAlertArgs } from "./metricAlert";
export type MetricAlert = import("./metricAlert").MetricAlert;
export const MetricAlert: typeof import("./metricAlert").MetricAlert = null as any;
utilities.lazyLoad(exports, ["MetricAlert"], () => require("./metricAlert"));


// Export enums:
export * from "../types/enums/v20180301";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20180301:MetricAlert":
                return new MetricAlert(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20180301", _module)
