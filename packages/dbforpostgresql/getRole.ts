import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets information about a cluster role.
 * Azure REST API version: 2022-11-08.
 *
 * Other available API versions: 2023-03-02-preview.
 */
export function getRole(args: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:dbforpostgresql:getRole", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "roleName": args.roleName,
    }, opts);
}

export interface GetRoleArgs {
    /**
     * The name of the cluster.
     */
    clusterName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the cluster role.
     */
    roleName: string;
}

/**
 * Represents a cluster role.
 */
export interface GetRoleResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Provisioning state of the role
     */
    readonly provisioningState: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets information about a cluster role.
 * Azure REST API version: 2022-11-08.
 *
 * Other available API versions: 2023-03-02-preview.
 */
export function getRoleOutput(args: GetRoleOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRoleResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:dbforpostgresql:getRole", {
        "clusterName": args.clusterName,
        "resourceGroupName": args.resourceGroupName,
        "roleName": args.roleName,
    }, opts);
}

export interface GetRoleOutputArgs {
    /**
     * The name of the cluster.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the cluster role.
     */
    roleName: pulumi.Input<string>;
}