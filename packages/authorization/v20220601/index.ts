import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPolicyAssignmentArgs, GetPolicyAssignmentResult, GetPolicyAssignmentOutputArgs } from "./getPolicyAssignment";
export const getPolicyAssignment: typeof import("./getPolicyAssignment").getPolicyAssignment = null as any;
export const getPolicyAssignmentOutput: typeof import("./getPolicyAssignment").getPolicyAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyAssignment","getPolicyAssignmentOutput"], () => require("./getPolicyAssignment"));

export { PolicyAssignmentArgs } from "./policyAssignment";
export type PolicyAssignment = import("./policyAssignment").PolicyAssignment;
export const PolicyAssignment: typeof import("./policyAssignment").PolicyAssignment = null as any;
utilities.lazyLoad(exports, ["PolicyAssignment"], () => require("./policyAssignment"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20220601:PolicyAssignment":
                return new PolicyAssignment(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20220601", _module)