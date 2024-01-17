import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets details about the specified output.
 * Azure REST API version: 2020-03-01.
 *
 * Other available API versions: 2021-10-01-preview.
 */
export function getOutput(args: GetOutputArgs, opts?: pulumi.InvokeOptions): Promise<GetOutputResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics:getOutput", {
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
    readonly datasource?: types.outputs.AzureDataLakeStoreOutputDataSourceResponse | types.outputs.AzureFunctionOutputDataSourceResponse | types.outputs.AzureSqlDatabaseOutputDataSourceResponse | types.outputs.AzureSynapseOutputDataSourceResponse | types.outputs.AzureTableOutputDataSourceResponse | types.outputs.BlobOutputDataSourceResponse | types.outputs.DocumentDbOutputDataSourceResponse | types.outputs.EventHubOutputDataSourceResponse | types.outputs.EventHubV2OutputDataSourceResponse | types.outputs.GatewayMessageBusOutputDataSourceResponse | types.outputs.PowerBIOutputDataSourceResponse | types.outputs.ServiceBusQueueOutputDataSourceResponse | types.outputs.ServiceBusTopicOutputDataSourceResponse;
    /**
     * Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
     */
    readonly diagnostics: types.outputs.DiagnosticsResponse;
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
    readonly serialization?: types.outputs.AvroSerializationResponse | types.outputs.CsvSerializationResponse | types.outputs.JsonSerializationResponse | types.outputs.ParquetSerializationResponse;
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
 * Azure REST API version: 2020-03-01.
 *
 * Other available API versions: 2021-10-01-preview.
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