import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry
 * Azure REST API version: 2023-04-01.
 */
export function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listWorkspaceKeys", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceKeysArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

export interface ListWorkspaceKeysResult {
    readonly appInsightsInstrumentationKey: string;
    readonly containerRegistryCredentials: types.outputs.machinelearningservices.RegistryListCredentialsResultResponse;
    readonly notebookAccessKeys: types.outputs.machinelearningservices.ListNotebookKeysResultResponse;
    readonly userStorageKey: string;
    readonly userStorageResourceId: string;
}
/**
 * Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry
 * Azure REST API version: 2023-04-01.
 */
export function listWorkspaceKeysOutput(args: ListWorkspaceKeysOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceKeysResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceKeys(a, opts))
}

export interface ListWorkspaceKeysOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}
