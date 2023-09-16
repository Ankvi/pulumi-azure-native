import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details about the specified output.
 */
export function getOutput(args: GetOutputArgs, opts?: pulumi.InvokeOptions): Promise<GetOutputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20200301:getOutput", {
        "jobName": args.jobName,
        "outputName": args.outputName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetOutputArgs {
    /**
     * The name of the streaming job.
     */
    jobName: string;
    /**
     * The name of the output.
     */
    outputName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
 */
export interface GetOutputResult {
    /**
     * Describes the data source that output will be written to. Required on PUT (CreateOrReplace) requests.
     */
    readonly datasource?: types.outputs.streamanalytics.v20200301.AzureDataLakeStoreOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.AzureFunctionOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.AzureSqlDatabaseOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.AzureSynapseOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.AzureTableOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.BlobOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.DocumentDbOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.EventHubOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.EventHubV2OutputDataSourceResponse | types.outputs.streamanalytics.v20200301.GatewayMessageBusOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.PowerBIOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.ServiceBusQueueOutputDataSourceResponse | types.outputs.streamanalytics.v20200301.ServiceBusTopicOutputDataSourceResponse;
    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    readonly diagnostics: types.outputs.streamanalytics.v20200301.DiagnosticsResponse;
    /**
     * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    readonly etag: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    readonly serialization?: types.outputs.streamanalytics.v20200301.AvroSerializationResponse | types.outputs.streamanalytics.v20200301.CsvSerializationResponse | types.outputs.streamanalytics.v20200301.JsonSerializationResponse | types.outputs.streamanalytics.v20200301.ParquetSerializationResponse;
    /**
     * The size window to constrain a Stream Analytics output to.
     */
    readonly sizeWindow?: number;
    /**
     * The time frame for filtering Stream Analytics job outputs.
     */
    readonly timeWindow?: string;
    /**
     * Resource type
     */
    readonly type: string;
}
/**
 * Gets details about the specified output.
 */
export function getOutputOutput(args: GetOutputOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetOutputResult> {
    return pulumi.output(args).apply((a: any) => getOutput(a, opts))
}

export interface GetOutputOutputArgs {
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the output.
     */
    outputName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
