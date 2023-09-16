import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
 */
export class Output extends pulumi.CustomResource {
    /**
     * Get an existing Output resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Output {
        return new Output(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:streamanalytics/v20211001preview:Output';

    /**
     * Returns true if the given object is an instance of Output.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Output {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Output.__pulumiType;
    }

    /**
     * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
     */
    public readonly datasource!: pulumi.Output<types.outputs.streamanalytics.v20211001preview.AzureDataExplorerOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureDataLakeStoreOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureFunctionOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureSqlDatabaseOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureSynapseOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureTableOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.BlobOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.DocumentDbOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.EventHubOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.EventHubV2OutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.GatewayMessageBusOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.PostgreSQLOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.PowerBIOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.RawOutputDatasourceResponse | types.outputs.streamanalytics.v20211001preview.ServiceBusQueueOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.ServiceBusTopicOutputDataSourceResponse | undefined>;
    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    public /*out*/ readonly diagnostics!: pulumi.Output<types.outputs.streamanalytics.v20211001preview.DiagnosticsResponse>;
    /**
     * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * A list of the last output event times for each output partition. The index of the array corresponds to the partition number.
     */
    public /*out*/ readonly lastOutputEventTimestamps!: pulumi.Output<types.outputs.streamanalytics.v20211001preview.LastOutputEventTimestampResponse[]>;
    /**
     * Resource name
     */
    public readonly name!: pulumi.Output<string | undefined>;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    public readonly serialization!: pulumi.Output<types.outputs.streamanalytics.v20211001preview.AvroSerializationResponse | types.outputs.streamanalytics.v20211001preview.CsvSerializationResponse | types.outputs.streamanalytics.v20211001preview.CustomClrSerializationResponse | types.outputs.streamanalytics.v20211001preview.DeltaSerializationResponse | types.outputs.streamanalytics.v20211001preview.JsonSerializationResponse | types.outputs.streamanalytics.v20211001preview.ParquetSerializationResponse | undefined>;
    /**
     * The size window to constrain a Stream Analytics output to.
     */
    public readonly sizeWindow!: pulumi.Output<number | undefined>;
    /**
     * The time frame for filtering Stream Analytics job outputs.
     */
    public readonly timeWindow!: pulumi.Output<string | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Settings which determine whether to send watermarks to downstream.
     */
    public readonly watermarkSettings!: pulumi.Output<types.outputs.streamanalytics.v20211001preview.OutputWatermarkPropertiesResponse | undefined>;

    /**
     * Create a Output resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OutputArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["datasource"] = args ? args.datasource : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outputName"] = args ? args.outputName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialization"] = args ? args.serialization : undefined;
            resourceInputs["sizeWindow"] = args ? args.sizeWindow : undefined;
            resourceInputs["timeWindow"] = args ? args.timeWindow : undefined;
            resourceInputs["watermarkSettings"] = args ? args.watermarkSettings : undefined;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastOutputEventTimestamps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["datasource"] = undefined /*out*/;
            resourceInputs["diagnostics"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["lastOutputEventTimestamps"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["serialization"] = undefined /*out*/;
            resourceInputs["sizeWindow"] = undefined /*out*/;
            resourceInputs["timeWindow"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["watermarkSettings"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:streamanalytics:Output" }, { type: "azure-native:streamanalytics/v20160301:Output" }, { type: "azure-native:streamanalytics/v20170401preview:Output" }, { type: "azure-native:streamanalytics/v20200301:Output" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Output.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Output resource.
 */
export interface OutputArgs {
    /**
     * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
     */
    datasource?: pulumi.Input<types.inputs.streamanalytics.v20211001preview.AzureDataExplorerOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.AzureDataLakeStoreOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.AzureFunctionOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.AzureSqlDatabaseOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.AzureSynapseOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.AzureTableOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.BlobOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.DocumentDbOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.EventHubOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.EventHubV2OutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.GatewayMessageBusOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.PostgreSQLOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.PowerBIOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.RawOutputDatasourceArgs | types.inputs.streamanalytics.v20211001preview.ServiceBusQueueOutputDataSourceArgs | types.inputs.streamanalytics.v20211001preview.ServiceBusTopicOutputDataSourceArgs>;
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * Resource name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the output.
     */
    outputName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    serialization?: pulumi.Input<types.inputs.streamanalytics.v20211001preview.AvroSerializationArgs | types.inputs.streamanalytics.v20211001preview.CsvSerializationArgs | types.inputs.streamanalytics.v20211001preview.CustomClrSerializationArgs | types.inputs.streamanalytics.v20211001preview.DeltaSerializationArgs | types.inputs.streamanalytics.v20211001preview.JsonSerializationArgs | types.inputs.streamanalytics.v20211001preview.ParquetSerializationArgs>;
    /**
     * The size window to constrain a Stream Analytics output to.
     */
    sizeWindow?: pulumi.Input<number>;
    /**
     * The time frame for filtering Stream Analytics job outputs.
     */
    timeWindow?: pulumi.Input<string>;
    /**
     * Settings which determine whether to send watermarks to downstream.
     */
    watermarkSettings?: pulumi.Input<types.inputs.streamanalytics.v20211001preview.OutputWatermarkPropertiesArgs>;
}
