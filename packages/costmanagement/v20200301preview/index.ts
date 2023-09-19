import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CostAllocationRuleArgs } from "./costAllocationRule";
export type CostAllocationRule = import("./costAllocationRule").CostAllocationRule;
export const CostAllocationRule: typeof import("./costAllocationRule").CostAllocationRule = null as any;
utilities.lazyLoad(exports, ["CostAllocationRule"], () => require("./costAllocationRule"));

export { GetCostAllocationRuleArgs, GetCostAllocationRuleResult, GetCostAllocationRuleOutputArgs } from "./getCostAllocationRule";
export const getCostAllocationRule: typeof import("./getCostAllocationRule").getCostAllocationRule = null as any;
export const getCostAllocationRuleOutput: typeof import("./getCostAllocationRule").getCostAllocationRuleOutput = null as any;
utilities.lazyLoad(exports, ["getCostAllocationRule","getCostAllocationRuleOutput"], () => require("./getCostAllocationRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:costmanagement/v20200301preview:CostAllocationRule":
                return new CostAllocationRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "costmanagement/v20200301preview", _module)
