import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a Kusto cluster principalAssignment.
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterPrincipalAssignment(args: GetClusterPrincipalAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetClusterPrincipalAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:kusto:getClusterPrincipalAssignment", {
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
     * The name of the resource group. The name is case insensitive.
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
 *
 * Uses Azure REST API version 2024-04-13.
 *
 * Other available API versions: 2019-11-09, 2020-02-15, 2020-06-14, 2020-09-18, 2021-01-01, 2021-08-27, 2022-02-01, 2022-07-07, 2022-11-11, 2022-12-29, 2023-05-02, 2023-08-15. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native kusto [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getClusterPrincipalAssignmentOutput(args: GetClusterPrincipalAssignmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetClusterPrincipalAssignmentResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:kusto:getClusterPrincipalAssignment", {
        "clusterName": args.clusterName,
        "principalAssignmentName": args.principalAssignmentName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}