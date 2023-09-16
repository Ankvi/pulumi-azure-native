import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription for domain.
 */
export function getDomainEventSubscriptionFullUrl(args: GetDomainEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainEventSubscriptionFullUrlResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid/v20230601preview:getDomainEventSubscriptionFullUrl", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetDomainEventSubscriptionFullUrlArgs {
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
 * Full endpoint url of an event subscription
 */
export interface GetDomainEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription for domain.
 */
export function getDomainEventSubscriptionFullUrlOutput(args: GetDomainEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDomainEventSubscriptionFullUrlResult> {
    return pulumi.output(args).apply((a: any) => getDomainEventSubscriptionFullUrl(a, opts))
}

export interface GetDomainEventSubscriptionFullUrlOutputArgs {
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
