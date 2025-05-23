import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2024-07-01-preview.
 */
export function listConnectionModels(args: ListConnectionModelsArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionModelsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listConnectionModels", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListConnectionModelsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListConnectionModelsResult {
    /**
     * The link to the next page constructed using the continuationToken.  If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * List of models.
     */
    readonly value?: types.outputs.EndpointModelPropertiesResponse[];
}
/**
 * Uses Azure REST API version 2024-07-01-preview.
 */
export function listConnectionModelsOutput(args: ListConnectionModelsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListConnectionModelsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:listConnectionModels", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListConnectionModelsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}