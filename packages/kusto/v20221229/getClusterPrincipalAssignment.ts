import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a Kusto cluster principalAssignment.
 */
export function getClusterPrincipalAssignment(args: GetClusterPrincipalAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterPrincipalAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto/v20221229:getClusterPrincipalAssignment", {
        "clusterName": args.clusterName,
        "principalAssignmentName": args.principalAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetClusterPrincipalAssignmentArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: string;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName: string;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: string;
}

/**
 * Class representing a cluster principal assignment.
 */
export interface GetClusterPrincipalAssignmentResult {
    /**
     * The service principal object id in AAD (Azure active directory)
     */
    readonly aadObjectId: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The principal ID assigned to the cluster principal. It can be a user email, application ID, or security group name.
     */
    readonly principalId: string;
    /**
     * The principal name
     */
    readonly principalName: string;
    /**
     * Principal type.
     */
    readonly principalType: string;
    /**
     * The provisioned state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Cluster principal role.
     */
    readonly role: string;
    /**
     * The tenant id of the principal
     */
    readonly tenantId?: string;
    /**
     * The tenant name of the principal
     */
    readonly tenantName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a Kusto cluster principalAssignment.
 */
export function getClusterPrincipalAssignmentOutput(args: GetClusterPrincipalAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClusterPrincipalAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getClusterPrincipalAssignment(a, opts))
}

export interface GetClusterPrincipalAssignmentOutputArgs {
    /**
     * The name of the Kusto cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName: pulumi.Input<string>;
    /**
     * The name of the resource group containing the Kusto cluster.
     */
    resourceGroupName: pulumi.Input<string>;
}
