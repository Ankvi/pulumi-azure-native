import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPolicyDefinitionArgs, GetPolicyDefinitionResult, GetPolicyDefinitionOutputArgs } from "./getPolicyDefinition";
export const getPolicyDefinition: typeof import("./getPolicyDefinition").getPolicyDefinition = null as any;
export const getPolicyDefinitionOutput: typeof import("./getPolicyDefinition").getPolicyDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyDefinition","getPolicyDefinitionOutput"], () => require("./getPolicyDefinition"));

export { GetPolicyDefinitionAtManagementGroupArgs, GetPolicyDefinitionAtManagementGroupResult, GetPolicyDefinitionAtManagementGroupOutputArgs } from "./getPolicyDefinitionAtManagementGroup";
export const getPolicyDefinitionAtManagementGroup: typeof import("./getPolicyDefinitionAtManagementGroup").getPolicyDefinitionAtManagementGroup = null as any;
export const getPolicyDefinitionAtManagementGroupOutput: typeof import("./getPolicyDefinitionAtManagementGroup").getPolicyDefinitionAtManagementGroupOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyDefinitionAtManagementGroup","getPolicyDefinitionAtManagementGroupOutput"], () => require("./getPolicyDefinitionAtManagementGroup"));

export { PolicyDefinitionArgs } from "./policyDefinition";
export type PolicyDefinition = import("./policyDefinition").PolicyDefinition;
export const PolicyDefinition: typeof import("./policyDefinition").PolicyDefinition = null as any;
utilities.lazyLoad(exports, ["PolicyDefinition"], () => require("./policyDefinition"));

export { PolicyDefinitionAtManagementGroupArgs } from "./policyDefinitionAtManagementGroup";
export type PolicyDefinitionAtManagementGroup = import("./policyDefinitionAtManagementGroup").PolicyDefinitionAtManagementGroup;
export const PolicyDefinitionAtManagementGroup: typeof import("./policyDefinitionAtManagementGroup").PolicyDefinitionAtManagementGroup = null as any;
utilities.lazyLoad(exports, ["PolicyDefinitionAtManagementGroup"], () => require("./policyDefinitionAtManagementGroup"));


// Export enums:
export * from "../types/enums/v20180501";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20180501:PolicyDefinition":
                return new PolicyDefinition(name, <any>undefined, { urn })
            case "azure-native:authorization/v20180501:PolicyDefinitionAtManagementGroup":
                return new PolicyDefinitionAtManagementGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20180501", _module)
