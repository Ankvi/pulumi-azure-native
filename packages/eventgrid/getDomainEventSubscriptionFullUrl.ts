import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Get the full endpoint URL for an event subscription for domain.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomainEventSubscriptionFullUrl(args: GetDomainEventSubscriptionFullUrlArgs, opts?: pulumi.InvokeOptions): Promise<GetDomainEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:eventgrid:getDomainEventSubscriptionFullUrl", {
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
 * Full endpoint URL of an event subscription
 */
export interface GetDomainEventSubscriptionFullUrlResult {
    /**
     * The URL that represents the endpoint of the destination of an event subscription.
     */
    readonly endpointUrl?: string;
}
/**
 * Get the full endpoint URL for an event subscription for domain.
 *
 * Uses Azure REST API version 2025-02-15.
 *
 * Other available API versions: 2022-06-15, 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native eventgrid [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getDomainEventSubscriptionFullUrlOutput(args: GetDomainEventSubscriptionFullUrlOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDomainEventSubscriptionFullUrlResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:eventgrid:getDomainEventSubscriptionFullUrl", {
        "domainName": args.domainName,
        "eventSubscriptionName": args.eventSubscriptionName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
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