import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the properties of the export pipeline.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2019-12-01-preview, 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-12-01-preview, 2022-02-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExportPipeline(args: GetExportPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetExportPipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getExportPipeline", {
        "exportPipelineName": args.exportPipelineName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExportPipelineArgs {
    /**
     * The name of the export pipeline.
     */
    exportPipelineName: string;
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
 * An object that represents an export pipeline for a container registry.
 */
export interface GetExportPipelineResult {
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The identity of the export pipeline.
     */
    readonly identity?: types.outputs.IdentityPropertiesResponse;
    /**
     * The location of the export pipeline.
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
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The target properties of the export pipeline.
     */
    readonly target: types.outputs.ExportPipelineTargetPropertiesResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the export pipeline.
 *
 * Uses Azure REST API version 2023-01-01-preview.
 *
 * Other available API versions: 2019-12-01-preview, 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-12-01-preview, 2022-02-01-preview, 2023-06-01-preview, 2023-08-01-preview, 2023-11-01-preview, 2024-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getExportPipelineOutput(args: GetExportPipelineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetExportPipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getExportPipeline", {
        "exportPipelineName": args.exportPipelineName,
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetExportPipelineOutputArgs {
    /**
     * The name of the export pipeline.
     */
    exportPipelineName: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}