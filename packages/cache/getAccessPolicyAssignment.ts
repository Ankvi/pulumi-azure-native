import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the list of assignments for an access policy of a redis cache
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-09-01-preview, 2024-11-01, 2025-04-01.
 */
export function getAccessPolicyAssignment(args: GetAccessPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cache:getAccessPolicyAssignment", {
        "accessPolicyAssignmentName": args.accessPolicyAssignmentName,
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyAssignmentArgs {
    /**
     * The name of the access policy assignment.
     */
    accessPolicyAssignmentName: string;
    /**
     * The name of the Redis cache.
     */
    cacheName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Response to an operation on access policy assignment
 */
export interface GetAccessPolicyAssignmentResult {
    /**
     * The name of the access policy that is being assigned
     */
    readonly accessPolicyName: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Object Id to assign access policy to
     */
    readonly objectId: string;
    /**
     * User friendly name for object id. Also represents username for token based authentication
     */
    readonly objectIdAlias: string;
    /**
     * Provisioning state of an access policy assignment set
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets the list of assignments for an access policy of a redis cache
 *
 * Uses Azure REST API version 2023-05-01-preview.
 *
 * Other available API versions: 2023-08-01, 2024-03-01, 2024-04-01-preview, 2024-09-01-preview, 2024-11-01, 2025-04-01.
 */
export function getAccessPolicyAssignmentOutput(args: GetAccessPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:cache:getAccessPolicyAssignment", {
        "accessPolicyAssignmentName": args.accessPolicyAssignmentName,
        "cacheName": args.cacheName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyAssignmentOutputArgs {
    /**
     * The name of the access policy assignment.
     */
    accessPolicyAssignmentName: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    cacheName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}