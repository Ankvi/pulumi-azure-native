import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
export function listWorkspaceStorageAccountKeys(args: ListWorkspaceStorageAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceStorageAccountKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230801preview:listWorkspaceStorageAccountKeys", {
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
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListWorkspaceStorageAccountKeysResult {
    /**
     * The access key of the storage
     */
    readonly userStorageKey: string;
}
export function listWorkspaceStorageAccountKeysOutput(args: ListWorkspaceStorageAccountKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceStorageAccountKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceStorageAccountKeys(a, opts))
}

export interface ListWorkspaceStorageAccountKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}