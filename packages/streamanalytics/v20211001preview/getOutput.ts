import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details about the specified output.
 */
export function getOutput(args: GetOutputArgs, opts?: pulumi.InvokeOptions): Promise<GetOutputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20211001preview:getOutput", {
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
    readonly datasource?: types.outputs.streamanalytics.v20211001preview.AzureDataExplorerOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureDataLakeStoreOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureFunctionOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureSqlDatabaseOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureSynapseOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.AzureTableOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.BlobOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.DocumentDbOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.EventHubOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.EventHubV2OutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.GatewayMessageBusOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.PostgreSQLOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.PowerBIOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.RawOutputDatasourceResponse | types.outputs.streamanalytics.v20211001preview.ServiceBusQueueOutputDataSourceResponse | types.outputs.streamanalytics.v20211001preview.ServiceBusTopicOutputDataSourceResponse;
    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    readonly diagnostics: types.outputs.streamanalytics.v20211001preview.DiagnosticsResponse;
    /**
     * The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    readonly etag: string;
    /**
     * Resource Id
     */
    readonly id: string;
    /**
     * A list of the last output event times for each output partition. The index of the array corresponds to the partition number.
     */
    readonly lastOutputEventTimestamps: types.outputs.streamanalytics.v20211001preview.LastOutputEventTimestampResponse[];
    /**
     * Resource name
     */
    readonly name?: string;
    /**
     * Describes how data from an input is serialized or how data is serialized when written to an output. Required on PUT (CreateOrReplace) requests.
     */
    readonly serialization?: types.outputs.streamanalytics.v20211001preview.AvroSerializationResponse | types.outputs.streamanalytics.v20211001preview.CsvSerializationResponse | types.outputs.streamanalytics.v20211001preview.CustomClrSerializationResponse | types.outputs.streamanalytics.v20211001preview.DeltaSerializationResponse | types.outputs.streamanalytics.v20211001preview.JsonSerializationResponse | types.outputs.streamanalytics.v20211001preview.ParquetSerializationResponse;
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
    /**
     * Settings which determine whether to send watermarks to downstream.
     */
    readonly watermarkSettings?: types.outputs.streamanalytics.v20211001preview.OutputWatermarkPropertiesResponse;
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
