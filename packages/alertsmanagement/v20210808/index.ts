import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AlertProcessingRuleByNameArgs } from "./alertProcessingRuleByName";
export type AlertProcessingRuleByName = import("./alertProcessingRuleByName").AlertProcessingRuleByName;
export const AlertProcessingRuleByName: typeof import("./alertProcessingRuleByName").AlertProcessingRuleByName = null as any;
utilities.lazyLoad(exports, ["AlertProcessingRuleByName"], () => require("./alertProcessingRuleByName"));

export { GetAlertProcessingRuleByNameArgs, GetAlertProcessingRuleByNameResult, GetAlertProcessingRuleByNameOutputArgs } from "./getAlertProcessingRuleByName";
export const getAlertProcessingRuleByName: typeof import("./getAlertProcessingRuleByName").getAlertProcessingRuleByName = null as any;
export const getAlertProcessingRuleByNameOutput: typeof import("./getAlertProcessingRuleByName").getAlertProcessingRuleByNameOutput = null as any;
utilities.lazyLoad(exports, ["getAlertProcessingRuleByName","getAlertProcessingRuleByNameOutput"], () => require("./getAlertProcessingRuleByName"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement/v20210808:AlertProcessingRuleByName":
                return new AlertProcessingRuleByName(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement/v20210808", _module)
