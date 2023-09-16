import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * List storage account keys of a workspace.
 */
export function listWorkspaceStorageAccountKeys(args: ListWorkspaceStorageAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceStorageAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20220101preview:listWorkspaceStorageAccountKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceStorageAccountKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListWorkspaceStorageAccountKeysResult {
    readonly userStorageKey: string;
}
/**
 * List storage account keys of a workspace.
 */
export function listWorkspaceStorageAccountKeysOutput(args: ListWorkspaceStorageAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceStorageAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceStorageAccountKeys(a, opts))
}

export interface ListWorkspaceStorageAccountKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
