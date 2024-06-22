import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets pipeline resource.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07.
 */
export function getPipeline(args: GetPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:getPipeline", {
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineArgs {
    /**
     * The name for the pipeline that is to be requested.
     */
    pipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * The pipeline resource definition.
 */
export interface GetPipelineResult {
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Properties of pipeline
     */
    readonly properties: types.outputs.PipelinePropertiesResponse;
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
 * Gets pipeline resource.
 * Azure REST API version: 2023-10-11-preview.
 *
 * Other available API versions: 2024-01-25, 2024-05-07.
 */
export function getPipelineOutput(args: GetPipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineResult> {
    return pulumi.output(args).apply((a: any) => getPipeline(a, opts))
}

export interface GetPipelineOutputArgs {
    /**
     * The name for the pipeline that is to be requested.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}