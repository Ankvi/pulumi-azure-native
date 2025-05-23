import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the specified scope assignment.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 */
export function getScopeAssignment(args: GetScopeAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetScopeAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:managednetwork:getScopeAssignment", {
        "scope": args.scope,
        "scopeAssignmentName": args.scopeAssignmentName,
    }, opts);
}

export interface GetScopeAssignmentArgs {
    /**
     * The base resource of the scope assignment.
     */
    scope: string;
    /**
     * The name of the scope assignment to get.
     */
    scopeAssignmentName: string;
}

/**
 * The Managed Network resource
 */
export interface GetScopeAssignmentResult {
    /**
     * The managed network ID with scope will be assigned to.
     */
    readonly assignedManagedNetwork?: string;
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the ManagedNetwork resource.
     */
    readonly provisioningState: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Get the specified scope assignment.
 *
 * Uses Azure REST API version 2019-06-01-preview.
 */
export function getScopeAssignmentOutput(args: GetScopeAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScopeAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:managednetwork:getScopeAssignment", {
        "scope": args.scope,
        "scopeAssignmentName": args.scopeAssignmentName,
    }, opts);
}

export interface GetScopeAssignmentOutputArgs {
    /**
     * The base resource of the scope assignment.
     */
    scope: pulumi.Input<string>;
    /**
     * The name of the scope assignment to get.
     */
    scopeAssignmentName: pulumi.Input<string>;
}