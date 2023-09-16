import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Pipeline resource type.
 */
export class Pipeline extends pulumi.CustomResource {
    /**
     * Get an existing Pipeline resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Pipeline {
        return new Pipeline(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:datafactory/v20180601:Pipeline';

    /**
     * Returns true if the given object is an instance of Pipeline.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Pipeline {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Pipeline.__pulumiType;
    }

    /**
     * List of activities in pipeline.
     */
    public readonly activities!: pulumi.Output<(types.outputs.datafactory.v20180601.AppendVariableActivityResponse | types.outputs.datafactory.v20180601.AzureDataExplorerCommandActivityResponse | types.outputs.datafactory.v20180601.AzureFunctionActivityResponse | types.outputs.datafactory.v20180601.AzureMLBatchExecutionActivityResponse | types.outputs.datafactory.v20180601.AzureMLExecutePipelineActivityResponse | types.outputs.datafactory.v20180601.AzureMLUpdateResourceActivityResponse | types.outputs.datafactory.v20180601.ControlActivityResponse | types.outputs.datafactory.v20180601.CopyActivityResponse | types.outputs.datafactory.v20180601.CustomActivityResponse | types.outputs.datafactory.v20180601.DataLakeAnalyticsUSQLActivityResponse | types.outputs.datafactory.v20180601.DatabricksNotebookActivityResponse | types.outputs.datafactory.v20180601.DatabricksSparkJarActivityResponse | types.outputs.datafactory.v20180601.DatabricksSparkPythonActivityResponse | types.outputs.datafactory.v20180601.DeleteActivityResponse | types.outputs.datafactory.v20180601.ExecuteDataFlowActivityResponse | types.outputs.datafactory.v20180601.ExecutePipelineActivityResponse | types.outputs.datafactory.v20180601.ExecuteSSISPackageActivityResponse | types.outputs.datafactory.v20180601.ExecuteWranglingDataflowActivityResponse | types.outputs.datafactory.v20180601.ExecutionActivityResponse | types.outputs.datafactory.v20180601.FailActivityResponse | types.outputs.datafactory.v20180601.FilterActivityResponse | types.outputs.datafactory.v20180601.ForEachActivityResponse | types.outputs.datafactory.v20180601.GetMetadataActivityResponse | types.outputs.datafactory.v20180601.HDInsightHiveActivityResponse | types.outputs.datafactory.v20180601.HDInsightMapReduceActivityResponse | types.outputs.datafactory.v20180601.HDInsightPigActivityResponse | types.outputs.datafactory.v20180601.HDInsightSparkActivityResponse | types.outputs.datafactory.v20180601.HDInsightStreamingActivityResponse | types.outputs.datafactory.v20180601.IfConditionActivityResponse | types.outputs.datafactory.v20180601.LookupActivityResponse | types.outputs.datafactory.v20180601.ScriptActivityResponse | types.outputs.datafactory.v20180601.SetVariableActivityResponse | types.outputs.datafactory.v20180601.SqlServerStoredProcedureActivityResponse | types.outputs.datafactory.v20180601.SwitchActivityResponse | types.outputs.datafactory.v20180601.SynapseNotebookActivityResponse | types.outputs.datafactory.v20180601.SynapseSparkJobDefinitionActivityResponse | types.outputs.datafactory.v20180601.UntilActivityResponse | types.outputs.datafactory.v20180601.ValidationActivityResponse | types.outputs.datafactory.v20180601.WaitActivityResponse | types.outputs.datafactory.v20180601.WebActivityResponse | types.outputs.datafactory.v20180601.WebHookActivityResponse)[] | undefined>;
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    public readonly annotations!: pulumi.Output<any[] | undefined>;
    /**
     * The max number of concurrent runs for the pipeline.
     */
    public readonly concurrency!: pulumi.Output<number | undefined>;
    /**
     * The description of the pipeline.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Etag identifies change in the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    public readonly folder!: pulumi.Output<types.outputs.datafactory.v20180601.PipelineResponseFolder | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of parameters for pipeline.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.datafactory.v20180601.ParameterSpecificationResponse} | undefined>;
    /**
     * Pipeline Policy.
     */
    public readonly policy!: pulumi.Output<types.outputs.datafactory.v20180601.PipelinePolicyResponse | undefined>;
    /**
     * Dimensions emitted by Pipeline.
     */
    public readonly runDimensions!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of variables for pipeline.
     */
    public readonly variables!: pulumi.Output<{[key: string]: types.outputs.datafactory.v20180601.VariableSpecificationResponse} | undefined>;

    /**
     * Create a Pipeline resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PipelineArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.factoryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'factoryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["activities"] = args ? args.activities : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["concurrency"] = args ? args.concurrency : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["factoryName"] = args ? args.factoryName : undefined;
            resourceInputs["folder"] = args ? args.folder : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["pipelineName"] = args ? args.pipelineName : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["runDimensions"] = args ? args.runDimensions : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["activities"] = undefined /*out*/;
            resourceInputs["annotations"] = undefined /*out*/;
            resourceInputs["concurrency"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["folder"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["policy"] = undefined /*out*/;
            resourceInputs["runDimensions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["variables"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory:Pipeline" }, { type: "azure-native:datafactory/v20170901preview:Pipeline" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Pipeline.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Pipeline resource.
 */
export interface PipelineArgs {
    /**
     * List of activities in pipeline.
     */
    activities?: pulumi.Input<pulumi.Input<types.inputs.datafactory.v20180601.AppendVariableActivityArgs | types.inputs.datafactory.v20180601.AzureDataExplorerCommandActivityArgs | types.inputs.datafactory.v20180601.AzureFunctionActivityArgs | types.inputs.datafactory.v20180601.AzureMLBatchExecutionActivityArgs | types.inputs.datafactory.v20180601.AzureMLExecutePipelineActivityArgs | types.inputs.datafactory.v20180601.AzureMLUpdateResourceActivityArgs | types.inputs.datafactory.v20180601.ControlActivityArgs | types.inputs.datafactory.v20180601.CopyActivityArgs | types.inputs.datafactory.v20180601.CustomActivityArgs | types.inputs.datafactory.v20180601.DataLakeAnalyticsUSQLActivityArgs | types.inputs.datafactory.v20180601.DatabricksNotebookActivityArgs | types.inputs.datafactory.v20180601.DatabricksSparkJarActivityArgs | types.inputs.datafactory.v20180601.DatabricksSparkPythonActivityArgs | types.inputs.datafactory.v20180601.DeleteActivityArgs | types.inputs.datafactory.v20180601.ExecuteDataFlowActivityArgs | types.inputs.datafactory.v20180601.ExecutePipelineActivityArgs | types.inputs.datafactory.v20180601.ExecuteSSISPackageActivityArgs | types.inputs.datafactory.v20180601.ExecuteWranglingDataflowActivityArgs | types.inputs.datafactory.v20180601.ExecutionActivityArgs | types.inputs.datafactory.v20180601.FailActivityArgs | types.inputs.datafactory.v20180601.FilterActivityArgs | types.inputs.datafactory.v20180601.ForEachActivityArgs | types.inputs.datafactory.v20180601.GetMetadataActivityArgs | types.inputs.datafactory.v20180601.HDInsightHiveActivityArgs | types.inputs.datafactory.v20180601.HDInsightMapReduceActivityArgs | types.inputs.datafactory.v20180601.HDInsightPigActivityArgs | types.inputs.datafactory.v20180601.HDInsightSparkActivityArgs | types.inputs.datafactory.v20180601.HDInsightStreamingActivityArgs | types.inputs.datafactory.v20180601.IfConditionActivityArgs | types.inputs.datafactory.v20180601.LookupActivityArgs | types.inputs.datafactory.v20180601.ScriptActivityArgs | types.inputs.datafactory.v20180601.SetVariableActivityArgs | types.inputs.datafactory.v20180601.SqlServerStoredProcedureActivityArgs | types.inputs.datafactory.v20180601.SwitchActivityArgs | types.inputs.datafactory.v20180601.SynapseNotebookActivityArgs | types.inputs.datafactory.v20180601.SynapseSparkJobDefinitionActivityArgs | types.inputs.datafactory.v20180601.UntilActivityArgs | types.inputs.datafactory.v20180601.ValidationActivityArgs | types.inputs.datafactory.v20180601.WaitActivityArgs | types.inputs.datafactory.v20180601.WebActivityArgs | types.inputs.datafactory.v20180601.WebHookActivityArgs>[]>;
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    annotations?: pulumi.Input<any[]>;
    /**
     * The max number of concurrent runs for the pipeline.
     */
    concurrency?: pulumi.Input<number>;
    /**
     * The description of the pipeline.
     */
    description?: pulumi.Input<string>;
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    folder?: pulumi.Input<types.inputs.datafactory.v20180601.PipelineFolderArgs>;
    /**
     * List of parameters for pipeline.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.datafactory.v20180601.ParameterSpecificationArgs>}>;
    /**
     * The pipeline name.
     */
    pipelineName?: pulumi.Input<string>;
    /**
     * Pipeline Policy.
     */
    policy?: pulumi.Input<types.inputs.datafactory.v20180601.PipelinePolicyArgs>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Dimensions emitted by Pipeline.
     */
    runDimensions?: pulumi.Input<{[key: string]: any}>;
    /**
     * List of variables for pipeline.
     */
    variables?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.datafactory.v20180601.VariableSpecificationArgs>}>;
}
