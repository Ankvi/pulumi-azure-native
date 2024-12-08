import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription of a namespace topic.
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-12-15-preview.
 */
export function getNamespaceTopicEventSubscriptionFullUrl(args: GetNamespaceTopicEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetNamespaceTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getNamespaceTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetNamespaceTopicEventSubscriptionFullUrlArgs {
    /**
     * Name of the event subscription.
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
 * Full endpoint URL of an event subscription
 */
export interface GetNamespaceTopicEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription of a namespace topic.
 * Azure REST API version: 2024-06-01-preview.
 *
 * Other available API versions: 2024-12-15-preview.
 */
export function getNamespaceTopicEventSubscriptionFullUrlOutput(args: GetNamespaceTopicEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamespaceTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getNamespaceTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "namespaceName": args.namespaceName,
        "resourceGroupName": args.resourceGroupName,
        "topicName": args.topicName,
    }, opts);
}

export interface GetNamespaceTopicEventSubscriptionFullUrlOutputArgs {
    /**
     * Name of the event subscription.
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