import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPolicyExemptionArgs, GetPolicyExemptionResult, GetPolicyExemptionOutputArgs } from "./getPolicyExemption";
export const getPolicyExemption: typeof import("./getPolicyExemption").getPolicyExemption = null as any;
export const getPolicyExemptionOutput: typeof import("./getPolicyExemption").getPolicyExemptionOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyExemption","getPolicyExemptionOutput"], () => require("./getPolicyExemption"));

export { PolicyExemptionArgs } from "./policyExemption";
export type PolicyExemption = import("./policyExemption").PolicyExemption;
export const PolicyExemption: typeof import("./policyExemption").PolicyExemption = null as any;
utilities.lazyLoad(exports, ["PolicyExemption"], () => require("./policyExemption"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:authorization/v20220701preview:PolicyExemption":
                return new PolicyExemption(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "authorization/v20220701preview", _module)