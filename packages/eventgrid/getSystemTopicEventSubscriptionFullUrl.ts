import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription of a system topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getSystemTopicEventSubscriptionFullUrl(args: GetSystemTopicEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getSystemTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionFullUrlArgs {
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
 * Full endpoint url of an event subscription
 */
export interface GetSystemTopicEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription of a system topic.
 * Azure REST API version: 2022-06-15.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export function getSystemTopicEventSubscriptionFullUrlOutput(args: GetSystemTopicEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSystemTopicEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getSystemTopicEventSubscriptionFullUrl", {
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
        "systemTopicName": args.systemTopicName,
    }, opts);
}

export interface GetSystemTopicEventSubscriptionFullUrlOutputArgs {
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