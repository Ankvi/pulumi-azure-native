import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2018-03-01-preview, 2020-08-01, 2020-09-01-preview, 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview.
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
    readonly containerRegistryCredentials: types.outputs.RegistryListCredentialsResultResponse;
    readonly notebookAccessKeys: types.outputs.ListNotebookKeysResultResponse;
    readonly userStorageKey: string;
    readonly userStorageResourceId: string;
}
/**
 * Lists all the keys associated with this workspace. This includes keys for the storage account, app insights and password for container registry
 * Azure REST API version: 2023-04-01.
 *
 * Other available API versions: 2018-03-01-preview, 2020-08-01, 2020-09-01-preview, 2022-01-01-preview, 2023-04-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-10-01, 2024-01-01-preview, 2024-04-01, 2024-04-01-preview.
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