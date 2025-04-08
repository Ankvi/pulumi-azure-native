import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Gets the configuration of service URI and custom headers for the webhook.
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2019-12-01-preview, 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-09-01, 2021-12-01-preview, 2022-02-01-preview, 2022-12-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebhookCallbackConfig(args: GetWebhookCallbackConfigArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookCallbackConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:containerregistry:getWebhookCallbackConfig", {
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
 *
 * Uses Azure REST API version 2024-11-01-preview.
 *
 * Other available API versions: 2019-12-01-preview, 2020-11-01-preview, 2021-06-01-preview, 2021-08-01-preview, 2021-09-01, 2021-12-01-preview, 2022-02-01-preview, 2022-12-01, 2023-01-01-preview, 2023-06-01-preview, 2023-07-01, 2023-08-01-preview, 2023-11-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native containerregistry [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export function getWebhookCallbackConfigOutput(args: GetWebhookCallbackConfigOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebhookCallbackConfigResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:containerregistry:getWebhookCallbackConfig", {
        "registryName": args.registryName,
        "resourceGroupName": args.resourceGroupName,
        "webhookName": args.webhookName,
    }, opts);
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