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
    public readonly activities!: pulumi.Output<(types.outputs.datafactory.AppendVariableActivityResponse | types.outputs.datafactory.AzureDataExplorerCommandActivityResponse | types.outputs.datafactory.AzureFunctionActivityResponse | types.outputs.datafactory.AzureMLBatchExecutionActivityResponse | types.outputs.datafactory.AzureMLExecutePipelineActivityResponse | types.outputs.datafactory.AzureMLUpdateResourceActivityResponse | types.outputs.datafactory.ControlActivityResponse | types.outputs.datafactory.CopyActivityResponse | types.outputs.datafactory.CustomActivityResponse | types.outputs.datafactory.DataLakeAnalyticsUSQLActivityResponse | types.outputs.datafactory.DatabricksNotebookActivityResponse | types.outputs.datafactory.DatabricksSparkJarActivityResponse | types.outputs.datafactory.DatabricksSparkPythonActivityResponse | types.outputs.datafactory.DeleteActivityResponse | types.outputs.datafactory.ExecuteDataFlowActivityResponse | types.outputs.datafactory.ExecutePipelineActivityResponse | types.outputs.datafactory.ExecuteSSISPackageActivityResponse | types.outputs.datafactory.ExecuteWranglingDataflowActivityResponse | types.outputs.datafactory.ExecutionActivityResponse | types.outputs.datafactory.FailActivityResponse | types.outputs.datafactory.FilterActivityResponse | types.outputs.datafactory.ForEachActivityResponse | types.outputs.datafactory.GetMetadataActivityResponse | types.outputs.datafactory.HDInsightHiveActivityResponse | types.outputs.datafactory.HDInsightMapReduceActivityResponse | types.outputs.datafactory.HDInsightPigActivityResponse | types.outputs.datafactory.HDInsightSparkActivityResponse | types.outputs.datafactory.HDInsightStreamingActivityResponse | types.outputs.datafactory.IfConditionActivityResponse | types.outputs.datafactory.LookupActivityResponse | types.outputs.datafactory.ScriptActivityResponse | types.outputs.datafactory.SetVariableActivityResponse | types.outputs.datafactory.SqlServerStoredProcedureActivityResponse | types.outputs.datafactory.SwitchActivityResponse | types.outputs.datafactory.SynapseNotebookActivityResponse | types.outputs.datafactory.SynapseSparkJobDefinitionActivityResponse | types.outputs.datafactory.UntilActivityResponse | types.outputs.datafactory.ValidationActivityResponse | types.outputs.datafactory.WaitActivityResponse | types.outputs.datafactory.WebActivityResponse | types.outputs.datafactory.WebHookActivityResponse)[] | undefined>;
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
    public readonly folder!: pulumi.Output<types.outputs.datafactory.PipelineResponseFolder | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of parameters for pipeline.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: types.outputs.datafactory.ParameterSpecificationResponse} | undefined>;
    /**
     * Pipeline Policy.
     */
    public readonly policy!: pulumi.Output<types.outputs.datafactory.PipelinePolicyResponse | undefined>;
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
    public readonly variables!: pulumi.Output<{[key: string]: types.outputs.datafactory.VariableSpecificationResponse} | undefined>;

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
    activities?: pulumi.Input<pulumi.Input<types.inputs.datafactory.AppendVariableActivityArgs | types.inputs.datafactory.AzureDataExplorerCommandActivityArgs | types.inputs.datafactory.AzureFunctionActivityArgs | types.inputs.datafactory.AzureMLBatchExecutionActivityArgs | types.inputs.datafactory.AzureMLExecutePipelineActivityArgs | types.inputs.datafactory.AzureMLUpdateResourceActivityArgs | types.inputs.datafactory.ControlActivityArgs | types.inputs.datafactory.CopyActivityArgs | types.inputs.datafactory.CustomActivityArgs | types.inputs.datafactory.DataLakeAnalyticsUSQLActivityArgs | types.inputs.datafactory.DatabricksNotebookActivityArgs | types.inputs.datafactory.DatabricksSparkJarActivityArgs | types.inputs.datafactory.DatabricksSparkPythonActivityArgs | types.inputs.datafactory.DeleteActivityArgs | types.inputs.datafactory.ExecuteDataFlowActivityArgs | types.inputs.datafactory.ExecutePipelineActivityArgs | types.inputs.datafactory.ExecuteSSISPackageActivityArgs | types.inputs.datafactory.ExecuteWranglingDataflowActivityArgs | types.inputs.datafactory.ExecutionActivityArgs | types.inputs.datafactory.FailActivityArgs | types.inputs.datafactory.FilterActivityArgs | types.inputs.datafactory.ForEachActivityArgs | types.inputs.datafactory.GetMetadataActivityArgs | types.inputs.datafactory.HDInsightHiveActivityArgs | types.inputs.datafactory.HDInsightMapReduceActivityArgs | types.inputs.datafactory.HDInsightPigActivityArgs | types.inputs.datafactory.HDInsightSparkActivityArgs | types.inputs.datafactory.HDInsightStreamingActivityArgs | types.inputs.datafactory.IfConditionActivityArgs | types.inputs.datafactory.LookupActivityArgs | types.inputs.datafactory.ScriptActivityArgs | types.inputs.datafactory.SetVariableActivityArgs | types.inputs.datafactory.SqlServerStoredProcedureActivityArgs | types.inputs.datafactory.SwitchActivityArgs | types.inputs.datafactory.SynapseNotebookActivityArgs | types.inputs.datafactory.SynapseSparkJobDefinitionActivityArgs | types.inputs.datafactory.UntilActivityArgs | types.inputs.datafactory.ValidationActivityArgs | types.inputs.datafactory.WaitActivityArgs | types.inputs.datafactory.WebActivityArgs | types.inputs.datafactory.WebHookActivityArgs>[]>;
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
    folder?: pulumi.Input<types.inputs.datafactory.PipelineFolderArgs>;
    /**
     * List of parameters for pipeline.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.datafactory.ParameterSpecificationArgs>}>;
    /**
     * The pipeline name.
     */
    pipelineName?: pulumi.Input<string>;
    /**
     * Pipeline Policy.
     */
    policy?: pulumi.Input<types.inputs.datafactory.PipelinePolicyArgs>;
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
    variables?: pulumi.Input<{[key: string]: pulumi.Input<types.inputs.datafactory.VariableSpecificationArgs>}>;
}
