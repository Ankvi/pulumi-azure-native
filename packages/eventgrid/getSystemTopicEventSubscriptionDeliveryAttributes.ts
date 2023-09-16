import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription.
 * Azure REST API version: 2022-06-15.
 */
export function getSystemTopicEventSubscriptionDeliveryAttributes(args: GetSystemTopicEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getSystemTopicEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionDeliveryAttributesArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: string;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: string;
    /**
     * Name of the system topic.
     */
    systemTopicName: string;
}

/**
 * Result of the Get delivery attributes operation.
 */
export interface GetSystemTopicEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.eventgrid.DynamicDeliveryAttributeMappingResponse | types.outputs.eventgrid.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription.
 * Azure REST API version: 2022-06-15.
 */
export function getSystemTopicEventSubscriptionDeliveryAttributesOutput(args: GetSystemTopicEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemTopicEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getSystemTopicEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetSystemTopicEventSubscriptionDeliveryAttributesOutputArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
     */
    eventSubscriptionName: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Name of the system topic.
     */
    systemTopicName: pulumi.Input<string>;
}
