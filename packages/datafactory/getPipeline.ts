import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a pipeline.
 * Azure REST API version: 2018-06-01.
 */
export function getPipeline(args: GetPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory:getPipeline", {
        "factoryName": args.factoryName,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPipelineArgs {
    /**
     * The factory name.
     */
    factoryName: string;
    /**
     * The pipeline name.
     */
    pipelineName: string;
    /**
     * The resource group name.
     */
    resourceGroupName: string;
}

/**
 * Pipeline resource type.
 */
export interface GetPipelineResult {
    /**
     * List of activities in pipeline.
     */
    readonly activities?: (types.outputs.datafactory.AppendVariableActivityResponse | types.outputs.datafactory.AzureDataExplorerCommandActivityResponse | types.outputs.datafactory.AzureFunctionActivityResponse | types.outputs.datafactory.AzureMLBatchExecutionActivityResponse | types.outputs.datafactory.AzureMLExecutePipelineActivityResponse | types.outputs.datafactory.AzureMLUpdateResourceActivityResponse | types.outputs.datafactory.ControlActivityResponse | types.outputs.datafactory.CopyActivityResponse | types.outputs.datafactory.CustomActivityResponse | types.outputs.datafactory.DataLakeAnalyticsUSQLActivityResponse | types.outputs.datafactory.DatabricksNotebookActivityResponse | types.outputs.datafactory.DatabricksSparkJarActivityResponse | types.outputs.datafactory.DatabricksSparkPythonActivityResponse | types.outputs.datafactory.DeleteActivityResponse | types.outputs.datafactory.ExecuteDataFlowActivityResponse | types.outputs.datafactory.ExecutePipelineActivityResponse | types.outputs.datafactory.ExecuteSSISPackageActivityResponse | types.outputs.datafactory.ExecuteWranglingDataflowActivityResponse | types.outputs.datafactory.ExecutionActivityResponse | types.outputs.datafactory.FailActivityResponse | types.outputs.datafactory.FilterActivityResponse | types.outputs.datafactory.ForEachActivityResponse | types.outputs.datafactory.GetMetadataActivityResponse | types.outputs.datafactory.HDInsightHiveActivityResponse | types.outputs.datafactory.HDInsightMapReduceActivityResponse | types.outputs.datafactory.HDInsightPigActivityResponse | types.outputs.datafactory.HDInsightSparkActivityResponse | types.outputs.datafactory.HDInsightStreamingActivityResponse | types.outputs.datafactory.IfConditionActivityResponse | types.outputs.datafactory.LookupActivityResponse | types.outputs.datafactory.ScriptActivityResponse | types.outputs.datafactory.SetVariableActivityResponse | types.outputs.datafactory.SqlServerStoredProcedureActivityResponse | types.outputs.datafactory.SwitchActivityResponse | types.outputs.datafactory.SynapseNotebookActivityResponse | types.outputs.datafactory.SynapseSparkJobDefinitionActivityResponse | types.outputs.datafactory.UntilActivityResponse | types.outputs.datafactory.ValidationActivityResponse | types.outputs.datafactory.WaitActivityResponse | types.outputs.datafactory.WebActivityResponse | types.outputs.datafactory.WebHookActivityResponse)[];
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    readonly annotations?: any[];
    /**
     * The max number of concurrent runs for the pipeline.
     */
    readonly concurrency?: number;
    /**
     * The description of the pipeline.
     */
    readonly description?: string;
    /**
     * Etag identifies change in the resource.
     */
    readonly etag: string;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    readonly folder?: types.outputs.datafactory.PipelineResponseFolder;
    /**
     * The resource identifier.
     */
    readonly id: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * List of parameters for pipeline.
     */
    readonly parameters?: {[key: string]: types.outputs.datafactory.ParameterSpecificationResponse};
    /**
     * Pipeline Policy.
     */
    readonly policy?: types.outputs.datafactory.PipelinePolicyResponse;
    /**
     * Dimensions emitted by Pipeline.
     */
    readonly runDimensions?: {[key: string]: any};
    /**
     * The resource type.
     */
    readonly type: string;
    /**
     * List of variables for pipeline.
     */
    readonly variables?: {[key: string]: types.outputs.datafactory.VariableSpecificationResponse};
}
/**
 * Gets a pipeline.
 * Azure REST API version: 2018-06-01.
 */
export function getPipelineOutput(args: GetPipelineOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPipelineResult> {
    return pulumi.output(args).apply((a: any) => getPipeline(a, opts))
}

export interface GetPipelineOutputArgs {
    /**
     * The factory name.
     */
    factoryName: pulumi.Input<string>;
    /**
     * The pipeline name.
     */
    pipelineName: pulumi.Input<string>;
    /**
     * The resource group name.
     */
    resourceGroupName: pulumi.Input<string>;
}
