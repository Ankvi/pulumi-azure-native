import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Gets the properties of the specified webhook.
 */
export function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230601preview:getWebhook", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface GetWebhookArgs {
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
 * An object that represents a webhook for a container registry.
 */
export interface GetWebhookResult {
    /**
     * The list of actions that trigger the webhook to post notifications.
     */
    readonly actions: string[];
    /**
     * The resource ID.
     */
    readonly id: string;
    /**
     * The location of the resource. This cannot be changed after the resource is created.
     */
    readonly location: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The provisioning state of the webhook at the time the operation was called.
     */
    readonly provisioningState: string;
    /**
     * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
     */
    readonly scope?: string;
    /**
     * The status of the webhook at the time the operation was called.
     */
    readonly status?: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.containerregistry.v20230601preview.SystemDataResponse;
    /**
     * The tags of the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource.
     */
    readonly type: string;
}
/**
 * Gets the properties of the specified webhook.
 */
export function getWebhookOutput(args: GetWebhookOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhookResult> {
    return pulumi.output(args).apply((a: any) => getWebhook(a, opts))
}

export interface GetWebhookOutputArgs {
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
