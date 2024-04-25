import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * List available models from all connections.
 * Azure REST API version: 2024-04-01-preview.
 */
export function listWorkspaceConnectionModels(args: ListWorkspaceConnectionModelsArgs, opts?: pulumi.InvokeOptions): Promise<ListWorkspaceConnectionModelsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listWorkspaceConnectionModels", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListWorkspaceConnectionModelsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListWorkspaceConnectionModelsResult {
    /**
     * The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * List of models.
     */
    readonly value?: types.outputs.AccountModelResponse[];
}
/**
 * List available models from all connections.
 * Azure REST API version: 2024-04-01-preview.
 */
export function listWorkspaceConnectionModelsOutput(args: ListWorkspaceConnectionModelsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWorkspaceConnectionModelsResult> {
    return pulumi.output(args).apply((a: any) => listWorkspaceConnectionModels(a, opts))
}

export interface ListWorkspaceConnectionModelsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}