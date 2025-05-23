import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Returns whether or not the canonical support plan of type {type} is enabled for the subscription.
 *
 * Uses Azure REST API version 2018-03-01.
 */
export function getSupportPlanType(args: GetSupportPlanTypeArgs, opts?: pulumi.InvokeOptions): Promise<GetSupportPlanTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:addons:getSupportPlanType", {
        "planTypeName": args.planTypeName,
        "providerName": args.providerName,
    }, opts);
}

export interface GetSupportPlanTypeArgs {
    /**
     * The Canonical support plan type.
     */
    planTypeName: string;
    /**
     * The support plan type. For now the only valid type is "canonical".
     */
    providerName: string;
}

/**
 * The status of the Canonical support plan.
 */
export interface GetSupportPlanTypeResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}".
     */
    readonly id: string;
    /**
     * The name of the Canonical support plan, i.e. "essential", "standard" or "advanced".
     */
    readonly name: string;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: string;
    /**
     * Microsoft.Addons/supportProvider
     */
    readonly type: string;
}
/**
 * Returns whether or not the canonical support plan of type {type} is enabled for the subscription.
 *
 * Uses Azure REST API version 2018-03-01.
 */
export function getSupportPlanTypeOutput(args: GetSupportPlanTypeOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSupportPlanTypeResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:addons:getSupportPlanType", {
        "planTypeName": args.planTypeName,
        "providerName": args.providerName,
    }, opts);
}

export interface GetSupportPlanTypeOutputArgs {
    /**
     * The Canonical support plan type.
     */
    planTypeName: pulumi.Input<string>;
    /**
     * The support plan type. For now the only valid type is "canonical".
     */
    providerName: pulumi.Input<string>;
}