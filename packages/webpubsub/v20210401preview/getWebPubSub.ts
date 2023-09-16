import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the resource and its properties.
 */
export function getWebPubSub(args: GetWebPubSubArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub/v20210401preview:getWebPubSub", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: string;
    /**
     * The name of the resource.
     */
    resourceName: string;
}

/**
 * A class represent a resource.
 */
export interface GetWebPubSubResult {
    /**
     * The settings for event handler in webpubsub service.
     */
    readonly eventHandler?: types.outputs.webpubsub.v20210401preview.EventHandlerSettingsResponse;
    /**
     * The publicly accessible IP of the resource.
     */
    readonly externalIP: string;
    /**
     * List of the featureFlags.
     * 
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set. 
     * When a featureFlag is not explicitly set, its globally default value will be used
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    readonly features?: types.outputs.webpubsub.v20210401preview.WebPubSubFeatureResponse[];
    /**
     * FQDN of the service instance.
     */
    readonly hostName: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * The managed identity response
     */
    readonly identity?: types.outputs.webpubsub.v20210401preview.ManagedIdentityResponse;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Network ACLs
     */
    readonly networkACLs?: types.outputs.webpubsub.v20210401preview.WebPubSubNetworkACLsResponse;
    /**
     * Private endpoint connections to the resource.
     */
    readonly privateEndpointConnections: types.outputs.webpubsub.v20210401preview.PrivateEndpointConnectionResponse[];
    /**
     * Provisioning state of the resource.
     */
    readonly provisioningState: string;
    /**
     * Enable or disable public network access. Default to "Enabled".
     * When it's Enabled, network ACLs still apply.
     * When it's Disabled, public network access is always disabled no matter what you set in network ACLs.
     */
    readonly publicNetworkAccess?: string;
    /**
     * The publicly accessible port of the resource which is designed for browser/client side usage.
     */
    readonly publicPort: number;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    readonly serverPort: number;
    /**
     * The list of shared private link resources.
     */
    readonly sharedPrivateLinkResources: types.outputs.webpubsub.v20210401preview.SharedPrivateLinkResourceResponse[];
    /**
     * The billing information of the resource.(e.g. Free, Standard)
     */
    readonly sku?: types.outputs.webpubsub.v20210401preview.ResourceSkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.webpubsub.v20210401preview.SystemDataResponse;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * TLS settings.
     */
    readonly tls?: types.outputs.webpubsub.v20210401preview.WebPubSubTlsSettingsResponse;
    /**
     * The type of the resource - e.g. "Microsoft.SignalRService/SignalR"
     */
    readonly type: string;
    /**
     * Version of the resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version: string;
}
/**
 * Get the resource and its properties.
 */
export function getWebPubSubOutput(args: GetWebPubSubOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWebPubSubResult> {
    return pulumi.output(args).apply((a: any) => getWebPubSub(a, opts))
}

export interface GetWebPubSubOutputArgs {
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
