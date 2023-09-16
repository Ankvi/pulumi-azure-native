import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the resource and its properties.
 */
export function getWebPubSub(args: GetWebPubSubArgs, opts?: pulumi.InvokeOptions): Promise<GetWebPubSubResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:webpubsub/v20230601preview:getWebPubSub", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetWebPubSubArgs {
    /**
     * The name of the resource group. The name is case insensitive.
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
     * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
     */
    readonly id: string;
    /**
     * A class represent managed identities used for request and response
     */
    readonly identity?: types.outputs.webpubsub.v20230601preview.ManagedIdentityResponse;
    /**
     * The kind of the service
     */
    readonly kind?: string;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    readonly liveTraceConfiguration?: types.outputs.webpubsub.v20230601preview.LiveTraceConfigurationResponse;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Network ACLs for the resource
     */
    readonly networkACLs?: types.outputs.webpubsub.v20230601preview.WebPubSubNetworkACLsResponse;
    /**
     * Private endpoint connections to the resource.
     */
    readonly privateEndpointConnections: types.outputs.webpubsub.v20230601preview.PrivateEndpointConnectionResponse[];
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
    readonly resourceLogConfiguration?: types.outputs.webpubsub.v20230601preview.ResourceLogConfigurationResponse;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    readonly serverPort: number;
    /**
     * The list of shared private link resources.
     */
    readonly sharedPrivateLinkResources: types.outputs.webpubsub.v20230601preview.SharedPrivateLinkResourceResponse[];
    /**
     * The billing information of the resource.
     */
    readonly sku?: types.outputs.webpubsub.v20230601preview.ResourceSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.webpubsub.v20230601preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * TLS settings for the resource
     */
    readonly tls?: types.outputs.webpubsub.v20230601preview.WebPubSubTlsSettingsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
