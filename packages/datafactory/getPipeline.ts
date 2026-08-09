import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets a pipeline.
 *
 * Uses Azure REST API version 2018-06-01.
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
     * The name of the resource group. The name is case insensitive.
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
    readonly activities?: (types.outputs.AppendVariableActivityResponse | types.outputs.AzureDataExplorerCommandActivityResponse | types.outputs.AzureFunctionActivityResponse | types.outputs.AzureMLBatchExecutionActivityResponse | types.outputs.AzureMLExecutePipelineActivityResponse | types.outputs.AzureMLUpdateResourceActivityResponse | types.outputs.ControlActivityResponse | types.outputs.CopyActivityResponse | types.outputs.CustomActivityResponse | types.outputs.DataLakeAnalyticsUSQLActivityResponse | types.outputs.DatabricksJobActivityResponse | types.outputs.DatabricksNotebookActivityResponse | types.outputs.DatabricksSparkJarActivityResponse | types.outputs.DatabricksSparkPythonActivityResponse | types.outputs.DeleteActivityResponse | types.outputs.ExecuteDataFlowActivityResponse | types.outputs.ExecutePipelineActivityResponse | types.outputs.ExecuteSSISPackageActivityResponse | types.outputs.ExecuteWranglingDataflowActivityResponse | types.outputs.ExecutionActivityResponse | types.outputs.FailActivityResponse | types.outputs.FilterActivityResponse | types.outputs.ForEachActivityResponse | types.outputs.GetMetadataActivityResponse | types.outputs.HDInsightHiveActivityResponse | types.outputs.HDInsightMapReduceActivityResponse | types.outputs.HDInsightPigActivityResponse | types.outputs.HDInsightSparkActivityResponse | types.outputs.HDInsightStreamingActivityResponse | types.outputs.IfConditionActivityResponse | types.outputs.LookupActivityResponse | types.outputs.ScriptActivityResponse | types.outputs.SetVariableActivityResponse | types.outputs.SqlServerStoredProcedureActivityResponse | types.outputs.SwitchActivityResponse | types.outputs.SynapseNotebookActivityResponse | types.outputs.SynapseSparkJobDefinitionActivityResponse | types.outputs.UntilActivityResponse | types.outputs.ValidationActivityResponse | types.outputs.WaitActivityResponse | types.outputs.WebActivityResponse | types.outputs.WebHookActivityResponse)[];
    /**
     * List of tags that can be used for describing the Pipeline.
     */
    readonly annotations?: any[];
    /**
     * The Azure API version of the resource.
     */
    readonly azureApiVersion: string;
    /**
     * The max number of concurrent runs for the pipeline.
     */
    readonly concurrency?: number;
    /**
     * The description of the pipeline.
     */
    readonly description?: string;
    /**
     * "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
     */
    readonly etag: string;
    /**
     * The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
     */
    readonly folder?: types.outputs.PipelineFolderResponse;
    /**
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of parameters for pipeline.
     */
    readonly parameters?: {[key: string]: types.outputs.ParameterSpecificationResponse};
    /**
     * Pipeline Policy.
     */
    readonly policy?: types.outputs.PipelinePolicyResponse;
    /**
     * Dimensions emitted by Pipeline.
     */
    readonly runDimensions?: any;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * List of variables for pipeline.
     */
    readonly variables?: {[key: string]: types.outputs.VariableSpecificationResponse};
}
/**
 * Gets a pipeline.
 *
 * Uses Azure REST API version 2018-06-01.
 */
export function getPipelineOutput(args: GetPipelineOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPipelineResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:datafactory:getPipeline", {
        "factoryName": args.factoryName,
        "pipelineName": args.pipelineName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}