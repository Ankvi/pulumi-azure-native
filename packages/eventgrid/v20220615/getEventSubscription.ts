import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get properties of an event subscription.
 */
export function getEventSubscription(args: GetEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetEventSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20220615:getEventSubscription", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "scope": args.scope,
    }, opts);
}

export interface GetEventSubscriptionArgs {
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: string;
    /**
     * The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
     */
    scope: string;
}

/**
 * Event Subscription
 */
export interface GetEventSubscriptionResult {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterDestination?: types.outputs.eventgrid.v20220615.StorageBlobDeadLetterDestinationResponse;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterWithResourceIdentity?: types.outputs.eventgrid.v20220615.DeadLetterWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deliveryWithResourceIdentity?: types.outputs.eventgrid.v20220615.DeliveryWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly destination?: types.outputs.eventgrid.v20220615.AzureFunctionEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.EventHubEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.HybridConnectionEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.ServiceBusQueueEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.ServiceBusTopicEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.StorageQueueEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20220615.WebHookEventSubscriptionDestinationResponse;
    /**
     * The event delivery schema for the event subscription.
     */
    readonly eventDeliverySchema?: string;
    /**
     * Expiration time of the event subscription.
     */
    readonly expirationTimeUtc?: string;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filter?: types.outputs.eventgrid.v20220615.EventSubscriptionFilterResponse;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * List of user defined labels.
     */
    readonly labels?: string[];
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the event subscription.
     */
    readonly provisioningState: string;
    /**
     * The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
     */
    readonly retryPolicy?: types.outputs.eventgrid.v20220615.RetryPolicyResponse;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    readonly systemData: types.outputs.eventgrid.v20220615.SystemDataResponse;
    /**
     * Name of the topic of the event subscription.
     */
    readonly topic: string;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of an event subscription.
 */
export function getEventSubscriptionOutput(args: GetEventSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getEventSubscription(a, opts))
}

export interface GetEventSubscriptionOutputArgs {
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
     */
    scope: pulumi.Input<string>;
}
