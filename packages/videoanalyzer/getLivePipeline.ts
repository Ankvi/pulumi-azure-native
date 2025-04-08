import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a specific live pipeline by name. If a live pipeline with that name has been previously created, the call will return the JSON representation of that instance.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getLivePipeline(args: GetLivePipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetLivePipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getLivePipeline", {
        "accountName": args.accountName,
        "livePipelineName": args.livePipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLivePipelineArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * Live pipeline unique identifier.
     */
    livePipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Live pipeline represents a unique instance of a live topology, used for real-time ingestion, archiving and publishing of content for a unique RTSP camera.
 */
export interface GetLivePipelineResult {
    /**
     * Maximum bitrate capacity in Kbps reserved for the live pipeline. The allowed range is from 500 to 3000 Kbps in increments of 100 Kbps. If the RTSP camera exceeds this capacity, then the service will disconnect temporarily from the camera. It will retry to re-establish connection (with exponential backoff), checking to see if the camera bitrate is now below the reserved capacity. Doing so will ensure that one 'noisy neighbor' does not affect other live pipelines in your account.
     */
    readonly bitrateKbps: number;
    /**
     * An optional description for the pipeline.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of the instance level parameter values for the user-defined topology parameters. A pipeline can only define or override parameters values for parameters which have been declared in the referenced topology. Topology parameters without a default value must be defined. Topology parameters with a default value can be optionally be overridden.
     */
    readonly parameters?: types.outputs.ParameterDefinitionResponse[];
    /**
     * Current state of the pipeline (read-only).
     */
    readonly state: string;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The reference to an existing pipeline topology defined for real-time content processing. When activated, this live pipeline will process content according to the pipeline topology definition.
     */
    readonly topologyName: string;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves a specific live pipeline by name. If a live pipeline with that name has been previously created, the call will return the JSON representation of that instance.
 *
 * Uses Azure REST API version 2021-11-01-preview.
 */
export function getLivePipelineOutput(args: GetLivePipelineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetLivePipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:videoanalyzer:getLivePipeline", {
        "accountName": args.accountName,
        "livePipelineName": args.livePipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetLivePipelineOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Live pipeline unique identifier.
     */
    livePipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}