import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Gets the specified private endpoint by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getPrivateEndpoint(args: GetPrivateEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetPrivateEndpointResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azure-native:network:getPrivateEndpoint", {
        "expand": args.expand,
        "privateEndpointName": args.privateEndpointName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

export interface GetPrivateEndpointArgs {
    /**
     * Expands referenced resources.
     */
    expand?: string;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: string;
    /**
     * The name of the resource group.
     */
    resourceGroupName: string;
}

/**
 * Private endpoint resource.
 */
export interface GetPrivateEndpointResult {
    /**
     * Application security groups in which the private endpoint IP configuration is included.
     */
    readonly applicationSecurityGroups?: types.outputs.ApplicationSecurityGroupResponse[];
    /**
     * An array of custom dns configurations.
     */
    readonly customDnsConfigs?: types.outputs.CustomDnsConfigPropertiesFormatResponse[];
    /**
     * The custom name of the network interface attached to the private endpoint.
     */
    readonly customNetworkInterfaceName?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string;
    /**
     * The extended location of the load balancer.
     */
    readonly extendedLocation?: types.outputs.ExtendedLocationResponse;
    /**
     * Resource ID.
     */
    readonly id?: string;
    /**
     * A list of IP configurations of the private endpoint. This will be used to map to the First Party Service's endpoints.
     */
    readonly ipConfigurations?: types.outputs.PrivateEndpointIPConfigurationResponse[];
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
     */
    readonly manualPrivateLinkServiceConnections?: types.outputs.PrivateLinkServiceConnectionResponse[];
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     */
    readonly networkInterfaces: types.outputs.NetworkInterfaceResponse[];
    /**
     * A grouping of information about the connection to the remote resource.
     */
    readonly privateLinkServiceConnections?: types.outputs.PrivateLinkServiceConnectionResponse[];
    /**
     * The provisioning state of the private endpoint resource.
     */
    readonly provisioningState: string;
    /**
     * The ID of the subnet from which the private IP will be allocated.
     */
    readonly subnet?: types.outputs.SubnetResponse;
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
 * Gets the specified private endpoint by resource group.
 * Azure REST API version: 2023-02-01.
 *
 * Other available API versions: 2021-02-01, 2023-04-01, 2023-05-01, 2023-06-01, 2023-09-01.
 */
export function getPrivateEndpointOutput(args: GetPrivateEndpointOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetPrivateEndpointResult> {
    return pulumi.output(args).apply((a: any) => getPrivateEndpoint(a, opts))
}

export interface GetPrivateEndpointOutputArgs {
    /**
     * Expands referenced resources.
     */
    expand?: pulumi.Input<string>;
    /**
     * The name of the private endpoint.
     */
    privateEndpointName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
}