import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Get the resource and its properties.
 */
export function getSignalR(args: GetSignalRArgs, opts?: pulumi.InvokeOptions): Promise<GetSignalRResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:signalrservice/v20230601preview:getSignalR", {
        "resourceGroupName": args.resourceGroupName,
        "resourceName": args.resourceName,
    }, opts);
}

export interface GetSignalRArgs {
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
export interface GetSignalRResult {
    /**
     * Cross-Origin Resource Sharing (CORS) settings.
     */
    readonly cors?: types.outputs.signalrservice.v20230601preview.SignalRCorsSettingsResponse;
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
     * List of the featureFlags.
     * 
     * FeatureFlags that are not included in the parameters for the update operation will not be modified.
     * And the response will only include featureFlags that are explicitly set. 
     * When a featureFlag is not explicitly set, its globally default value will be used
     * But keep in mind, the default value doesn't mean "false". It varies in terms of different FeatureFlags.
     */
    readonly features?: types.outputs.signalrservice.v20230601preview.SignalRFeatureResponse[];
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
    readonly identity?: types.outputs.signalrservice.v20230601preview.ManagedIdentityResponse;
    /**
     * The kind of the service
     */
    readonly kind?: string;
    /**
     * Live trace configuration of a Microsoft.SignalRService resource.
     */
    readonly liveTraceConfiguration?: types.outputs.signalrservice.v20230601preview.LiveTraceConfigurationResponse;
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
    readonly networkACLs?: types.outputs.signalrservice.v20230601preview.SignalRNetworkACLsResponse;
    /**
     * Private endpoint connections to the resource.
     */
    readonly privateEndpointConnections: types.outputs.signalrservice.v20230601preview.PrivateEndpointConnectionResponse[];
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
    readonly resourceLogConfiguration?: types.outputs.signalrservice.v20230601preview.ResourceLogConfigurationResponse;
    /**
     * The publicly accessible port of the resource which is designed for customer server side usage.
     */
    readonly serverPort: number;
    /**
     * Serverless settings.
     */
    readonly serverless?: types.outputs.signalrservice.v20230601preview.ServerlessSettingsResponse;
    /**
     * The list of shared private link resources.
     */
    readonly sharedPrivateLinkResources: types.outputs.signalrservice.v20230601preview.SharedPrivateLinkResourceResponse[];
    /**
     * The billing information of the resource.
     */
    readonly sku?: types.outputs.signalrservice.v20230601preview.ResourceSkuResponse;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    readonly systemData: types.outputs.signalrservice.v20230601preview.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * TLS settings for the resource
     */
    readonly tls?: types.outputs.signalrservice.v20230601preview.SignalRTlsSettingsResponse;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
    /**
     * The settings for the Upstream when the service is in server-less mode.
     */
    readonly upstream?: types.outputs.signalrservice.v20230601preview.ServerlessUpstreamSettingsResponse;
    /**
     * Version of the resource. Probably you need the same or higher version of client SDKs.
     */
    readonly version: string;
}
/**
 * Get the resource and its properties.
 */
export function getSignalROutput(args: GetSignalROutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSignalRResult> {
    return pulumi.output(args).apply((a: any) => getSignalR(a, opts))
}

export interface GetSignalROutputArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    resourceName: pulumi.Input<string>;
}
