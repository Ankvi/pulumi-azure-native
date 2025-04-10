import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the shared keys for a workspace.
 *
 * Uses Azure REST API version 2015-11-01-preview.
 */
export function getWorkspaceSharedKeys(args: GetWorkspaceSharedKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkspaceSharedKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:operationalinsights:getWorkspaceSharedKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceSharedKeysArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of the Log Analytics Workspace.
     */
    workspaceName: string;
}

/**
 * The shared keys for a workspace.
 */
export interface GetWorkspaceSharedKeysResult {
    /**
     * The primary shared key of a workspace.
     */
    readonly primarySharedKey?: string;
    /**
     * The secondary shared key of a workspace.
     */
    readonly secondarySharedKey?: string;
}
/**
 * Gets the shared keys for a workspace.
 *
 * Uses Azure REST API version 2015-11-01-preview.
 */
export function getWorkspaceSharedKeysOutput(args: GetWorkspaceSharedKeysOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkspaceSharedKeysResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:operationalinsights:getWorkspaceSharedKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetWorkspaceSharedKeysOutputArgs {
    /**
     * The name of the resource group to get. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the Log Analytics Workspace.
     */
    workspaceName: pulumi.Input<string>;
}