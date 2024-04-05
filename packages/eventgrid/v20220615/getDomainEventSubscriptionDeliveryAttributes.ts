import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get all delivery attributes for an event subscription for domain.
 */
export function getDomainEventSubscriptionDeliveryAttributes(args: GetDomainEventSubscriptionDeliveryAttributesArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainEventSubscriptionDeliveryAttributesResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20220615:getDomainEventSubscriptionDeliveryAttributes", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainEventSubscriptionDeliveryAttributesArgs {
    /**
     * Name of the domain topic.
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
}

/**
 * Result of the Get delivery attributes operation.
 */
export interface GetDomainEventSubscriptionDeliveryAttributesResult {
    /**
     * A collection of DeliveryAttributeMapping
     */
    readonly value?: (types.outputs.DynamicDeliveryAttributeMappingResponse | types.outputs.StaticDeliveryAttributeMappingResponse)[];
}
/**
 * Get all delivery attributes for an event subscription for domain.
 */
export function getDomainEventSubscriptionDeliveryAttributesOutput(args: GetDomainEventSubscriptionDeliveryAttributesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainEventSubscriptionDeliveryAttributesResult> {
    return pulumi.output(args).apply((a: any) => getDomainEventSubscriptionDeliveryAttributes(a, opts))
}

export interface GetDomainEventSubscriptionDeliveryAttributesOutputArgs {
    /**
     * Name of the domain topic.
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
}