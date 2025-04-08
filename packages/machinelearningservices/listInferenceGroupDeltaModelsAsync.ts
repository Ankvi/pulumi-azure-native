import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A paginated list of String entities.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listInferenceGroupDeltaModelsAsync(args: ListInferenceGroupDeltaModelsAsyncArgs, opts?: pulumi.InvokeOptions): Promise<ListInferenceGroupDeltaModelsAsyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:listInferenceGroupDeltaModelsAsync", {
        "count": args.count,
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "targetBaseModel": args.targetBaseModel,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListInferenceGroupDeltaModelsAsyncArgs {
    /**
     * Gets or sets number of delta models to return. Default: -1, means that all will be returned.
     */
    count?: number;
    /**
     * InferenceGroup name.
     */
    groupName: string;
    /**
     * InferencePool name.
     */
    poolName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Gets or sets skip token for paginated response.
     */
    skipToken?: string;
    /**
     * Gets or sets target base model.
     */
    targetBaseModel?: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * A paginated list of String entities.
 */
export interface ListInferenceGroupDeltaModelsAsyncResult {
    /**
     * The link to the next page of String objects. If null, there are no additional pages.
     */
    readonly nextLink?: string;
    /**
     * An array of objects of type String.
     */
    readonly value?: string[];
}
/**
 * A paginated list of String entities.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listInferenceGroupDeltaModelsAsyncOutput(args: ListInferenceGroupDeltaModelsAsyncOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListInferenceGroupDeltaModelsAsyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:listInferenceGroupDeltaModelsAsync", {
        "count": args.count,
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "skipToken": args.skipToken,
        "targetBaseModel": args.targetBaseModel,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface ListInferenceGroupDeltaModelsAsyncOutputArgs {
    /**
     * Gets or sets number of delta models to return. Default: -1, means that all will be returned.
     */
    count?: pulumi.Input<number>;
    /**
     * InferenceGroup name.
     */
    groupName: pulumi.Input<string>;
    /**
     * InferencePool name.
     */
    poolName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets skip token for paginated response.
     */
    skipToken?: pulumi.Input<string>;
    /**
     * Gets or sets target base model.
     */
    targetBaseModel?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}