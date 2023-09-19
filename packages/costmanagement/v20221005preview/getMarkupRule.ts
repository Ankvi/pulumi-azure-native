import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a markup rule by its rule name.
 */
export function getMarkupRule(args: GetMarkupRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetMarkupRuleResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:costmanagement/v20221005preview:getMarkupRule", {
        "billingAccountId": args.billingAccountId,
        "billingProfileId": args.billingProfileId,
        "name": args.name,
    }, opts);
}

export interface GetMarkupRuleArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: string;
    /**
     * BillingProfile ID
     */
    billingProfileId: string;
    /**
     * Markup rule name.
     */
    name: string;
}

/**
 * Markup rule
 */
export interface GetMarkupRuleResult {
    /**
     * Customer information for the markup rule.
     */
    readonly customerDetails: types.outputs.CustomerMetadataResponse;
    /**
     * The description of the markup rule.
     */
    readonly description?: string;
    /**
     * eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not.
     */
    readonly eTag?: string;
    /**
     * Ending date of the markup rule.
     */
    readonly endDate?: string;
    /**
     * Resource Id.
     */
    readonly id: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The markup percentage of the rule.
     */
    readonly percentage: number;
    /**
     * Starting date of the markup rule.
     */
    readonly startDate: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Get a markup rule by its rule name.
 */
export function getMarkupRuleOutput(args: GetMarkupRuleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetMarkupRuleResult> {
    return pulumi.output(args).apply((a: any) => getMarkupRule(a, opts))
}

export interface GetMarkupRuleOutputArgs {
    /**
     * BillingAccount ID
     */
    billingAccountId: pulumi.Input<string>;
    /**
     * BillingProfile ID
     */
    billingProfileId: pulumi.Input<string>;
    /**
     * Markup rule name.
     */
    name: pulumi.Input<string>;
}
