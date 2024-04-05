import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List the authorization keys associated with this workspace.
 */
export function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearning/v20191001:listWorkspaceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceKeysArgs {
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    resourceGroupName: string;
    /**
     * The name of the machine learning workspace.
     */
    workspaceName: string;
}

/**
 * Workspace authorization keys for a workspace.
 */
export interface ListWorkspaceKeysResult {
    /**
     * Primary authorization key for this workspace.
     */
    readonly primaryToken?: string;
    /**
     * Secondary authorization key for this workspace.
     */
    readonly secondaryToken?: string;
}
/**
 * List the authorization keys associated with this workspace.
 */
export function listWorkspaceKeysOutput(args: ListWorkspaceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceKeys(a, opts))
}

export interface ListWorkspaceKeysOutputArgs {
    /**
     * The name of the resource group to which the machine learning workspace belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the machine learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}