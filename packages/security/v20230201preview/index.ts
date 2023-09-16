import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSqlVulnerabilityAssessmentBaselineRuleArgs, GetSqlVulnerabilityAssessmentBaselineRuleResult, GetSqlVulnerabilityAssessmentBaselineRuleOutputArgs } from "./getSqlVulnerabilityAssessmentBaselineRule";
export const getSqlVulnerabilityAssessmentBaselineRule: typeof import("./getSqlVulnerabilityAssessmentBaselineRule").getSqlVulnerabilityAssessmentBaselineRule = null as any;
export const getSqlVulnerabilityAssessmentBaselineRuleOutput: typeof import("./getSqlVulnerabilityAssessmentBaselineRule").getSqlVulnerabilityAssessmentBaselineRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSqlVulnerabilityAssessmentBaselineRule","getSqlVulnerabilityAssessmentBaselineRuleOutput"], () => require("./getSqlVulnerabilityAssessmentBaselineRule"));

export { SqlVulnerabilityAssessmentBaselineRuleArgs } from "./sqlVulnerabilityAssessmentBaselineRule";
export type SqlVulnerabilityAssessmentBaselineRule = import("./sqlVulnerabilityAssessmentBaselineRule").SqlVulnerabilityAssessmentBaselineRule;
export const SqlVulnerabilityAssessmentBaselineRule: typeof import("./sqlVulnerabilityAssessmentBaselineRule").SqlVulnerabilityAssessmentBaselineRule = null as any;
utilities.lazyLoad(exports, ["SqlVulnerabilityAssessmentBaselineRule"], () => require("./sqlVulnerabilityAssessmentBaselineRule"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20230201preview:SqlVulnerabilityAssessmentBaselineRule":
                return new SqlVulnerabilityAssessmentBaselineRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20230201preview", _module)
