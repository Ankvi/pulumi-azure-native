import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get properties of an event subscription of a namespace topic.
 */
export function getNamespaceTopicEventSubscription(args: GetNamespaceTopicEventSubscriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceTopicEventSubscriptionResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getNamespaceTopicEventSubscription", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetNamespaceTopicEventSubscriptionArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: string;
    /**
     * Name of the namespace.
     */
    namespaceName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the namespace topic.
     */
    topicName: string;
}

/**
 * Event Subscription.
 */
export interface GetNamespaceTopicEventSubscriptionResult {
    /**
     * Information about the delivery configuration of the event subscription.
     */
    readonly deliveryConfiguration?: types.outputs.DeliveryConfigurationResponse;
    /**
     * The event delivery schema for the event subscription.
     */
    readonly eventDeliverySchema?: string;
    /**
     * Information about the filter for the event subscription.
     */
    readonly filtersConfiguration?: types.outputs.FiltersConfigurationResponse;
    /**
     * Fully qualified identifier of the resource.
     */
    readonly id: string;
    /**
     * Name of the resource.
     */
    readonly name: string;
    /**
     * Provisioning state of the event subscription.
     */
    readonly provisioningState: string;
    /**
     * The system metadata relating to Event Subscription resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Type of the resource.
     */
    readonly type: string;
}
/**
 * Get properties of an event subscription of a namespace topic.
 */
export function getNamespaceTopicEventSubscriptionOutput(args: GetNamespaceTopicEventSubscriptionOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceTopicEventSubscriptionResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceTopicEventSubscription(a, opts))
}

export interface GetNamespaceTopicEventSubscriptionOutputArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * Name of the namespace.
     */
    namespaceName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the namespace topic.
     */
    topicName: pulumi.Input<string>;
}
