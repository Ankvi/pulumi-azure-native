import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private link service by resource group.
 */
export function getPrivateLinkService(args: GetPrivateLinkServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateLinkServiceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network/v20230901:getPrivateLinkService", {
        "expand": args.expand,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

export interface GetPrivateLinkServiceArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
    /**
     * The name of the private link service.
     */
    serviceName: string;
}

/**
 * Private link service resource.
 */
export interface GetPrivateLinkServiceResult {
    /**
     * The alias of the private link service.
     */
    readonly alias: string;
    /**
     * The auto-approval list of the private link service.
     */
    readonly autoApproval?: types.outputs.PrivateLinkServicePropertiesResponseAutoApproval;
    /**
     * Whether the private link service is enabled for proxy protocol or not.
     */
    readonly enableProxyProtocol?: boolean;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the load balancer.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * The list of Fqdn.
     */
    readonly fqdns?: string[];
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * An array of private link service IP configurations.
     */
    readonly ipConfigurations?: types.outputs.PrivateLinkServiceIpConfigurationResponse[];
    /**
     * An array of references to the load balancer IP configurations.
     */
    readonly loadBalancerFrontendIpConfigurations?: types.outputs.FrontendIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An array of references to the network interfaces created for this private link service.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * An array of list about connections to the private endpoint.
     */
    readonly privateEndpointConnections: types.outputs.PrivateEndpointConnectionResponse[];
    /**
     * The provisioning state of the private link service resource.
     */
    readonly provisioningState: string;
    /**
     * Resource tags.
     */
    readonly tags?: {[key: string]: string};
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The visibility list of the private link service.
     */
    readonly visibility?: types.outputs.PrivateLinkServicePropertiesResponseVisibility;
}
/**
 * Gets the specified private link service by resource group.
 */
export function getPrivateLinkServiceOutput(args: GetPrivateLinkServiceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateLinkServiceResult> {
    return pulumi.output(args).apply((a: any) => getPrivateLinkService(a, opts))
}

export interface GetPrivateLinkServiceOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the private link service.
     */
    serviceName: pulumi.Input<string>;
}