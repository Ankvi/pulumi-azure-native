import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for a nested event subscription for domain topic.
 */
export function getDomainTopicEventSubscriptionFullUrl(args: GetDomainTopicEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainTopicEventSubscriptionFullUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20231215preview:getDomainTopicEventSubscriptionFullUrl", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetDomainTopicEventSubscriptionFullUrlArgs {
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
 * Full endpoint url of an event subscription
 */
export interface GetDomainTopicEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for a nested event subscription for domain topic.
 */
export function getDomainTopicEventSubscriptionFullUrlOutput(args: GetDomainTopicEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainTopicEventSubscriptionFullUrlResult> {
    return pulumi.output(args).apply((a: any) => getDomainTopicEventSubscriptionFullUrl(a, opts))
}

export interface GetDomainTopicEventSubscriptionFullUrlOutputArgs {
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