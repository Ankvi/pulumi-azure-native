import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Contract returning to user the delta models.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInferenceGroupDeltaModelsStatusAsync(args: GetInferenceGroupDeltaModelsStatusAsyncArgs, opts?: pulumi.InvokeOptions): Promise<GetInferenceGroupDeltaModelsStatusAsyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:machinelearningservices:getInferenceGroupDeltaModelsStatusAsync", {
        "deltaModels": args.deltaModels,
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "targetBaseModel": args.targetBaseModel,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferenceGroupDeltaModelsStatusAsyncArgs {
    /**
     * Gets or sets collection of delta models to retrieve status for.
     */
    deltaModels?: string[];
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
     * Gets or sets target base model.
     */
    targetBaseModel?: string;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: string;
}

/**
 * Contract returning to user the delta models.
 */
export interface GetInferenceGroupDeltaModelsStatusAsyncResult {
    /**
     * Gets or sets actual instance count.
     */
    readonly actualInstanceCount?: number;
    /**
     * Gets or sets dictionary representing modelID and its current state.
     */
    readonly deltaModels?: {[key: string]: types.outputs.DeltaModelCurrentStateResponse[]};
    /**
     * Gets or sets expected instance count.
     */
    readonly expectedInstanceCount?: number;
    /**
     * Gets or sets revision ID.
     */
    readonly revisionId?: string;
    /**
     * Gets or sets target base model.
     */
    readonly targetBaseModel?: string;
}
/**
 * Contract returning to user the delta models.
 *
 * Uses Azure REST API version 2025-01-01-preview.
 *
 * Other available API versions: 2024-10-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native machinelearningservices [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getInferenceGroupDeltaModelsStatusAsyncOutput(args: GetInferenceGroupDeltaModelsStatusAsyncOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInferenceGroupDeltaModelsStatusAsyncResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:machinelearningservices:getInferenceGroupDeltaModelsStatusAsync", {
        "deltaModels": args.deltaModels,
        "groupName": args.groupName,
        "poolName": args.poolName,
        "resourceGroupName": args.resourceGroupName,
        "targetBaseModel": args.targetBaseModel,
        "workspaceName": args.workspaceName,
    }, opts);
}

export interface GetInferenceGroupDeltaModelsStatusAsyncOutputArgs {
    /**
     * Gets or sets collection of delta models to retrieve status for.
     */
    deltaModels?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Gets or sets target base model.
     */
    targetBaseModel?: pulumi.Input<string>;
    /**
     * Name of Azure Machine Learning workspace.
     */
    workspaceName: pulumi.Input<string>;
}