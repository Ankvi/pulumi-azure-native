import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the configuration of service URI and custom headers for the webhook.
 */
export function getWebhookCallbackConfig(args: GetWebhookCallbackConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookCallbackConfigResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry/v20230701:getWebhookCallbackConfig", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "webhookName": args.webhookName,
    }, opts);
}

export interface GetWebhookCallbackConfigArgs {
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
 * The configuration of service URI and custom headers for the webhook.
 */
export interface GetWebhookCallbackConfigResult {
    /**
     * Custom headers that will be added to the webhook notifications.
     */
    readonly customHeaders?: {[key: string]: string};
    /**
     * The service URI for the webhook to post notifications.
     */
    readonly serviceUri: string;
}
/**
 * Gets the configuration of service URI and custom headers for the webhook.
 */
export function getWebhookCallbackConfigOutput(args: GetWebhookCallbackConfigOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebhookCallbackConfigResult> {
    return pulumi.output(args).apply((a: any) => getWebhookCallbackConfig(a, opts))
}

export interface GetWebhookCallbackConfigOutputArgs {
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