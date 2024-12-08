import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets properties of an inbound endpoint for a DNS resolver.
 * Azure REST API version: 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-07-01-preview.
 */
export function getInboundEndpoint(args: GetInboundEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetInboundEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getInboundEndpoint", {
        "dnsResolverName": args.dnsResolverName,
        "inboundEndpointName": args.inboundEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInboundEndpointArgs {
    /**
     * The name of the DNS resolver.
     */
    dnsResolverName: string;
    /**
     * The name of the inbound endpoint for the DNS resolver.
     */
    inboundEndpointName: string;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: string;
}

/**
 * Describes an inbound endpoint for a DNS resolver.
 */
export interface GetInboundEndpointResult {
    /**
     * ETag of the inbound endpoint.
     */
    readonly etag: string;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * IP configurations for the inbound endpoint.
     */
    readonly ipConfigurations: types.outputs.InboundEndpointIPConfigurationResponse[];
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The current provisioning state of the inbound endpoint. This is a read-only property and any attempt to set this value will be ignored.
     */
    readonly provisioningState: string;
    /**
     * The resourceGuid property of the inbound endpoint resource.
     */
    readonly resourceGuid: string;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    readonly systemData: types.outputs.SystemDataResponse;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
/**
 * Gets properties of an inbound endpoint for a DNS resolver.
 * Azure REST API version: 2022-07-01.
 *
 * Other available API versions: 2020-04-01-preview, 2023-07-01-preview.
 */
export function getInboundEndpointOutput(args: GetInboundEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetInboundEndpointResult> {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("azure-native:network:getInboundEndpoint", {
        "dnsResolverName": args.dnsResolverName,
        "inboundEndpointName": args.inboundEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetInboundEndpointOutputArgs {
    /**
     * The name of the DNS resolver.
     */
    dnsResolverName: pulumi.Input<string>;
    /**
     * The name of the inbound endpoint for the DNS resolver.
     */
    inboundEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}