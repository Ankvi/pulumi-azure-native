import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the detailed information for a given pipeline run.
 */
export function getPipelineRun(args: GetPipelineRunArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineRunResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20231101preview:getPipelineRun", {
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
 */
export function getPipelineRunOutput(args: GetPipelineRunOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineRunResult> {
    return pulumi.output(args).apply((a: any) => getPipelineRun(a, opts))
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
