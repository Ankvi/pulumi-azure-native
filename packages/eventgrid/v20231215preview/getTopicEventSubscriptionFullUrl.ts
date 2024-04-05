import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription for topic.
 */
export function getTopicEventSubscriptionFullUrl(args: GetTopicEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicEventSubscriptionFullUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:getTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetTopicEventSubscriptionFullUrlArgs {
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
 * Full endpoint url of an event subscription
 */
export interface GetTopicEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription for topic.
 */
export function getTopicEventSubscriptionFullUrlOutput(args: GetTopicEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetTopicEventSubscriptionFullUrlResult> {
    return pulumi.output(args).apply((a: any) => getTopicEventSubscriptionFullUrl(a, opts))
}

export interface GetTopicEventSubscriptionFullUrlOutputArgs {
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