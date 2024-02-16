import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a workspace manager group
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview.
 */
export function getWorkspaceManagerGroup(args: GetWorkspaceManagerGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceManagerGroupResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:securityinsights:getWorkspaceManagerGroup", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceManagerGroupName": args.workspaceManagerGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceManagerGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the workspace manager group
     */
    workspaceManagerGroupName: string;
    /**
     * The name of the workspace.
     */
    workspaceName: string;
}

/**
 * The workspace manager group
 */
export interface GetWorkspaceManagerGroupResult {
    /**
     * The description of the workspace manager group
     */
    readonly description?: string;
    /**
     * The display name of the workspace manager group
     */
    readonly displayName: string;
    /**
     * Resource Etag.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The names of the workspace manager members participating in this group.
     */
    readonly memberResourceNames: string[];
    /**
     * The name of the resource
     */
    readonly name: string;
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
 * Gets a workspace manager group
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-07-01-preview, 2023-08-01-preview, 2023-09-01-preview, 2023-10-01-preview, 2023-12-01-preview.
 */
export function getWorkspaceManagerGroupOutput(args: GetWorkspaceManagerGroupOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWorkspaceManagerGroupResult> {
    return pulumi.output(args).apply((a: any) => getWorkspaceManagerGroup(a, opts))
}

export interface GetWorkspaceManagerGroupOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace manager group
     */
    workspaceManagerGroupName: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    workspaceName: pulumi.Input<string>;
}