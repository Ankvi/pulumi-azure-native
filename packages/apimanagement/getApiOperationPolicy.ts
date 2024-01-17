import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the policy configuration at the API Operation level.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiOperationPolicy(args: GetApiOperationPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetApiOperationPolicyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getApiOperationPolicy", {
        "apiId": args.apiId,
        "format": args.format,
        "operationId": args.operationId,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetApiOperationPolicyArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: string;
    /**
     * Policy Export Format.
     */
    format?: string;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: string;
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
export interface GetApiOperationPolicyResult {
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
 * Get the policy configuration at the API Operation level.
 * Azure REST API version: 2022-08-01.
 *
 * Other available API versions: 2018-06-01-preview, 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export function getApiOperationPolicyOutput(args: GetApiOperationPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetApiOperationPolicyResult> {
    return pulumi.output(args).apply((a: any) => getApiOperationPolicy(a, opts))
}

export interface GetApiOperationPolicyOutputArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    apiId: pulumi.Input<string>;
    /**
     * Policy Export Format.
     */
    format?: pulumi.Input<string>;
    /**
     * Operation identifier within an API. Must be unique in the current API Management service instance.
     */
    operationId: pulumi.Input<string>;
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