import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
export function listWorkspaceKeys(args: ListWorkspaceKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceKeysResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices/v20230601preview:listWorkspaceKeys", {
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
    /**
     * The access key of the workspace app insights
     */
    readonly appInsightsInstrumentationKey: string;
    readonly containerRegistryCredentials?: types.outputs.RegistryListCredentialsResultResponse;
    readonly notebookAccessKeys?: types.outputs.ListNotebookKeysResultResponse;
    /**
     * The arm Id key of the workspace storage
     */
    readonly userStorageArmId: string;
    /**
     * The access key of the workspace storage
     */
    readonly userStorageKey: string;
}
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