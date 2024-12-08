import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Returns a subscription description for the specified topic.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getSubscription(args: GetSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:servicebus:getSubscription", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionName": args.subscriptionName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetSubscriptionArgs {
    /**
     * The namespace name
     */
    namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
    /**
     * The subscription name.
     */
    subscriptionName: string;
    /**
     * The topic name.
     */
    topicName: string;
}

/**
 * Description of subscription resource.
 */
export interface GetSubscriptionResult {
    /**
     * Last time there was a receive request to this subscription.
     */
    readonly accessedAt: string;
    /**
     * ISO 8061 timeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
     */
    readonly autoDeleteOnIdle?: string;
    /**
     * Properties specific to client affine subscriptions.
     */
    readonly clientAffineProperties?: types.outputs.SBClientAffinePropertiesResponse;
    /**
     * Message count details
     */
    readonly countDetails: types.outputs.MessageCountDetailsResponse;
    /**
     * Exact time the message was created.
     */
    readonly createdAt: string;
    /**
     * Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
     */
    readonly deadLetteringOnFilterEvaluationExceptions?: boolean;
    /**
     * Value that indicates whether a subscription has dead letter support when a message expires.
     */
    readonly deadLetteringOnMessageExpiration?: boolean;
    /**
     * ISO 8061 Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
     */
    readonly defaultMessageTimeToLive?: string;
    /**
     * ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes.
     */
    readonly duplicateDetectionHistoryTimeWindow?: string;
    /**
     * Value that indicates whether server-side batched operations are enabled.
     */
    readonly enableBatchedOperations?: boolean;
    /**
     * Queue/Topic name to forward the Dead Letter message
     */
    readonly forwardDeadLetteredMessagesTo?: string;
    /**
     * Queue/Topic name to forward the messages
     */
    readonly forwardTo?: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * Value that indicates whether the subscription has an affinity to the client id.
     */
    readonly isClientAffine?: boolean;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * ISO 8061 lock duration timespan for the subscription. The default value is 1 minute.
     */
    readonly lockDuration?: string;
    /**
     * Number of maximum deliveries.
     */
    readonly maxDeliveryCount?: number;
    /**
     * Number of messages.
     */
    readonly messageCount: number;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Value indicating if a subscription supports the concept of sessions.
     */
    readonly requiresSession?: boolean;
    /**
     * Enumerates the possible values for the status of a messaging entity.
     */
    readonly status?: string;
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
 * Returns a subscription description for the specified topic.
 * Azure REST API version: 2022-01-01-preview.
 *
 * Other available API versions: 2022-10-01-preview, 2023-01-01-preview, 2024-01-01.
 */
export function getSubscriptionOutput(args: GetSubscriptionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSubscriptionResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:servicebus:getSubscription", {
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "subscriptionName": args.subscriptionName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetSubscriptionOutputArgs {
    /**
     * The namespace name
     */
    namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The subscription name.
     */
    subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    topicName: pulumi.Input<string>;
}