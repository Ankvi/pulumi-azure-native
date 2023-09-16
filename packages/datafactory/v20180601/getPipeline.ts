import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets a pipeline.
 */
export function getPipeline(args: GetPipelineArgs, opts?: pulumi.InvokeOptions): Promise<GetPipelineResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:datafactory/v20180601:getPipeline", {
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
    readonly activities?: (types.outputs.datafactory.v20180601.AppendVariableActivityResponse | types.outputs.datafactory.v20180601.AzureDataExplorerCommandActivityResponse | types.outputs.datafactory.v20180601.AzureFunctionActivityResponse | types.outputs.datafactory.v20180601.AzureMLBatchExecutionActivityResponse | types.outputs.datafactory.v20180601.AzureMLExecutePipelineActivityResponse | types.outputs.datafactory.v20180601.AzureMLUpdateResourceActivityResponse | types.outputs.datafactory.v20180601.ControlActivityResponse | types.outputs.datafactory.v20180601.CopyActivityResponse | types.outputs.datafactory.v20180601.CustomActivityResponse | types.outputs.datafactory.v20180601.DataLakeAnalyticsUSQLActivityResponse | types.outputs.datafactory.v20180601.DatabricksNotebookActivityResponse | types.outputs.datafactory.v20180601.DatabricksSparkJarActivityResponse | types.outputs.datafactory.v20180601.DatabricksSparkPythonActivityResponse | types.outputs.datafactory.v20180601.DeleteActivityResponse | types.outputs.datafactory.v20180601.ExecuteDataFlowActivityResponse | types.outputs.datafactory.v20180601.ExecutePipelineActivityResponse | types.outputs.datafactory.v20180601.ExecuteSSISPackageActivityResponse | types.outputs.datafactory.v20180601.ExecuteWranglingDataflowActivityResponse | types.outputs.datafactory.v20180601.ExecutionActivityResponse | types.outputs.datafactory.v20180601.FailActivityResponse | types.outputs.datafactory.v20180601.FilterActivityResponse | types.outputs.datafactory.v20180601.ForEachActivityResponse | types.outputs.datafactory.v20180601.GetMetadataActivityResponse | types.outputs.datafactory.v20180601.HDInsightHiveActivityResponse | types.outputs.datafactory.v20180601.HDInsightMapReduceActivityResponse | types.outputs.datafactory.v20180601.HDInsightPigActivityResponse | types.outputs.datafactory.v20180601.HDInsightSparkActivityResponse | types.outputs.datafactory.v20180601.HDInsightStreamingActivityResponse | types.outputs.datafactory.v20180601.IfConditionActivityResponse | types.outputs.datafactory.v20180601.LookupActivityResponse | types.outputs.datafactory.v20180601.ScriptActivityResponse | types.outputs.datafactory.v20180601.SetVariableActivityResponse | types.outputs.datafactory.v20180601.SqlServerStoredProcedureActivityResponse | types.outputs.datafactory.v20180601.SwitchActivityResponse | types.outputs.datafactory.v20180601.SynapseNotebookActivityResponse | types.outputs.datafactory.v20180601.SynapseSparkJobDefinitionActivityResponse | types.outputs.datafactory.v20180601.UntilActivityResponse | types.outputs.datafactory.v20180601.ValidationActivityResponse | types.outputs.datafactory.v20180601.WaitActivityResponse | types.outputs.datafactory.v20180601.WebActivityResponse | types.outputs.datafactory.v20180601.WebHookActivityResponse)[];
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
    readonly folder?: types.outputs.datafactory.v20180601.PipelineResponseFolder;
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
    readonly parameters?: {[key: string]: types.outputs.datafactory.v20180601.ParameterSpecificationResponse};
    /**
     * Pipeline Policy.
     */
    readonly policy?: types.outputs.datafactory.v20180601.PipelinePolicyResponse;
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
    readonly variables?: {[key: string]: types.outputs.datafactory.v20180601.VariableSpecificationResponse};
}
/**
 * Gets a pipeline.
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
