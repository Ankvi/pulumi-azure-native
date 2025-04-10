import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription of a partner topic.
 *
 * Uses Azure REST API version 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getPartnerTopicEventSubscriptionFullUrl(args: GetPartnerTopicEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetPartnerTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getPartnerTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicEventSubscriptionFullUrlArgs {
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
 * Full endpoint url of an event subscription
 */
export interface GetPartnerTopicEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription of a partner topic.
 *
 * Uses Azure REST API version 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview, 2025-02-15.
 */
export function getPartnerTopicEventSubscriptionFullUrlOutput(args: GetPartnerTopicEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPartnerTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getPartnerTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "partnerTopicName": args.partnerTopicName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPartnerTopicEventSubscriptionFullUrlOutputArgs {
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