import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the policy configuration at the API level.
 * Azure REST API version: 2022-08-01.
 */
export function getApiPolicy(args: GetApiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApiPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiPolicy", {
        "apiId": args.apiId,
        "format": args.format,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * Policy Export Format.
     */
    format?: string;
    /**
     * The identifier of the Policy.
     */
    policyId: string;
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
 * Policy Contract details.
 */
export interface GetApiPolicyResult {
    /**
     * Format of the policyContent.
     */
    readonly format?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * Contents of the Policy as defined by the format.
     */
    readonly value: string;
}
/**
 * Get the policy configuration at the API level.
 * Azure REST API version: 2022-08-01.
 */
export function getApiPolicyOutput(args: GetApiPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiPolicyResult> {
    return pulumi.output(args).apply((a: any) => getApiPolicy(a, opts))
}

export interface GetApiPolicyOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Policy Export Format.
     */
    format?: pulumi.Input<string>;
    /**
     * The identifier of the Policy.
     */
    policyId: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
}
