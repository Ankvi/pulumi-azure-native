import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the detailed information for a given pipeline run.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getPipelineRun(args: GetPipelineRunArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getPipelineRun", {
        "pipelineRunName": args.pipelineRunName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineRunArgs {
    /**
     * The name of the pipeline run.
     */
    pipelineRunName: string;
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An object that represents a pipeline run for a container registry.
 */
export interface GetPipelineRunResult {
    /**
     * How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
     */
    readonly forceUpdateTag?: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of a pipeline run.
     */
    readonly provisioningState: string;
    /**
     * The request parameters for a pipeline run.
     */
    readonly request?: types.outputs.PipelineRunRequestResponse;
    /**
     * The response of a pipeline run.
     */
    readonly response: types.outputs.PipelineRunResponseResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the detailed information for a given pipeline run.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2023-06-01-preview, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview.
 */
export function getPipelineRunOutput(args: GetPipelineRunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPipelineRunResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getPipelineRun", {
        "pipelineRunName": args.pipelineRunName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineRunOutputArgs {
    /**
     * The name of the pipeline run.
     */
    pipelineRunName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}