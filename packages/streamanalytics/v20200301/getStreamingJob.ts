import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets details about the specified streaming job.
 */
export function getStreamingJob(args: GetStreamingJobArgs, opts?: pulumi.InvokeOptions): Promise<GetStreamingJobResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:streamanalytics/v20200301:getStreamingJob", {
        "expand": args.expand,
        "jobName": args.jobName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetStreamingJobArgs {
    /**
     * The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
     */
    expand?: string;
    /**
     * The name of the streaming job.
     */
    jobName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * A streaming job object, containing all information associated with the named streaming job.
 */
export interface GetStreamingJobResult {
    /**
     * The cluster which streaming jobs will run on.
     */
    readonly cluster?: types.outputs.streamanalytics.v20200301.ClusterInfoResponse;
    /**
     * Controls certain runtime behaviors of the streaming job.
     */
    readonly compatibilityLevel?: string;
    /**
     * Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
     */
    readonly contentStoragePolicy?: string;
    /**
     * Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created.
     */
    readonly createdDate: string;
    /**
     * The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
     */
    readonly dataLocale?: string;
    /**
     * The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    readonly etag: string;
    /**
     * The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
     */
    readonly eventsLateArrivalMaxDelayInSeconds?: number;
    /**
     * The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
     */
    readonly eventsOutOfOrderMaxDelayInSeconds?: number;
    /**
     * Indicates the policy to apply to events that arrive out of order in the input event stream.
     */
    readonly eventsOutOfOrderPolicy?: string;
    /**
     * A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    readonly functions?: types.outputs.streamanalytics.v20200301.FunctionResponse[];
    /**
     * Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Describes the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs.
     */
    readonly identity?: types.outputs.streamanalytics.v20200301.IdentityResponse;
    /**
     * A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
     */
    readonly inputs?: types.outputs.streamanalytics.v20200301.InputResponse[];
    /**
     * A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job.
     */
    readonly jobId: string;
    /**
     * Describes the state of the streaming job.
     */
    readonly jobState: string;
    /**
     * The properties that are associated with an Azure Storage account with MSI
     */
    readonly jobStorageAccount?: types.outputs.streamanalytics.v20200301.JobStorageAccountResponse;
    /**
     * Describes the type of the job. Valid modes are `Cloud` and 'Edge'.
     */
    readonly jobType?: string;
    /**
     * Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set.
     */
    readonly lastOutputEventTime: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
     */
    readonly outputErrorPolicy?: string;
    /**
     * This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
     */
    readonly outputStartMode?: string;
    /**
     * Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
     */
    readonly outputStartTime?: string;
    /**
     * A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
     */
    readonly outputs?: types.outputs.streamanalytics.v20200301.OutputResponse[];
    /**
     * Describes the provisioning status of the streaming job.
     */
    readonly provisioningState: string;
    /**
     * Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
     */
    readonly sku?: types.outputs.streamanalytics.v20200301.SkuResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    readonly transformation?: types.outputs.streamanalytics.v20200301.TransformationResponse;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
/**
 * Gets details about the specified streaming job.
 */
export function getStreamingJobOutput(args: GetStreamingJobOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetStreamingJobResult> {
    return pulumi.output(args).apply((a: any) => getStreamingJob(a, opts))
}

export interface GetStreamingJobOutputArgs {
    /**
     * The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the streaming job.
     */
    jobName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
