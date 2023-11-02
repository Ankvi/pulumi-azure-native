import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a description for the specified topic.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2015-08-01, 2022-10-01-preview.
 */
export function getTopic(args: GetTopicArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getTopic", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The topic name.
     */
    topicName: string;
}

/**
 * Description of topic resource.
 */
export interface GetTopicResult {
    /**
     * Last time the message was sent, or a request was received, for this topic.
     */
    readonly accessedAt: string;
    /**
     * ISO 8601 timespan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle?: string;
    /**
     * Message count details
     */
    readonly countDetails: types.outputs.MessageCountDetailsResponse;
    /**
     * Exact time the message was created.
     */
    readonly createdAt: string;
    /**
     * ISO 8601 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: string;
    /**
     * ISO8601 timespan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow?: string;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: boolean;
    /**
     * Value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage.
     */
    readonly enableExpress?: boolean;
    /**
     * Value that indicates whether the topic to be partitioned across multiple message brokers is enabled.
     */
    readonly enablePartitioning?: boolean;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * Maximum size (in KB) of the message payload that can be accepted by the topic. This property is only used in Premium today and default is 1024.
     */
    readonly maxMessageSizeInKilobytes?: number;
    /**
     * Maximum size of the topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024.
     */
    readonly maxSizeInMegabytes?: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Value indicating if this topic requires duplicate detection.
     */
    readonly requiresDuplicateDetection?: boolean;
    /**
     * Size of the topic, in bytes.
     */
    readonly sizeInBytes: number;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status?: string;
    /**
     * Number of subscriptions.
     */
    readonly subscriptionCount: number;
    /**
     * Value that indicates whether the topic supports ordering.
     */
    readonly supportOrdering?: boolean;
    /**
     * The system meta data relating to this resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * The type of the resource. E.g. "Microsoft.EventHub/Namespaces" or "Microsoft.EventHub/Namespaces/EventHubs"
     */
    readonly type: string;
    /**
     * The exact time the message was updated.
     */
    readonly updatedAt: string;
}
/**
 * Returns a description for the specified topic.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2015-08-01, 2022-10-01-preview.
 */
export function getTopicOutput(args: GetTopicOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTopicResult> {
    return pulumi.output(args).apply((a: any) => getTopic(a, opts))
}

export interface GetTopicOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}
