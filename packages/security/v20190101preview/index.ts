import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AlertsSuppressionRuleArgs } from "./alertsSuppressionRule";
export type AlertsSuppressionRule = import("./alertsSuppressionRule").AlertsSuppressionRule;
export const AlertsSuppressionRule: typeof import("./alertsSuppressionRule").AlertsSuppressionRule = null as any;
utilities.lazyLoad(exports, ["AlertsSuppressionRule"], () => require("./alertsSuppressionRule"));

export { AssessmentsMetadataSubscriptionArgs } from "./assessmentsMetadataSubscription";
export type AssessmentsMetadataSubscription = import("./assessmentsMetadataSubscription").AssessmentsMetadataSubscription;
export const AssessmentsMetadataSubscription: typeof import("./assessmentsMetadataSubscription").AssessmentsMetadataSubscription = null as any;
utilities.lazyLoad(exports, ["AssessmentsMetadataSubscription"], () => require("./assessmentsMetadataSubscription"));

export { AutomationArgs } from "./automation";
export type Automation = import("./automation").Automation;
export const Automation: typeof import("./automation").Automation = null as any;
utilities.lazyLoad(exports, ["Automation"], () => require("./automation"));

export { GetAlertsSuppressionRuleArgs, GetAlertsSuppressionRuleResult, GetAlertsSuppressionRuleOutputArgs } from "./getAlertsSuppressionRule";
export const getAlertsSuppressionRule: typeof import("./getAlertsSuppressionRule").getAlertsSuppressionRule = null as any;
export const getAlertsSuppressionRuleOutput: typeof import("./getAlertsSuppressionRule").getAlertsSuppressionRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAlertsSuppressionRule","getAlertsSuppressionRuleOutput"], () => require("./getAlertsSuppressionRule"));

export { GetAssessmentsMetadataSubscriptionArgs, GetAssessmentsMetadataSubscriptionResult, GetAssessmentsMetadataSubscriptionOutputArgs } from "./getAssessmentsMetadataSubscription";
export const getAssessmentsMetadataSubscription: typeof import("./getAssessmentsMetadataSubscription").getAssessmentsMetadataSubscription = null as any;
export const getAssessmentsMetadataSubscriptionOutput: typeof import("./getAssessmentsMetadataSubscription").getAssessmentsMetadataSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getAssessmentsMetadataSubscription","getAssessmentsMetadataSubscriptionOutput"], () => require("./getAssessmentsMetadataSubscription"));

export { GetAutomationArgs, GetAutomationResult, GetAutomationOutputArgs } from "./getAutomation";
export const getAutomation: typeof import("./getAutomation").getAutomation = null as any;
export const getAutomationOutput: typeof import("./getAutomation").getAutomationOutput = null as any;
utilities.lazyLoad(exports, ["getAutomation","getAutomationOutput"], () => require("./getAutomation"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20190101preview:AlertsSuppressionRule":
                return new AlertsSuppressionRule(name, <any>undefined, { urn })
            case "azure-native:security/v20190101preview:AssessmentsMetadataSubscription":
                return new AssessmentsMetadataSubscription(name, <any>undefined, { urn })
            case "azure-native:security/v20190101preview:Automation":
                return new Automation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20190101preview", _module)