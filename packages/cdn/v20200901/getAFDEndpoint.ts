import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 */
export function getAFDEndpoint(args: GetAFDEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetAFDEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:cdn/v20200901:getAFDEndpoint", {
        "endpointName": args.endpointName,
        "profileName": args.profileName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetAFDEndpointArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: string;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: string;
}

/**
 * CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The AzureFrontDoor endpoint uses the URL format <endpointname>.azureedge.net.
 */
export interface GetAFDEndpointResult {
    readonly deploymentStatus: string;
    /**
     * Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
     */
    readonly enabledState?: string;
    /**
     * The host name of the endpoint structured as {endpointName}.{DNSZone}, e.g. contoso.azureedge.net
     */
    readonly hostName: string;
    /**
     * Resource ID.
     */
    readonly id: string;
    /**
     * Resource location.
     */
    readonly location: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Send and receive timeout on forwarding request to the origin. When timeout is reached, the request fails and returns.
     */
    readonly originResponseTimeoutSeconds?: number;
    /**
     * Provisioning status
     */
    readonly provisioningState: string;
    /**
     * Read only system data
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
}
/**
 * Gets an existing AzureFrontDoor endpoint with the specified endpoint name under the specified subscription, resource group and profile.
 */
export function getAFDEndpointOutput(args: GetAFDEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetAFDEndpointResult> {
    return pulumi.output(args).apply((a: any) => getAFDEndpoint(a, opts))
}

export interface GetAFDEndpointOutputArgs {
    /**
     * Name of the endpoint under the profile which is unique globally.
     */
    endpointName: pulumi.Input<string>;
    /**
     * Name of the CDN profile which is unique within the resource group.
     */
    profileName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}