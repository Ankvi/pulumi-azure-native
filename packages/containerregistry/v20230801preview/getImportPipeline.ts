import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the import pipeline.
 */
export function getImportPipeline(args: GetImportPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetImportPipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230801preview:getImportPipeline", {
        "importPipelineName": args.importPipelineName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetImportPipelineArgs {
    /**
     * The name of the import pipeline.
     */
    importPipelineName: string;
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
 * An object that represents an import pipeline for a container registry.
 */
export interface GetImportPipelineResult {
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The identity of the import pipeline.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The location of the import pipeline.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The list of all options configured for the pipeline.
     */
    readonly options?: string[];
    /**
     * The provisioning state of the pipeline at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The source properties of the import pipeline.
     */
    readonly source: types.outputs.ImportPipelineSourcePropertiesResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The properties that describe the trigger of the import pipeline.
     */
    readonly trigger?: types.outputs.PipelineTriggerPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the import pipeline.
 */
export function getImportPipelineOutput(args: GetImportPipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImportPipelineResult> {
    return pulumi.output(args).apply((a: any) => getImportPipeline(a, opts))
}

export interface GetImportPipelineOutputArgs {
    /**
     * The name of the import pipeline.
     */
    importPipelineName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
