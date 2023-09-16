import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Retrieves a specific pipeline topology by name. If a topology with that name has been previously created, the call will return the JSON representation of that topology.
 * Azure REST API version: 2021-11-01-preview.
 */
export function getPipelineTopology(args: GetPipelineTopologyArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineTopologyResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:videoanalyzer:getPipelineTopology", {
        "accountName": args.accountName,
        "pipelineTopologyName": args.pipelineTopologyName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineTopologyArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: string;
    /**
     * Pipeline topology unique identifier.
     */
    pipelineTopologyName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Pipeline topology describes the processing steps to be applied when processing content for a particular outcome. The topology should be defined according to the scenario to be achieved and can be reused across many pipeline instances which share the same processing characteristics. For instance, a pipeline topology which captures content from a RTSP camera and archives the content can be reused across many different cameras, as long as the same processing is to be applied across all the cameras. Individual instance properties can be defined through the use of user-defined parameters, which allow for a topology to be parameterized. This allows  individual pipelines refer to different values, such as individual cameras' RTSP endpoints and credentials. Overall a topology is composed of the following:
 * 
 *   - Parameters: list of user defined parameters that can be references across the topology nodes.
 *   - Sources: list of one or more data sources nodes such as an RTSP source which allows for content to be ingested from cameras.
 *   - Processors: list of nodes which perform data analysis or transformations.
 *   - Sinks: list of one or more data sinks which allow for data to be stored or exported to other destinations.
 */
export interface GetPipelineTopologyResult {
    /**
     * An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here.
     */
    readonly description?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Topology kind.
     */
    readonly kind: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline.
     */
    readonly parameters?: types.outputs.videoanalyzer.ParameterDeclarationResponse[];
    /**
     * List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed.
     */
    readonly processors?: types.outputs.videoanalyzer.EncoderProcessorResponse[];
    /**
     * List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported.
     */
    readonly sinks: types.outputs.videoanalyzer.VideoSinkResponse[];
    /**
     * Describes the properties of a SKU.
     */
    readonly sku: types.outputs.videoanalyzer.SkuResponse;
    /**
     * List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline.
     */
    readonly sources: (types.outputs.videoanalyzer.RtspSourceResponse | types.outputs.videoanalyzer.VideoSourceResponse)[];
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.videoanalyzer.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Retrieves a specific pipeline topology by name. If a topology with that name has been previously created, the call will return the JSON representation of that topology.
 * Azure REST API version: 2021-11-01-preview.
 */
export function getPipelineTopologyOutput(args: GetPipelineTopologyOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineTopologyResult> {
    return pulumi.output(args).apply((a: any) => getPipelineTopology(a, opts))
}

export interface GetPipelineTopologyOutputArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * Pipeline topology unique identifier.
     */
    pipelineTopologyName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
