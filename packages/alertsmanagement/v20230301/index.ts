import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPrometheusRuleGroupArgs, GetPrometheusRuleGroupResult, GetPrometheusRuleGroupOutputArgs } from "./getPrometheusRuleGroup";
export const getPrometheusRuleGroup: typeof import("./getPrometheusRuleGroup").getPrometheusRuleGroup = null as any;
export const getPrometheusRuleGroupOutput: typeof import("./getPrometheusRuleGroup").getPrometheusRuleGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPrometheusRuleGroup","getPrometheusRuleGroupOutput"], () => require("./getPrometheusRuleGroup"));

export { PrometheusRuleGroupArgs } from "./prometheusRuleGroup";
export type PrometheusRuleGroup = import("./prometheusRuleGroup").PrometheusRuleGroup;
export const PrometheusRuleGroup: typeof import("./prometheusRuleGroup").PrometheusRuleGroup = null as any;
utilities.lazyLoad(exports, ["PrometheusRuleGroup"], () => require("./prometheusRuleGroup"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement/v20230301:PrometheusRuleGroup":
                return new PrometheusRuleGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement/v20230301", _module)
