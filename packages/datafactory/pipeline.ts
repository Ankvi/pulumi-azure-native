import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Pipeline resource type.
 * Azure REST API version: 2018-06-01. Prior API version in Azure Native 1.x: 2018-06-01
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
    public static readonly __pulumiType = 'azure-native:datafactory:Pipeline';

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
    public readonly activities!: pulumi.Output<(types.outputs.AppendVariableActivityResponse | types.outputs.AzureDataExplorerCommandActivityResponse | types.outputs.AzureFunctionActivityResponse | types.outputs.AzureMLBatchExecutionActivityResponse | types.outputs.AzureMLExecutePipelineActivityResponse | types.outputs.AzureMLUpdateResourceActivityResponse | types.outputs.ControlActivityResponse | types.outputs.CopyActivityResponse | types.outputs.CustomActivityResponse | types.outputs.DataLakeAnalyticsUSQLActivityResponse | types.outputs.DatabricksNotebookActivityResponse | types.outputs.DatabricksSparkJarActivityResponse | types.outputs.DatabricksSparkPythonActivityResponse | types.outputs.DeleteActivityResponse | types.outputs.ExecuteDataFlowActivityResponse | types.outputs.ExecutePipelineActivityResponse | types.outputs.ExecuteSSISPackageActivityResponse | types.outputs.ExecuteWranglingDataflowActivityResponse | types.outputs.ExecutionActivityResponse | types.outputs.FailActivityResponse | types.outputs.FilterActivityResponse | types.outputs.ForEachActivityResponse | types.outputs.GetMetadataActivityResponse | types.outputs.HDInsightHiveActivityResponse | types.outputs.HDInsightMapReduceActivityResponse | types.outputs.HDInsightPigActivityResponse | types.outputs.HDInsightSparkActivityResponse | types.outputs.HDInsightStreamingActivityResponse | types.outputs.IfConditionActivityResponse | types.outputs.LookupActivityResponse | types.outputs.ScriptActivityResponse | types.outputs.SetVariableActivityResponse | types.outputs.SqlServerStoredProcedureActivityResponse | types.outputs.SwitchActivityResponse | types.outputs.SynapseNotebookActivityResponse | types.outputs.SynapseSparkJobDefinitionActivityResponse | types.outputs.UntilActivityResponse | types.outputs.ValidationActivityResponse | types.outputs.WaitActivityResponse | types.outputs.WebActivityResponse | types.outputs.WebHookActivityResponse)[] | undefined>;
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
    public readonly folder!: pulumi.Output<types.outputs.PipelineResponseFolder | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of parameters for pipeline.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.ParameterSpecificationResponse} | undefined>;
    /**
     * Pipeline Policy.
     */
    public readonly policy!: pulumi.Output<types.outputs.PipelinePolicyResponse | undefined>;
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
    public readonly variables!: pulumi.Output<{[key: string]: types.outputs.VariableSpecificationResponse} | undefined>;

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
        const aliasOpts = { aliases: [{ type: "azure-native:datafactory/v20170901preview:Pipeline" }, { type: "azure-native:datafactory/v20180601:Pipeline" }] };
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
    activities?: pulumi.Input<pulumi.Input<types.inputs.AppendVariableActivityArgs | types.inputs.AzureDataExplorerCommandActivityArgs | types.inputs.AzureFunctionActivityArgs | types.inputs.AzureMLBatchExecutionActivityArgs | types.inputs.AzureMLExecutePipelineActivityArgs | types.inputs.AzureMLUpdateResourceActivityArgs | types.inputs.ControlActivityArgs | types.inputs.CopyActivityArgs | types.inputs.CustomActivityArgs | types.inputs.DataLakeAnalyticsUSQLActivityArgs | types.inputs.DatabricksNotebookActivityArgs | types.inputs.DatabricksSparkJarActivityArgs | types.inputs.DatabricksSparkPythonActivityArgs | types.inputs.DeleteActivityArgs | types.inputs.ExecuteDataFlowActivityArgs | types.inputs.ExecutePipelineActivityArgs | types.inputs.ExecuteSSISPackageActivityArgs | types.inputs.ExecuteWranglingDataflowActivityArgs | types.inputs.ExecutionActivityArgs | types.inputs.FailActivityArgs | types.inputs.FilterActivityArgs | types.inputs.ForEachActivityArgs | types.inputs.GetMetadataActivityArgs | types.inputs.HDInsightHiveActivityArgs | types.inputs.HDInsightMapReduceActivityArgs | types.inputs.HDInsightPigActivityArgs | types.inputs.HDInsightSparkActivityArgs | types.inputs.HDInsightStreamingActivityArgs | types.inputs.IfConditionActivityArgs | types.inputs.LookupActivityArgs | types.inputs.ScriptActivityArgs | types.inputs.SetVariableActivityArgs | types.inputs.SqlServerStoredProcedureActivityArgs | types.inputs.SwitchActivityArgs | types.inputs.SynapseNotebookActivityArgs | types.inputs.SynapseSparkJobDefinitionActivityArgs | types.inputs.UntilActivityArgs | types.inputs.ValidationActivityArgs | types.inputs.WaitActivityArgs | types.inputs.WebActivityArgs | types.inputs.WebHookActivityArgs>[]>;
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
    folder?: pulumi.Input<types.inputs.PipelineFolderArgs>;
    /**
     * List of parameters for pipeline.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.ParameterSpecificationArgs>}>;
    /**
     * The pipeline name.
     */
    pipelineName?: pulumi.Input<string>;
    /**
     * Pipeline Policy.
     */
    policy?: pulumi.Input<types.inputs.PipelinePolicyArgs>;
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
    variables?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.VariableSpecificationArgs>}>;
}
