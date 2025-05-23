import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of topic resource.
 *
 * Uses Azure REST API version 2024-01-01. In version 2.x of the Azure Native provider, it used API version 2022-01-01-preview.
 *
 * Other available API versions: 2018-01-01-preview, 2021-01-01-preview, 2021-06-01-preview, 2021-11-01, 2022-01-01-preview, 2022-10-01-preview, 2023-01-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicebus [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class Topic extends pulumi.CustomResource {
    /**
     * Get an existing Topic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Topic {
        return new Topic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicebus:Topic';

    /**
     * Returns true if the given object is an instance of Topic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Topic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Topic.__pulumiType;
    }

    /**
     * Last time the message was sent, or a request was received, for this topic.
     */
    public /*out*/ readonly accessedAt!: pulumi.Output<string>;
    /**
     * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    public readonly autoDeleteOnIdle!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Message count details
     */
    public /*out*/ readonly countDetails!: pulumi.Output<types.outputs.MessageCountDetailsResponse>;
    /**
     * Exact time the message was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    public readonly defaultMessageTimeToLive!: pulumi.Output<string | undefined>;
    /**
     * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    public readonly duplicateDetectionHistoryTimeWindow!: pulumi.Output<string | undefined>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    public readonly enableBatchedOperations!: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
     */
    public readonly enableExpress!: pulumi.Output<boolean | undefined>;
    /**
     * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
     */
    public readonly enablePartitioning!: pulumi.Output<boolean | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public /*out*/ readonly location!: pulumi.Output<string>;
    /**
     * Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024.
     */
    public readonly maxMessageSizeInKilobytes!: pulumi.Output<number | undefined>;
    /**
     * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
     */
    public readonly maxSizeInMegabytes!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Value indicating if this topic requires duplicate detection.
     */
    public readonly requiresDuplicateDetection!: pulumi.Output<boolean | undefined>;
    /**
     * Size of the topic, in bytes.
     */
    public /*out*/ readonly sizeInBytes!: pulumi.Output<number>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * Number of subscriptions.
     */
    public /*out*/ readonly subscriptionCount!: pulumi.Output<number>;
    /**
     * Value that indicates whether the topic supports ordering.
     */
    public readonly supportOrdering!: pulumi.Output<boolean | undefined>;
    /**
     * The system meta data relating to this resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The exact time the message was updated.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a Topic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.namespaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespaceName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["autoDeleteOnIdle"] = args ? args.autoDeleteOnIdle : undefined;
            resourceInputs["defaultMessageTimeToLive"] = args ? args.defaultMessageTimeToLive : undefined;
            resourceInputs["duplicateDetectionHistoryTimeWindow"] = args ? args.duplicateDetectionHistoryTimeWindow : undefined;
            resourceInputs["enableBatchedOperations"] = args ? args.enableBatchedOperations : undefined;
            resourceInputs["enableExpress"] = args ? args.enableExpress : undefined;
            resourceInputs["enablePartitioning"] = args ? args.enablePartitioning : undefined;
            resourceInputs["maxMessageSizeInKilobytes"] = args ? args.maxMessageSizeInKilobytes : undefined;
            resourceInputs["maxSizeInMegabytes"] = args ? args.maxSizeInMegabytes : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["requiresDuplicateDetection"] = args ? args.requiresDuplicateDetection : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["supportOrdering"] = args ? args.supportOrdering : undefined;
            resourceInputs["topicName"] = args ? args.topicName : undefined;
            resourceInputs["accessedAt"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["countDetails"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["subscriptionCount"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        } else {
            resourceInputs["accessedAt"] = undefined /*out*/;
            resourceInputs["autoDeleteOnIdle"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["countDetails"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["defaultMessageTimeToLive"] = undefined /*out*/;
            resourceInputs["duplicateDetectionHistoryTimeWindow"] = undefined /*out*/;
            resourceInputs["enableBatchedOperations"] = undefined /*out*/;
            resourceInputs["enableExpress"] = undefined /*out*/;
            resourceInputs["enablePartitioning"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["maxMessageSizeInKilobytes"] = undefined /*out*/;
            resourceInputs["maxSizeInMegabytes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["requiresDuplicateDetection"] = undefined /*out*/;
            resourceInputs["sizeInBytes"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionCount"] = undefined /*out*/;
            resourceInputs["supportOrdering"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicebus/v20140901:Topic" }, { type: "azure-native:servicebus/v20150801:Topic" }, { type: "azure-native:servicebus/v20170401:Topic" }, { type: "azure-native:servicebus/v20180101preview:Topic" }, { type: "azure-native:servicebus/v20210101preview:Topic" }, { type: "azure-native:servicebus/v20210601preview:Topic" }, { type: "azure-native:servicebus/v20211101:Topic" }, { type: "azure-native:servicebus/v20220101preview:Topic" }, { type: "azure-native:servicebus/v20221001preview:Topic" }, { type: "azure-native:servicebus/v20230101preview:Topic" }, { type: "azure-native:servicebus/v20240101:Topic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Topic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Topic resource.
 */
export interface TopicArgs {
    /**
     * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    autoDeleteOnIdle?: pulumi.Input<string>;
    /**
     * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    defaultMessageTimeToLive?: pulumi.Input<string>;
    /**
     * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    duplicateDetectionHistoryTimeWindow?: pulumi.Input<string>;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    enableBatchedOperations?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
     */
    enableExpress?: pulumi.Input<boolean>;
    /**
     * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
     */
    enablePartitioning?: pulumi.Input<boolean>;
    /**
     * Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024.
     */
    maxMessageSizeInKilobytes?: pulumi.Input<number>;
    /**
     * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
     */
    maxSizeInMegabytes?: pulumi.Input<number>;
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Value indicating if this topic requires duplicate detection.
     */
    requiresDuplicateDetection?: pulumi.Input<boolean>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    status?: pulumi.Input<types.enums.EntityStatus>;
    /**
     * Value that indicates whether the topic supports ordering.
     */
    supportOrdering?: pulumi.Input<boolean>;
    /**
     * The topic name.
     */
    topicName?: pulumi.Input<string>;
}