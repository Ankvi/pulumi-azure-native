import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview.
 */
export function getEventSubscriptionDeliveryAttributes(args: GetEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "scope": args.scope,
    }, opts);
}

export interface GetEventSubscriptionDeliveryAttributesArgs {
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
 * Result of the Get delivery attributes operation.
 */
export interface GetEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview.
 */
export function getEventSubscriptionDeliveryAttributesOutput(args: GetEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetEventSubscriptionDeliveryAttributesOutputArgs {
    /**
     * Name of the event subscription.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
     */
    scope: pulumi.Input<string>;
}