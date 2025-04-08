import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listConnectionAllModels(args: ListConnectionAllModelsArgs, opts?: pulumi.InvokeOptions): Promise<ListConnectionAllModelsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listConnectionAllModels", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListConnectionAllModelsArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: string;
}

export interface ListConnectionAllModelsResult {
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
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listConnectionAllModelsOutput(args: ListConnectionAllModelsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListConnectionAllModelsResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:listConnectionAllModels", {
        "resourceGroupName": args.resourceGroupName,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListConnectionAllModelsOutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure Machine Learning Workspace Name
     */
    workspaceName: pulumi.Input<string>;
}