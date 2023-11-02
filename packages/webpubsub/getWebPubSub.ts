import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Get the resource and its properties.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-06-01-preview, 2021-09-01-preview, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview.
 */
export function getWebPubSub(args: GetWebPubSubArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub:getWebPubSub", {
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
     * DisableLocalAuth
     * Enable or disable aad auth
     * When set as true, connection with AuthType=aad won't work.
     */
    readonly disableAadAuth?: boolean;
    /**
     * DisableLocalAuth
     * Enable or disable local auth with AccessKey
     * When set as true, connection with AccessKey=xxx won't work.
     */
    readonly disableLocalAuth?: boolean;
    /**
     * The publicly accessible IP of the resource.
     */
    readonly externalIP: string;
    /**
     * FQDN of the service instance.
     */
    readonly hostName: string;
    /**
     * Deprecated.
     */
    readonly hostNamePrefix: string;
    /**
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
    /**
     * A class represent managed identities used for request and response
     */
    readonly identity?: types.outputs.ManagedIdentityResponse;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    readonly liveTraceConfiguration?: types.outputs.LiveTraceConfigurationResponse;
    /**
     * The GEO location of the resource. e.g. West US | East US | North Central US | South Central US.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Network ACLs for the resource
     */
    readonly networkACLs?: types.outputs.WebPubSubNetworkACLsResponse;
    /**
     * Private endpoint connections to the resource.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
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
     * Resource log configuration of a Microsoft.SignalRService resource.
     */
    readonly resourceLogConfiguration?: types.outputs.ResourceLogConfigurationResponse;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    readonly serverPort: number;
    /**
     * The list of shared private link resources.
     */
    readonly sharedPrivateLinkResources: types.outputs.SharedPrivateLinkResourceResponse[];
    /**
     * The billing information of the resource.
     */
    readonly sku?: types.outputs.ResourceSkuResponse;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: {[key: string]: string};
    /**
     * TLS settings for the resource
     */
    readonly tls?: types.outputs.WebPubSubTlsSettingsResponse;
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
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-04-01-preview, 2021-06-01-preview, 2021-09-01-preview, 2023-03-01-preview, 2023-06-01-preview, 2023-08-01-preview.
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
