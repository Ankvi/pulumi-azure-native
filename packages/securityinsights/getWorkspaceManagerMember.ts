import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager member
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getWorkspaceManagerMember(args: GetWorkspaceManagerMemberArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceManagerMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWorkspaceManagerMember", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerMemberName": args.workspaceManagerMemberName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerMemberArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace manager member
     */
    workspaceManagerMemberName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The workspace manager member
 */
export interface GetWorkspaceManagerMemberResult {
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Fully qualified resource ID of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    readonly targetWorkspaceResourceId: string;
    /**
     * Tenant id of the target Sentinel workspace joining the given Sentinel workspace manager
     */
    readonly targetWorkspaceTenantId: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets a workspace manager member
 *
 * Uses Azure REST API version 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview, 2024-01-01-preview, 2024-04-01-preview, 2024-10-01-preview, 2025-01-01-preview.
 */
export function getWorkspaceManagerMemberOutput(args: GetWorkspaceManagerMemberOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceManagerMemberResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:securityinsights:getWorkspaceManagerMember", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerMemberName": args.workspaceManagerMemberName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerMemberOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace manager member
     */
    workspaceManagerMemberName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}