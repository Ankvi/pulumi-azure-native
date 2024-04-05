import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export function listWorkspaceNotebookKeys(args: ListWorkspaceNotebookKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceNotebookKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:listWorkspaceNotebookKeys", {
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
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListWorkspaceNotebookKeysResult {
    /**
     * The primary access key of the Notebook
     */
    readonly primaryAccessKey: string;
    /**
     * The secondary access key of the Notebook
     */
    readonly secondaryAccessKey: string;
}
export function listWorkspaceNotebookKeysOutput(args: ListWorkspaceNotebookKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceNotebookKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceNotebookKeys(a, opts))
}

export interface ListWorkspaceNotebookKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}