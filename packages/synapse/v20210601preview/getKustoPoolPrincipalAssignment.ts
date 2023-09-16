import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a Kusto pool principalAssignment.
 */
export function getKustoPoolPrincipalAssignment(args: GetKustoPoolPrincipalAssignmentArgs, opts?: pulumi.InvokeOptions): Promise<GetKustoPoolPrincipalAssignmentResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse/v20210601preview:getKustoPoolPrincipalAssignment", {
        "kustoPoolName": args.kustoPoolName,
        "principalAssignmentName": args.principalAssignmentName,
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetKustoPoolPrincipalAssignmentArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: string;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * Class representing a cluster principal assignment.
 */
export interface GetKustoPoolPrincipalAssignmentResult {
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
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.synapse.v20210601preview.SystemDataResponse;
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
 * Gets a Kusto pool principalAssignment.
 */
export function getKustoPoolPrincipalAssignmentOutput(args: GetKustoPoolPrincipalAssignmentOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKustoPoolPrincipalAssignmentResult> {
    return pulumi.output(args).apply((a: any) => getKustoPoolPrincipalAssignment(a, opts))
}

export interface GetKustoPoolPrincipalAssignmentOutputArgs {
    /**
     * The name of the Kusto pool.
     */
    kustoPoolName: pulumi.Input<string>;
    /**
     * The name of the Kusto principalAssignment.
     */
    principalAssignmentName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
