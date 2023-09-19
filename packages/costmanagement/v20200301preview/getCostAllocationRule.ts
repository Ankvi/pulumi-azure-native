import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a cost allocation rule by rule name and billing account or enterprise enrollment.
 */
export function getCostAllocationRule(args: GetCostAllocationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetCostAllocationRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20200301preview:getCostAllocationRule", {
        "billingAccountId": args.billingAccountId,
        "ruleName": args.ruleName,
    }, opts);
}

export interface GetCostAllocationRuleArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: string;
    /**
     * Cost allocation rule name. The name cannot include spaces or any non alphanumeric characters other than '_' and '-'. The max length is 260 characters.
     */
    ruleName: string;
}

/**
 * The cost allocation rule model definition
 */
export interface GetCostAllocationRuleResult {
    /**
     * Azure Resource Manager Id for the rule. This is a read ony value.
     */
    readonly id: string;
    /**
     * Name of the rule. This is a read only value.
     */
    readonly name: string;
    /**
     * Cost allocation rule properties
     */
    readonly properties: types.outputs.CostAllocationRulePropertiesResponse;
    /**
     * Resource type of the rule. This is a read only value of Microsoft.CostManagement/CostAllocationRule.
     */
    readonly type: string;
}
/**
 * Get a cost allocation rule by rule name and billing account or enterprise enrollment.
 */
export function getCostAllocationRuleOutput(args: GetCostAllocationRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetCostAllocationRuleResult> {
    return pulumi.output(args).apply((a: any) => getCostAllocationRule(a, opts))
}

export interface GetCostAllocationRuleOutputArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: pulumi.Input<string>;
    /**
     * Cost allocation rule name. The name cannot include spaces or any non alphanumeric characters other than '_' and '-'. The max length is 260 characters.
     */
    ruleName: pulumi.Input<string>;
}
