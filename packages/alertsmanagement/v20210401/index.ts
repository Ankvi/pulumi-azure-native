import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSmartDetectorAlertRuleArgs, GetSmartDetectorAlertRuleResult, GetSmartDetectorAlertRuleOutputArgs } from "./getSmartDetectorAlertRule";
export const getSmartDetectorAlertRule: typeof import("./getSmartDetectorAlertRule").getSmartDetectorAlertRule = null as any;
export const getSmartDetectorAlertRuleOutput: typeof import("./getSmartDetectorAlertRule").getSmartDetectorAlertRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSmartDetectorAlertRule","getSmartDetectorAlertRuleOutput"], () => require("./getSmartDetectorAlertRule"));

export { SmartDetectorAlertRuleArgs } from "./smartDetectorAlertRule";
export type SmartDetectorAlertRule = import("./smartDetectorAlertRule").SmartDetectorAlertRule;
export const SmartDetectorAlertRule: typeof import("./smartDetectorAlertRule").SmartDetectorAlertRule = null as any;
utilities.lazyLoad(exports, ["SmartDetectorAlertRule"], () => require("./smartDetectorAlertRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:alertsmanagement/v20210401:SmartDetectorAlertRule":
                return new SmartDetectorAlertRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "alertsmanagement/v20210401", _module)