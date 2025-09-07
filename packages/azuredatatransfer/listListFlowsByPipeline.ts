import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists all Flows associated with the specified Pipeline.
 *
 * Uses Azure REST API version 2025-05-21.
 *
 * Other available API versions: 2025-04-11-preview, 2025-05-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListFlowsByPipeline(args: ListListFlowsByPipelineArgs, opts?: pulumi.InvokeOptions): Promise<ListListFlowsByPipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:azuredatatransfer:listListFlowsByPipeline", {
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "value": args.value,
    }, opts);
}

export interface ListListFlowsByPipelineArgs {
    /**
     * The name of the pipeline on which to operate.
     */
    pipelineName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * Connection ID to target
     */
    value?: string[];
}

/**
 * An array of flow resources.
 */
export interface ListListFlowsByPipelineResult {
    /**
     * List flows by pipeline result by connection
     */
    readonly value?: types.outputs.ListFlowsByPipelineConnectionResponse[];
}
/**
 * Lists all Flows associated with the specified Pipeline.
 *
 * Uses Azure REST API version 2025-05-21.
 *
 * Other available API versions: 2025-04-11-preview, 2025-05-30-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native azuredatatransfer [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function listListFlowsByPipelineOutput(args: ListListFlowsByPipelineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<ListListFlowsByPipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:azuredatatransfer:listListFlowsByPipeline", {
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
        "value": args.value,
    }, opts);
}

export interface ListListFlowsByPipelineOutputArgs {
    /**
     * The name of the pipeline on which to operate.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Connection ID to target
     */
    value?: pulumi.Input<pulumi.Input<string>[]>;
}