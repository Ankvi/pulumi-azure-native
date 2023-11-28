import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get a Pipeline
 * Azure REST API version: 2023-10-04-preview.
 */
export function getPipeline(args: GetPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:iotoperationsdataprocessor:getPipeline", {
        "instanceName": args.instanceName,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineArgs {
    /**
     * Name of instance.
     */
    instanceName: string;
    /**
     * Name of pipeline
     */
    pipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A Pipeline resource belonging to an Instance resource.
 */
export interface GetPipelineResult {
    /**
     * Detailed description of the Pipeline.
     */
    readonly description?: string;
    /**
     * Flag indicating whether the pipeline should be running or not.
     */
    readonly enabled: boolean;
    /**
     * Edge location of the resource.
     */
    readonly extendedLocation: types.outputs.ExtendedLocationResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Information about where to pull input data from.
     */
    readonly input: types.outputs.PipelineInputResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The status of the last operation.
     */
    readonly provisioningState: string;
    /**
     * Map of stage ids to stage configurations for all pipeline processing and output stages.
     */
    readonly stages: {[key: string]: types.outputs.PipelineStageResponse};
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Get a Pipeline
 * Azure REST API version: 2023-10-04-preview.
 */
export function getPipelineOutput(args: GetPipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineResult> {
    return pulumi.output(args).apply((a: any) => getPipeline(a, opts))
}

export interface GetPipelineOutputArgs {
    /**
     * Name of instance.
     */
    instanceName: pulumi.Input<string>;
    /**
     * Name of pipeline
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
