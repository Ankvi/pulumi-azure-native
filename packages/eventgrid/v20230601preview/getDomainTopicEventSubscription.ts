import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of a nested event subscription for a domain topic.
 */
export function getDomainTopicEventSubscription(args: GetDomainTopicEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicEventSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getDomainTopicEventSubscription", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetDomainTopicEventSubscriptionArgs {
    /**
     * Name of the top level domain.
     */
    domainName: string;
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the domain topic.
     */
    topicName: string;
}

/**
 * Event Subscription.
 */
export interface GetDomainTopicEventSubscriptionResult {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterDestination?: types.outputs.StorageBlobDeadLetterDestinationResponse;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterWithResourceIdentity?: types.outputs.DeadLetterWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deliveryWithResourceIdentity?: types.outputs.DeliveryWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly destination?: types.outputs.AzureFunctionEventSubscriptionDestinationResponse | types.outputs.EventHubEventSubscriptionDestinationResponse | types.outputs.HybridConnectionEventSubscriptionDestinationResponse | types.outputs.PartnerEventSubscriptionDestinationResponse | types.outputs.ServiceBusQueueEventSubscriptionDestinationResponse | types.outputs.ServiceBusTopicEventSubscriptionDestinationResponse | types.outputs.StorageQueueEventSubscriptionDestinationResponse | types.outputs.WebHookEventSubscriptionDestinationResponse;
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
    readonly filter?: types.outputs.EventSubscriptionFilterResponse;
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
    readonly retryPolicy?: types.outputs.RetryPolicyResponse;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
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
 * Get properties of a nested event subscription for a domain topic.
 */
export function getDomainTopicEventSubscriptionOutput(args: GetDomainTopicEventSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainTopicEventSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getDomainTopicEventSubscription(a, opts))
}

export interface GetDomainTopicEventSubscriptionOutputArgs {
    /**
     * Name of the top level domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the domain topic.
     */
    topicName: pulumi.Input<string>;
}
