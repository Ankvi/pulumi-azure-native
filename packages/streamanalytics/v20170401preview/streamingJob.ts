import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A streaming job object, containing all information associated with the named streaming job.
 */
export class StreamingJob extends pulumi.CustomResource {
    /**
     * Get an existing StreamingJob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): StreamingJob {
        return new StreamingJob(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:streamanalytics/v20170401preview:StreamingJob';

    /**
     * Returns true if the given object is an instance of StreamingJob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamingJob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamingJob.__pulumiType;
    }

    /**
     * The cluster which streaming jobs will run on.
     */
    public readonly cluster!: pulumi.Output<types.outputs.ClusterInfoResponse | undefined>;
    /**
     * Controls certain runtime behaviors of the streaming job.
     */
    public readonly compatibilityLevel!: pulumi.Output<string | undefined>;
    /**
     * Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
     */
    public readonly contentStoragePolicy!: pulumi.Output<string | undefined>;
    /**
     * Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
     */
    public readonly dataLocale!: pulumi.Output<string | undefined>;
    /**
     * The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
     */
    public readonly eventsLateArrivalMaxDelayInSeconds!: pulumi.Output<number | undefined>;
    /**
     * The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
     */
    public readonly eventsOutOfOrderMaxDelayInSeconds!: pulumi.Output<number | undefined>;
    /**
     * Indicates the policy to apply to events that arrive out of order in the input event stream.
     */
    public readonly eventsOutOfOrderPolicy!: pulumi.Output<string | undefined>;
    /**
     * The storage account where the custom code artifacts are located.
     */
    public readonly externals!: pulumi.Output<types.outputs.ExternalResponse | undefined>;
    /**
     * A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    public readonly functions!: pulumi.Output<types.outputs.FunctionResponse[] | undefined>;
    /**
     * Describes the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs.
     */
    public readonly identity!: pulumi.Output<types.outputs.IdentityResponse | undefined>;
    /**
     * A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
     */
    public readonly inputs!: pulumi.Output<types.outputs.InputResponse[] | undefined>;
    /**
     * A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job.
     */
    public /*out*/ readonly jobId!: pulumi.Output<string>;
    /**
     * Describes the state of the streaming job.
     */
    public /*out*/ readonly jobState!: pulumi.Output<string>;
    /**
     * The properties that are associated with an Azure Storage account with MSI
     */
    public readonly jobStorageAccount!: pulumi.Output<types.outputs.JobStorageAccountResponse | undefined>;
    /**
     * Describes the type of the job. Valid modes are `Cloud` and 'Edge'.
     */
    public readonly jobType!: pulumi.Output<string | undefined>;
    /**
     * Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set.
     */
    public /*out*/ readonly lastOutputEventTime!: pulumi.Output<string>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
     */
    public readonly outputErrorPolicy!: pulumi.Output<string | undefined>;
    /**
     * This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
     */
    public readonly outputStartMode!: pulumi.Output<string | undefined>;
    /**
     * Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
     */
    public readonly outputStartTime!: pulumi.Output<string | undefined>;
    /**
     * A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
     */
    public readonly outputs!: pulumi.Output<types.outputs.OutputResponse[] | undefined>;
    /**
     * Describes the provisioning status of the streaming job.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
     */
    public readonly sku!: pulumi.Output<types.outputs.StreamingJobSkuResponse | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    public readonly transformation!: pulumi.Output<types.outputs.TransformationResponse | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a StreamingJob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamingJobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["cluster"] = args ? args.cluster : undefined;
            resourceInputs["compatibilityLevel"] = args ? args.compatibilityLevel : undefined;
            resourceInputs["contentStoragePolicy"] = args ? args.contentStoragePolicy : undefined;
            resourceInputs["dataLocale"] = args ? args.dataLocale : undefined;
            resourceInputs["eventsLateArrivalMaxDelayInSeconds"] = args ? args.eventsLateArrivalMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderMaxDelayInSeconds"] = args ? args.eventsOutOfOrderMaxDelayInSeconds : undefined;
            resourceInputs["eventsOutOfOrderPolicy"] = args ? args.eventsOutOfOrderPolicy : undefined;
            resourceInputs["externals"] = args ? args.externals : undefined;
            resourceInputs["functions"] = args ? args.functions : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["inputs"] = args ? args.inputs : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["jobStorageAccount"] = args ? args.jobStorageAccount : undefined;
            resourceInputs["jobType"] = args ? args.jobType : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["outputErrorPolicy"] = args ? args.outputErrorPolicy : undefined;
            resourceInputs["outputStartMode"] = args ? args.outputStartMode : undefined;
            resourceInputs["outputStartTime"] = args ? args.outputStartTime : undefined;
            resourceInputs["outputs"] = args ? args.outputs : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transformation"] = args ? args.transformation : undefined;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["jobId"] = undefined /*out*/;
            resourceInputs["jobState"] = undefined /*out*/;
            resourceInputs["lastOutputEventTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cluster"] = undefined /*out*/;
            resourceInputs["compatibilityLevel"] = undefined /*out*/;
            resourceInputs["contentStoragePolicy"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["dataLocale"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["eventsLateArrivalMaxDelayInSeconds"] = undefined /*out*/;
            resourceInputs["eventsOutOfOrderMaxDelayInSeconds"] = undefined /*out*/;
            resourceInputs["eventsOutOfOrderPolicy"] = undefined /*out*/;
            resourceInputs["externals"] = undefined /*out*/;
            resourceInputs["functions"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["inputs"] = undefined /*out*/;
            resourceInputs["jobId"] = undefined /*out*/;
            resourceInputs["jobState"] = undefined /*out*/;
            resourceInputs["jobStorageAccount"] = undefined /*out*/;
            resourceInputs["jobType"] = undefined /*out*/;
            resourceInputs["lastOutputEventTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["outputErrorPolicy"] = undefined /*out*/;
            resourceInputs["outputStartMode"] = undefined /*out*/;
            resourceInputs["outputStartTime"] = undefined /*out*/;
            resourceInputs["outputs"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["transformation"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:streamanalytics:StreamingJob" }, { type: "azure-native:streamanalytics/v20160301:StreamingJob" }, { type: "azure-native:streamanalytics/v20200301:StreamingJob" }, { type: "azure-native:streamanalytics/v20211001preview:StreamingJob" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(StreamingJob.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a StreamingJob resource.
 */
export interface StreamingJobArgs {
    /**
     * The cluster which streaming jobs will run on.
     */
    cluster?: pulumi.Input<types.inputs.ClusterInfoArgs>;
    /**
     * Controls certain runtime behaviors of the streaming job.
     */
    compatibilityLevel?: pulumi.Input<string | types.enums.CompatibilityLevel>;
    /**
     * Valid values are JobStorageAccount and SystemAccount. If set to JobStorageAccount, this requires the user to also specify jobStorageAccount property. .
     */
    contentStoragePolicy?: pulumi.Input<string | types.enums.ContentStoragePolicy>;
    /**
     * The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
     */
    dataLocale?: pulumi.Input<string>;
    /**
     * The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
     */
    eventsLateArrivalMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
     */
    eventsOutOfOrderMaxDelayInSeconds?: pulumi.Input<number>;
    /**
     * Indicates the policy to apply to events that arrive out of order in the input event stream.
     */
    eventsOutOfOrderPolicy?: pulumi.Input<string | types.enums.EventsOutOfOrderPolicy>;
    /**
     * The storage account where the custom code artifacts are located.
     */
    externals?: pulumi.Input<types.inputs.ExternalArgs>;
    /**
     * A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    functions?: pulumi.Input<pulumi.Input<types.inputs.FunctionArgs>[]>;
    /**
     * Describes the system-assigned managed identity assigned to this job that can be used to authenticate with inputs and outputs.
     */
    identity?: pulumi.Input<types.inputs.IdentityArgs>;
    /**
     * A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
     */
    inputs?: pulumi.Input<pulumi.Input<types.inputs.InputArgs>[]>;
    /**
     * The name of the streaming job.
     */
    jobName?: pulumi.Input<string>;
    /**
     * The properties that are associated with an Azure Storage account with MSI
     */
    jobStorageAccount?: pulumi.Input<types.inputs.JobStorageAccountArgs>;
    /**
     * Describes the type of the job. Valid modes are `Cloud` and 'Edge'.
     */
    jobType?: pulumi.Input<string | types.enums.JobType>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
     */
    outputErrorPolicy?: pulumi.Input<string | types.enums.OutputErrorPolicy>;
    /**
     * This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
     */
    outputStartMode?: pulumi.Input<string | types.enums.OutputStartMode>;
    /**
     * Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
     */
    outputStartTime?: pulumi.Input<string>;
    /**
     * A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
     */
    outputs?: pulumi.Input<pulumi.Input<types.inputs.OutputArgs>[]>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Describes the SKU of the streaming job. Required on PUT (CreateOrReplace) requests.
     */
    sku?: pulumi.Input<types.inputs.StreamingJobSkuArgs>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Indicates the query and the number of streaming units to use for the streaming job. The name property of the transformation is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
     */
    transformation?: pulumi.Input<types.inputs.TransformationArgs>;
}
