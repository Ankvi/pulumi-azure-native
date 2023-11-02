import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List keys of a notebook.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function listWorkspaceNotebookKeys(args: ListWorkspaceNotebookKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNotebookKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listWorkspaceNotebookKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceNotebookKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListWorkspaceNotebookKeysResult {
    readonly primaryAccessKey: string;
    readonly secondaryAccessKey: string;
}
/**
 * List keys of a notebook.
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01.
 */
export function listWorkspaceNotebookKeysOutput(args: ListWorkspaceNotebookKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceNotebookKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceNotebookKeys(a, opts))
}

export interface ListWorkspaceNotebookKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
