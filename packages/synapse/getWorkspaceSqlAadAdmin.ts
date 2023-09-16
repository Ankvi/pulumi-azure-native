import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets a workspace SQL active directory admin
 * Azure REST API version: 2021-06-01.
 */
export function getWorkspaceSqlAadAdmin(args: GetWorkspaceSqlAadAdminArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceSqlAadAdminResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:synapse:getWorkspaceSqlAadAdmin", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceSqlAadAdminArgs {
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
 * Workspace active directory administrator
 */
export interface GetWorkspaceSqlAadAdminResult {
    /**
     * Workspace active directory administrator type
     */
    readonly administratorType?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Login of the workspace active directory administrator
     */
    readonly login?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Object ID of the workspace active directory administrator
     */
    readonly sid?: string;
    /**
     * Tenant ID of the workspace active directory administrator
     */
    readonly tenantId?: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a workspace SQL active directory admin
 * Azure REST API version: 2021-06-01.
 */
export function getWorkspaceSqlAadAdminOutput(args: GetWorkspaceSqlAadAdminOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceSqlAadAdminResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceSqlAadAdmin(a, opts))
}

export interface GetWorkspaceSqlAadAdminOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}
