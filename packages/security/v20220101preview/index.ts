import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetGovernanceAssignmentArgs, GetGovernanceAssignmentResult, GetGovernanceAssignmentOutputArgs } from "./getGovernanceAssignment";
export const getGovernanceAssignment: typeof import("./getGovernanceAssignment").getGovernanceAssignment = null as any;
export const getGovernanceAssignmentOutput: typeof import("./getGovernanceAssignment").getGovernanceAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getGovernanceAssignment","getGovernanceAssignmentOutput"], () => require("./getGovernanceAssignment"));

export { GetGovernanceRuleArgs, GetGovernanceRuleResult, GetGovernanceRuleOutputArgs } from "./getGovernanceRule";
export const getGovernanceRule: typeof import("./getGovernanceRule").getGovernanceRule = null as any;
export const getGovernanceRuleOutput: typeof import("./getGovernanceRule").getGovernanceRuleOutput = null as any;
utilities.lazyLoad(exports, ["getGovernanceRule","getGovernanceRuleOutput"], () => require("./getGovernanceRule"));

export { GovernanceAssignmentArgs } from "./governanceAssignment";
export type GovernanceAssignment = import("./governanceAssignment").GovernanceAssignment;
export const GovernanceAssignment: typeof import("./governanceAssignment").GovernanceAssignment = null as any;
utilities.lazyLoad(exports, ["GovernanceAssignment"], () => require("./governanceAssignment"));

export { GovernanceRuleArgs } from "./governanceRule";
export type GovernanceRule = import("./governanceRule").GovernanceRule;
export const GovernanceRule: typeof import("./governanceRule").GovernanceRule = null as any;
utilities.lazyLoad(exports, ["GovernanceRule"], () => require("./governanceRule"));


// Export enums:
export * from "../types/enums/v20220101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20220101preview:GovernanceAssignment":
                return new GovernanceAssignment(name, <any>undefined, { urn })
            case "azure-native:security/v20220101preview:GovernanceRule":
                return new GovernanceRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20220101preview", _module)
