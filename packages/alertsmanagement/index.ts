import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ActionRuleByNameArgs } from "./actionRuleByName";
export type ActionRuleByName = import("./actionRuleByName").ActionRuleByName;
export const ActionRuleByName: typeof import("./actionRuleByName").ActionRuleByName = null as any;
utilities.lazyLoad(exports, ["ActionRuleByName"], () => require("./actionRuleByName"));

export { AlertProcessingRuleByNameArgs } from "./alertProcessingRuleByName";
export type AlertProcessingRuleByName = import("./alertProcessingRuleByName").AlertProcessingRuleByName;
export const AlertProcessingRuleByName: typeof import("./alertProcessingRuleByName").AlertProcessingRuleByName = null as any;
utilities.lazyLoad(exports, ["AlertProcessingRuleByName"], () => require("./alertProcessingRuleByName"));

export { GetActionRuleByNameArgs, GetActionRuleByNameResult, GetActionRuleByNameOutputArgs } from "./getActionRuleByName";
export const getActionRuleByName: typeof import("./getActionRuleByName").getActionRuleByName = null as any;
export const getActionRuleByNameOutput: typeof import("./getActionRuleByName").getActionRuleByNameOutput = null as any;
utilities.lazyLoad(exports, ["getActionRuleByName","getActionRuleByNameOutput"], () => require("./getActionRuleByName"));

export { GetAlertProcessingRuleByNameArgs, GetAlertProcessingRuleByNameResult, GetAlertProcessingRuleByNameOutputArgs } from "./getAlertProcessingRuleByName";
export const getAlertProcessingRuleByName: typeof import("./getAlertProcessingRuleByName").getAlertProcessingRuleByName = null as any;
export const getAlertProcessingRuleByNameOutput: typeof import("./getAlertProcessingRuleByName").getAlertProcessingRuleByNameOutput = null as any;
utilities.lazyLoad(exports, ["getAlertProcessingRuleByName","getAlertProcessingRuleByNameOutput"], () => require("./getAlertProcessingRuleByName"));

export { GetPrometheusRuleGroupArgs, GetPrometheusRuleGroupResult, GetPrometheusRuleGroupOutputArgs } from "./getPrometheusRuleGroup";
export const getPrometheusRuleGroup: typeof import("./getPrometheusRuleGroup").getPrometheusRuleGroup = null as any;
export const getPrometheusRuleGroupOutput: typeof import("./getPrometheusRuleGroup").getPrometheusRuleGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPrometheusRuleGroup","getPrometheusRuleGroupOutput"], () => require("./getPrometheusRuleGroup"));

export { GetSmartDetectorAlertRuleArgs, GetSmartDetectorAlertRuleResult, GetSmartDetectorAlertRuleOutputArgs } from "./getSmartDetectorAlertRule";
export const getSmartDetectorAlertRule: typeof import("./getSmartDetectorAlertRule").getSmartDetectorAlertRule = null as any;
export const getSmartDetectorAlertRuleOutput: typeof import("./getSmartDetectorAlertRule").getSmartDetectorAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSmartDetectorAlertRule","getSmartDetectorAlertRuleOutput"], () => require("./getSmartDetectorAlertRule"));

export { PrometheusRuleGroupArgs } from "./prometheusRuleGroup";
export type PrometheusRuleGroup = import("./prometheusRuleGroup").PrometheusRuleGroup;
export const PrometheusRuleGroup: typeof import("./prometheusRuleGroup").PrometheusRuleGroup = null as any;
utilities.lazyLoad(exports, ["PrometheusRuleGroup"], () => require("./prometheusRuleGroup"));

export { SmartDetectorAlertRuleArgs } from "./smartDetectorAlertRule";
export type SmartDetectorAlertRule = import("./smartDetectorAlertRule").SmartDetectorAlertRule;
export const SmartDetectorAlertRule: typeof import("./smartDetectorAlertRule").SmartDetectorAlertRule = null as any;
utilities.lazyLoad(exports, ["SmartDetectorAlertRule"], () => require("./smartDetectorAlertRule"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20190505preview from "./v20190505preview";
import * as v20210401 from "./v20210401";
import * as v20210808 from "./v20210808";
import * as v20230301 from "./v20230301";
import * as v20230401preview from "./v20230401preview";
import * as v20230501preview from "./v20230501preview";

export {
    v20190505preview,
    v20210401,
    v20210808,
    v20230301,
    v20230401preview,
    v20230501preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement:ActionRuleByName":
                return new ActionRuleByName(name, <any>undefined, { urn })
            case "azure-native:alertsmanagement:AlertProcessingRuleByName":
                return new AlertProcessingRuleByName(name, <any>undefined, { urn })
            case "azure-native:alertsmanagement:PrometheusRuleGroup":
                return new PrometheusRuleGroup(name, <any>undefined, { urn })
            case "azure-native:alertsmanagement:SmartDetectorAlertRule":
                return new SmartDetectorAlertRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement", _module)
