import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the policy configuration at the API level.
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01.
 */
export function getWorkspaceApiPolicy(args: GetWorkspaceApiPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceApiPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:apimanagement:getWorkspaceApiPolicy", {
        "apiId": args.apiId,
        "format": args.format,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceApiPolicyArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: string;
}

/**
 * Policy Contract details.
 */
export interface GetWorkspaceApiPolicyResult {
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
 * Azure REST API version: 2022-09-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-05-01-preview, 2023-09-01-preview, 2024-05-01.
 */
export function getWorkspaceApiPolicyOutput(args: GetWorkspaceApiPolicyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceApiPolicyResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:apimanagement:getWorkspaceApiPolicy", {
        "apiId": args.apiId,
        "format": args.format,
        "policyId": args.policyId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
        "workspaceId": args.workspaceId,
    }, opts);
}

export interface GetWorkspaceApiPolicyOutputArgs {
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
    /**
     * Workspace identifier. Must be unique in the current API Management service instance.
     */
    workspaceId: pulumi.Input<string>;
}