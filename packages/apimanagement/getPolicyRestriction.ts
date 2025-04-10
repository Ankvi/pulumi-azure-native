import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the policy restriction of the Api Management service.
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getPolicyRestriction(args: GetPolicyRestrictionArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyRestrictionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getPolicyRestriction", {
        "policyRestrictionId": args.policyRestrictionId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPolicyRestrictionArgs {
    /**
     * Policy restrictions after an entity level
     */
    policyRestrictionId: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    serviceName: string;
}

/**
 * Policy restriction contract details.
 */
export interface GetPolicyRestrictionResult {
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Indicates if base policy should be enforced for the policy document.
     */
    readonly requireBase?: string;
    /**
     * Path to the policy document.
     */
    readonly scope?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get the policy restriction of the Api Management service.
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-09-01-preview, 2024-05-01, 2024-06-01-preview.
 */
export function getPolicyRestrictionOutput(args: GetPolicyRestrictionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyRestrictionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getPolicyRestriction", {
        "policyRestrictionId": args.policyRestrictionId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPolicyRestrictionOutputArgs {
    /**
     * Policy restrictions after an entity level
     */
    policyRestrictionId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}