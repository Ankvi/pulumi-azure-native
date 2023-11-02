import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription of a partner topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview.
 */
export function getPartnerTopicEventSubscriptionDeliveryAttributes(args: GetPartnerTopicEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerTopicEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPartnerTopicEventSubscriptionDeliveryAttributes", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicEventSubscriptionDeliveryAttributesArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
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
 * Result of the Get delivery attributes operation.
 */
export interface GetPartnerTopicEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription of a partner topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview.
 */
export function getPartnerTopicEventSubscriptionDeliveryAttributesOutput(args: GetPartnerTopicEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPartnerTopicEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getPartnerTopicEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetPartnerTopicEventSubscriptionDeliveryAttributesOutputArgs {
    /**
     * Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
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
