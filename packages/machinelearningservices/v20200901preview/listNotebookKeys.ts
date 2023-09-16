import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export function listNotebookKeys(args: ListNotebookKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListNotebookKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20200901preview:listNotebookKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListNotebookKeysArgs {
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListNotebookKeysResult {
    readonly primaryAccessKey: string;
    readonly secondaryAccessKey: string;
}
export function listNotebookKeysOutput(args: ListNotebookKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListNotebookKeysResult> {
    return pulumi.output(args).apply((a: any) => listNotebookKeys(a, opts))
}

export interface ListNotebookKeysOutputArgs {
    /**
     * Name of the resource group in which workspace is located.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
