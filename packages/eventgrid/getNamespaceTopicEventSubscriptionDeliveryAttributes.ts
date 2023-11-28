import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription of a namespace topic.
 * Azure REST API version: 2023-12-15-preview.
 */
export function getNamespaceTopicEventSubscriptionDeliveryAttributes(args: GetNamespaceTopicEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceTopicEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getNamespaceTopicEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetNamespaceTopicEventSubscriptionDeliveryAttributesArgs {
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
 * Result of the Get delivery attributes operation.
 */
export interface GetNamespaceTopicEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription of a namespace topic.
 * Azure REST API version: 2023-12-15-preview.
 */
export function getNamespaceTopicEventSubscriptionDeliveryAttributesOutput(args: GetNamespaceTopicEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetNamespaceTopicEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getNamespaceTopicEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetNamespaceTopicEventSubscriptionDeliveryAttributesOutputArgs {
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
