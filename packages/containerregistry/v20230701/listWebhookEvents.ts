import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Lists recent events for the specified webhook.
 */
export function listWebhookEvents(args: ListWebhookEventsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebhookEventsResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230701:listWebhookEvents", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface ListWebhookEventsArgs {
    /**
     * The name of the container registry.
     */
    registryName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
    /**
     * The name of the webhook.
     */
    webhookName: string;
}

/**
 * The result of a request to list events for a webhook.
 */
export interface ListWebhookEventsResult {
    /**
     * The URI that can be used to request the next list of events.
     */
    readonly nextLink?: string;
    /**
     * The list of events. Since this list may be incomplete, the nextLink field should be used to request the next list of events.
     */
    readonly value?: types.outputs.EventResponse[];
}
/**
 * Lists recent events for the specified webhook.
 */
export function listWebhookEventsOutput(args: ListWebhookEventsOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<ListWebhookEventsResult> {
    return pulumi.output(args).apply((a: any) => listWebhookEvents(a, opts))
}

export interface ListWebhookEventsOutputArgs {
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the webhook.
     */
    webhookName: pulumi.Input<string>;
}