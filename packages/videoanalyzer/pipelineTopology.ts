import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Pipeline topology describes the processing steps to be applied when processing content for a particular outcome. The topology should be defined according to the scenario to be achieved and can be reused across many pipeline instances which share the same processing characteristics. For instance, a pipeline topology which captures content from a RTSP camera and archives the content can be reused across many different cameras, as long as the same processing is to be applied across all the cameras. Individual instance properties can be defined through the use of user-defined parameters, which allow for a topology to be parameterized. This allows  individual pipelines refer to different values, such as individual cameras' RTSP endpoints and credentials. Overall a topology is composed of the following:
 *
 *   - Parameters: list of user defined parameters that can be references across the topology nodes.
 *   - Sources: list of one or more data sources nodes such as an RTSP source which allows for content to be ingested from cameras.
 *   - Processors: list of nodes which perform data analysis or transformations.
 *   - Sinks: list of one or more data sinks which allow for data to be stored or exported to other destinations.
 *     Azure REST API version: 2021-11-01-preview. Prior API version in Azure Native 1.x: 2021-11-01-preview
 */
export class PipelineTopology extends pulumi.CustomResource {
    /**
     * Get an existing PipelineTopology resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): PipelineTopology {
        return new PipelineTopology(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:videoanalyzer:PipelineTopology';

    /**
     * Returns true if the given object is an instance of PipelineTopology.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PipelineTopology {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PipelineTopology.__pulumiType;
    }

    /**
     * An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Topology kind.
     */
    public readonly kind!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline.
     */
    public readonly parameters!: pulumi.Output<types.outputs.ParameterDeclarationResponse[] | undefined>;
    /**
     * List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed.
     */
    public readonly processors!: pulumi.Output<types.outputs.EncoderProcessorResponse[] | undefined>;
    /**
     * List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported.
     */
    public readonly sinks!: pulumi.Output<types.outputs.VideoSinkResponse[]>;
    /**
     * Describes the properties of a SKU.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline.
     */
    public readonly sources!: pulumi.Output<(types.outputs.RtspSourceResponse | types.outputs.VideoSourceResponse)[]>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a PipelineTopology resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineTopologyArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.kind === undefined) && !opts.urn) {
                throw new Error("Missing required property 'kind'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sinks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sinks'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.sources === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sources'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["pipelineTopologyName"] = args ? args.pipelineTopologyName : undefined;
            resourceInputs["processors"] = args ? args.processors : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sinks"] = args ? args.sinks : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["processors"] = undefined /*out*/;
            resourceInputs["sinks"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["sources"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:videoanalyzer/v20211101preview:PipelineTopology" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(PipelineTopology.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a PipelineTopology resource.
 */
export interface PipelineTopologyArgs {
    /**
     * The Azure Video Analyzer account name.
     */
    accountName: pulumi.Input<string>;
    /**
     * An optional description of the pipeline topology. It is recommended that the expected use of the topology to be described here.
     */
    description?: pulumi.Input<string>;
    /**
     * Topology kind.
     */
    kind: pulumi.Input<string | types.enums.Kind>;
    /**
     * List of the topology parameter declarations. Parameters declared here can be referenced throughout the topology nodes through the use of "${PARAMETER_NAME}" string pattern. Parameters can have optional default values and can later be defined in individual instances of the pipeline.
     */
    parameters?: pulumi.Input<pulumi.Input<types.inputs.ParameterDeclarationArgs>[]>;
    /**
     * Pipeline topology unique identifier.
     */
    pipelineTopologyName?: pulumi.Input<string>;
    /**
     * List of the topology processor nodes. Processor nodes enable pipeline data to be analyzed, processed or transformed.
     */
    processors?: pulumi.Input<pulumi.Input<types.inputs.EncoderProcessorArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * List of the topology sink nodes. Sink nodes allow pipeline data to be stored or exported.
     */
    sinks: pulumi.Input<pulumi.Input<types.inputs.VideoSinkArgs>[]>;
    /**
     * Describes the properties of a SKU.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * List of the topology source nodes. Source nodes enable external data to be ingested by the pipeline.
     */
    sources: pulumi.Input<pulumi.Input<types.inputs.RtspSourceArgs | types.inputs.VideoSourceArgs>[]>;
}
