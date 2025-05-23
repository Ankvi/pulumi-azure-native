import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about access policy assignment for database.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessPolicyAssignment(args: GetAccessPolicyAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAccessPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:redisenterprise:getAccessPolicyAssignment", {
        "accessPolicyAssignmentName": args.accessPolicyAssignmentName,
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyAssignmentArgs {
    /**
     * The name of the Redis Enterprise database access policy assignment.
     */
    accessPolicyAssignmentName: string;
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: string;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes the access policy assignment of Redis Enterprise database
 */
export interface GetAccessPolicyAssignmentResult {
    /**
     * Name of access policy under specific access policy assignment. Only "default" policy is supported for now.
     */
    readonly accessPolicyName: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Current provisioning status of the access policy assignment.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The user associated with the access policy.
     */
    readonly user: types.outputs.AccessPolicyAssignmentPropertiesResponseUser;
}
/**
 * Gets information about access policy assignment for database.
 *
 * Uses Azure REST API version 2024-09-01-preview.
 *
 * Other available API versions: 2025-04-01, 2025-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native redisenterprise [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getAccessPolicyAssignmentOutput(args: GetAccessPolicyAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccessPolicyAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:redisenterprise:getAccessPolicyAssignment", {
        "accessPolicyAssignmentName": args.accessPolicyAssignmentName,
        "clusterName": args.clusterName,
        "databaseName": args.databaseName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAccessPolicyAssignmentOutputArgs {
    /**
     * The name of the Redis Enterprise database access policy assignment.
     */
    accessPolicyAssignmentName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise database.
     */
    databaseName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}