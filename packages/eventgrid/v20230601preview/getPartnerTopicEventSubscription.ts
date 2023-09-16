import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get properties of an event subscription of a partner topic.
 */
export function getPartnerTopicEventSubscription(args: GetPartnerTopicEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerTopicEventSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getPartnerTopicEventSubscription", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicEventSubscriptionArgs {
    /**
     * Name of the event subscription to be found. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: string;
    /**
     * Name of the partner topic.
     */
    partnerTopicName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
}

/**
 * Event Subscription.
 */
export interface GetPartnerTopicEventSubscriptionResult {
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterDestination?: types.outputs.eventgrid.v20230601preview.StorageBlobDeadLetterDestinationResponse;
    /**
     * The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deadLetterWithResourceIdentity?: types.outputs.eventgrid.v20230601preview.DeadLetterWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly deliveryWithResourceIdentity?: types.outputs.eventgrid.v20230601preview.DeliveryWithResourceIdentityResponse;
    /**
     * Information about the destination where events have to be delivered for the event subscription.
     * Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
     */
    readonly destination?: types.outputs.eventgrid.v20230601preview.AzureFunctionEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.EventHubEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.HybridConnectionEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.PartnerEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.ServiceBusQueueEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.ServiceBusTopicEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.StorageQueueEventSubscriptionDestinationResponse | types.outputs.eventgrid.v20230601preview.WebHookEventSubscriptionDestinationResponse;
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
    readonly filter?: types.outputs.eventgrid.v20230601preview.EventSubscriptionFilterResponse;
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
    readonly retryPolicy?: types.outputs.eventgrid.v20230601preview.RetryPolicyResponse;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    readonly systemData: types.outputs.eventgrid.v20230601preview.SystemDataResponse;
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
 * Get properties of an event subscription of a partner topic.
 */
export function getPartnerTopicEventSubscriptionOutput(args: GetPartnerTopicEventSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPartnerTopicEventSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getPartnerTopicEventSubscription(a, opts))
}

export interface GetPartnerTopicEventSubscriptionOutputArgs {
    /**
     * Name of the event subscription to be found. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * Name of the partner topic.
     */
    partnerTopicName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}
