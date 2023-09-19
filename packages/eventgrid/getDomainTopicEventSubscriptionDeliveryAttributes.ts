import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription for domain topic.
 * Azure REST API version: 2022-06-15.
 */
export function getDomainTopicEventSubscriptionDeliveryAttributes(args: GetDomainTopicEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getDomainTopicEventSubscriptionDeliveryAttributes", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetDomainTopicEventSubscriptionDeliveryAttributesArgs {
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
 * Result of the Get delivery attributes operation.
 */
export interface GetDomainTopicEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription for domain topic.
 * Azure REST API version: 2022-06-15.
 */
export function getDomainTopicEventSubscriptionDeliveryAttributesOutput(args: GetDomainTopicEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainTopicEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getDomainTopicEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetDomainTopicEventSubscriptionDeliveryAttributesOutputArgs {
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
