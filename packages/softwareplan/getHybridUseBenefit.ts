import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a given plan ID
 *
 * Uses Azure REST API version 2019-12-01.
 */
export function getHybridUseBenefit(args: GetHybridUseBenefitArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridUseBenefitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:softwareplan:getHybridUseBenefit", {
        "planId": args.planId,
        "scope": args.scope,
    }, opts);
}

export interface GetHybridUseBenefitArgs {
    /**
     * This is a unique identifier for a plan. Should be a guid.
     */
    planId: string;
    /**
     * The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
     */
    scope: string;
}

/**
 * Response on GET of a hybrid use benefit
 */
export interface GetHybridUseBenefitResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Created date
     */
    readonly createdDate: string;
    /**
     * Indicates the revision of the hybrid use benefit
     */
    readonly etag: number;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Last updated date
     */
    readonly lastUpdatedDate: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state
     */
    readonly provisioningState: string;
    /**
     * Hybrid use benefit SKU
     */
    readonly sku: types.outputs.SkuResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a given plan ID
 *
 * Uses Azure REST API version 2019-12-01.
 */
export function getHybridUseBenefitOutput(args: GetHybridUseBenefitOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetHybridUseBenefitResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:softwareplan:getHybridUseBenefit", {
        "planId": args.planId,
        "scope": args.scope,
    }, opts);
}

export interface GetHybridUseBenefitOutputArgs {
    /**
     * This is a unique identifier for a plan. Should be a guid.
     */
    planId: pulumi.Input<string>;
    /**
     * The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
     */
    scope: pulumi.Input<string>;
}